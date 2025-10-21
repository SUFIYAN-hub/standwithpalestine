const db = require('../config/database');

// GET all stories
const getAllStories = async (req, res) => {
  try {
    const { language = 'en' } = req.query;
    
    const query = `
      SELECT 
        s.id,
        s.title_en,
        s.title_ar,
        s.content_en,
        s.content_ar,
        s.image_url,
        s.charity_id,
        s.created_at,
        c.name_en as charity_name_en,
        c.name_ar as charity_name_ar
      FROM stories s
      LEFT JOIN charities c ON s.charity_id = c.id
      WHERE s.published = true
      ORDER BY s.created_at DESC
    `;
    
    const result = await db.query(query);
    
    const stories = result.rows.map(story => ({
      id: story.id,
      title: language === 'ar' ? story.title_ar : story.title_en,
      content: language === 'ar' ? story.content_ar : story.content_en,
      titleEn: story.title_en,
      titleAr: story.title_ar,
      contentEn: story.content_en,
      contentAr: story.content_ar,
      imageUrl: story.image_url,
      charityId: story.charity_id,
      charityName: language === 'ar' ? story.charity_name_ar : story.charity_name_en,
      createdAt: story.created_at
    }));
    
    res.json({
      success: true,
      count: stories.length,
      data: stories
    });
  } catch (error) {
    console.error('Error fetching stories:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch stories'
    });
  }
};

// GET story by ID
const getStoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const { language = 'en' } = req.query;
    
    const query = `
      SELECT 
        s.id,
        s.title_en,
        s.title_ar,
        s.content_en,
        s.content_ar,
        s.image_url,
        s.charity_id,
        s.created_at,
        c.name_en as charity_name_en,
        c.name_ar as charity_name_ar
      FROM stories s
      LEFT JOIN charities c ON s.charity_id = c.id
      WHERE s.id = $1 AND s.published = true
    `;
    
    const result = await db.query(query, [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'Story not found'
      });
    }
    
    const story = result.rows[0];
    
    res.json({
      success: true,
      data: {
        id: story.id,
        title: language === 'ar' ? story.title_ar : story.title_en,
        content: language === 'ar' ? story.content_ar : story.content_en,
        titleEn: story.title_en,
        titleAr: story.title_ar,
        contentEn: story.content_en,
        contentAr: story.content_ar,
        imageUrl: story.image_url,
        charityId: story.charity_id,
        charityName: language === 'ar' ? story.charity_name_ar : story.charity_name_en,
        createdAt: story.created_at
      }
    });
  } catch (error) {
    console.error('Error fetching story:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch story'
    });
  }
};

module.exports = {
  getAllStories,
  getStoryById
};