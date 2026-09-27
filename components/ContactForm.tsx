"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "ai-seo",
    url: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "ai-seo",
      url: "",
      message: "",
    });
  };

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-surface-container-lowest border border-[#f87b7b]/20 shadow-xl">
      <div className="mb-6">
        <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">
          Request Strategy Evaluation
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">
          Receive a comprehensive organic and technical growth blueprint with zero commitments.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit} id="growth-inquiry-form">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5"
              htmlFor="lead-name"
            >
              Full Name *
            </label>
            <input
              id="lead-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#f87b7b] focus:border-[#f87b7b] shadow-sm transition-all"
              placeholder="e.g. Julian Henderson"
              required
              type="text"
            />
          </div>
          <div>
            <label
              className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5"
              htmlFor="lead-email"
            >
              Business Email *
            </label>
            <input
              id="lead-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#f87b7b] focus:border-[#f87b7b] shadow-sm transition-all"
              placeholder="julian@enterprise.com"
              required
              type="email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5"
              htmlFor="lead-phone"
            >
              Phone Number *
            </label>
            <input
              id="lead-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#f87b7b] focus:border-[#f87b7b] shadow-sm transition-all"
              placeholder="+1 (555) 019-2834"
              required
              type="tel"
            />
          </div>
          <div>
            <label
              className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5"
              htmlFor="lead-company"
            >
              Company / Brand Name *
            </label>
            <input
              id="lead-company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#f87b7b] focus:border-[#f87b7b] shadow-sm transition-all"
              placeholder="Vanguard Holdings Ltd."
              required
              type="text"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5"
              htmlFor="lead-service"
            >
              Primary Capability Needed *
            </label>
            <select
              id="lead-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 text-on-surface font-body-md text-body-md focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#f87b7b] focus:border-[#f87b7b] shadow-sm transition-all"
            >
              <option value="ai-seo">AI SEO &amp; Generative Engine Optimization (GEO)</option>
              <option value="web-dev">High-Performance Web Development</option>
              <option value="search-ads">Google Ads &amp; Performance PPC</option>
              <option value="ai-automation">AI Business Workflows &amp; CRM Routing</option>
              <option value="ecommerce">Headless E-Commerce Architecture</option>
              <option value="full-growth">Comprehensive Full-Suite Growth Partnership</option>
            </select>
          </div>
          <div>
            <label
              className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5"
              htmlFor="lead-url"
            >
              Current Website / App URL
            </label>
            <input
              id="lead-url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#f87b7b] focus:border-[#f87b7b] shadow-sm transition-all"
              placeholder="https://example.com"
              type="url"
            />
          </div>
        </div>

        <div>
          <label
            className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5"
            htmlFor="lead-message"
          >
            Growth Goals &amp; Current Bottlenecks
          </label>
          <textarea
            id="lead-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#f87b7b] focus:border-[#f87b7b] shadow-sm transition-all"
            placeholder="Tell us about your pipeline targets, timeline, and current acquisition challenges..."
            rows={3}
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          <button
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#f87b7b] via-[#fb7185] to-[#f43f5e] hover:opacity-95 text-on-primary font-label-lg text-label-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer font-bold"
            type="submit"
          >
            <span>Send Strategy Request</span>
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              send
            </span>
          </button>
          <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-[12px]">
            <span className="material-symbols-outlined text-[16px] text-[#e11d48]" aria-hidden="true">
              lock
            </span>
            <span>Mutual NDA executed automatically</span>
          </div>
        </div>

        {/* Form Confirmation Feedback */}
        {isSubmitted && (
          <div
            className="p-4 rounded-xl bg-[#ffe4e6] border border-[#f87b7b]/30 text-[#e11d48] font-label-md text-label-md flex items-center gap-3 animate-in fade-in duration-200"
            role="status"
            aria-live="polite"
          >
            <span className="material-symbols-outlined text-[#e11d48] text-[22px]" aria-hidden="true">
              check_circle
            </span>
            <span>
              Thank you! Your growth blueprint request has been received. A Step Up Marketing director will contact you within 4 hours.
            </span>
          </div>
        )}
      </form>
    </div>
  );
}
