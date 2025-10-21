'use client';

import { useState, useEffect } from 'react';
import { Heart, Shield, Users, Target, CheckCircle } from 'lucide-react';
import { useTranslation } from '@/lib/translations';
import Link from 'next/link';

export default function AboutPage() {
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
            {t('aboutTitle')}
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            {t('aboutDescription')}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                {language === 'ar' ? 'مهمتنا' : 'Our Mission'}
              </h2>
              <p className={`text-lg text-gray-700 leading-relaxed mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                {language === 'ar'
                  ? 'نحن نؤمن بأن كل شخص يستحق الوصول إلى المساعدات الإنسانية الأساسية والرعاية الصحية والأمل في مستقبل أفضل. تم إنشاء منصتنا لسد الفجوة بين المتبرعين الكرماء والمنظمات الموثوقة التي تعمل على الأرض في فلسطين.'
                  : 'We believe that every person deserves access to basic humanitarian aid, healthcare, and hope for a better future. Our platform was created to bridge the gap between generous donors and trustworthy organizations working on the ground in Palestine.'
                }
              </p>
              <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                {language === 'ar'
                  ? 'من خلال فحص كل جمعية خيرية بعناية والتحقق من شرعيتها، نضمن وصول تبرعاتك إلى من هم في أمس الحاجة إليها. نحن لا نتعامل مع الأموال مباشرة - بدلاً من ذلك، نربطك بمنظمات راسخة وموثوقة.'
                  : 'By carefully vetting each charity and verifying their legitimacy, we ensure your donations reach those who need them most. We do not handle money directly - instead, we connect you with established, trusted organizations.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            {language === 'ar' ? 'قيمنا' : 'Our Values'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Transparency */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {language === 'ar' ? 'الشفافية' : 'Transparency'}
              </h3>
              <p className="text-gray-600">
                {language === 'ar'
                  ? 'نحن نوفر معلومات واضحة حول كل جمعية خيرية ونتحقق من وضعها'
                  : 'We provide clear information about each charity and verify their status'
                }
              </p>
            </div>

            {/* Trust */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {language === 'ar' ? 'الثقة' : 'Trust'}
              </h3>
              <p className="text-gray-600">
                {language === 'ar'
                  ? 'نعمل فقط مع منظمات راسخة وذات سمعة طيبة'
                  : 'We only work with established, reputable organizations'
                }
              </p>
            </div>

            {/* Impact */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {language === 'ar' ? 'التأثير' : 'Impact'}
              </h3>
              <p className="text-gray-600">
                {language === 'ar'
                  ? 'نركز على المنظمات التي تحدث فرقاً حقيقياً وقابل للقياس'
                  : 'We focus on organizations making real, measurable differences'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            {language === 'ar' ? 'كيف يعمل' : 'How It Works'}
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Step 1 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {language === 'ar' ? 'تصفح الجمعيات الموثوقة' : 'Browse Verified Charities'}
                </h3>
                <p className="text-gray-600">
                  {language === 'ar'
                    ? 'استكشف قائمتنا المنسقة من المنظمات الموثوقة التي تعمل في فلسطين'
                    : 'Explore our curated list of trusted organizations working in Palestine'
                  }
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {language === 'ar' ? 'اختر قضيتك' : 'Choose Your Cause'}
                </h3>
                <p className="text-gray-600">
                  {language === 'ar'
                    ? 'اختر جمعية خيرية بناءً على مجال تركيزها - الطب أو الغذاء أو التعليم أو الطوارئ'
                    : 'Select a charity based on their focus area - medical, food, education, or emergency'
                  }
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {language === 'ar' ? 'تبرع مباشرة' : 'Donate Directly'}
                </h3>
                <p className="text-gray-600">
                  {language === 'ar'
                    ? 'انقر للتبرع مباشرة من خلال الموقع الرسمي للمنظمة - آمن وموثوق'
                    : 'Click to donate directly through the organization\'s official website - safe and trusted'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'ar' ? 'هل أنت مستعد لإحداث فرق؟' : 'Ready to Make a Difference?'}
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'انضم إلى الآلاف من المتبرعين الذين يدعمون فلسطين اليوم'
              : 'Join thousands of donors supporting Palestine today'
            }
          </p>
          <Link
            href="/charities"
            className="inline-flex items-center px-8 py-4 bg-white text-green-700 rounded-lg font-semibold text-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl"
          >
            {t('viewCharities')}
            <Heart className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
          </Link>
        </div>
      </section>
    </div>
  );
}