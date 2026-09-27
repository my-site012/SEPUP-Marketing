"use client";

import React, { useState, useEffect } from "react";
import {
  SERVICE_CHECKBOX_OPTIONS,
  INDUSTRY_DROPDOWN_OPTIONS,
} from "@/lib/servicesData";

interface ContactFormProps {
  defaultService?: string;
  formTitle?: string;
  formSubtitle?: string;
}

export default function ContactForm({
  defaultService,
  formTitle = "Request Strategy Evaluation",
  formSubtitle = "Receive a comprehensive organic and technical growth blueprint with zero commitments.",
}: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "Real Estate",
    url: "",
    message: "",
  });

  useEffect(() => {
    if (defaultService) {
      // Find matching checkbox option if possible
      const match = SERVICE_CHECKBOX_OPTIONS.find((s) =>
        s.toLowerCase().includes(defaultService.toLowerCase()) ||
        defaultService.toLowerCase().includes(s.toLowerCase())
      );
      if (match) {
        setSelectedServices([match]);
      } else {
        setSelectedServices([defaultService]);
      }
    } else {
      setSelectedServices(["Search Engine Optimization (SEO)"]);
    }
  }, [defaultService]);

  const handleCheckboxToggle = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServices.length === 0) {
      alert("Please select at least one service you are interested in.");
      return;
    }
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      industry: "Real Estate",
      url: "",
      message: "",
    });
  };

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-surface-container-lowest border border-[#f87b7b]/20 shadow-xl">
      <div className="mb-6">
        <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">
          {formTitle}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">
          {formSubtitle}
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit} id="growth-inquiry-form">
        {/* Name and Email */}
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

        {/* Phone and Company */}
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
              placeholder="+1 416-873-5556"
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

        {/* Industry and Website URL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5"
              htmlFor="lead-industry"
            >
              Industry / Sector *
            </label>
            <select
              id="lead-industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 text-on-surface font-body-md text-body-md focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#f87b7b] focus:border-[#f87b7b] shadow-sm transition-all"
            >
              {INDUSTRY_DROPDOWN_OPTIONS.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5"
              htmlFor="lead-url"
            >
              Current Website / Social URL
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

        {/* Multi-Select Services Checkboxes (Matching Image 1) */}
        <div>
          <label className="block font-label-md text-label-md text-on-surface font-semibold mb-2">
            Which service(s) are you interested in? *
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            {SERVICE_CHECKBOX_OPTIONS.map((serviceName) => {
              const isChecked = selectedServices.includes(serviceName);
              return (
                <label
                  key={serviceName}
                  className={`flex items-center gap-3 p-2.5 rounded-xl cursor-pointer transition-colors ${
                    isChecked
                      ? "bg-[#ffe4e6] text-[#e11d48] font-semibold"
                      : "hover:bg-white text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleCheckboxToggle(serviceName)}
                    className="w-4 h-4 rounded text-[#e11d48] border-slate-300 focus:ring-[#f87b7b] cursor-pointer"
                  />
                  <span className="font-body-sm text-[13px] leading-tight">
                    {serviceName}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Message */}
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
            placeholder="Tell us about your target pipeline, budget range, and timeline..."
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
