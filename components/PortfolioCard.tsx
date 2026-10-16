import React from "react";
import Image from "next/image";
import { PortfolioItem } from "@/lib/constants";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <article className="p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)] hover:border-slate-300 transition-all duration-300 flex flex-col gap-5 group active:scale-[0.99]">
      {/* High-Resolution Visual Stage */}
      <div className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm bg-slate-100">
        <Image
          src={item.imageUrl}
          alt={item.imageAlt}
          fill
          quality={90}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 650px"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Subtle realistic lighting gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

        {/* Category Pill */}
        <span className="absolute top-3 right-3 sm:top-4 sm:right-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md font-label-md text-[11px] sm:text-label-md font-semibold text-slate-900 shadow-sm border border-white/40">
          {item.category}
        </span>

        {/* Live Verified Tag */}
        <span className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-medium border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Case Study</span>
        </span>
      </div>

      <div className="flex flex-col gap-2.5 flex-1 justify-between">
        <div className="flex flex-col gap-2.5">
          {/* Metadata Row */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className={`text-[11px] font-bold ${item.tagColor} uppercase tracking-wider`}>
              {item.tags}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
              {item.region}
            </span>
          </div>

          <h3 className="font-headline-lg text-lg sm:text-headline-lg text-slate-900 font-bold leading-snug group-hover:text-primary transition-colors">
            {item.title}
          </h3>

          <p className="text-sm sm:text-body-md text-slate-600 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Metrics Box */}
        <div className={`p-3.5 sm:p-4 rounded-xl bg-slate-50/80 flex items-center justify-between mt-3 border border-slate-200/70 shadow-sm`}>
          <div>
            <p className="text-[10px] text-slate-500 uppercase font-semibold tracking-wider">
              {item.metric1Label}
            </p>
            <p className={`text-sm sm:text-headline-sm ${item.metric1Color} font-bold mt-0.5`}>
              {item.metric1Value}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-slate-500 uppercase font-semibold tracking-wider">
              {item.metric2Label}
            </p>
            <p className="text-sm sm:text-headline-sm text-slate-900 font-bold mt-0.5">
              {item.metric2Value}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
