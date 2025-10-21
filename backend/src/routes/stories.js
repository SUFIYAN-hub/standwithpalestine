const express = require('express');
const router = express.Router();
const {
  getAllStories,
  getStoryById
} = require('../controllers/storyController');

// GET all stories
router.get('/', getAllStories);

// GET story by ID
router.get('/:id', getStoryById);

module.exports = router;