import React from "react";
import Link from "next/link";
import { BRAND } from "@/lib/constants";

export default function PortfolioGrid() {
  return (
    <section className="w-full py-space-2xl bg-surface" id="portfolio">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-xl">
          <div>
            <span className="font-label-eyebrow text-label-eyebrow text-[#e11d48] uppercase tracking-widest font-bold">
              Client Transformations
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-on-surface tracking-tight leading-snug mt-1">
              Case Studies &amp; Real Growth Stories.
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              We focus on measurable outcomes: increased customer inquiries, higher local Google rankings, and stronger brand recall for small and medium-sized businesses.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-[#e11d48] font-label-lg text-xs sm:text-sm group font-bold hover:underline shrink-0"
          >
            <span>Request Work Samples &amp; Inquiries</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" aria-hidden="true">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* Highlight Banner for Round 2 Portfolio */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 p-8 sm:p-12 text-white border border-slate-800 shadow-xl relative overflow-hidden">
          <div 
            className="absolute -right-20 -bottom-20 w-80 h-80 bg-rose-500/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-2xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-rose-300 text-xs font-bold border border-white/10">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
              <span>Full Portfolio Showcase &bull; Round 2 Update</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Looking for recent project results and work samples in your specific industry?
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              We respect our clients&apos; privacy and competitive advantage. During our initial discovery conversation, we can walk you through live websites, local Google 3-Pack case studies, and ad campaign performance relevant to your exact vertical.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="#contact"
                className="px-6 py-3 rounded-full bg-white text-slate-950 font-bold text-xs hover:bg-slate-100 transition-colors shadow-md"
              >
                Schedule a 1-on-1 Walkthrough
              </Link>
              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
