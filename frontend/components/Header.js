'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from '@/lib/translations';

export default function Header({ language, setLanguage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation(language);
  const isRTL = language === 'ar';

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🇵🇸</span>
            </div>
            <span className={`text-xl font-bold text-gray-800 ${isRTL ? 'mr-2' : 'ml-2'}`}>
              {t('siteName')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition">
              {t('home')}
            </Link>
            <Link href="/charities" className="text-gray-700 hover:text-green-600 transition">
              {t('charities')}
            </Link>
            <Link href="/stories" className="text-gray-700 hover:text-green-600 transition">
              {t('stories')}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 transition">
              {t('about')}
            </Link>
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
              aria-label="Switch language"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-green-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('home')}
            </Link>
            <Link
              href="/charities"
              className="block py-2 text-gray-700 hover:text-green-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('charities')}
            </Link>
            <Link
              href="/stories"
              className="block py-2 text-gray-700 hover:text-green-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('stories')}
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-green-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('about')}
            </Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 py-2 text-gray-700 hover:text-green-600 transition"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}