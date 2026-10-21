"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FOUNDER_INFO, BRAND } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-surface relative overflow-hidden" id="about">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Owner Image - High-end modern card design */}
          <div className="lg:col-span-5 relative group">
            {/* Ambient luxury glow backdrop */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-rose-400/25 via-pink-400/20 to-teal-300/25 rounded-[2.5rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-500 -z-10" />

            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white border-2 border-white/80 ring-1 ring-slate-900/5">
              {/* Photo Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                <Image
                  src={FOUNDER_INFO.photo}
                  alt={`${FOUNDER_INFO.name} - ${FOUNDER_INFO.title} at Step Up Marketing`}
                  fill
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-white/80">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-900 tracking-tight">Founder Spotlight</span>
                </div>

                {/* Bottom Overlay Info Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-white flex items-center justify-between gap-3 shadow-lg">
                  <div>
                    <h3 className="text-lg font-extrabold text-white leading-tight">
                      {FOUNDER_INFO.name}
                    </h3>
                    <p className="text-xs font-semibold text-rose-300">
                      {FOUNDER_INFO.title}
                    </p>
                    <p className="text-[11px] text-slate-300 font-medium mt-0.5 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px] text-rose-400">location_on</span>
                      <span>Mississauga & GTA, Ontario</span>
                    </p>
                  </div>

                  <a
                    href={BRAND.socialLinks.founderLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/15 hover:bg-[#0077b5] text-white flex items-center justify-center transition-all duration-200 shrink-0 hover:scale-105 shadow-md"
                    aria-label={`${FOUNDER_INFO.name} LinkedIn Profile`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66c0-.92-.74-1.66-1.66-1.66Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Experience Badges below photo */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Experience
                </span>
                <p className="text-lg font-extrabold text-slate-900 mt-0.5">
                  10+ Years
                </p>
                <p className="text-[11px] text-slate-500">Digital Strategy & Growth</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-xs">
                <span className="text-[10px] font-bold text-rose-100 uppercase tracking-wider block">
                  Established
                </span>
                <p className="text-lg font-extrabold text-white mt-0.5">
                  2025
                </p>
                <p className="text-[11px] text-rose-100">Mississauga & GTA</p>
              </div>
            </div>
          </div>

          {/* Crisp, Focused Content Column (Not overloaded) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffe4e6] text-[#e11d48] font-bold text-xs uppercase tracking-wider w-max">
              About Step Up Marketing
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Marketing Made Simpler, More Transparent, and More Practical.
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              Step Up Marketing was founded in 2025 by <strong className="text-slate-900 font-bold">Garvita Uppal</strong> to bridge the gap between busy business owners and effective digital growth across Mississauga and the GTA.
            </p>

            {/* Concise Story Quote Box */}
            <div className="p-5 rounded-2xl bg-[#fff5f5] border border-[#f87b7b]/20 relative">
              <p className="text-sm sm:text-base font-semibold text-slate-800 italic leading-relaxed">
                &ldquo;We support business owners who have worked hard to build something real and want a trusted partner to help more people find it.&rdquo;
              </p>
              <p className="text-xs font-bold text-[#e11d48] mt-2">
                — Garvita Uppal, Founder & Principal Consultant
              </p>
            </div>

            {/* 3 Core Highlights for Quick Scannability */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-1">
                  <span className="material-symbols-outlined text-[18px] text-[#e11d48]">storefront</span>
                  <span>Business First</span>
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  Understanding your operations before recommending services.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-1">
                  <span className="material-symbols-outlined text-[18px] text-[#0d9488]">verified</span>
                  <span>Honest Guidance</span>
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  Zero generic retainers or unnecessary services.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-1">
                  <span className="material-symbols-outlined text-[18px] text-[#ea580c]">handshake</span>
                  <span>Both Thinking & Doing</span>
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  Strategic planning combined with dependable execution.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm transition-all hover:gap-3"
              >
                <span>Read Full Story & About Us</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-rose-50 hover:bg-rose-100 text-primary font-bold text-sm border border-rose-200/70 transition-all"
              >
                <span>Book Free Discovery Call</span>
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
