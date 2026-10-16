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
      className={`p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-8px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 flex flex-col justify-between group border border-slate-200/80 ${service.hoverBorder}`}
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <ServiceIcon id={service.id} />
          <span
            className={`px-3 py-1 rounded-full ${service.badgeBg} ${service.badgeColor} font-semibold text-[11px] uppercase tracking-wider border border-current/15 shadow-2xs`}
          >
            {service.badge}
          </span>
        </div>
        <h3 className="font-headline-md text-lg sm:text-headline-md text-slate-900 font-bold mb-2 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-sm sm:text-body-md text-slate-600 leading-relaxed">
          {service.description}
        </p>
      </div>

      <div className="pt-6 mt-6 flex items-center justify-between text-[#e11d48] font-label-lg text-label-lg border-t border-slate-100">
        <Link href={`/services/${service.id}`} className="inline-flex items-center justify-between w-full font-bold group-hover:underline">
          <span>Explore Service</span>
          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1.5 transition-transform" aria-hidden="true">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
}
