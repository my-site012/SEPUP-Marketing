import React from "react";
import { BRAND, GLOBAL_HUBS } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <section className="w-full py-space-2xl bg-[#fff5f5]" id="contact">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          {/* Left Column: Contact Information & Global Hubs */}
          <div className="lg:col-span-5 flex flex-col gap-space-sm">
            <div>
              <span className="font-label-eyebrow text-label-eyebrow text-[#e11d48] uppercase tracking-widest font-bold">
                Initiate Engagement
              </span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight mt-1">
                Let&apos;s Talk About Your Growth.
              </h2>
              <p className="font-body-lead text-body-lead text-on-surface-variant mt-2">
                Share your objectives. We will prepare an executive summary of growth opportunities prior to our initial conversation.
              </p>
            </div>

            {/* Direct Contacts */}
            <div className="flex flex-col gap-3.5 pt-2">
              {/* Phone Line */}
              <a
                className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-lowest border border-[#f87b7b]/15 shadow-sm hover:shadow-md transition-all group"
                href={`tel:${BRAND.phoneTel}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#ffe4e6] text-[#e11d48] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                    call
                  </span>
                </div>
                <div>
                  <p className="font-label-eyebrow text-[11px] text-on-surface-variant uppercase font-semibold">
                    Direct Phone Line
                  </p>
                  <p className="font-headline-sm text-[16px] text-on-surface font-semibold group-hover:text-[#e11d48] transition-colors">
                    {BRAND.phoneDisplay}
                  </p>
                </div>
              </a>

              {/* WhatsApp Direct Line */}
              <a
                className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-lowest border border-[#25D366]/30 shadow-sm hover:shadow-md transition-all group"
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#dcfce7] text-[#16a34a] flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-5 h-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </div>
                <div>
                  <p className="font-label-eyebrow text-[11px] text-on-surface-variant uppercase font-semibold">
                    WhatsApp Chat Support
                  </p>
                  <p className="font-headline-sm text-[16px] text-on-surface font-semibold group-hover:text-[#16a34a] transition-colors">
                    {BRAND.phoneDisplay} (Instant Reply)
                  </p>
                </div>
              </a>

              {/* Email Line */}
              <a
                className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-lowest border border-[#4ecdc4]/20 shadow-sm hover:shadow-md transition-all group"
                href={`mailto:${BRAND.email}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#ccfbf1] text-[#0d9488] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                    mail
                  </span>
                </div>
                <div>
                  <p className="font-label-eyebrow text-[11px] text-on-surface-variant uppercase font-semibold">
                    Advisory Inquiries
                  </p>
                  <p className="font-headline-sm text-[16px] text-on-surface font-semibold group-hover:text-[#0d9488] transition-colors">
                    {BRAND.email}
                  </p>
                </div>
              </a>

              {/* Physical Office Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface-container-lowest border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-on-surface flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[22px] text-primary" aria-hidden="true">
                    apartment
                  </span>
                </div>
                <div>
                  <p className="font-label-eyebrow text-[11px] text-on-surface-variant uppercase font-semibold">
                    Headquarters Address
                  </p>
                  <p className="font-body-md text-[14px] text-on-surface font-medium leading-relaxed">
                    {BRAND.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Global Hubs Summary */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-[#f87b7b]/15 shadow-sm">
              <h3 className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider mb-3">
                Global Operations
              </h3>
              <div className="grid grid-cols-2 gap-3 text-on-surface-variant font-body-sm text-[13px]">
                {GLOBAL_HUBS.map((hub) => (
                  <div key={hub.region}>
                    <p className="font-bold text-on-surface">{hub.region}</p>
                    {hub.locations.map((loc) => (
                      <p key={loc}>{loc}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Badges */}
            <div className="flex items-center gap-3 pt-2 flex-wrap">
              <span className="px-3 py-1.5 rounded-full bg-white border border-[#f87b7b]/20 text-on-surface font-label-md text-[12px] font-medium flex items-center gap-1.5 shadow-sm">
                <span className="material-symbols-outlined text-[16px] text-[#e11d48]" aria-hidden="true">
                  verified_user
                </span>
                <span>ISO 27001 Certified</span>
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-[#4ecdc4]/30 text-on-surface font-label-md text-[12px] font-medium flex items-center gap-1.5 shadow-sm">
                <span className="material-symbols-outlined text-[16px] text-[#0d9488]" aria-hidden="true">
                  verified
                </span>
                <span>Google Premier Partner</span>
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-[#fb923c]/30 text-on-surface font-label-md text-[12px] font-medium shadow-sm">
                Meta Certified
              </span>
            </div>
          </div>

          {/* Right Column: Lead Consultation Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
