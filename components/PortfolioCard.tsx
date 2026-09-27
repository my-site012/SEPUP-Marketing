import React from "react";
import Image from "next/image";
import { PortfolioItem } from "@/lib/constants";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <div className="p-8 rounded-3xl bg-[#fff5f5] border border-[#f87b7b]/15 shadow-sm flex flex-col gap-6 group hover:shadow-xl transition-all duration-300">
      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
        <Image
          src={item.imageUrl}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 650px"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <span className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md font-label-md text-label-md font-semibold text-on-surface shadow-sm">
          {item.category}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          <span className={`font-label-eyebrow text-[11px] ${item.tagColor} uppercase font-bold tracking-wider`}>
            {item.tags}
          </span>
          <span className="text-outline-variant">•</span>
          <span className="font-label-eyebrow text-[11px] text-on-surface-variant uppercase tracking-wider">
            {item.region}
          </span>
        </div>

        <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">
          {item.title}
        </h3>

        <p className="font-body-md text-body-md text-on-surface-variant">
          {item.description}
        </p>

        <div className={`p-4 rounded-xl bg-surface-container-lowest flex items-center justify-between mt-2 shadow-sm border ${item.borderBox}`}>
          <div>
            <p className="font-label-eyebrow text-[10px] text-on-surface-variant uppercase">
              {item.metric1Label}
            </p>
            <p className={`font-headline-sm text-headline-sm ${item.metric1Color} font-bold`}>
              {item.metric1Value}
            </p>
          </div>
          <div className="text-right">
            <p className="font-label-eyebrow text-[10px] text-on-surface-variant uppercase">
              {item.metric2Label}
            </p>
            <p className="font-headline-sm text-headline-sm text-on-surface font-bold">
              {item.metric2Value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
