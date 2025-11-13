const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const reportController = require('../controllers/reportController');
const { protect, isResident, isAdmin } = require('../middleware/auth');

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'report-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  // Accept images only
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Routes
router.post('/', protect, upload.array('images', 5), reportController.createReport);
router.get('/', protect, reportController.getAllReports);
router.get('/stats', reportController.getReportStats);
router.get('/nearby', reportController.getNearbyReports);
router.get('/:id', protect, reportController.getReportById);
router.put('/:id', protect, isAdmin, reportController.updateReportStatus);
router.delete('/:id', protect, reportController.deleteReport);

module.exports = router;
