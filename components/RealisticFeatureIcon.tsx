"use client";

import React from "react";

interface RealisticFeatureIconProps {
  icon: string;
  title: string;
  className?: string;
}

export default function RealisticFeatureIcon({
  icon,
  title,
  className = "",
}: RealisticFeatureIconProps) {
  // Normalize lookup key based on icon name or title keywords
  const key = icon.toLowerCase();
  const lowerTitle = title.toLowerCase();

  // 1. iPhone / Smartphone Shoot
  if (key === "smartphone" || lowerTitle.includes("iphone") || lowerTitle.includes("mobile")) {
    return (
      <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-2 shadow-lg shadow-rose-500/20 ring-1 ring-white/20 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 ${className}`}>
        {/* Gloss highlight */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/25 pointer-events-none" />
        
        {/* Realistic iPhone mockup */}
        <div className="relative w-7 h-10 rounded-md bg-slate-950 border border-slate-700/80 shadow-inner flex flex-col items-center justify-between p-0.5 overflow-hidden">
          {/* Dynamic Island / Notch */}
          <div className="w-2.5 h-0.5 rounded-full bg-slate-800 shrink-0" />
          
          {/* Screen with colorful video camera interface */}
          <div className="w-full flex-1 rounded-xs bg-gradient-to-br from-rose-500 via-pink-500 to-amber-400 p-0.5 flex flex-col items-center justify-center my-0.5 relative">
            <div className="w-2.5 h-2.5 rounded-full border border-white/80 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
            </div>
            {/* 4K badge */}
            <span className="text-[5px] font-black text-white tracking-tighter uppercase absolute bottom-0.5">4K</span>
          </div>
          
          {/* Home bar */}
          <div className="w-3 h-0.5 rounded-full bg-white/60 shrink-0" />
        </div>
      </div>
    );
  }

  // 2. Pro Camera / Studio Production
  if (key === "photo_camera" || key === "camera_alt" || lowerTitle.includes("camera") || lowerTitle.includes("photo")) {
    return (
      <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br from-neutral-900 via-zinc-800 to-neutral-950 p-2 shadow-lg shadow-indigo-500/20 ring-1 ring-white/20 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/25 pointer-events-none" />
        
        {/* Realistic DSLR body */}
        <div className="relative w-9 h-7 rounded-md bg-zinc-900 border border-zinc-600 shadow-md flex items-center justify-center">
          {/* Red luxury ring (Canon L-lens style) */}
          <div className="w-6 h-6 rounded-full border-[1.5px] border-rose-500 bg-gradient-to-tr from-zinc-900 via-indigo-950 to-zinc-900 flex items-center justify-center shadow-inner">
            {/* Multi-element lens reflection */}
            <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-indigo-600 via-cyan-400 to-rose-400 opacity-90 flex items-center justify-center shadow-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-white/80 blur-[0.3px]" />
            </div>
          </div>
          {/* Shutter button & hot shoe */}
          <div className="absolute -top-1 right-1.5 w-2 h-1 rounded-t-xs bg-zinc-400 border border-zinc-600" />
          <div className="absolute -top-1 left-2.5 w-2.5 h-0.5 bg-zinc-500" />
        </div>
      </div>
    );
  }

  // 3. Custom Shot Lists / Checklist / Scopes
  if (key === "checklist" || key === "assignment" || key === "fact_check" || lowerTitle.includes("shot list") || lowerTitle.includes("list")) {
    return (
      <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 p-2 shadow-lg shadow-orange-500/25 ring-1 ring-white/30 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40 pointer-events-none" />
        
        {/* Clipboard with real checklist lines */}
        <div className="relative w-7 h-9 rounded-md bg-white border border-amber-200 shadow-md p-1 flex flex-col gap-1">
          {/* Metal clip */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3.5 h-1.5 rounded-xs bg-slate-700 border border-slate-500 shadow-xs" />
          
          <div className="mt-1 flex items-center gap-1">
            <div className="w-2 h-2 rounded-xs bg-emerald-500 flex items-center justify-center shrink-0">
              <span className="text-[7px] text-white font-bold leading-none">✓</span>
            </div>
            <div className="h-1 flex-1 rounded-full bg-slate-300" />
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-xs bg-emerald-500 flex items-center justify-center shrink-0">
              <span className="text-[7px] text-white font-bold leading-none">✓</span>
            </div>
            <div className="h-1 flex-1 rounded-full bg-slate-300" />
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-xs bg-amber-500 flex items-center justify-center shrink-0">
              <span className="text-[7px] text-white font-bold leading-none">✓</span>
            </div>
            <div className="h-1 w-2/3 rounded-full bg-slate-200" />
          </div>
        </div>
      </div>
    );
  }

  // 4. Post-Production & Video Editing / Film
  if (key === "movie_edit" || key === "movie" || lowerTitle.includes("post-production") || lowerTitle.includes("editing")) {
    return (
      <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 p-2 shadow-lg shadow-purple-500/25 ring-1 ring-white/30 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40 pointer-events-none" />
        
        {/* Cinema clapperboard + play timeline */}
        <div className="relative w-8 h-8 flex flex-col justify-between">
          {/* Diagonal striped clapper top */}
          <div className="w-full h-2 rounded-t-xs bg-slate-900 border border-slate-700 flex overflow-hidden">
            <div className="w-2 h-full bg-white transform -skew-x-12" />
            <div className="w-2 h-full bg-slate-900 transform -skew-x-12" />
            <div className="w-2 h-full bg-white transform -skew-x-12" />
            <div className="w-2 h-full bg-slate-900 transform -skew-x-12" />
          </div>
          
          {/* Main board with play symbol & color grade tracks */}
          <div className="w-full h-5 rounded-b-xs bg-slate-950 border-x border-b border-slate-800 p-0.5 flex flex-col justify-between">
            <div className="flex items-center justify-center flex-1">
              <div className="w-0 h-0 border-t-[3.5px] border-t-transparent border-l-[6px] border-l-rose-400 border-b-[3.5px] border-b-transparent ml-0.5" />
            </div>
            {/* Timeline colored tracks */}
            <div className="flex gap-0.5 h-1 w-full">
              <div className="flex-1 rounded-xs bg-cyan-400" />
              <div className="flex-1 rounded-xs bg-amber-400" />
              <div className="flex-1 rounded-xs bg-rose-400" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 5. Multi-Platform Formatting / Responsive Screens
  if (key === "aspect_ratio" || key === "devices" || lowerTitle.includes("multi-platform") || lowerTitle.includes("formatting") || lowerTitle.includes("device")) {
    return (
      <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 p-2 shadow-lg shadow-blue-500/25 ring-1 ring-white/30 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40 pointer-events-none" />
        
        {/* Layered Desktop + Phone screens showing 16:9 & 9:16 */}
        <div className="relative w-8 h-8 flex items-center justify-center">
          {/* Landscape screen (16:9) */}
          <div className="w-7 h-5 rounded-xs bg-slate-900 border border-cyan-300/80 shadow-md p-0.5 flex flex-col justify-between">
            <div className="w-full h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-2xs" />
            <div className="flex gap-0.5 items-end">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <div className="h-0.5 flex-1 bg-white/40 rounded-2xs" />
            </div>
          </div>
          {/* Vertical phone overlay (9:16) */}
          <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-6 rounded-xs bg-slate-950 border border-white shadow-lg p-0.5 flex flex-col justify-between">
            <div className="w-1.5 h-0.5 rounded-full bg-white/80 mx-auto" />
            <div className="w-full flex-1 my-0.5 bg-gradient-to-b from-rose-500 to-pink-500 rounded-2xs flex items-center justify-center">
              <span className="text-[4px] text-white font-bold">9:16</span>
            </div>
            <div className="w-1 h-0.5 rounded-full bg-white/60 mx-auto" />
          </div>
        </div>
      </div>
    );
  }

  // 6. Reusable Content Library / Folder / Asset Management
  if (key === "folder_zip" || key === "photo_library" || key === "folder_special" || lowerTitle.includes("library") || lowerTitle.includes("asset")) {
    return (
      <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 via-rose-500 to-pink-600 p-2 shadow-lg shadow-rose-500/25 ring-1 ring-white/30 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40 pointer-events-none" />
        
        {/* Realistic 3D Folder with color-coded asset cards popping out */}
        <div className="relative w-8 h-8 flex items-center justify-center">
          {/* Back folder flap */}
          <div className="absolute -top-0.5 left-0 w-3.5 h-2 rounded-t-xs bg-amber-600" />
          <div className="w-7 h-5 rounded-xs bg-amber-500 shadow-sm" />
          
          {/* Popping asset cards (video, photo, doc) */}
          <div className="absolute -top-1.5 w-5 h-4 rounded-xs bg-white border border-slate-200 shadow-md flex items-center justify-center -rotate-6">
            <span className="text-[6px] font-bold text-rose-500">RAW</span>
          </div>
          <div className="absolute -top-1 w-5 h-4 rounded-xs bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-md flex items-center justify-center rotate-6">
            <span className="text-[6px] font-bold text-white">4K</span>
          </div>
          
          {/* Front folder flap */}
          <div className="absolute bottom-1 w-7 h-3.5 rounded-b-xs bg-gradient-to-r from-amber-400 to-amber-500 shadow-md border-t border-white/40 flex items-center justify-between px-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
            <div className="h-0.5 w-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  // 7. Google Ads / PPC / Clicks
  if (key === "ads_click" || lowerTitle.includes("ads") || lowerTitle.includes("click") || lowerTitle.includes("ppc")) {
    return (
      <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-teal-500 p-2 shadow-lg shadow-blue-500/25 ring-1 ring-white/30 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40 pointer-events-none" />
        {/* 3D Target cursor with pulse ring */}
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="absolute w-7 h-7 rounded-full border border-white/40 animate-ping opacity-60" />
          <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-xs border border-white/60 flex items-center justify-center shadow-inner">
            <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-amber-400 to-rose-500 shadow-md flex items-center justify-center">
              <span className="text-[7px] text-white font-black">$</span>
            </div>
          </div>
          {/* Pointer Cursor */}
          <svg className="absolute -bottom-0.5 -right-0.5 w-4 h-4 text-white drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 0l16 12-7 1.5 4.5 9-3 1.5-4.5-9-6 5.5z" />
          </svg>
        </div>
      </div>
    );
  }

  // 8. SEO / Search / Ranking
  if (key === "search" || key === "track_changes" || lowerTitle.includes("seo") || lowerTitle.includes("search")) {
    return (
      <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-500 p-2 shadow-lg shadow-teal-500/25 ring-1 ring-white/30 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40 pointer-events-none" />
        {/* Realistic Magnifying glass over ranking badge */}
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="w-5 h-5 rounded-full border-2 border-white bg-white/20 backdrop-blur-xs shadow-md flex items-center justify-center">
            <span className="text-[8px] font-black text-amber-300">#1</span>
          </div>
          {/* Handle */}
          <div className="absolute bottom-1 right-1 w-2.5 h-1 bg-amber-400 rounded-xs rotate-45 border border-white/50 shadow-sm" />
        </div>
      </div>
    );
  }

  // 9. Branding / Palette / Design
  if (key === "palette" || key === "brush" || lowerTitle.includes("branding") || lowerTitle.includes("design") || lowerTitle.includes("logo")) {
    return (
      <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-600 via-rose-500 to-amber-500 p-2 shadow-lg shadow-rose-500/25 ring-1 ring-white/30 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40 pointer-events-none" />
        {/* Artist Palette with colorful paint blobs */}
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="w-7 h-7 rounded-full bg-white shadow-md p-1 flex flex-wrap gap-0.5 items-center justify-center relative">
            <div className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-2xs" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-2xs" />
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-2xs" />
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-2xs" />
            {/* Thumb hole */}
            <div className="w-2 h-2 rounded-full bg-rose-100 border border-slate-300 ml-auto" />
          </div>
        </div>
      </div>
    );
  }

  // 10. Email Marketing / Outreach
  if (key === "mail" || key === "schedule_send" || lowerTitle.includes("email") || lowerTitle.includes("newsletter")) {
    return (
      <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-2 shadow-lg shadow-indigo-500/25 ring-1 ring-white/30 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40 pointer-events-none" />
        {/* 3D Envelope with glowing mail */}
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="w-7 h-5 rounded-xs bg-white shadow-md border border-slate-200 flex flex-col justify-between p-0.5 relative overflow-hidden">
            <div className="w-0 h-0 border-l-[13px] border-l-transparent border-r-[13px] border-r-transparent border-t-[9px] border-t-indigo-200 mx-auto" />
            <div className="w-full h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xs" />
          </div>
          {/* Notification badge */}
          <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-rose-500 border border-white flex items-center justify-center shadow-xs">
            <span className="text-[6px] font-bold text-white">✓</span>
          </div>
        </div>
      </div>
    );
  }

  // 11. Social Media / Community / Hub
  if (key === "hub" || key === "share" || key === "groups" || key === "forum" || lowerTitle.includes("social") || lowerTitle.includes("community")) {
    return (
      <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 p-2 shadow-lg shadow-pink-500/25 ring-1 ring-white/30 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40 pointer-events-none" />
        {/* Connected social nodes & heart bubble */}
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center">
            <span className="text-[10px] text-rose-500">❤️</span>
          </div>
          <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-cyan-400 border border-white shadow-xs" />
          <div className="absolute -bottom-0.5 -left-0.5 w-2.5 h-2.5 rounded-full bg-amber-400 border border-white shadow-xs" />
        </div>
      </div>
    );
  }

  // 12. Local Map / Google Business / Location
  if (key === "location_on" || key === "map" || key === "store" || lowerTitle.includes("map") || lowerTitle.includes("local")) {
    return (
      <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 via-rose-600 to-orange-500 p-2 shadow-lg shadow-red-500/25 ring-1 ring-white/30 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40 pointer-events-none" />
        {/* 3D Map Pin with 5-star glow */}
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="w-6 h-7 flex flex-col items-center">
            <div className="w-5 h-5 rounded-full bg-white shadow-md border-2 border-red-500 flex items-center justify-center">
              <span className="text-[8px] text-amber-500 font-bold">★</span>
            </div>
            <div className="w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-t-[4px] border-t-red-500 -mt-0.5" />
          </div>
        </div>
      </div>
    );
  }

  // 13. Analytics / Growth / Performance / Speed
  if (key === "analytics" || key === "insights" || key === "trending_up" || key === "speed" || lowerTitle.includes("analytic") || lowerTitle.includes("performance") || lowerTitle.includes("growth")) {
    return (
      <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-500 p-2 shadow-lg shadow-emerald-500/25 ring-1 ring-white/30 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40 pointer-events-none" />
        {/* 3D upward growth bars + glow trendline */}
        <div className="relative w-8 h-8 flex items-end justify-center gap-1 p-1">
          <div className="w-1.5 h-3 rounded-t-xs bg-white/70 shadow-xs" />
          <div className="w-1.5 h-4.5 rounded-t-xs bg-white/90 shadow-xs" />
          <div className="w-1.5 h-6 rounded-t-xs bg-amber-300 shadow-md relative">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-xs animate-ping" />
          </div>
        </div>
      </div>
    );
  }

  // Fallback: Rich 3D gradient badge with Material Symbol in crisp white with drop shadow
  return (
    <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f87b7b] via-[#f43f5e] to-[#e11d48] p-2 shadow-lg shadow-rose-500/25 ring-1 ring-white/30 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40 pointer-events-none" />
      <span className="material-symbols-outlined text-[28px] text-white drop-shadow-md relative z-10" aria-hidden="true">
        {icon}
      </span>
    </div>
  );
}
