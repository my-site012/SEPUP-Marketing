import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FOUNDER_INFO, CORE_VALUES, BRAND } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section className="w-full py-space-2xl bg-surface" id="about">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        {/* Main Grid: Founder Image & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center mb-space-2xl">
          {/* Visual Storytelling Column with Real Founder Photo */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-gradient-to-tr from-rose-100 via-white to-pink-50 border border-slate-200">
              <Image
                src={FOUNDER_INFO.photo}
                alt={`${FOUNDER_INFO.name} - ${FOUNDER_INFO.title} at Step Up Marketing`}
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 550px"
                className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
              
              {/* Badge overlay on Founder Photo */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-white mb-1.5 border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Founder Spotlight</span>
                  </div>
                  <p className="text-xl sm:text-2xl font-extrabold text-white">{FOUNDER_INFO.name}</p>
                  <p className="text-xs sm:text-sm text-rose-200 font-medium">{FOUNDER_INFO.title}</p>
                  <p className="text-xs text-slate-300 mt-1">Mississauga, Ontario, Canada</p>
                </div>
                <a
                  href={BRAND.socialLinks.founderLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-2xl bg-white/20 hover:bg-[#0077b5] text-white backdrop-blur-md flex items-center justify-center transition-colors shadow-lg"
                  aria-label="Garvita Uppal on LinkedIn"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66c0-.92-.74-1.66-1.66-1.66Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Experience Callouts */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Professional Experience
                </span>
                <p className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  10+ Years
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Marketing, advertising &amp; business growth
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-gradient-to-br from-[#f87b7b] to-[#ea580c] text-white shadow-sm">
                <span className="text-[11px] font-bold text-white/80 uppercase tracking-wider">
                  Established
                </span>
                <p className="text-xl sm:text-2xl font-black text-white mt-1">
                  2025
                </p>
                <p className="text-xs text-white/90 mt-0.5">
                  Mississauga &amp; GTA, Ontario
                </p>
              </div>
            </div>
          </div>

          {/* Positioning & Biography Column */}
          <div className="lg:col-span-7 flex flex-col gap-space-sm" id="founder">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffe4e6] text-[#e11d48] font-label-eyebrow text-label-eyebrow uppercase font-bold w-max">
              About Step Up Marketing
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-on-surface tracking-tight leading-snug">
              Marketing Made Simpler, More Transparent, and More Practical.
            </h2>

            <p className="font-body-lead text-body-lead text-on-surface-variant">
              Step Up Marketing was founded in 2025 by <strong className="text-slate-900 font-bold">Garvita Uppal</strong>, a marketing professional with close to a decade of experience in digital marketing, advertising, and business growth.
            </p>

            <div className="space-y-3 text-sm sm:text-base text-on-surface-variant leading-relaxed">
              <p>
                After working closely with businesses across different industries, Garvita recognized a common challenge: many business owners are excellent at what they do, but struggle to find the time, expertise, or reliable support needed to market their business effectively.
              </p>
              <p>
                Some don&apos;t know where to start. Others have invested in marketing without understanding where their money went or what results they actually received.
              </p>
              <p className="font-medium text-slate-900 bg-rose-50/60 p-4 rounded-2xl border border-rose-100">
                &ldquo;Step Up Marketing was created to bridge that gap. We support business owners who have worked hard to build something real and want a trusted partner to help more people find it.&rdquo;
              </p>
              <p>
                Our approach is simple: understand the business first, identify what it actually needs, and build a marketing strategy around its goals, customers, and budget. Rather than selling generic one-size-fits-all retainers, we focus on honest recommendations and dependable execution.
              </p>
            </div>

            {/* Mission & Vision Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1.5">
                  <span className="material-symbols-outlined text-[20px]">flag</span>
                  <span>Our Mission</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {FOUNDER_INFO.mission}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 text-[#0d9488] font-bold text-sm mb-1.5">
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                  <span>Our Vision</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {FOUNDER_INFO.vision}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Core Values Grid */}
        <div className="mt-space-lg pt-space-xl border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-space-lg">
            <span className="font-label-eyebrow text-label-eyebrow text-[#e11d48] uppercase tracking-widest font-bold">
              What We Stand For
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight mt-1">
              Our Core Values
            </h3>
            <p className="font-body-md text-slate-600 mt-1">
              The principles that guide how we advise clients, build campaigns, and measure success every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CORE_VALUES.map((val) => (
              <div
                key={val.title}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-rose-50 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                    {val.icon}
                  </span>
                </div>
                <h4 className="font-bold text-base sm:text-lg text-slate-900 mb-1.5">
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
