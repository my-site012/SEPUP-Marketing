export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/#industries" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const BRAND = {
  name: "Step Up Marketing",
  phoneDisplay: "+1 416-873-5556",
  phoneTel: "+14168735556",
  altPhone: "+1 (888) 586-4627",
  whatsappNumber: "+14168735556",
  whatsappLink: "https://wa.me/14168735556?text=Hello%20Step%20Up%20Marketing!%20I%20would%20like%20to%20get%20a%20free%20growth%20consultation.",
  email: "hello@stepupmarketing.com",
  address: "3504 Hurontario St #3008, Mississauga, ON L5B 0B9, Canada",
  city: "Mississauga",
  region: "Ontario",
  country: "Canada",
  postalCode: "L5B 0B9",
  headerLogo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZl4ueRmXa1VjKmFxSd_HUQrVStR5pvXhvu-n183S2aN0UdC_c3qCvCobVLrbAM2osiUmmHaI4K3zmG-9xuB72kCmIO7DpIEmJuLZwjE2c_BZKjF87KL7D1em_1xHtQhNVmoGUqADd4vKN3Kv4IgqxN5uxQt3_a3v1nRJo9uYqSYGCQJGnlUscoo253e8k_fYWFTJcdrFzD-1zrmXHES-fCofCmU5wS55LjXjNSYwf3TZA1jd79fzgv41JRWrCsaJtfA",
  footerLogo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCw0UZWi4zo2AE-4fhGqym_jruCaz1jHrjOI29Q98HTmd9_s7nZxHWhMmh4XpCC1ywLORrWseQ0W1xJOctU2Wm3noZkG_KC-5zKSqwruv4l_di37sVIH_8y6MOvUQjbXaJxPpwG7iN7Skw94E_2HL6uk7Sm5WaDnFLeEzMONDnJpmFVIbayW7qVPeeG_6byOqhJF5jrRHXfjaXdP8kO38xrOz_TYZI1mAhbJyMqqXf9QIiR_bvQZk5qSFZuqo-XCu0DbA",
};

export const HERO_TRUST_ITEMS = [
  { label: "AI SEO & GEO Engine", color: "#4ecdc4" },
  { label: "Sub-second Web Stacks", color: "#f87b7b" },
  { label: "High-Intent Lead Routing", color: "#fbbf24" },
  { label: "Revenue Attribution", color: "#4ecdc4" },
];

export const TRUST_BAR_STATS = [
  { value: "200+", label: "Projects Delivered", isHighlight: false },
  { value: "12+", label: "High-Value Sectors", isHighlight: false },
  { value: "5 Hubs", label: "US, UK, UAE, IN, SG", isHighlight: true, color: "text-[#e11d48]" },
  { value: "100%", label: "Data-Driven Growth", isHighlight: false },
  { value: "99.4%", label: "Client Retention", isHighlight: true, color: "text-[#0d9488]" },
];

