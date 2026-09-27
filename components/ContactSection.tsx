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
            <div className="flex flex-col gap-4 pt-2">
              <a
                className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-lowest border border-[#f87b7b]/15 shadow-sm hover:shadow-md transition-shadow group"
                href={`tel:${BRAND.phoneTel}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#ffe4e6] text-[#e11d48] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                    call
                  </span>
                </div>
                <div>
                  <p className="font-label-eyebrow text-[11px] text-on-surface-variant uppercase">
                    Global Strategy Line
                  </p>
                  <p className="font-headline-sm text-[16px] text-on-surface font-semibold group-hover:text-[#e11d48] transition-colors">
                    {BRAND.phoneDisplay} / {BRAND.altPhone}
                  </p>
                </div>
              </a>

              <a
                className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-lowest border border-[#4ecdc4]/20 shadow-sm hover:shadow-md transition-shadow group"
                href={`mailto:${BRAND.email}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#ccfbf1] text-[#0d9488] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                    mail
                  </span>
                </div>
                <div>
                  <p className="font-label-eyebrow text-[11px] text-on-surface-variant uppercase">
                    Advisory Inquiries
                  </p>
                  <p className="font-headline-sm text-[16px] text-on-surface font-semibold group-hover:text-[#0d9488] transition-colors">
                    {BRAND.email}
                  </p>
                </div>
              </a>
            </div>

            {/* Global Hubs Summary */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-[#f87b7b]/15 shadow-sm">
              <h3 className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider mb-3">
                Our Innovation Centers
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

            {/* Certifications & Verification Badges */}
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

          {/* Right Column: Interactive Lead Consultation Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
