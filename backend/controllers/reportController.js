const Report = require('../models/Report');
const path = require('path');
const fs = require('fs');

// Create a new report
exports.createReport = async (req, res) => {
  try {
    console.log('Received request body:', req.body);
    console.log('Received files:', req.files);
    console.log('Authenticated user:', req.user);

    const reportData = {
      userId: req.user.id, // Add authenticated user's ID
      category: req.body.category,
      priority: req.body.priority,
      images: []
    };

    // Auto-populate reportedBy from authenticated user
    reportData.reportedBy = {
      name: req.user.name || 'Anonymous User',
      contact: req.user.email || req.user.phone || ''
    };

    // Parse location from JSON string
    if (req.body.location) {
      try {
        reportData.location = typeof req.body.location === 'string' 
          ? JSON.parse(req.body.location)
          : req.body.location;
      } catch (error) {
        console.error('Error parsing location:', error);
        return res.status(400).json({
          success: false,
          message: 'Invalid location data'
        });
      }
    }

    // Auto-generate title if not provided
    const categoryLabels = {
      'overflowing_drain': 'Dirty Water Overflowing',
      'garbage_pile': 'Garbage Not Collected',
      'stagnant_water': 'Standing Water (Mosquitoes)',
      'blocked_sewer': 'Toilet/Drain Blocked',
      'open_defecation': 'Open Toilet Area',
      'other': 'Other Problem'
    };
    reportData.title = categoryLabels[reportData.category] || 'Complaint';

    // Auto-generate description
    reportData.description = `Priority: ${reportData.priority || 'medium'}`;

    // Auto-generate address from coordinates
    if (reportData.location?.coordinates) {
      const lat = reportData.location.coordinates.latitude;
      const lon = reportData.location.coordinates.longitude;
      if (lat && lon) {
        reportData.location.address = `Location: ${lat.toFixed(6)}, ${lon.toFixed(6)}`;
      }
    } else {
      reportData.location = {
        address: 'Location not provided',
        coordinates: { latitude: 0, longitude: 0 }
      };
    }

    // Handle uploaded files
    if (req.files && req.files.length > 0) {
      reportData.images = req.files.map(file => `/uploads/${file.filename}`);
    }

    console.log('Creating report with data:', reportData);

    const report = new Report(reportData);
    await report.save();

    res.status(201).json({
      success: true,
      message: 'Report submitted successfully',
      data: report
    });
  } catch (error) {
    console.error('Error creating report:', error);
    res.status(400).json({
      success: false,
      message: 'Failed to create report',
      error: error.message,
      details: error.errors || {}
    });
  }
};

// Get all reports
exports.getAllReports = async (req, res) => {
  try {
    const { status, category, priority, limit = 50, page = 1 } = req.query;
    
    const filter = {};
    if (status) filter.status = status;
    if (category) filter.category = category;
    if (priority) filter.priority = priority;

    const reports = await Report.find(filter)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));

    const total = await Report.countDocuments(filter);

    res.json({
      success: true,
      data: reports,
      pagination: {
        total,
        page: parseInt(page),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch reports',
      error: error.message
    });
  }
};

// Get report by ID
exports.getReportById = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    
    if (!report) {
      return res.status(404).json({
        success: false,
        message: 'Report not found'
      });
    }

    res.json({
      success: true,
      data: report
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch report',
      error: error.message
    });
  }
};

// Update report status
exports.updateReportStatus = async (req, res) => {
  try {
    console.log('Updating report:', req.params.id);
    console.log('Update data:', req.body);
    
    const { status, assignedTo, notes } = req.body;
    
    // Validate status
    const validStatuses = ['pending', 'in_progress', 'resolved', 'rejected'];
    if (status && !validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Must be one of: ${validStatuses.join(', ')}`
      });
    }
    
    const updateData = { status };
    if (assignedTo) updateData.assignedTo = assignedTo;
    if (notes) updateData.notes = notes;
    if (status === 'resolved') updateData.resolvedDate = new Date();

    const report = await Report.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!report) {
      return res.status(404).json({
        success: false,
        message: 'Report not found'
      });
    }

    console.log('Report updated successfully:', report);

    res.json({
      success: true,
      message: 'Report updated successfully',
      data: report
    });
  } catch (error) {
    console.error('Error updating report:', error);
    res.status(400).json({
      success: false,
      message: 'Failed to update report',
      error: error.message
    });
  }
};

// Delete report
exports.deleteReport = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    
    if (!report) {
      return res.status(404).json({
        success: false,
        message: 'Report not found'
      });
    }

    // Delete associated images
    if (report.images && report.images.length > 0) {
      report.images.forEach(imagePath => {
        const fullPath = path.join(__dirname, '..', imagePath);
        if (fs.existsSync(fullPath)) {
          fs.unlinkSync(fullPath);
        }
      });
    }

    await Report.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Report deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete report',
      error: error.message
    });
  }
};

// Get reports statistics
exports.getReportStats = async (req, res) => {
  try {
    const totalReports = await Report.countDocuments();
    const pendingReports = await Report.countDocuments({ status: 'pending' });
    const resolvedReports = await Report.countDocuments({ status: 'resolved' });
    const inProgressReports = await Report.countDocuments({ status: 'in_progress' });

    const categoryStats = await Report.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 }
        }
      }
    ]);

    const priorityStats = await Report.aggregate([
      {
        $group: {
          _id: '$priority',
          count: { $sum: 1 }
        }
      }
    ]);

    res.json({
      success: true,
      data: {
        total: totalReports,
        pending: pendingReports,
        resolved: resolvedReports,
        inProgress: inProgressReports,
        byCategory: categoryStats,
        byPriority: priorityStats
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch statistics',
      error: error.message
    });
  }
};

// Get nearby reports (geospatial query)
exports.getNearbyReports = async (req, res) => {
  try {
    const { latitude, longitude, maxDistance = 5000 } = req.query; // maxDistance in meters

    if (!latitude || !longitude) {
      return res.status(400).json({
        success: false,
        message: 'Latitude and longitude are required'
      });
    }

    const reports = await Report.find({
      'location.coordinates': {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(longitude), parseFloat(latitude)]
          },
          $maxDistance: parseInt(maxDistance)
        }
      }
    }).limit(20);

    res.json({
      success: true,
      data: reports
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch nearby reports',
      error: error.message
    });
  }
};
