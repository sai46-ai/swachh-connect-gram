const Awareness = require('../models/Awareness');

// Create awareness content
exports.createAwareness = async (req, res) => {
  try {
    const awareness = new Awareness(req.body);
    await awareness.save();

    res.status(201).json({
      success: true,
      message: 'Awareness content created successfully',
      data: awareness
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to create awareness content',
      error: error.message
    });
  }
};

// Get all awareness content
exports.getAllAwareness = async (req, res) => {
  try {
    const { category, type, featured, limit = 20, page = 1 } = req.query;
    
    const filter = {};
    if (category) filter.category = category;
    if (type) filter.type = type;
    if (featured !== undefined) filter.featured = featured === 'true';

    const awarenessContent = await Awareness.find(filter)
      .sort({ createdAt: -1, views: -1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));

    const total = await Awareness.countDocuments(filter);

    res.json({
      success: true,
      data: awarenessContent,
      pagination: {
        total,
        page: parseInt(page),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch awareness content',
      error: error.message
    });
  }
};

// Get awareness by ID
exports.getAwarenessById = async (req, res) => {
  try {
    const awareness = await Awareness.findById(req.params.id);
    
    if (!awareness) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    // Increment view count
    awareness.views += 1;
    await awareness.save();

    res.json({
      success: true,
      data: awareness
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch awareness content',
      error: error.message
    });
  }
};

// Update awareness content
exports.updateAwareness = async (req, res) => {
  try {
    const awareness = await Awareness.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!awareness) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    res.json({
      success: true,
      message: 'Content updated successfully',
      data: awareness
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to update content',
      error: error.message
    });
  }
};

// Delete awareness content
exports.deleteAwareness = async (req, res) => {
  try {
    const awareness = await Awareness.findByIdAndDelete(req.params.id);
    
    if (!awareness) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    res.json({
      success: true,
      message: 'Content deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete content',
      error: error.message
    });
  }
};

// Like awareness content
exports.likeAwareness = async (req, res) => {
  try {
    const awareness = await Awareness.findById(req.params.id);
    
    if (!awareness) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    awareness.likes += 1;
    await awareness.save();

    res.json({
      success: true,
      message: 'Content liked',
      data: { likes: awareness.likes }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to like content',
      error: error.message
    });
  }
};
