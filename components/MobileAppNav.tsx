"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BRAND } from "@/lib/constants";

interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "Home", icon: "home", href: "/" },
  { id: "services", label: "Services", icon: "scatter_plot", href: "/services" },
  { id: "about", label: "About", icon: "person", href: "/about" },
  { id: "industries", label: "Sectors", icon: "domain", href: "/#industries" },
  { id: "contact", label: "Contact", icon: "chat_bubble", href: "/contact" },
];

export default function MobileAppNav() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "services", "portfolio", "industries", "contact"];
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = sectionId === "hero" ? document.body : document.getElementById(sectionId);
        if (element) {
          const top = sectionId === "hero" ? 0 : element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    setActiveSection(id);
    if (href === "#top") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("#")) {
      const target = document.getElementById(href.replace("#", ""));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav
      aria-label="Mobile App Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-2xl border-t border-slate-200/80 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] px-2 pt-1.5 pb-[max(0.6rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          const isConsult = item.id === "contact";

          if (isConsult) {
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.id)}
                className="relative flex flex-col items-center justify-center -mt-5 group"
                aria-label="Book Free Consultation"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f87b7b] via-[#fb7185] to-[#f43f5e] text-white flex items-center justify-center shadow-lg shadow-rose-500/30 group-active:scale-90 transition-transform duration-150 border-2 border-white ring-2 ring-rose-200/50">
                  <span className="material-symbols-outlined text-[22px]">
                    {item.icon}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-primary mt-1 tracking-tight">
                  Consult
                </span>
              </a>
            );
          }

          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href, item.id)}
              className={`flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all duration-150 active:scale-95 ${
                isActive
                  ? "text-primary font-bold"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <div className="relative">
                <span
                  className={`material-symbols-outlined text-[22px] transition-transform ${
                    isActive ? "scale-110" : ""
                  }`}
                >
                  {item.icon}
                </span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </div>
              <span
                className={`text-[10px] mt-0.5 tracking-tight transition-colors ${
                  isActive ? "font-bold text-primary" : "font-medium"
                }`}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