export const ABOUT_FEATURES = [
  {
    icon: "insights",
    title: "Strategy First",
    description: "Grounded in unit economics, market gaps, and audience behavior.",
    bg: "bg-[#fff5f5]",
    border: "border-[#f87b7b]/15",
    iconColor: "text-[#f87b7b]",
  },
  {
    icon: "filter_center_focus",
    title: "Built for Leads",
    description: "Zero vanity numbers. Optimized for high-intent conversions.",
    bg: "bg-[#f0fdfa]",
    border: "border-[#4ecdc4]/25",
    iconColor: "text-[#0d9488]",
  },
  {
    icon: "monitoring",
    title: "Measurable ROI",
    description: "Real-time telemetry and full multi-touch attribution reporting.",
    bg: "bg-[#fefce8]",
    border: "border-[#fbbf24]/30",
    iconColor: "text-[#d97706]",
  },
];

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  hoverBorder: string;
  badgeBg: string;
  badgeColor: string;
  hoverGradient: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "seo",
    title: "AI SEO & GEO",
    description: "Dominate modern generative engines including SearchGPT, Perplexity, and Google SGE through knowledge graph calibration.",
    badge: "Flagship",
    icon: "psychology",
    iconBg: "bg-[#ffe4e6]",
    iconColor: "text-[#e11d48]",
    hoverBorder: "hover:border-[#f87b7b]/30",
    badgeBg: "bg-[#ffe4e6]",
    badgeColor: "text-[#e11d48]",
    hoverGradient: "group-hover:bg-gradient-to-r group-hover:from-[#f87b7b] group-hover:to-[#f43f5e] group-hover:text-white",
  },
  {
    id: "web-design-development",
    title: "Web Engineering",
    description: "Blazing fast, sub-second web platforms engineered with Next.js, Tailwind CSS, and headless architectures for elite conversion rates.",
    badge: "Core Stack",
    icon: "terminal",
    iconBg: "bg-[#ffedd5]",
    iconColor: "text-[#ea580c]",
    hoverBorder: "hover:border-[#fb923c]/30",
    badgeBg: "bg-[#ffedd5]",
    badgeColor: "text-[#ea580c]",
    hoverGradient: "group-hover:bg-gradient-to-r group-hover:from-[#fb923c] group-hover:to-[#ea580c] group-hover:text-white",
  },
  {
    id: "google-ads",
    title: "Google Ads & PPC",
    description: "High-intent paid search, target-CPA bidding frameworks, remarketing loops, and precision funnel economics.",
    badge: "Performance",
    icon: "ads_click",
    iconBg: "bg-[#fef3c7]",
    iconColor: "text-[#b45309]",
    hoverBorder: "hover:border-[#fbbf24]/30",
    badgeBg: "bg-[#fef3c7]",
    badgeColor: "text-[#b45309]",
    hoverGradient: "group-hover:bg-gradient-to-r group-hover:from-[#fbbf24] group-hover:to-[#d97706] group-hover:text-white",
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    description: "Executive-grade content calendars, ghostwriting, custom reels, and active community moderation across key social channels.",
    badge: "Authority",
    icon: "hub",
    iconBg: "bg-[#ffe4e6]",
    iconColor: "text-[#e11d48]",
    hoverBorder: "hover:border-[#f87b7b]/30",
    badgeBg: "bg-[#ffe4e6]",
    badgeColor: "text-[#e11d48]",
    hoverGradient: "group-hover:bg-gradient-to-r group-hover:from-[#f87b7b] group-hover:to-[#f43f5e] group-hover:text-white",
  },
  {
    id: "social-media-advertising",
    title: "Social Media Ads",
    description: "Narrative-driven creative executions and hyper-targeted LinkedIn and Meta paid funnels tailored for decision-makers.",
    badge: "Growth",
    icon: "campaign",
    iconBg: "bg-[#ccfbf1]",
    iconColor: "text-[#0d9488]",
    hoverBorder: "hover:border-[#4ecdc4]/30",
    badgeBg: "bg-[#ccfbf1]",
    badgeColor: "text-[#0d9488]",
    hoverGradient: "group-hover:bg-gradient-to-r group-hover:from-[#4ecdc4] group-hover:to-[#0d9488] group-hover:text-white",
  },
  {
    id: "graphic-designing",
    title: "Graphic Designing",
    description: "Bespoke branding suites, pitch decks, marketing collateral, and premium visual assets crafted by seasoned art directors.",
    badge: "Creative",
    icon: "palette",
    iconBg: "bg-[#ffedd5]",
    iconColor: "text-[#ea580c]",
    hoverBorder: "hover:border-[#fb923c]/30",
    badgeBg: "bg-[#ffedd5]",
    badgeColor: "text-[#ea580c]",
    hoverGradient: "group-hover:bg-gradient-to-r group-hover:from-[#fb923c] group-hover:to-[#ea580c] group-hover:text-white",
  },
  {
    id: "google-business-management",
    title: "Google Business (GBP)",
    description: "Local 3-Pack dominance, geo-tagged updates, reputation monitoring, and high-intent local customer call generation.",
    badge: "Local Pack",
    icon: "location_on",
    iconBg: "bg-[#ccfbf1]",
    iconColor: "text-[#0d9488]",
    hoverBorder: "hover:border-[#4ecdc4]/30",
    badgeBg: "bg-[#ccfbf1]",
    badgeColor: "text-[#0d9488]",
    hoverGradient: "group-hover:bg-gradient-to-r group-hover:from-[#4ecdc4] group-hover:to-[#0d9488] group-hover:text-white",
  },
  {
    id: "email-marketing",
    title: "Email Automation",
    description: "Lifecycle nurturing sequences, abandoned cart recovery, VIP retention loops, and high-converting broadcast campaigns.",
    badge: "Retention",
    icon: "mail",
    iconBg: "bg-[#fef3c7]",
    iconColor: "text-[#b45309]",
    hoverBorder: "hover:border-[#fbbf24]/30",
    badgeBg: "bg-[#fef3c7]",
    badgeColor: "text-[#b45309]",
    hoverGradient: "group-hover:bg-gradient-to-r group-hover:from-[#fbbf24] group-hover:to-[#d97706] group-hover:text-white",
  },
];

