
// 'use client';

// import { useState, useEffect } from 'react';
// import { Inter } from 'next/font/google';
// import './globals.css';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// const inter = Inter({ subsets: ['latin'] });

// export default function RootLayout({ children }) {
//   const [language, setLanguage] = useState('en');
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     // Load language preference from localStorage
//     const savedLanguage = localStorage.getItem('language');
//     if (savedLanguage) {
//       setLanguage(savedLanguage);
//     }
//   }, []);

//   useEffect(() => {
//     if (mounted) {
//       // Save language preference to localStorage
//       localStorage.setItem('language', language);
//       // Update document direction
//       document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
//       document.documentElement.lang = language;
//     }
//   }, [language, mounted]);

//   return (
//     <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'}>
//       <head>
//         <title>Stand With Palestine - Support Verified Charities</title>
//         <meta name="description" content="Connect with verified charities supporting Palestinians. Every donation makes a difference." />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </head>
//       <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50`}>
//         {mounted ? (
//           <>
//             <Header language={language} setLanguage={setLanguage} />
//             <main className="flex-grow">
//               {children}
//             </main>
//             <Footer language={language} />
//           </>
//         ) : (
//           <div className="min-h-screen flex items-center justify-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
//           </div>
//         )}
//       </body>
//     </html>
//   );
// }

// frontend/app/layout.js
'use client';

import { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [language, setLanguage] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load language preference from localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      // Save language preference to localStorage
      localStorage.setItem('language', language);
      // Update document direction
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  return (
    <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <title>Stand With Palestine - Support Verified Charities</title>
        <meta name="description" content="Connect with verified charities supporting Palestinians. Every donation makes a difference." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50`}>
        <Analytics />
        {mounted ? (
          <>
            <Header language={language} setLanguage={setLanguage} />
            <main className="flex-grow">
              {children}
            </main>
            <Footer language={language} />
          </>
        ) : (
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          </div>
        )}
      </body>
    </html>
  );
}