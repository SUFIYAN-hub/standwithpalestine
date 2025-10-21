'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import CharityCard from '@/components/CharityCard';
import { useTranslation } from '@/lib/translations';
import { Filter, Search } from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function CharitiesPage() {
  const [charities, setCharities] = useState([]);
  const [filteredCharities, setFilteredCharities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState('en');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { t } = useTranslation(language);
  const isRTL = language === 'ar';

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
    fetchCharities(savedLanguage);
  }, []);

  useEffect(() => {
    filterCharities();
  }, [charities, searchQuery, selectedCategory]);

  const fetchCharities = async (lang) => {
    try {
      const response = await axios.get(`${API_URL}/api/charities?language=${lang}`);
      setCharities(response.data.data);
      setFilteredCharities(response.data.data);
    } catch (error) {
      console.error('Error fetching charities:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterCharities = () => {
    let filtered = [...charities];

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(charity =>
        charity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        charity.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(charity =>
        charity.category === selectedCategory
      );
    }

    setFilteredCharities(filtered);
  };

  const handleDonateClick = async (charityId) => {
    try {
      await axios.post(`${API_URL}/api/charities/${charityId}/click`, {
        referrer: 'charities-page'
      });
    } catch (error) {
      console.error('Error tracking click:', error);
    }
  };

  const categories = [
    { value: 'all', label: language === 'ar' ? 'الكل' : 'All' },
    { value: 'Humanitarian Aid', label: language === 'ar' ? 'المساعدات الإنسانية' : 'Humanitarian Aid' },
    { value: 'Medical Care', label: language === 'ar' ? 'الرعاية الطبية' : 'Medical Care' },
    { value: 'Emergency Relief', label: language === 'ar' ? 'الإغاثة الطارئة' : 'Emergency Relief' },
    { value: 'Emergency Medical', label: language === 'ar' ? 'الطوارئ الطبية' : 'Emergency Medical' },
    { value: 'Medical Emergency', label: language === 'ar' ? 'الطوارئ الطبية' : 'Medical Emergency' },
  ];

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            {t('allCharities')}
          </h1>
          <p className="text-xl text-green-100 text-center max-w-3xl mx-auto">
            {t('charitiesDescription')}
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white shadow-md sticky top-16 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} w-5 h-5 text-gray-400`} />
              <input
                type="text"
                placeholder={language === 'ar' ? 'ابحث عن جمعية خيرية...' : 'Search charities...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full ${isRTL ? 'pr-10 text-right' : 'pl-10'} py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`}
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={`px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${isRTL ? 'text-right' : ''}`}
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-gray-600">
            {language === 'ar' 
              ? `تم العثور على ${filteredCharities.length} جمعية خيرية`
              : `Found ${filteredCharities.length} charities`
            }
          </div>
        </div>
      </section>

      {/* Charities Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-green-600"></div>
              <p className="mt-4 text-gray-600 text-lg">{t('loading')}</p>
            </div>
          ) : filteredCharities.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {t('noCharities')}
              </h3>
              <p className="text-gray-600">
                {language === 'ar' 
                  ? 'جرب تغيير معايير البحث أو الفلتر'
                  : 'Try adjusting your search or filter criteria'
                }
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredCharities.map((charity) => (
                <CharityCard
                  key={charity.id}
                  charity={charity}
                  language={language}
                  onDonateClick={handleDonateClick}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}