export interface IndustryItem {
  id: string;
  category: string;
  statBadge: string;
  statColor: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "real-estate",
    category: "Real Estate • PropTech",
    statBadge: "+340% HNW Inbound",
    statColor: "text-[#fda4af]",
    title: "Luxury Real Estate & Developments",
    description: "High-ticket investor funnels, virtual tour lead routing, and ultra-prime property positioning.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHtEgMToB-iw7kBdhuJL1JezyX-9x1KJ_I1X9AxcM2BfUD84Ey2x_uirO9gL-f1QBgz-6H0baMRTHw8a8XbUZKWpfbR7o6T0QR9tmBOuq4-952McH37mX8ZUMQ0_7zEE8uipSwQBR4rMwYDLzQBmmJRGn_hzolmhLEPyFFHng6BPHerDDQIP92tiUvzfKZJLJj3FOEjTY9d15dmDLgdQbJX2TLt3geW8-0uojOr7fzNQsYsyWW4zOU",
    imageAlt: "Luxury architectural villa overlooking the ocean with minimalist interior marble tables, contemporary decor, and floor to ceiling panoramic windows",
  },
  {
    id: "healthtech",
    category: "HealthTech • MedTech",
    statBadge: "HIPAA Compliant",
    statColor: "text-[#4ecdc4]",
    title: "Biotech & Medical Sciences",
    description: "Diagnostic clinic acquisition, institutional partnerships, and strict compliance-ready content engines.",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1V7q1bgOthsjbv89UtMy9QCwJyfr2YFnHHiuOVrz-uGxi-UUF3xt0Uhn0mzcKdlJ4brAZtEfjtBU2GD3EHm9JR3dYXkvsx8SWlckdRFZVOuByz_LrvMSitWGfO0zj8IJAXyE0Of1iwx6S2UazaMpa31ETCcTs2hVOjEeoyjSYkOo5o-irE22r5PAACv39YCICjfCNPtZvCyGDI_BheGIT-49w4QpKDvKi3rBduHuAvumh1Znb9GQGkxne4",
    imageAlt: "Scientist in medical lab coat holding a smart touchscreen diagnostic tablet inside an ultra-modern bright research laboratory overlooking city buildings",
  },
  {
    id: "hospitality",
    category: "Hospitality • Leisure",
    statBadge: "Zero OTA Dependence",
    statColor: "text-[#fbbf24]",
    title: "Luxury Resorts & Travel",
    description: "Direct booking engine architectures, aspirational visual storytelling, and high-margin guest acquisition.",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1X92i41nRLeKLfk6M2a8UOc8u1BIEIZsI2-_CCy8GcE7mhQpVLFl__r9mbgPajTJJTJHg6ljbBAeNzPolchsGmqoWeqNgVtOfEy7HAe7p67b4opUf6AbwQ-gdur1mI7TiPDnGW2kv6fKbmSSSMeUt-n4cFjh9yOg3MsLarguDf9pBQwTgU5fhcWgoE6w6_1OaPnSrhwF0Py_VZL2G2vChhAnZRlzI5vb2qMJxJzPVT2zvyf1l3KZ9e2eg",
    imageAlt: "Breathtaking infinity pool overlooking dramatic cliffside ocean sunset at a five-star private boutique luxury island resort",
  },
  {
    id: "retail",
    category: "Retail • Lifestyle",
    statBadge: "4.6x Average ROAS",
    statColor: "text-[#fda4af]",
    title: "E-Commerce & D2C Brands",
    description: "Headless Shopify instances, international multi-currency conversions, and cart optimization.",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1V5J8uKuTVmug5DLrjtyxlWUGhoZ9suOHl2IjPc52-naX1q-AsbtremLU04M6QqM100JV4795Ag60JgNBkr2K7XcvBOGIIx8AMLf99rMLL5HInEucE-A_lHM4LLBGhZNKy2df2Xo9VK7A7JwvBpA4TRHuHLCv95S9QS5DEMWg4r9qSD63vn8qnf8u6YuVsEA8vD1QPLajx_1izT9qhxenNKeENl6TOiqRG49iv0H2zWgOckBiXWDbGeiQ",
    imageAlt: "Minimalist sunlit Scandinavian design showroom studio featuring bespoke furniture, ceramic pottery, modern smart devices, and curated lighting",
  },
];

