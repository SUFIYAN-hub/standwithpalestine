const db = require('../config/database');

// GET all charities
const getAllCharities = async (req, res) => {
  try {
    const { language = 'en' } = req.query;
    
    const query = `
      SELECT 
        id,
        name_en,
        name_ar,
        description_en,
        description_ar,
        logo_url,
        website_url,
        donation_url,
        category,
        focus_areas,
        verification_status,
        total_clicks,
        created_at
      FROM charities
      WHERE verification_status = 'verified'
      ORDER BY total_clicks DESC
    `;
    
    const result = await db.query(query);
    
    // Transform data based on language preference
    const charities = result.rows.map(charity => ({
      id: charity.id,
      name: language === 'ar' ? charity.name_ar : charity.name_en,
      description: language === 'ar' ? charity.description_ar : charity.description_en,
      nameEn: charity.name_en,
      nameAr: charity.name_ar,
      descriptionEn: charity.description_en,
      descriptionAr: charity.description_ar,
      logoUrl: charity.logo_url,
      websiteUrl: charity.website_url,
      donationUrl: charity.donation_url,
      category: charity.category,
      focusAreas: charity.focus_areas,
      verificationStatus: charity.verification_status,
      totalClicks: charity.total_clicks,
      createdAt: charity.created_at
    }));
    
    res.json({
      success: true,
      count: charities.length,
      data: charities
    });
  } catch (error) {
    console.error('Error fetching charities:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch charities'
    });
  }
};

// GET charity by ID
const getCharityById = async (req, res) => {
  try {
    const { id } = req.params;
    const { language = 'en' } = req.query;
    
    const query = `
      SELECT 
        id,
        name_en,
        name_ar,
        description_en,
        description_ar,
        logo_url,
        website_url,
        donation_url,
        category,
        focus_areas,
        verification_status,
        total_clicks,
        created_at
      FROM charities
      WHERE id = $1 AND verification_status = 'verified'
    `;
    
    const result = await db.query(query, [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'Charity not found'
      });
    }
    
    const charity = result.rows[0];
    
    res.json({
      success: true,
      data: {
        id: charity.id,
        name: language === 'ar' ? charity.name_ar : charity.name_en,
        description: language === 'ar' ? charity.description_ar : charity.description_en,
        nameEn: charity.name_en,
        nameAr: charity.name_ar,
        descriptionEn: charity.description_en,
        descriptionAr: charity.description_ar,
        logoUrl: charity.logo_url,
        websiteUrl: charity.website_url,
        donationUrl: charity.donation_url,
        category: charity.category,
        focusAreas: charity.focus_areas,
        verificationStatus: charity.verification_status,
        totalClicks: charity.total_clicks,
        createdAt: charity.created_at
      }
    });
  } catch (error) {
    console.error('Error fetching charity:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch charity'
    });
  }
};

// POST track charity click
const trackCharityClick = async (req, res) => {
  try {
    const { id } = req.params;
    const { referrer } = req.body;
    
    // Insert click record
    await db.query(
      'INSERT INTO charity_clicks (charity_id, referrer) VALUES ($1, $2)',
      [id, referrer || null]
    );
    
    // Update total clicks count
    await db.query(
      'UPDATE charities SET total_clicks = total_clicks + 1 WHERE id = $1',
      [id]
    );
    
    res.json({
      success: true,
      message: 'Click tracked successfully'
    });
  } catch (error) {
    console.error('Error tracking click:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to track click'
    });
  }
};

// GET charity statistics
const getCharityStats = async (req, res) => {
  try {
    const { id } = req.params;
    
    const query = `
      SELECT 
        c.name_en,
        c.total_clicks,
        COUNT(cc.id) as click_count,
        MAX(cc.clicked_at) as last_click
      FROM charities c
      LEFT JOIN charity_clicks cc ON c.id = cc.charity_id
      WHERE c.id = $1
      GROUP BY c.id, c.name_en, c.total_clicks
    `;
    
    const result = await db.query(query, [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'Charity not found'
      });
    }
    
    res.json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error fetching charity stats:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch charity statistics'
    });
  }
};

module.exports = {
  getAllCharities,
  getCharityById,
  trackCharityClick,
  getCharityStats
};