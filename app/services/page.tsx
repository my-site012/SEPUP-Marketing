import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SERVICES_DATA } from "@/lib/servicesData";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Growth Services | Step Up Marketing Mississauga & Toronto",
  description:
    "Explore our complete suite of enterprise digital growth services: SEO, Next.js Web Development, Google Ads, Social Media, Branding, and Email Automation.",
  alternates: {
    canonical: "https://stepupmarketing.com/services",
  },
};

export default function ServicesIndexPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface">
        {/* HERO BANNER */}
        <section className="relative w-full py-16 lg:py-24 bg-[#fff5f5] border-b border-[#f87b7b]/15 overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin text-center">
            <span className="font-label-eyebrow text-label-eyebrow text-[#e11d48] uppercase tracking-widest font-bold">
              Integrated Capabilities
            </span>
            <h1 className="font-headline-xl text-3xl sm:text-5xl lg:text-6xl font-extrabold text-on-surface tracking-tight mt-2 max-w-3xl mx-auto">
              Specialized Services Built To Outperform.
            </h1>
            <p className="font-body-lead text-lg sm:text-xl text-on-surface-variant max-w-2xl mx-auto mt-4">
              We reject fragmented agency models. Explore our specialized growth practices calibrated to scale enterprise pipelines.
            </p>
          </div>
        </section>

        {/* 9-SERVICES GRID */}
        <section className="w-full py-20 bg-surface">
          <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES_DATA.map((service) => (
                <div
                  key={service.slug}
                  className="rounded-3xl bg-surface-container-lowest border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Service Card Image Banner */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                      <Image
                        src={service.heroImage}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#e11d48] font-label-eyebrow text-[10px] uppercase font-bold shadow-sm">
                          {service.badge}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                        <span className="font-label-md text-[12px] font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-[#fbbf24] material-symbols-filled">
                            star
                          </span>
                          <span>{service.rating}</span>
                        </span>
                        <span className="font-label-md text-[12px] text-slate-200">
                          {service.timeline}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h2 className="font-headline-md text-xl font-bold text-on-surface mb-2">
                        {service.shortTitle}
                      </h2>
                      <p className="font-body-sm text-on-surface-variant line-clamp-3 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-[12px] font-medium text-on-surface-variant">
                        <span>Starting Price</span>
                        <span className="font-bold text-[#e11d48]">{service.startingPrice}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href={`/services/${service.slug}`}
                      className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#fff1f2] hover:bg-[#ffe4e6] text-[#e11d48] font-label-md text-label-md font-bold transition-colors"
                    >
                      <span>View Full Service Details</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM HELP STRIP */}
        <section className="w-full py-16 bg-[#fff5f5] border-t border-[#f87b7b]/15">
          <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin text-center">
            <h2 className="font-headline-md text-2xl sm:text-3xl font-bold text-on-surface">
              Need a Customized Cross-Channel Package?
            </h2>
            <p className="font-body-lead text-on-surface-variant max-w-xl mx-auto mt-2">
              Speak directly with an enterprise growth advisor in Mississauga.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
              <a
                href={`tel:${BRAND.phoneTel}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container-lowest text-on-surface font-bold text-sm border border-slate-200 shadow-sm hover:shadow"
              >
                <span className="material-symbols-outlined text-primary text-[18px]">call</span>
                <span>{BRAND.phoneDisplay}</span>
              </a>
              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm shadow-sm hover:shadow"
              >
                <span>WhatsApp Instant Chat</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
