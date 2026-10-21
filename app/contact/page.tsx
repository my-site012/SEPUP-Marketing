import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { BRAND, SERVICE_AREAS } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Step Up Marketing - Mississauga & GTA Marketing Agency",
  description:
    "Get in touch with Step Up Marketing in Mississauga, ON. Book a free 30-minute discovery call or call +1 (416) 873-5556 for honest digital marketing advice.",
  keywords: [
    "Contact Step Up Marketing",
    "Digital Marketing Agency Mississauga Contact",
    "Toronto Marketing Consultant Phone",
    "Book Marketing Consultation Canada",
    "Mississauga SEO Agency Address",
  ],
  alternates: {
    canonical: "https://www.stepupmarketing.ca/contact",
  },
  openGraph: {
    title: "Contact Us | Step Up Marketing - Book a Free Strategy Call",
    description:
      "Ready to step up your marketing? Call +1 (416) 873-5556 or send an inquiry to our Mississauga, Ontario team.",
    url: "https://www.stepupmarketing.ca/contact",
    siteName: BRAND.name,
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Step Up Marketing",
    url: "https://www.stepupmarketing.ca/contact",
    description:
      "Contact information and inquiry form for Step Up Marketing in Mississauga, Ontario.",
    mainEntity: {
      "@type": "ProfessionalService",
      name: BRAND.name,
      telephone: BRAND.phoneTel,
      email: BRAND.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "3504 Hurontario Street #3008",
        addressLocality: "Mississauga",
        addressRegion: "Ontario",
        postalCode: "L5B 0B9",
        addressCountry: "CA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "43.5890",
        longitude: "-79.6441",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      sameAs: [
        BRAND.socialLinks.instagram,
        BRAND.socialLinks.facebook,
        BRAND.socialLinks.linkedin,
        BRAND.socialLinks.googleBusiness,
        BRAND.socialLinks.founderLinkedin,
      ],
    },
  };

  const contactFaqs = [
    {
      q: "How quickly will you get back to my inquiry?",
      a: "We respond to all phone calls, WhatsApp messages, and website inquiries within 24 business hours. If you reach out during business hours (9:00 AM – 6:00 PM EST), we typically respond within a couple of hours.",
    },
    {
      q: "Can we meet in-person in Mississauga or the GTA?",
      a: "Yes, absolutely! We are based at 3504 Hurontario Street in Mississauga. We regularly meet business owners in-person across Mississauga, Brampton, Oakville, Toronto, and the surrounding GTA, or we can connect over Google Meet / Zoom.",
    },
    {
      q: "Do you lock clients into long-term contracts?",
      a: "No. We believe in earning your business every single month through clear communication, transparency, and tangible results. We offer flexible project-based scopes as well as month-to-month retainers without predatory lock-ins.",
    },
    {
      q: "How do you decide which marketing service my business actually needs?",
      a: "We start by analyzing your current customers, profit margins, sales cycle, and existing digital assets during a 30-minute discovery call. We recommend only the channels that offer the highest return on investment for your current growth stage.",
    },
    {
      q: "Do you work with businesses outside of Ontario?",
      a: "Yes. While our physical hub is in Mississauga, Ontario, we support growing small and medium-sized businesses across British Columbia, Alberta, and all Canadian provinces through seamless remote collaboration.",
    },
  ];

  return (
    <>
      <Header />
      <main className="w-full pt-20 pb-20 md:pb-0 bg-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


      {/* Hero Section */}
      <section className="relative w-full pt-12 pb-14 lg:pt-16 lg:pb-20 overflow-hidden bg-gradient-to-b from-[#fff5f5] via-surface to-surface">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#f87b7b]/20 via-[#4ecdc4]/10 to-transparent blur-3xl pointer-events-none -z-10 rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-low border border-[#f87b7b]/20 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f87b7b] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f43f5e]"></span>
              </span>
              <span className="font-label-eyebrow text-label-eyebrow tracking-widest text-[#e11d48] uppercase font-bold text-xs">
                Get In Touch • Canadian Boutique Agency
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight leading-[1.18]">
              Let’s Discuss How To{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f87b7b] via-[#fb7185] to-[#f43f5e]">
                Grow Your Business
              </span>
              .
            </h1>

            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Have a question, need honest marketing advice, or ready to scale? We'd love to hear from you. Reach out through any of our channels or submit the consultation form below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid: Channels & Form */}
      <section className="w-full pb-16 lg:pb-24 bg-surface" id="contact-form">
        <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Direct Contact Info & Guarantees */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Channels Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-6">
                <div>
                  <span className="text-xs font-bold text-[#e11d48] uppercase tracking-wider">
                    Direct Communication
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    Reach Out Directly
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Connect with an experienced strategist. No automated phone trees or offshore call centers.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Phone Call */}
                  <a
                    href={`tel:${BRAND.phoneTel}`}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-[#fff5f5] border border-[#f87b7b]/20 hover:border-[#f87b7b]/50 hover:bg-[#ffe4e6]/50 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#f87b7b] to-[#f43f5e] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[20px]">call</span>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-semibold block">Phone (Call or Text)</span>
                      <span className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors">
                        {BRAND.phoneDisplay}
                      </span>
                      <span className="text-[11px] text-[#e11d48] font-medium block mt-0.5">
                        Mon–Sat • 9:00 AM – 6:00 PM EST
                      </span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={BRAND.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-2xl bg-[#f0fdf4] border border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#25d366] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[20px]">chat</span>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-semibold block">WhatsApp Business</span>
                      <span className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        Chat on WhatsApp
                      </span>
                      <span className="text-[11px] text-emerald-700 font-medium block mt-0.5">
                        Instant message our team
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#f87b7b]/40 hover:bg-white transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[20px]">mail</span>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-semibold block">Email Address</span>
                      <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-primary transition-colors break-all">
                        {BRAND.email}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium block mt-0.5">
                        We reply within 24 business hours
                      </span>
                    </div>
                  </a>

                  {/* Office Address */}
                  <a
                    href={BRAND.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-2xl bg-[#f0fdfa] border border-[#4ecdc4]/30 hover:border-[#4ecdc4]/60 hover:bg-teal-50/50 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#0d9488] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[20px]">location_on</span>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-semibold block">Headquarters / Office</span>
                      <span className="text-sm font-bold text-slate-900 group-hover:text-[#0d9488] transition-colors block">
                        {BRAND.address}
                      </span>
                      <span className="text-[11px] text-[#0d9488] font-bold mt-1 inline-flex items-center gap-1">
                        <span>Open in Google Maps</span>
                        <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                      </span>
                    </div>
                  </a>
                </div>

                {/* Social Profiles */}
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-3">
                    Connect With Us Online:
                  </span>
                  <div className="flex items-center gap-2.5">
                    <a
                      href={BRAND.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#e1306c] hover:text-white flex items-center justify-center text-slate-700 transition-colors shadow-2xs"
                      aria-label="Instagram"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>

                    <a
                      href={BRAND.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#1877f2] hover:text-white flex items-center justify-center text-slate-700 transition-colors shadow-2xs"
                      aria-label="Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>

                    <a
                      href={BRAND.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#0077b5] hover:text-white flex items-center justify-center text-slate-700 transition-colors shadow-2xs"
                      aria-label="Company LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66c0-.92-.74-1.66-1.66-1.66Z" />
                      </svg>
                    </a>

                    <a
                      href={BRAND.socialLinks.founderLinkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#0077b5] hover:text-white flex items-center justify-center text-slate-700 transition-colors shadow-2xs"
                      aria-label="Garvita Uppal LinkedIn"
                    >
                      <span className="material-symbols-outlined text-[18px]">person</span>
                    </a>

                    <a
                      href={BRAND.socialLinks.googleBusiness}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#4285f4] hover:text-white flex items-center justify-center text-slate-700 transition-colors shadow-2xs"
                      aria-label="Google Business Profile"
                    >
                      <span className="material-symbols-outlined text-[18px]">storefront</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* What Happens Next? Timeline */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4">
                <span className="text-xs font-bold text-[#e11d48] uppercase tracking-wider block">
                  Transparent Process
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  What Happens When You Submit?
                </h3>
                
                <ol className="space-y-4 pt-1">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#f87b7b] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Discovery Review (24h)</p>
                      <p className="text-xs text-slate-600">
                        Our principal consultant reviews your website, Google ranking, and market category.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#4ecdc4] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-900">30-Min Strategy Call</p>
                      <p className="text-xs text-slate-600">
                        A candid discussion regarding your actual goals, bottlenecks, and quick growth wins.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#fb923c] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Tailored Action Plan</p>
                      <p className="text-xs text-slate-600">
                        Clear deliverables, transparent pricing, and zero high-pressure sales pitches.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

            </div>

            {/* Right Column: Contact & Booking Form */}
            <div className="lg:col-span-7">
              <ContactForm
                formTitle="Book Your Free Discovery Call"
                formSubtitle="Tell us about your business goals. We'll review your digital footprint and propose actionable recommendations."
              />
            </div>

          </div>
        </div>
      </section>

      {/* Service Coverage Areas */}
      <section className="w-full py-16 bg-[#fff5f5]/70 border-t border-[#f87b7b]/15" id="service-areas">
        <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e11d48]">
              Geographic Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Where We Support Growing Businesses
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Combining hands-on local availability in Ontario with seamless remote strategy across Canada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {SERVICE_AREAS.map((area, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="material-symbols-outlined text-[#e11d48] text-[22px]">
                    {idx === 0 ? "near_me" : "public"}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    {area.region}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {area.cities.map((city, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/60"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="w-full py-16 lg:py-20 bg-white border-t border-slate-100" id="faqs">
        <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e11d48]">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Common Questions Before Reaching Out
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Honest answers about our consultations, meetings, and business model.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {contactFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="group p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 [&_summary::-webkit-details-marker]:hidden transition-all duration-200 hover:bg-white hover:border-[#f87b7b]/30 shadow-2xs open:bg-white open:border-[#f87b7b]/40 open:shadow-sm"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {faq.q}
                  </h3>
                  <span className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 group-open:rotate-180 transition-transform">
                    <span className="material-symbols-outlined text-[16px] text-slate-600">
                      expand_more
                    </span>
                  </span>
                </summary>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);
}
