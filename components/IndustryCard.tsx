import React from "react";
import Image from "next/image";
import { IndustryItem } from "@/lib/constants";

interface IndustryCardProps {
  industry: IndustryItem;
}

export default function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[3/4] shadow-md hover:shadow-2xl transition-all duration-300 active:scale-[0.98]">
      <Image
        src={industry.imageUrl}
        alt={industry.imageAlt}
        fill
        quality={90}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between text-white">
        <span className="self-start px-3 py-1 rounded-full bg-white/20 backdrop-blur-md font-label-eyebrow text-[11px] uppercase tracking-wider text-white border border-white/20 font-medium">
          {industry.category}
        </span>
        <div>
          <p className={`text-xs sm:text-label-md ${industry.statColor} font-bold mb-1 tracking-wide`}>
            {industry.statBadge}
          </p>
          <h3 className="text-lg sm:text-headline-md font-bold leading-snug text-white">
            {industry.title}
          </h3>
          <p className="text-xs sm:text-[13px] text-slate-200 mt-2 opacity-95 line-clamp-2 leading-relaxed">
            {industry.description}
          </p>
        </div>
      </div>
    </div>
  );
}