export const OTHER_SECTORS = [
  "Education & Global Admissions",
  "Manufacturing & Supply Chain RFQs",
  "EV & Automotive Platforms",
  "M&A Advisory & Legal Firms",
];

export interface ProcessStep {
  step: string;
  numberColor: string;
  title: string;
  description: string;
  deliverable: string;
  deliverableDot: string;
  deliverableColor: string;
  borderHover: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    numberColor: "text-[#fda4af]/40 group-hover:text-[#f87b7b]",
    title: "Discover",
    description: "In-depth audit of current digital equity, customer friction points, search visibility gaps, and competitor moats.",
    deliverable: "Week 1–2 Deliverable",
    deliverableDot: "bg-[#f87b7b]",
    deliverableColor: "text-[#e11d48]",
    borderHover: "border-[#f87b7b]/15 hover:border-[#f87b7b]/50",
  },
  {
    step: "02",
    numberColor: "text-[#99f6e4]/40 group-hover:text-[#4ecdc4]",
    title: "Strategize",
    description: "Blueprint the technological stack, conversion pathways, content taxonomies, and multi-channel acquisition models.",
    deliverable: "Architecture Signoff",
    deliverableDot: "bg-[#4ecdc4]",
    deliverableColor: "text-[#0d9488]",
    borderHover: "border-[#4ecdc4]/20 hover:border-[#4ecdc4]/60",
  },
  {
    step: "03",
    numberColor: "text-[#fef08a]/50 group-hover:text-[#fbbf24]",
    title: "Build & Launch",
    description: "High-speed Next.js frontends, automated CRM hooks, schema structured data, and high-converting campaign setups.",
    deliverable: "Zero-Downtime Deploy",
    deliverableDot: "bg-[#fb923c]",
    deliverableColor: "text-[#ea580c]",
    borderHover: "border-[#fbbf24]/20 hover:border-[#fbbf24]/60",
  },
  {
    step: "04",
    numberColor: "text-[#fda4af]/40 group-hover:text-[#f87b7b]",
    title: "Scale & Automate",
    description: "Continuous multi-variant split testing, AI workflow refinement, GEO algorithmic adjustments, and budget scaling.",
    deliverable: "Ongoing Monthly Sprints",
    deliverableDot: "bg-[#f87b7b]",
    deliverableColor: "text-[#e11d48]",
    borderHover: "border-[#f87b7b]/15 hover:border-[#f87b7b]/50",
  },
];

