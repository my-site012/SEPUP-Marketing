import React from "react";
import Link from "next/link";
import { ServiceItem } from "@/lib/constants";
import ServiceIcon from "@/components/ServiceIcon";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div
      className={`p-6 sm:p-7 rounded-3xl bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-8px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 flex flex-col justify-between group border border-slate-200/80 ${service.hoverBorder}`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between mb-5">
          <ServiceIcon id={service.id} />
          <span
            className={`px-3 py-1 rounded-full ${service.badgeBg} ${service.badgeColor} font-semibold text-[11px] uppercase tracking-wider border border-current/15 shadow-2xs`}
          >
            {service.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-headline-md text-lg sm:text-[19px] text-slate-900 font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Footer Info & CTA */}
      <div className="pt-5 mt-5 border-t border-slate-100 flex flex-col gap-2">
        <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
          <span>Investment:</span>
          <span className="font-bold text-slate-800">{service.pricingNote}</span>
        </div>

        <Link
          href={`/services/${service.id}`}
          className="inline-flex items-center justify-between w-full text-xs font-bold text-[#e11d48] group-hover:underline pt-1"
        >
          <span>Explore Details &amp; Process</span>
          <span className="material-symbols-outlined text-[17px] group-hover:translate-x-1.5 transition-transform" aria-hidden="true">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
}
