// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               app/page.js
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Heart, Shield, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import CharityCard from "@/components/CharityCard";
import { useTranslation } from "@/lib/translations";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function Home() {
  const [charities, setCharities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("en");
  const { t } = useTranslation(language);
  const isRTL = language === "ar";

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
    fetchCharities(savedLanguage);
  }, []);

  const fetchCharities = async (lang) => {
    try {
      const response = await axios.get(
        `${API_URL}/api/charities?language=${lang}`
      );
      setCharities(response.data.data.slice(0, 3)); // Show only 3 on homepage
    } catch (error) {
      console.error("Error fetching charities:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDonateClick = async (charityId) => {
    try {
      await axios.post(`${API_URL}/api/charities/${charityId}/click`, {
        referrer: "homepage",
      });
    } catch (error) {
      console.error("Error tracking click:", error);
    }
  };

  return (
    <div className={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-red-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t("heroTitle")}
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-green-50">
              {t("heroSubtitle")}
            </p>
            <p className="text-lg mb-8 text-green-100 max-w-2xl mx-auto">
              {t("heroDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/charities"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 rounded-lg font-semibold text-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl"
              >
                {t("viewCharities")}
                <ArrowRight className={`w-5 h-5 ${isRTL ? "mr-2" : "ml-2"}`} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all"
              >
                {t("learnMore")}
              </Link>
            </div>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="rgb(249, 250, 251)"
            />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">6</h3>
              <p className="text-gray-600">{t("verifiedCharities")}</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">15+</h3>
              <p className="text-gray-600">{t("focusAreas")}</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              {/* <h3 className="text-3xl font-bold text-gray-800 mb-2">1000+</h3>
              <p className="text-gray-600">{t('trustedDonors')}</p> */}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {t("supportingTogether")}
              </h3>
              <p className="text-gray-600">{t("joinOurMission")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Charities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t("featuredCharities")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("charitiesDescription")}
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
              <p className="mt-4 text-gray-600">{t("loading")}</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {charities.map((charity) => (
                  <CharityCard
                    key={charity.id}
                    charity={charity}
                    language={language}
                    onDonateClick={handleDonateClick}
                  />
                ))}
              </div>

              <div className="text-center mt-12">
                <Link
                  href="/charities"
                  className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg font-semibold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl"
                >
                  {t("allCharities")}
                  <ArrowRight
                    className={`w-5 h-5 ${isRTL ? "mr-2" : "ml-2"}`}
                  />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-6">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t("yourImpact")}
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              {t("impactDescription")}
            </p>
            <Link
              href="/stories"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg font-semibold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl"
            >
              {t("impactStories")}
              <ArrowRight className={`w-5 h-5 ${isRTL ? "mr-2" : "ml-2"}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-red-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === "ar"
              ? "كل تبرع يحدث فرقاً"
              : "Every Donation Makes a Difference"}
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            {language === "ar"
              ? "انضم إلى آلاف المتبرعين الذين يدعمون فلسطين اليوم"
              : "Join thousands of donors supporting Palestine today"}
          </p>
          <Link
            href="/charities"
            className="inline-flex items-center px-8 py-4 bg-white text-green-700 rounded-lg font-semibold text-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl"
          >
            {t("donate")}
            <Heart className={`w-5 h-5 ${isRTL ? "mr-2" : "ml-2"}`} />
          </Link>
        </div>
      </section>
    </div>
  );
}