export interface PortfolioItem {
  id: string;
  category: string;
  tags: string;
  tagColor: string;
  region: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  metric1Label: string;
  metric1Value: string;
  metric1Color: string;
  metric2Label: string;
  metric2Value: string;
  borderBox: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "aura-retreats",
    category: "Luxury Hospitality",
    tags: "Web Engineering • Global SEO",
    tagColor: "text-[#e11d48]",
    region: "Europe & Middle East",
    title: "Aura Mediterranean Retreats",
    description: "Complete digital re-platforming and global multi-lingual search domination for an ultra-luxury collection of 14 boutique resorts.",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1X92i41nRLeKLfk6M2a8UOc8u1BIEIZsI2-_CCy8GcE7mhQpVLFl__r9mbgPajTJJTJHg6ljbBAeNzPolchsGmqoWeqNgVtOfEy7HAe7p67b4opUf6AbwQ-gdur1mI7TiPDnGW2kv6fKbmSSSMeUt-n4cFjh9yOg3MsLarguDf9pBQwTgU5fhcWgoE6w6_1OaPnSrhwF0Py_VZL2G2vChhAnZRlzI5vb2qMJxJzPVT2zvyf1l3KZ9e2eg",
    imageAlt: "Panoramic clifftop luxury ocean retreat with calm emerald infinity swimming pool during a dramatic pink and gold sunset sky",
    metric1Label: "Key Outcome",
    metric1Value: "+312% Direct Inbound Bookings",
    metric1Color: "text-[#e11d48]",
    metric2Label: "Attributed Value",
    metric2Value: "$4.2M Pipeline",
    borderBox: "border-[#f87b7b]/15",
  },
  {
    id: "neuralab-diagnostics",
    category: "Healthcare & MedTech",
    tags: "AI SEO • GEO • Custom App",
    tagColor: "text-[#0d9488]",
    region: "United States",
    title: "NeuraLab Diagnostics Platform",
    description: "Engineered generative engine visibility for high-value pathology tests and developed an automated laboratory requisition intake portal.",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1V7q1bgOthsjbv89UtMy9QCwJyfr2YFnHHiuOVrz-uGxi-UUF3xt0Uhn0mzcKdlJ4brAZtEfjtBU2GD3EHm9JR3dYXkvsx8SWlckdRFZVOuByz_LrvMSitWGfO0zj8IJAXyE0Of1iwx6S2UazaMpa31ETCcTs2hVOjEeoyjSYkOo5o-irE22r5PAACv39YCICjfCNPtZvCyGDI_BheGIT-49w4QpKDvKi3rBduHuAvumh1Znb9GQGkxne4",
    imageAlt: "Modern medical diagnostic laboratory with female scientist interacting with an advanced analytical health tablet screen next to test equipment",
    metric1Label: "Key Outcome",
    metric1Value: "+185% Institutional RFQs",
    metric1Color: "text-[#0d9488]",
    metric2Label: "Search Authority",
    metric2Value: "#1 AI Engine Citation",
    borderBox: "border-[#4ecdc4]/20",
  },
  {
    id: "nordic-living",
    category: "Retail & D2C",
    tags: "Headless Commerce • Google Ads",
    tagColor: "text-[#ea580c]",
    region: "UK & Scandinavia",
    title: "Nordic Living Collective",
    description: "Re-engineered Shopify storefront into headless Next.js frontend with dynamic currency pricing and streamlined cart funnel.",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1V5J8uKuTVmug5DLrjtyxlWUGhoZ9suOHl2IjPc52-naX1q-AsbtremLU04M6QqM100JV4795Ag60JgNBkr2K7XcvBOGIIx8AMLf99rMLL5HInEucE-A_lHM4LLBGhZNKy2df2Xo9VK7A7JwvBpA4TRHuHLCv95S9QS5DEMWg4r9qSD63vn8qnf8u6YuVsEA8vD1QPLajx_1izT9qhxenNKeENl6TOiqRG49iv0H2zWgOckBiXWDbGeiQ",
    imageAlt: "Elegantly styled open living room studio featuring Scandinavian acoustic furniture, wooden coffee table, minimalist desk setup, and warm natural lighting",
    metric1Label: "ROAS Performance",
    metric1Value: "4.8x Blended ROAS",
    metric1Color: "text-[#ea580c]",
    metric2Label: "Mobile Conversion",
    metric2Value: "18.2% Checkout CVR",
    borderBox: "border-[#fb923c]/20",
  },
  {
    id: "vanguard-studio",
    category: "Real Estate Architecture",
    tags: "Brand Experience • Enterprise Inbound",
    tagColor: "text-[#e11d48]",
    region: "Tokyo & Singapore",
    title: "Vanguard Global Studio",
    description: "Developed ultra-minimalist portfolio portal paired with hyper-targeted APAC commercial real estate developer targeting.",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1WZUyDCDm5z35boHaN70aKIVV9EjdbU5xEG5H1P45y9Av-QgrKO2SqtFouf4nhOnC8B0rS58D0Zohhi6dvFYo3UHZmKH7OAT8BPG9VyjoLdnelOfHQzWEmfR_0PYynu5l6HdKdorXGUL6UV2Ptd8WBv9csFuFlI_aJNtd1mtPcx0c7ElknyKoIIwkUupU9YEVik_YjfmSISG6PHgH74ZH1TC2gMovyULaTibVZBUUBJ7FlY7xpVB50GLck",
    imageAlt: "Corporate architects collaborating over architectural blueprints and laptops with financial data charts inside a dramatic modern oceanfront office",
    metric1Label: "Organic Authority",
    metric1Value: "#1 Organic Rank APAC",
    metric1Color: "text-[#e11d48]",
    metric2Label: "Commercial Inquiries",
    metric2Value: "64+ Mega-Project Leads",
    borderBox: "border-[#f87b7b]/15",
  },
];

