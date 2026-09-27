import React from "react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#f87b7b] via-[#ea580c] to-[#f43f5e] p-8 sm:p-12 lg:p-20 text-on-primary overflow-hidden shadow-2xl">
          {/* Ambient Diffused Lighting */}
          <div 
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#fde047]/30 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div 
            className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#4ecdc4]/30 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl flex flex-col items-start gap-space-sm">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-label-eyebrow text-label-eyebrow uppercase tracking-widest border border-white/20">
              Step Up Your Growth Today
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[40px] text-white font-bold tracking-tight leading-[1.2]">
              Ready To Make Your Digital Presence Work Harder?
            </h2>

            <p className="font-body-lead text-body-lead text-white/90 max-w-2xl">
              Tell us where your enterprise is today. We will audit your visibility moats, technical performance, and conversion pipelines with actionable takeaways during an initial 30-minute consultation.
            </p>

            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-[#e11d48] hover:bg-slate-50 font-label-lg text-label-lg shadow-lg hover:shadow-xl font-bold transition-all duration-200"
              >
                <span>Get Your Free Consultation</span>
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-label-lg text-label-lg transition-all duration-200 border border-white/20"
              >
                <span>View Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
