
```sql
-- Charities Table
CREATE TABLE charities (
    id SERIAL PRIMARY KEY,
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255) NOT NULL,
    description_en TEXT NOT NULL,
    description_ar TEXT NOT NULL,
    logo_url TEXT,
    website_url TEXT NOT NULL,
    donation_url TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    focus_areas TEXT[] NOT NULL,
    verification_status VARCHAR(50) DEFAULT 'verified',
    total_clicks INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Impact Stories Table
CREATE TABLE stories (
    id SERIAL PRIMARY KEY,
    title_en VARCHAR(255) NOT NULL,
    title_ar VARCHAR(255) NOT NULL,
    content_en TEXT NOT NULL,
    content_ar TEXT NOT NULL,
    image_url TEXT,
    charity_id INTEGER REFERENCES charities(id),
    published BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Click Tracking Table
CREATE TABLE charity_clicks (
    id SERIAL PRIMARY KEY,
    charity_id INTEGER REFERENCES charities(id),
    clicked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    referrer TEXT
);

-- Insert Initial Charities
INSERT INTO charities (name_en, name_ar, description_en, description_ar, website_url, donation_url, category, focus_areas) VALUES
(
    'UNRWA',
    'الأونروا',
    'United Nations Relief and Works Agency provides food, healthcare, education, and emergency aid to Palestinian refugees.',
    'وكالة الأمم المتحدة لإغاثة وتشغيل اللاجئين الفلسطينيين توفر الغذاء والرعاية الصحية والتعليم والمساعدات الطارئة.',
    'https://www.unrwa.org',
    'https://donate.unrwa.org',
    'Humanitarian Aid',
    ARRAY['Food', 'Healthcare', 'Education', 'Emergency Relief']
),
(
    'Palestine Children''s Relief Fund',
    'صندوق إغاثة أطفال فلسطين',
    'Provides free medical care to children in need, supporting hospitals and medical infrastructure.',
    'يوفر الرعاية الطبية المجانية للأطفال المحتاجين، ويدعم المستشفيات والبنية التحتية الطبية.',
    'https://www.pcrf.net',
    'https://www.pcrf.net/donate',
    'Medical Care',
    ARRAY['Children', 'Medical', 'Surgery', 'Healthcare']
),
(
    'Medical Aid for Palestinians',
    'المساعدات الطبية للفلسطينيين',
    'Delivers health and medical care to Palestinians affected by conflict, occupation and displacement.',
    'تقدم الرعاية الصحية والطبية للفلسطينيين المتضررين من الصراع والاحتلال والنزوح.',
    'https://www.map.org.uk',
    'https://www.map.org.uk/donate',
    'Medical Care',
    ARRAY['Healthcare', 'Medical Supplies', 'Hospitals', 'Emergency Care']
),
(
    'Islamic Relief Worldwide',
    'الإغاثة الإسلامية العالمية',
    'Provides emergency food, water, shelter, and medical aid to Palestinians in need.',
    'توفر الطعام والماء والمأوى والمساعدات الطبية الطارئة للفلسطينيين المحتاجين.',
    'https://www.islamic-relief.org',
    'https://www.islamic-relief.org/appeals/palestine-emergency-appeal/',
    'Emergency Relief',
    ARRAY['Food', 'Water', 'Shelter', 'Emergency Aid']
),
(
    'Palestine Red Crescent Society',
    'جمعية الهلال الأحمر الفلسطيني',
    'Provides emergency medical services, ambulances, and operates hospitals throughout Palestine.',
    'توفر خدمات الطوارئ الطبية والإسعاف وتدير المستشفيات في جميع أنحاء فلسطين.',
    'https://www.palestinercs.org',
    'https://www.palestinercs.org/en/Donation',
    'Emergency Medical',
    ARRAY['Emergency', 'Medical', 'Ambulance', 'Hospitals']
),
(
    'Doctors Without Borders',
    'أطباء بلا حدود',
    'Provides emergency medical care, surgery, and trauma treatment in conflict zones.',
    'تقدم الرعاية الطبية الطارئة والجراحة وعلاج الصدمات في مناطق النزاع.',
    'https://www.msf.org',
    'https://www.msf.org/donate',
    'Medical Emergency',
    ARRAY['Emergency', 'Surgery', 'Trauma', 'Medical Care']
);
```