export const EXECUTIVE_METRICS = [
  { value: "200+", label: "Projects Deployed", detail: "Across 14 global territories", color: "text-[#f87b7b]" },
  { value: "< 0.8s", label: "Core Web Vitals", detail: "Elite 99+ PageSpeed scores", color: "text-[#4ecdc4]" },
  { value: "24/7", label: "Real-Time Telemetry", detail: "Zero downtime SLA assurance", color: "text-[#fbbf24]" },
  { value: "3.4x", label: "Average CVR Increase", detail: "Through behavioral UX loops", color: "text-[#4ecdc4]" },
  { value: "100%", label: "Attribution Clarity", detail: "Multi-touch closed loops", color: "text-[#f87b7b]" },
  { value: "5 Hubs", label: "Global Coverage", detail: "IN, US, UK, UAE, SG", color: "text-[#fb923c]" },
];

export const ADVANTAGES = [
  {
    icon: "psychology_alt",
    title: "Strategy Before Code",
    description: "Every sprint begins with financial outcomes, unit economics, buyer friction points, and verified TAM analysis.",
    tag: "Phase 0 Architecture",
    iconBg: "bg-[#ffe4e6]",
    iconColor: "text-[#e11d48]",
    bg: "bg-[#fff5f5]",
    border: "border-[#f87b7b]/15",
    tagColor: "text-[#e11d48]",
  },
  {
    icon: "target",
    title: "Ruthless Lead Intent",
    description: "We eradicate vanity metrics. We construct friction-free funnels engineered to capture high-deal-value prospects.",
    tag: "Conversion Centric",
    iconBg: "bg-[#ccfbf1]",
    iconColor: "text-[#0d9488]",
    bg: "bg-[#f0fdfa]",
    border: "border-[#4ecdc4]/20",
    tagColor: "text-[#0d9488]",
  },
  {
    icon: "merge",
    title: "Tech + Marketing Sync",
    description: "No more fighting between your marketing agency and dev shop. Engineers, media buyers, and SEOs work as one unit.",
    tag: "Unified Delivery",
    iconBg: "bg-[#fef08a]",
    iconColor: "text-[#b45309]",
    bg: "bg-[#fefce8]",
    border: "border-[#fbbf24]/30",
    tagColor: "text-[#b45309]",
  },
  {
    icon: "handshake",
    title: "Long-Term Moat",
    description: "We build compounding digital capital you retain forever: proprietary datasets, modular design systems, and organic equity.",
    tag: "Compounding Equity",
    iconBg: "bg-[#ffedd5]",
    iconColor: "text-[#c2410c]",
    bg: "bg-[#fff7ed]",
    border: "border-[#fb923c]/20",
    tagColor: "text-[#c2410c]",
  },
];

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  initials: string;
  starColor: string;
  avatarBg: string;
  locationColor: string;
  borderColor: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "vikram",
    quote: "Step Up Marketing transformed our customer acquisition engine. Their grasp of AI SEO and high-performance web engineering delivered a 300% surge in international inbound leads within 6 months.",
    author: "Vikram Singhania",
    role: "Managing Director, Apex Capital & Real Estate",
    location: "India • Singapore",
    initials: "VS",
    starColor: "text-[#f87b7b]",
    avatarBg: "bg-gradient-to-r from-[#f87b7b] to-[#f43f5e]",
    locationColor: "text-[#e11d48]",
    borderColor: "border-[#f87b7b]/15",
  },
  {
    id: "elena",
    quote: "The level of design refinement and technical rigor is unmatched. Step Up doesn't just build websites; they architect digital conversion machines that perform around the clock.",
    author: "Elena Rostova",
    role: "VP Global Marketing, Solis Biotech",
    location: "Switzerland • United States",
    initials: "ER",
    starColor: "text-[#4ecdc4]",
    avatarBg: "bg-gradient-to-r from-[#4ecdc4] to-[#0d9488]",
    locationColor: "text-[#0d9488]",
    borderColor: "border-[#4ecdc4]/20",
  },
  {
    id: "marcus",
    quote: "Our e-commerce store load speed dropped to under 0.8s, and checkout abandonment reduced by 34%. Easily the most capable digital growth partner we have worked with.",
    author: "Marcus Sterling",
    role: "Founder, Nordic Lifestyle Labs",
    location: "London, United Kingdom",
    initials: "MS",
    starColor: "text-[#fb923c]",
    avatarBg: "bg-gradient-to-r from-[#fb923c] to-[#ea580c]",
    locationColor: "text-[#ea580c]",
    borderColor: "border-[#fb923c]/20",
  },
];

