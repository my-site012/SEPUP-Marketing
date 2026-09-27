import React from "react";
import Image from "next/image";
import { IndustryItem } from "@/lib/constants";

interface IndustryCardProps {
  industry: IndustryItem;
}

export default function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <div className="group relative rounded-3xl overflow-hidden aspect-[3/4] shadow-md hover:shadow-2xl transition-all duration-300">
      <Image
        src={industry.imageUrl}
        alt={industry.imageAlt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 p-6 flex flex-col justify-between text-on-primary">
        <span className="self-start px-3 py-1 rounded-full bg-surface-container-lowest/20 backdrop-blur-md font-label-eyebrow text-[11px] uppercase tracking-wider text-on-primary border border-white/20">
          {industry.category}
        </span>
        <div>
          <p className={`font-label-md text-label-md ${industry.statColor} font-bold mb-1`}>
            {industry.statBadge}
          </p>
          <h3 className="font-headline-md text-headline-md font-bold leading-snug text-white">
            {industry.title}
          </h3>
          <p className="font-body-sm text-[13px] text-surface-container mt-2 opacity-90 line-clamp-2">
            {industry.description}
          </p>
        </div>
      </div>
    </div>
  );
}
