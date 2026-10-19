import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SERVICES_DATA } from "@/lib/servicesData";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute: "Digital Marketing Services in Mississauga & GTA | Step Up Marketing",
  },
  description:
    "Explore our 11 core marketing capabilities: Branding, Websites, Google Business, Social Media, Content, Photo & Video Shoots, Google Ads, Meta Ads, Email, and Strategy.",
  alternates: {
    canonical: "https://www.stepupmarketing.ca/services",
  },
};

export default function ServicesIndexPage() {
  // Deduplicate to show the 11 primary services (excluding legacy URL aliases)
  const uniqueServices = SERVICES_DATA.filter(
    (s, idx, arr) => arr.findIndex((item) => item.shortTitle === s.shortTitle) === idx
  );

  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface">
        {/* HERO BANNER */}
        <section className="relative w-full py-16 lg:py-24 bg-[#090d1a] border-b border-white/10 overflow-hidden text-white">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=80"
              alt="Step Up Marketing Services Suite"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-30 brightness-90 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d1a] via-[#090d1a]/80 to-[#090d1a]/90" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.2),transparent_60%)]" />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-margin-mobile lg:px-margin text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f87b7b]/20 text-[#fca5a5] font-label-eyebrow text-[11px] uppercase tracking-wider border border-[#f87b7b]/30 mb-4 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#f87b7b] animate-pulse" />
              11 Integrated Marketing Capabilities
            </span>
            <h1 className="font-headline-xl text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mt-2 max-w-3xl mx-auto">
              Everything Your Business Needs To Grow Online.
            </h1>
            <p className="font-body-lead text-base sm:text-lg text-slate-200 max-w-2xl mx-auto mt-4">
              At Step Up Marketing, we offer end-to-end digital marketing services for small and medium-sized businesses in Mississauga and the GTA. Available individually or combined into a customized marketing plan.
            </p>
          </div>
        </section>

        {/* 11-SERVICES GRID */}
        <section className="w-full py-20 bg-surface">
          <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {uniqueServices.map((service) => (
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
                          {service.startingPrice}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h2 className="font-headline-md text-xl font-bold text-on-surface mb-2">
                        {service.shortTitle}
                      </h2>
                      <p className="font-body-sm text-on-surface-variant line-clamp-3 leading-relaxed mb-4 text-xs sm:text-sm">
                        {service.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {service.highlights.slice(0, 3).map((h) => (
                          <li
                            key={h.title}
                            className="flex items-center gap-2 text-xs font-medium text-slate-700"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>{h.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">
                      Process &amp; Scope
                    </span>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:translate-x-1 transition-transform"
                    >
                      <span>Explore Service</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Consultation Strip */}
            <div className="mt-16 p-8 rounded-3xl bg-[#fff5f5] border border-[#f87b7b]/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="space-y-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-900">
                  Your Extended Marketing Team in Mississauga &amp; GTA
                </h3>
                <p className="text-sm text-slate-600">
                  Every service is guided by a dedicated marketing strategist who coordinates execution end-to-end.
                </p>
              </div>
              <Link
                href="/#contact"
                className="px-8 py-3.5 rounded-full bg-slate-900 text-white font-bold text-sm shadow-md hover:bg-slate-800 transition-colors shrink-0"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
