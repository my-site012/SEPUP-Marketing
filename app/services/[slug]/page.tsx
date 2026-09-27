import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { SERVICES_DATA, ServiceDetail } from "@/lib/servicesData";
import { BRAND } from "@/lib/constants";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

function highlightKeywords(text: string, keywords: string[]) {
  if (!text) return null;
  if (!keywords || keywords.length === 0) return text;

  const sortedKeywords = [...keywords]
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);

  const escaped = sortedKeywords
    .map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  const regex = new RegExp(`(${escaped})`, "gi");

  const parts = text.split(regex);
  return parts.map((part, index) => {
    const isKeyword = sortedKeywords.some(
      (kw) => kw.toLowerCase() === part.toLowerCase()
    );
    if (isKeyword) {
      return (
        <strong key={index} className="font-bold text-white">
          {part}
        </strong>
      );
    }
    return part;
  });
}

function highlightKeywordsDark(text: string, keywords: string[]) {
  if (!text) return null;
  if (!keywords || keywords.length === 0) return text;

  const sortedKeywords = [...keywords]
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);

  const escaped = sortedKeywords
    .map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  const regex = new RegExp(`(${escaped})`, "gi");

  const parts = text.split(regex);
  return parts.map((part, index) => {
    const isKeyword = sortedKeywords.some(
      (kw) => kw.toLowerCase() === part.toLowerCase()
    );
    if (isKeyword) {
      return (
        <strong key={index} className="font-bold text-on-surface">
          {part}
        </strong>
      );
    }
    return part;
  });
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);
  if (!service) return {};

  const canonicalUrl = `https://www.stepupmarketing.ca/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.heroImage],
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Schema.org structured data for this Service & FAQPage
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        serviceType: service.shortTitle,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: BRAND.name,
          url: "https://www.stepupmarketing.ca",
          telephone: BRAND.phoneTel,
          address: {
            "@type": "PostalAddress",
            streetAddress: "3504 Hurontario St #3008",
            addressLocality: "Mississauga",
            addressRegion: "ON",
            postalCode: "L5B 0B9",
            addressCountry: "CA",
          },
        },
        areaServed: [
          { "@type": "Country", name: "Canada" },
          { "@type": "Country", name: "United States" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />

      <main className="w-full pt-20 bg-surface">
        {/* HERO SECTION (Styled after Reference Image 4) */}
        <section className="relative w-full min-h-[640px] lg:min-h-[700px] flex items-center justify-center overflow-hidden bg-[#090d1a]">
          {/* Background Photography with Subtle Gradient (Clearly Visible Image) */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-right lg:object-center opacity-40 brightness-95 contrast-110"
            />
            {/* Soft gradient from left to right so text is readable, but image is vibrant & clearly visible */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#090d1a] via-[#090d1a]/80 to-[#090d1a]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d1a] via-transparent to-[#090d1a]/60" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(244,63,94,0.15),transparent_60%)]" />
          </div>

          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-14 lg:py-20 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Copy, Keywords, Badges & Actions */}
              <div className="lg:col-span-7 flex flex-col items-start">
                {/* Top Breadcrumb & Badge Row */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-label-eyebrow text-[11px] uppercase tracking-wider border border-white/15 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[14px]">arrow_back</span>
                    <span>All Services</span>
                  </Link>
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f87b7b]/20 text-[#fca5a5] font-label-eyebrow text-[11px] uppercase tracking-wider border border-[#f87b7b]/30">
                    <span className="w-2 h-2 rounded-full bg-[#f87b7b] animate-pulse" />
                    <span>{service.badge}</span>
                  </div>
                </div>

                {/* Main Headline */}
                <h1 className="font-headline-xl text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] max-w-2xl mb-5">
                  {service.title}
                </h1>

                {/* Hero Description with Primary Target Keyword (Bolded naturally, no stuffing) */}
                <p className="font-body-lead text-lg sm:text-xl text-slate-100 max-w-2xl leading-relaxed mb-8 font-normal">
                  {highlightKeywords(service.description, service.keywords)}
                </p>

                {/* Quick Meta Stats Badges */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 mb-8">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/20 text-white font-label-md text-[13px] font-semibold shadow-md">
                    <span className="text-[#fbbf24] material-symbols-outlined text-[18px] material-symbols-filled">
                      star
                    </span>
                    <span>{service.rating} Client Score</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/20 text-white font-label-md text-[13px] font-semibold shadow-md">
                    <span className="text-[#4ecdc4] material-symbols-outlined text-[18px]">
                      sell
                    </span>
                    <span>{service.startingPrice}</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/20 text-white font-label-md text-[13px] font-semibold shadow-md">
                    <span className="text-[#fb923c] material-symbols-outlined text-[18px]">
                      schedule
                    </span>
                    <span>{service.timeline}</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/20 text-white font-label-md text-[13px] font-semibold shadow-md">
                    <span className="text-[#4ecdc4] material-symbols-outlined text-[18px]">
                      verified
                    </span>
                    <span>{service.sla}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <a
                    href="#service-inquiry"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#f87b7b] via-[#fb7185] to-[#f43f5e] hover:opacity-95 text-on-primary font-label-lg text-label-lg shadow-lg hover:shadow-xl transition-all duration-200 font-bold"
                  >
                    <span>Request Custom Proposal</span>
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </a>

                  <a
                    href={BRAND.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-label-lg text-label-lg shadow-md hover:shadow-lg transition-all font-bold"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Dedicated Visual Showcase Card (Large High-Res Image) */}
              <div className="lg:col-span-5 w-full mt-4 lg:mt-0">
                <div className="relative group">
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border-2 border-white/25 shadow-2xl shadow-rose-950/60 bg-slate-900">
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 550px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Info Pill on Card */}
                    <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-white/20 flex items-center justify-between text-white shadow-lg">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse" />
                        <span className="font-label-md text-xs font-bold uppercase tracking-wider">{service.shortTitle}</span>
                      </div>
                      <span className="text-xs font-bold text-[#fbbf24] flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px] material-symbols-filled">star</span>
                        {service.rating}
                      </span>
                    </div>
                  </div>

                  {/* Ambient Glow */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#f87b7b]/30 to-[#4ecdc4]/20 rounded-3xl blur-2xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>

            {/* In-Page Quick Navigation Tabs */}
            <div className="flex flex-wrap items-center gap-2 pt-6 mt-6 border-t border-white/15">
              <span className="font-label-md text-[12px] uppercase tracking-wider text-slate-400 mr-2">
                Quick Jump:
              </span>
              <a
                href="#overview"
                className="px-4 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-label-md text-[13px] font-medium transition-colors"
              >
                Overview
              </a>
              <a
                href="#benefits"
                className="px-4 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-label-md text-[13px] font-medium transition-colors"
              >
                Benefits
              </a>
              <a
                href="#highlights"
                className="px-4 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-label-md text-[13px] font-medium transition-colors"
              >
                Highlights
              </a>
              <a
                href="#deliverables"
                className="px-4 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-label-md text-[13px] font-medium transition-colors"
              >
                Deliverables
              </a>
              <a
                href="#faqs"
                className="px-4 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-label-md text-[13px] font-medium transition-colors"
              >
                FAQs
              </a>
              <a
                href="#service-inquiry"
                className="px-4 py-1.5 rounded-xl bg-[#f87b7b] hover:bg-[#f43f5e] text-white font-label-md text-[13px] font-medium transition-colors"
              >
                Book Call
              </a>
            </div>
          </div>
        </section>

        {/* SECTION: IN-DEPTH OVERVIEW */}
        <section className="w-full py-16 bg-surface" id="overview">
          <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
            <div className="max-w-4xl mx-auto space-y-6">
              <span className="font-label-eyebrow text-label-eyebrow text-[#e11d48] uppercase tracking-widest font-bold">
                Strategic Foundation
              </span>
              <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-bold tracking-tight">
                How We Deliver Predictable ROI in {service.shortTitle}
              </h2>
              {service.longDescription.map((para, i) => (
                <p key={i} className="font-body-lead text-body-lead text-on-surface-variant leading-relaxed">
                  {highlightKeywordsDark(para, service.keywords)}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: BENEFITS & FEATURES (H2 Keyword-Focused) */}
        <section className="w-full py-16 bg-[#fff5f5] border-t border-[#f87b7b]/15" id="benefits">
          <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
            <div className="max-w-4xl mx-auto">
              <span className="font-label-eyebrow text-label-eyebrow text-[#e11d48] uppercase tracking-widest font-bold">
                Proven Benefits &amp; Features
              </span>
              <h2 className="font-headline-xl text-2xl sm:text-4xl text-on-surface font-extrabold tracking-tight mt-1 mb-6">
                {service.h2Heading}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.bulletPoints && service.bulletPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                    <span className="material-symbols-outlined text-[22px] text-primary shrink-0 mt-0.5" aria-hidden="true">
                      check_circle
                    </span>
                    <p className="font-body-md text-on-surface text-[15px] leading-relaxed">
                      {highlightKeywordsDark(point, service.keywords)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: HIGHLIGHTS & FEATURE ICONS GRID (Styled after Reference Image 5) */}
        <section className="w-full py-16 bg-[#fff5f5] border-y border-[#f87b7b]/15" id="highlights">
          <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-label-eyebrow text-label-eyebrow text-[#e11d48] uppercase tracking-widest font-bold">
                Core Capabilities
              </span>
              <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-bold tracking-tight mt-1">
                Why Partner With Step Up for {service.shortTitle}?
              </h2>
              <p className="font-body-lead text-body-lead text-on-surface-variant mt-2">
                Engineered specifically to solve enterprise bottlenecks and accelerate qualified pipeline.
              </p>
            </div>

            {/* Feature Cards Grid (Inspired by Image 5) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-8 rounded-3xl bg-surface-container-lowest shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#ffe4e6] text-[#e11d48] flex items-center justify-center mb-6 shadow-sm">
                      <span className="material-symbols-outlined text-[28px]" aria-hidden="true">
                        {item.icon}
                      </span>
                    </div>
                    <h3 className="font-headline-md text-xl font-bold text-on-surface mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body-md text-on-surface-variant text-[15px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[#0d9488] font-label-md text-[12px] font-semibold">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    <span>Guaranteed SLA Standard</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: WHAT'S INCLUDED / DELIVERABLES */}
        <section className="w-full py-20 bg-surface" id="deliverables">
          <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="font-label-eyebrow text-label-eyebrow text-[#e11d48] uppercase tracking-widest font-bold">
                Transparent Scope
              </span>
              <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-bold tracking-tight mt-1">
                What&apos;s Included In Every Engagement
              </h2>
              <p className="font-body-lead text-body-lead text-on-surface-variant mt-2">
                No surprises, no generic templates. Every deliverable is clearly scoped, tracked, and signed off.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.deliverables.map((deliv, idx) => (
                <div
                  key={deliv.title}
                  className="p-8 rounded-3xl bg-[#fff5f5] border border-[#f87b7b]/20 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-headline-md text-2xl font-black text-[#fda4af]">
                        0{idx + 1}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white text-on-surface font-label-md text-[11px] font-bold border border-slate-200">
                        Phase {idx + 1}
                      </span>
                    </div>
                    <h3 className="font-headline-md text-xl font-bold text-on-surface mb-6">
                      {deliv.title}
                    </h3>
                    <ul className="space-y-3.5">
                      {deliv.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-[#e11d48] text-[20px] shrink-0 mt-0.5 material-symbols-filled">
                            check_circle
                          </span>
                          <span className="font-body-md text-on-surface text-[14px] leading-snug">
                            {pt}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: FREQUENTLY ASKED QUESTIONS */}
        <section className="w-full py-20 bg-[#fff5f5] border-t border-[#f87b7b]/15" id="faqs">
          <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-label-eyebrow text-label-eyebrow text-[#e11d48] uppercase tracking-widest font-bold">
                Clarity &amp; Questions
              </span>
              <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-bold tracking-tight mt-1">
                Frequently Asked Questions
              </h2>
              <p className="font-body-lead text-body-lead text-on-surface-variant mt-2">
                Everything you need to know about partnering with Step Up Marketing.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {service.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group p-6 rounded-2xl bg-surface-container-lowest border border-slate-200 shadow-sm open:border-[#f87b7b]/40 open:shadow-md transition-all cursor-pointer"
                >
                  <summary className="flex items-center justify-between font-headline-md text-lg font-bold text-on-surface list-none">
                    <span>{faq.question}</span>
                    <span className="material-symbols-outlined text-[24px] text-primary transition-transform duration-200 group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>
                  <p className="font-body-md text-on-surface-variant mt-4 text-[15px] leading-relaxed pt-2 border-t border-slate-100">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: INQUIRY FORM (Dedicated to this service) */}
        <section className="w-full py-20 bg-surface" id="service-inquiry">
          <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div>
                  <span className="font-label-eyebrow text-label-eyebrow text-[#e11d48] uppercase tracking-widest font-bold">
                    Start Your Project
                  </span>
                  <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-bold tracking-tight mt-1">
                    Ready to Scale With {service.shortTitle}?
                  </h2>
                  <p className="font-body-lead text-body-lead text-on-surface-variant mt-2">
                    Fill out the form and a senior marketing director will analyze your current performance and deliver an executive action plan.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#fff5f5] border border-[#f87b7b]/20 space-y-3">
                  <p className="font-label-md text-on-surface font-bold uppercase tracking-wider">
                    Need immediate answers?
                  </p>
                  <a
                    href={`tel:${BRAND.phoneTel}`}
                    className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors font-semibold"
                  >
                    <span className="material-symbols-outlined text-primary text-[20px]">call</span>
                    <span>{BRAND.phoneDisplay}</span>
                  </a>
                  <a
                    href={BRAND.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-on-surface hover:text-[#16a34a] transition-colors font-semibold"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-4 h-4 fill-[#16a34a]"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                    <span>WhatsApp: +1 416-873-5556</span>
                  </a>
                  <p className="text-[13px] text-on-surface-variant">
                    {BRAND.address}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7">
                <ContactForm
                  defaultService={service.shortTitle}
                  formTitle={`Request ${service.shortTitle} Proposal`}
                  formSubtitle="Get customized package pricing, scope details, and SLA guarantees for your business."
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
