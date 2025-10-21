// 'use client';

// import { ExternalLink, CheckCircle, Heart } from 'lucide-react';
// import { useTranslation } from '@/lib/translations';

// export default function CharityCard({ charity, language, onDonateClick }) {
//   const { t } = useTranslation(language);
//   const isRTL = language === 'ar';

//   const handleDonateClick = () => {
//     if (onDonateClick) {
//       onDonateClick(charity.id);
//     }
//     window.open(charity.donationUrl, '_blank');
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
//       {/* Header with Category */}
//       <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
//         <div className="flex items-center justify-between">
//           <span className="text-white text-sm font-medium">{charity.category}</span>
//           {charity.verificationStatus === 'verified' && (
//             <div className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded-full">
//               <CheckCircle className="w-4 h-4 text-white" />
//               <span className="text-white text-xs">{t('verified')}</span>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         {/* Charity Name */}
//         <h3 className={`text-2xl font-bold text-gray-800 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
//           {language === 'ar' ? charity.nameAr : charity.nameEn}
//         </h3>

//         {/* Description */}
//         <p className={`text-gray-600 mb-4 line-clamp-3 ${isRTL ? 'text-right' : 'text-left'}`}>
//           {language === 'ar' ? charity.descriptionAr : charity.descriptionEn}
//         </p>

//         {/* Focus Areas */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           {charity.focusAreas.slice(0, 4).map((area, index) => (
//             <span
//               key={index}
//               className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full"
//             >
//               {area}
//             </span>
//           ))}
//         </div>

//         {/* Stats */}
//         <div className="flex items-center justify-between mb-4 pt-4 border-t border-gray-100">
//           <div className="flex items-center space-x-1 text-gray-500 text-sm">
//             <Heart className="w-4 h-4" />
//             <span className={isRTL ? 'mr-1' : 'ml-1'}>
//               {charity.totalClicks} {t('clicks')}
//             </span>
//           </div>
//         </div>

//         {/* Actions */}
//         <div className="flex gap-3">
//           <button
//             onClick={handleDonateClick}
//             className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-md"
//           >
//             <Heart className="w-5 h-5" />
//             <span className={isRTL ? 'mr-2' : 'ml-2'}>{t('donate')}</span>
//           </button>
//           <a
//             href={charity.websiteUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-4 py-3 border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition flex items-center justify-center"
//             aria-label="Visit website"
//           >
//             <ExternalLink className="w-5 h-5" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// frontend/components/CharityCard.js
'use client';

import { ExternalLink, CheckCircle, Heart } from 'lucide-react';
import { useTranslation } from '@/lib/translations';
import { trackCharityClick } from './Analytics';

export default function CharityCard({ charity, language, onDonateClick }) {
  const { t } = useTranslation(language);
  const isRTL = language === 'ar';

  const handleDonateClick = () => {
    if (onDonateClick) {
      onDonateClick(charity.id);
    }
    window.open(charity.donationUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Header with Category */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-white text-sm font-medium">{charity.category}</span>
          {charity.verificationStatus === 'verified' && (
            <div className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded-full">
              <CheckCircle className="w-4 h-4 text-white" />
              <span className="text-white text-xs">{t('verified')}</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Charity Name */}
        <h3 className={`text-2xl font-bold text-gray-800 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
          {language === 'ar' ? charity.nameAr : charity.nameEn}
        </h3>

        {/* Description */}
        <p className={`text-gray-600 mb-4 line-clamp-3 ${isRTL ? 'text-right' : 'text-left'}`}>
          {language === 'ar' ? charity.descriptionAr : charity.descriptionEn}
        </p>

        {/* Focus Areas */}
        <div className="flex flex-wrap gap-2 mb-4">
          {charity.focusAreas.slice(0, 4).map((area, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full"
            >
              {area}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4 pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-1 text-gray-500 text-sm">
            <Heart className="w-4 h-4" />
            <span className={isRTL ? 'mr-1' : 'ml-1'}>
              {charity.totalClicks} {t('clicks')}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={handleDonateClick}
            className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-md"
          >
            <Heart className="w-5 h-5" />
            <span className={isRTL ? 'mr-2' : 'ml-2'}>{t('donate')}</span>
          </button>
          <a
            href={charity.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition flex items-center justify-center"
            aria-label="Visit website"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}