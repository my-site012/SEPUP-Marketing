import React from "react";
import Link from "next/link";
import { BRAND } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#f87b7b] via-[#ea580c] to-[#f43f5e] p-8 sm:p-12 lg:p-16 text-on-primary overflow-hidden shadow-2xl">
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-label-eyebrow text-xs uppercase tracking-widest border border-white/20 font-bold">
              Ready To Step Up?
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[40px] text-white font-black tracking-tight leading-[1.2]">
              Ready To Make Your Marketing Work For Your Business?
            </h2>

            <p className="font-body-lead text-sm sm:text-base text-white/95 max-w-2xl leading-relaxed">
              Tell us where your business is today. We will take the time to understand your goals, review what you actually need, and build a marketing plan around your customers and budget.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 rounded-full bg-white text-[#e11d48] hover:bg-slate-50 font-label-lg text-sm shadow-lg hover:shadow-xl font-bold transition-all duration-200"
              >
                <span>Book a Free Strategy Consultation</span>
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-label-lg text-sm transition-all duration-200 border border-white/20 font-semibold"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
