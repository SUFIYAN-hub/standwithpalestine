const express = require('express');
const router = express.Router();
const {
  getAllCharities,
  getCharityById,
  trackCharityClick,
  getCharityStats
} = require('../controllers/charityController');

// GET all charities
router.get('/', getAllCharities);

// GET charity by ID
router.get('/:id', getCharityById);

// POST track charity click (when user clicks donate button)
router.post('/:id/click', trackCharityClick);

// GET charity statistics
router.get('/:id/stats', getCharityStats);

module.exports = router;