export const GLOBAL_HUBS = [
  { region: "Canada Headquarters", locations: ["3504 Hurontario St #3008, Mississauga, ON L5B 0B9"] },
  { region: "United States", locations: ["Financial District, San Francisco, CA"] },
  { region: "India Centers", locations: ["Cyber City, Gurugram", "Indiranagar, Bengaluru"] },
  { region: "Global Hubs", locations: ["Marina Bay, Singapore", "Soho, London, UK"] },
];

export const FOOTER_SECTIONS = {
  company: [
    { label: "About Us", href: "/#about" },
    { label: "Leadership & Team", href: "/#about" },
    { label: "Careers", href: "/#contact", badge: "Hiring" },
    { label: "Case Studies", href: "/#portfolio" },
    { label: "Press & News", href: "/#insights" },
    { label: "Contact Us", href: "/#contact" },
  ],
  services: [
    { label: "Search Engine Optimization (SEO)", href: "/services/seo" },
    { label: "Web Design & Development", href: "/services/web-design-development" },
    { label: "Google Ads & PPC", href: "/services/google-ads" },
    { label: "Social Media Management", href: "/services/social-media-management" },
    { label: "Social Media Advertising", href: "/services/social-media-advertising" },
    { label: "Graphic Designing", href: "/services/graphic-designing" },
    { label: "Google Business Management", href: "/services/google-business-management" },
    { label: "Email Marketing", href: "/services/email-marketing" },
    { label: "Brand Strategy", href: "/services/brand-strategy" },
  ],
  industries: [
    { label: "Real Estate", href: "/#industries" },
    { label: "Healthcare & MedTech", href: "/#industries" },
    { label: "Construction & Home", href: "/#industries" },
    { label: "Automotive", href: "/#industries" },
    { label: "DTC E-Commerce", href: "/#industries" },
    { label: "Legal Services", href: "/#industries" },
  ],
  resources: [
    { label: "Growth Index 2025", href: "/#portfolio" },
    { label: "GEO Playbook", href: "/services/seo" },
    { label: "Core Web Vitals", href: "/services/web-design-development" },
    { label: "WhatsApp Direct", href: "https://wa.me/14168735556" },
    { label: "Client Portal", href: "/#contact" },
  ],
};
