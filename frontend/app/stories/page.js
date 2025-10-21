'use client';

import { useState, useEffect } from 'react';
import { Heart, Calendar } from 'lucide-react';
import { useTranslation } from '@/lib/translations';

export default function StoriesPage() {
  const [language, setLanguage] = useState('en');
  const { t } = useTranslation(language);
  const isRTL = language === 'ar';

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
  }, []);

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('impactStories')}
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            {t('storiesDescription')}
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {language === 'ar' ? 'قريباً' : 'Coming Soon'}
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                {language === 'ar'
                  ? 'نحن نعمل على جمع قصص ملهمة من فلسطين. تحقق مرة أخرى قريبًا لرؤية كيف تحدث تبرعاتك فرقًا حقيقيًا.'
                  : 'We are working on collecting inspiring stories from Palestine. Check back soon to see how donations are making a real difference.'
                }
              </p>
              <div className="inline-flex items-center space-x-2 text-green-600">
                <Calendar className="w-5 h-5" />
                <span className={`font-medium ${isRTL ? 'mr-2' : 'ml-2'}`}>
                  {language === 'ar' ? 'قريبًا جداً' : 'Very Soon'}
                </span>
              </div>
            </div>

            {/* Placeholder Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {[1, 2].map((i) => (
                <div key={i} className="bg-white rounded-xl shadow-md p-6 opacity-50">
                  <div className="bg-gray-200 h-40 rounded-lg mb-4 animate-pulse"></div>
                  <div className="bg-gray-200 h-6 rounded mb-2 animate-pulse"></div>
                  <div className="bg-gray-200 h-4 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}