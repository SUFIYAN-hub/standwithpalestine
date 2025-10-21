'use client';

import Link from 'next/link';
import { Heart, Mail, Globe } from 'lucide-react';
import { useTranslation } from '@/lib/translations';

export default function Footer({ language }) {
  const { t } = useTranslation(language);
  const isRTL = language === 'ar';

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">🇵🇸</span>
              </div>
              <span className={`text-xl font-bold ${isRTL ? 'mr-2' : 'ml-2'}`}>
                {t('siteName')}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('mission')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href="/charities" className="text-gray-400 hover:text-white transition">
                  {t('charities')}
                </Link>
              </li>
              <li>
                <Link href="/stories" className="text-gray-400 hover:text-white transition">
                  {t('stories')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  {t('about')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact')}</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@standwithpalestine.org"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition"
              >
                <Mail className="w-5 h-5" />
                <span className={isRTL ? 'mr-2' : 'ml-2'}>info@standwithpalestine.org</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <Globe className="w-5 h-5" />
                <span className={isRTL ? 'mr-2' : 'ml-2'}>standwithpalestine.vercel.app</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            <Heart className="w-4 h-4 text-red-500 mx-1" />
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}