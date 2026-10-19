import React from "react";
import Link from "next/link";
import { EXTENDED_TEAM_BANNER, BRAND } from "@/lib/constants";

export default function ExtendedTeamBanner() {
  return (
    <section className="w-full py-space-xl bg-surface" id="extended-team">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-slate-800">
          {/* Subtle Ambient Lighting */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[300px] bg-gradient-to-b from-[#f87b7b]/20 via-[#ea580c]/15 to-transparent blur-3xl pointer-events-none rounded-full"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-gradient-to-t from-[#4ecdc4]/20 via-transparent to-transparent blur-3xl pointer-events-none rounded-full"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start gap-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#fda4af] font-label-eyebrow text-xs uppercase tracking-widest font-bold border border-white/15">
                <span className="w-2 h-2 rounded-full bg-[#f43f5e] animate-pulse" />
                {EXTENDED_TEAM_BANNER.eyebrow}
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-white tracking-tight leading-[1.2]">
                {EXTENDED_TEAM_BANNER.heading}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {EXTENDED_TEAM_BANNER.subheading}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#f87b7b] via-[#fb7185] to-[#f43f5e] text-white font-bold text-sm shadow-lg hover:shadow-xl hover:opacity-95 transition-all"
                >
                  <span>Book Free Strategy Consultation</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <a
                  href={BRAND.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#4ecdc4]">chat</span>
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Right Highlights Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {EXTENDED_TEAM_BANNER.points.map((point, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors flex flex-col justify-between"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#f87b7b]/30 to-[#4ecdc4]/30 flex items-center justify-center text-white mb-3">
                    <span className="material-symbols-outlined text-[20px] text-emerald-300">
                      check_circle
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed font-medium">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
