const express = require('express');
const router = express.Router();
const awarenessController = require('../controllers/awarenessController');

// Routes
router.post('/', awarenessController.createAwareness);
router.get('/', awarenessController.getAllAwareness);
router.get('/:id', awarenessController.getAwarenessById);
router.put('/:id', awarenessController.updateAwareness);
router.delete('/:id', awarenessController.deleteAwareness);
router.post('/:id/like', awarenessController.likeAwareness);

module.exports = router;
