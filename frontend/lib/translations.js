export const translations = {
  en: {
    // Header
    siteName: "Stand With Palestine",
    home: "Home",
    charities: "Charities",
    stories: "Stories",
    about: "About",

    // Hero Section
    heroTitle: "Support Palestine",
    heroSubtitle: "Connect with verified charities making a real difference",
    heroDescription:
      "Every donation counts. Help provide medical care, food, shelter, and hope to Palestinians in need.",
    viewCharities: "View Charities",
    learnMore: "Learn More",

    // Stats
    verifiedCharities: "Verified Charities",
    focusAreas: "Focus Areas",
    trustedDonors: "Trusted by Thousands",

    // Charities Section
    featuredCharities: "Featured Charities",
    allCharities: "All Verified Charities",
    charitiesDescription:
      "We've carefully vetted these organizations to ensure your donations reach those who need them most.",
    donate: "Donate Now",
    learnMoreAbout: "Learn More",
    clicks: "clicks",

    // Categories
    medical: "Medical Care",
    food: "Food & Water",
    shelter: "Shelter",
    education: "Education",
    emergency: "Emergency Relief",
    children: "Children",

    // Impact Section
    yourImpact: "Your Impact Matters",
    impactDescription:
      "See how donations are making a real difference in Palestinian lives.",

    // Footer
    mission:
      "Our mission is to connect generous donors with verified charities supporting Palestinians in need.",
    quickLinks: "Quick Links",
    contact: "Contact",
    followUs: "Follow Us",
    copyright: "© 2025 Stand With Palestine. All rights reserved.",

    // About
    aboutTitle: "About Our Mission",
    aboutDescription:
      "Stand With Palestine is a platform dedicated to connecting donors with verified, trustworthy charities supporting Palestinians.",

    // Stories
    impactStories: "Impact Stories",
    storiesDescription: "Real stories of hope and resilience from Palestine.",
    readMore: "Read More",

    // Charity Detail
    website: "Visit Website",
    donationLink: "Donation Page",
    verified: "Verified Charity",
    focusAreasTitle: "Focus Areas",
    supportingTogether: "Supporting Palestine Together",
    joinOurMission: "Join Our Mission",

    // Loading & Errors
    loading: "Loading...",
    error: "Something went wrong. Please try again.",
    noCharities: "No charities found.",
    noStories: "No stories available yet.",
  },

  ar: {
    // Header
    siteName: "قف مع فلسطين",
    home: "الرئيسية",
    charities: "الجمعيات الخيرية",
    stories: "القصص",
    about: "من نحن",

    // Hero Section
    heroTitle: "ادعم فلسطين",
    heroSubtitle: "تواصل مع الجمعيات الخيرية الموثوقة التي تحدث فرقاً حقيقياً",
    heroDescription:
      "كل تبرع له أهمية. ساعد في توفير الرعاية الطبية والغذاء والمأوى والأمل للفلسطينيين المحتاجين.",
    viewCharities: "عرض الجمعيات",
    learnMore: "اعرف المزيد",

    // Stats
    verifiedCharities: "جمعيات خيرية موثوقة",
    focusAreas: "مجالات التركيز",
    trustedDonors: "موثوق به من قبل الآلاف",

    // Charities Section
    featuredCharities: "الجمعيات المميزة",
    allCharities: "جميع الجمعيات الموثوقة",
    charitiesDescription:
      "لقد قمنا بفحص هذه المنظمات بعناية للتأكد من وصول تبرعاتك إلى من هم في أمس الحاجة إليها.",
    donate: "تبرع الآن",
    learnMoreAbout: "اعرف المزيد",
    clicks: "نقرة",

    // Categories
    medical: "الرعاية الطبية",
    food: "الطعام والماء",
    shelter: "المأوى",
    education: "التعليم",
    emergency: "الإغاثة الطارئة",
    children: "الأطفال",

    // Impact Section
    yourImpact: "تأثيرك مهم",
    impactDescription:
      "شاهد كيف تحدث التبرعات فرقاً حقيقياً في حياة الفلسطينيين.",

    // Footer
    mission:
      "مهمتنا هي ربط المتبرعين الكرماء بالجمعيات الخيرية الموثوقة التي تدعم الفلسطينيين المحتاجين.",
    quickLinks: "روابط سريعة",
    contact: "اتصل بنا",
    followUs: "تابعنا",
    copyright: "© 2025 قف مع فلسطين. جميع الحقوق محفوظة.",

    // About
    aboutTitle: "عن مهمتنا",
    aboutDescription:
      "قف مع فلسطين هي منصة مخصصة لربط المتبرعين بالجمعيات الخيرية الموثوقة والجديرة بالثقة التي تدعم الفلسطينيين.",

    // Stories
    impactStories: "قصص التأثير",
    storiesDescription: "قصص حقيقية عن الأمل والصمود من فلسطين.",
    readMore: "اقرأ المزيد",

    // Charity Detail
    website: "زيارة الموقع",
    donationLink: "صفحة التبرع",
    verified: "جمعية خيرية موثوقة",
    focusAreasTitle: "مجالات التركيز",
    supportingTogether: "ندعم فلسطين معاً",
    joinOurMission: "انضم إلى مهمتنا",

    // Loading & Errors
    loading: "جاري التحميل...",
    error: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
    noCharities: "لم يتم العثور على جمعيات خيرية.",
    noStories: "لا توجد قصص متاحة بعد.",
  },
};

export const useTranslation = (language = "en") => {
  const t = (key) => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return { t };
};
