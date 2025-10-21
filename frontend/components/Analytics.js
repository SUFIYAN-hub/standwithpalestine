// frontend/components/Analytics.js
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-LMK4J59ER0';
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-LMK4J59ER0', {
        page_path: window.location.pathname,
      });
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  useEffect(() => {
    // Track page views on route change
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-LMK4J59ER0', {
        page_path: pathname + searchParams.toString(),
      });
    }
  }, [pathname, searchParams]);

  return null;
}

// Helper function to track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, eventParams);
  }
};

// Track charity donation clicks
export const trackCharityClick = (charityName, charityId) => {
  trackEvent('charity_click', {
    charity_name: charityName,
    charity_id: charityId,
    event_category: 'engagement',
    event_label: 'Donate Button',
  });
};

// Track language switch
export const trackLanguageSwitch = (fromLang, toLang) => {
  trackEvent('language_switch', {
    from_language: fromLang,
    to_language: toLang,
    event_category: 'engagement',
  });
};

// Track charity page views
export const trackCharityView = (charityName, charityId) => {
  trackEvent('charity_view', {
    charity_name: charityName,
    charity_id: charityId,
    event_category: 'engagement',
  });
};