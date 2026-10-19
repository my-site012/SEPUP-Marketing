import React from "react";

interface ServiceIconProps {
  id: string;
}

export default function ServiceIcon({ id }: ServiceIconProps) {
  switch (id) {
    case "branding-identity":
    case "graphic-designing":
    case "brand-strategy":
      // Branding & Identity: Palette, Pen Tool & Brand Standards
      return (
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#ea580c] via-[#f97316] to-[#fed7aa] flex items-center justify-center text-white shadow-lg shadow-orange-500/25 border border-white/30 group-hover:scale-110 transition-all duration-300">
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21a9 9 0 1 0-9-9c0 2 1.5 3 3.5 3h1.5a2 2 0 0 1 2 2c0 1.5.5 4 2 4z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="7.5" cy="10.5" r="1.5" fill="#ffffff" />
            <circle cx="12" cy="7.5" r="1.5" fill="#ffffff" />
            <circle cx="16.5" cy="10.5" r="1.5" fill="#ffffff" />
            <path d="M18 16l-3-3 4-4 3 3-4 4z" fill="#ffffff" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </div>
      );

    case "website-design-management":
    case "web-design-development":
      // Website Design & Management: Modern Device & Clean Code Frame
      return (
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#6366f1] via-[#818cf8] to-[#c7d2fe] flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 border border-white/30 group-hover:scale-110 transition-all duration-300">
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2.5" y="4" width="19" height="15" rx="3" stroke="currentColor" strokeWidth="1.8" />
            <path d="M7 9l3 2.5L7 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.5 14h4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M18 2.5l-2 3.5h3l-2.5 4" stroke="#fef08a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );

    case "google-business-management":
      // Google Business Profile: Local Map Pin & 5-Star Crown
      return (
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#059669] via-[#10b981] to-[#a7f3d0] flex items-center justify-center text-white shadow-lg shadow-emerald-500/25 border border-white/30 group-hover:scale-110 transition-all duration-300">
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2a7.5 7.5 0 0 0-7.5 7.5c0 5.25 7.5 12.5 7.5 12.5s7.5-7.25 7.5-12.5A7.5 7.5 0 0 0 12 2z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.8" />
            <path d="M12 6.5l1.1 2.3 2.5.4-1.8 1.8.4 2.5-2.2-1.2-2.2 1.2.4-2.5-1.8-1.8 2.5-.4L12 6.5z" fill="#ffffff" />
          </svg>
        </div>
      );

    case "social-media-management":
      // Social Media Management: Connected Growth Community
      return (
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#db2777] via-[#ec4899] to-[#fbcfe8] flex items-center justify-center text-white shadow-lg shadow-pink-500/25 border border-white/30 group-hover:scale-110 transition-all duration-300">
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="3.2" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="5" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.8" fill="currentColor" />
            <circle cx="19" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.8" fill="currentColor" />
            <circle cx="6" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.8" fill="currentColor" />
            <circle cx="18" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.8" fill="currentColor" />
            <path d="M7 8.2l3 2.5M17 8.2l-3 2.5M7.8 16.5l2.4-2.5M16.2 16.5l-2.4-2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "content-marketing":
      // Content Marketing: Article, Pen & Amplification
      return (
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#d97706] via-[#f59e0b] to-[#fef08a] flex items-center justify-center text-white shadow-lg shadow-amber-500/25 border border-white/30 group-hover:scale-110 transition-all duration-300">
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.2" />
            <path d="M7 7h10M7 11h10M7 15h7" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "photo-video-shoots":
      // Photo & Video Content Shoots: Camera Lens & Action Clap
      return (
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#4f46e5] via-[#6366f1] to-[#c7d2fe] flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 border border-white/30 group-hover:scale-110 transition-all duration-300">
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="13" r="2" fill="#ffffff" />
          </svg>
        </div>
      );

    case "google-ads":
      // Google Ads: High-Intent Radar Target & Cursor
      return (
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#b45309] via-[#d97706] to-[#fde68a] flex items-center justify-center text-white shadow-lg shadow-amber-600/25 border border-white/30 group-hover:scale-110 transition-all duration-300">
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="7.5" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="11" cy="11" r="4.5" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.25" />
            <circle cx="11" cy="11" r="1.5" fill="currentColor" />
            <path d="M11 2v3M11 17v3M2 11h3M17 11h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M15 15l6 6m-1-4l1 4-4-1" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );

    case "meta-ads":
    case "social-media-advertising":
      // Meta Ads: Megaphone & Targeted Broadcast Waves
      return (
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#0d9488] via-[#14b8a6] to-[#99f6e4] flex items-center justify-center text-white shadow-lg shadow-teal-500/25 border border-white/30 group-hover:scale-110 transition-all duration-300">
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 8a3 3 0 0 1 0 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M20.5 5.5a6.5 6.5 0 0 1 0 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M3 10v4a1 1 0 0 0 1 1h2.5l5.5 4V5l-5.5 4H4a1 1 0 0 0-1 1z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M6 15v3a2 2 0 0 0 2 2h.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "email-marketing":
      // Email Marketing: Conversion Envelope & Automated Loop
      return (
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#2563eb] via-[#3b82f6] to-[#bfdbfe] flex items-center justify-center text-white shadow-lg shadow-blue-500/25 border border-white/30 group-hover:scale-110 transition-all duration-300">
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="5" width="18" height="14" rx="3" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.8" />
            <path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 19l3 3m0-3l-3 3" stroke="#fde047" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "geo-ai-search":
    case "seo":
      // GEO / AI Search: Neural Circuit & Future AI Spark
      return (
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#f43f5e] via-[#fb7185] to-[#fda4af] flex items-center justify-center text-white shadow-lg shadow-rose-500/25 border border-white/30 group-hover:scale-110 transition-all duration-300">
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 2A4.5 4.5 0 0 0 5 6.5c0 .76.19 1.48.52 2.11A4.5 4.5 0 0 0 4 12.5a4.5 4.5 0 0 0 2 3.73V18a3 3 0 0 0 3 3h1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M14.5 2A4.5 4.5 0 0 1 19 6.5c0 .76-.19 1.48-.52 2.11A4.5 4.5 0 0 1 20 12.5a4.5 4.5 0 0 1-2 3.73V18a3 3 0 0 1-3 3h-1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="12" cy="11" r="2.5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.8" />
            <path d="M12 2v4M12 16v6M9 11H6M18 11h-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "marketing-strategy-consulting":
      // Marketing Strategy & Consulting: Compass, Lightbulb & Strategic Direction
      return (
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#eab308] via-[#facc15] to-[#fef08a] flex items-center justify-center text-white shadow-lg shadow-yellow-500/25 border border-white/30 group-hover:scale-110 transition-all duration-300">
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
            <polygon points="12,7 14.5,12 12,17 9.5,12" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="12" cy="12" r="1.5" fill="#ffffff" />
          </svg>
        </div>
      );

    default:
      return (
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#f87b7b] to-[#f43f5e] flex items-center justify-center text-white shadow-md">
          <span className="material-symbols-outlined text-[24px]">token</span>
        </div>
      );
  }
}
