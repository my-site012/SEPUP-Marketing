import React from "react";
import Link from "next/link";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import PortfolioCard from "@/components/PortfolioCard";

export default function PortfolioGrid() {
  return (
    <section className="w-full py-space-2xl bg-surface" id="portfolio">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-xl">
          <div>
            <span className="font-label-eyebrow text-label-eyebrow text-[#e11d48] uppercase tracking-widest font-bold">
              Selected Work
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-on-surface tracking-tight leading-snug mt-1">
              Digital Experiences Built To Outperform.
            </h2>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-[#e11d48] font-label-lg text-label-lg group font-bold hover:underline"
          >
            <span>Request Detailed Case Study PDFs</span>
            <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform" aria-hidden="true">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* Editorial Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
          {PORTFOLIO_ITEMS.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
