import React from "react";
import Link from "next/link";
import { ServiceItem } from "@/lib/constants";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div
      className={`p-8 rounded-3xl bg-surface-container-lowest shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group border border-transparent ${service.hoverBorder}`}
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <div
            className={`w-12 h-12 rounded-2xl ${service.iconBg} flex items-center justify-center ${service.iconColor} ${service.hoverGradient} transition-all`}
          >
            <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
              {service.icon}
            </span>
          </div>
          <span
            className={`px-3 py-0.5 rounded-full ${service.badgeBg} ${service.badgeColor} font-label-eyebrow text-[10px] uppercase font-bold`}
          >
            {service.badge}
          </span>
        </div>
        <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-2">
          {service.title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant">
          {service.description}
        </p>
      </div>

      <div className="pt-6 mt-6 flex items-center justify-between text-[#e11d48] font-label-lg text-label-lg">
        <Link href="#contact" className="inline-flex items-center justify-between w-full font-bold group-hover:underline">
          <span>Learn More</span>
          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1.5 transition-transform" aria-hidden="true">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
}
