export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Framework", href: "/#framework" },
  { label: "Industries", href: "/#industries" },
  { label: "About Us", href: "/#about" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/#contact" },
];

export const BRAND = {
  name: "Step Up Marketing",
  legalName: "Step Up Marketing",
  tagline: "Supporting businesses ready to scale with marketing",
  subtitle: "Supporting growing business with digital marketing strategy & execution",
  shortOverview:
    "Step Up Marketing is a boutique digital marketing agency supporting small and medium-sized businesses in Mississauga and the Greater Toronto Area (GTA) with practical marketing strategies, creative solutions, and hands-on execution.",
  phoneDisplay: "+1 (416) 873-5556",
  phoneTel: "+14168735556",
  whatsappNumber: "+14168735556",
  whatsappLink:
    "https://wa.me/14168735556?text=Hello%20Step%20Up%20Marketing!%20I%20would%20like%20to%20discuss%20my%20business%20marketing.",
  email: "hello@stepupmarketing.ca",
  siteUrl: "https://www.stepupmarketing.ca",
  address: "3504 Hurontario Street, Mississauga, Ontario, Canada L5B 0B9",
  city: "Mississauga",
  region: "Ontario",
  country: "Canada",
  postalCode: "L5B 0B9",
  hours: "9:00 AM – 6:00 PM, Monday to Saturday",
  googleMapsUrl: "https://share.google/T52hSJjEeYhmVwkSr",
  googleReviewsUrl: "https://share.google/1OrSS0JYxTlOdI3YZ",
  headerLogo: "/logo.png",
  footerLogo: "/logo.png",
  socialLinks: {
    instagram: "https://www.instagram.com/stepupmarketing.ca/",
    facebook: "https://www.facebook.com/stepupmarketing.ca/",
    linkedin: "https://www.linkedin.com/company/step-up-marketing-ca",
    googleBusiness: "https://share.google/T52hSJjEeYhmVwkSr",
    founderLinkedin: "https://www.linkedin.com/in/garvita-uppal/",
  },
};

export const FOUNDER_INFO = {
  name: "Garvita Uppal",
  title: "Principal Consultant | Founder",
  experienceYears: "Close to 10 Years",
  photo: "/founder.png",
  bio: "Garvita Uppal is the Founder and Principal Consultant of Step Up Marketing, bringing close to a decade of experience in digital marketing, advertising, and business strategy. Having worked with businesses across multiple industries, she understands the challenges business owners face when trying to manage marketing alongside everyday operations. Her experience spans marketing strategy, brand development, and end-to-end marketing execution including website management, SEO, paid advertising, social media, and customer acquisition. Through Step Up Marketing, she helps small and medium-sized businesses access professional marketing expertise, make informed decisions, and grow with confidence.",
  foundedYear: "2025",
  mission:
    "To simplify marketing for growing businesses by providing honest guidance, effective strategies, and reliable led execution to support business owners.",
  vision:
    "To become a trusted marketing partner for small and medium-sized businesses in Mississauga & GTA, making professional marketing more accessible, understandable, and effective.",
};

export const CORE_VALUES = [
  {
    title: "Honesty & Transparency",
    description:
      "We believe in straightforward communication, realistic expectations, and recommending only what genuinely benefits your business.",
    icon: "verified",
  },
  {
    title: "Business First",
    description:
      "We understand your business before developing its marketing strategy. Every recommendation supports a clear business objective.",
    icon: "storefront",
  },
  {
    title: "Accountability",
    description:
      "We take ownership of our work, communicate progress transparently, and continuously look for opportunities to improve results.",
    icon: "fact_check",
  },
  {
    title: "Creativity with Purpose",
    description:
      "We believe creative ideas should do more than look good. They should serve a real commercial purpose and support business goals.",
    icon: "lightbulb",
  },
  {
    title: "Simplicity",
    description:
      "Marketing can be complicated. Working with your marketing agency shouldn't be. Zero jargon, clear deliverables.",
    icon: "filter_vintage",
  },
  {
    title: "Partnership",
    description:
      "We approach client relationships as long-term partnerships rather than one-off individual transactions.",
    icon: "handshake",
  },
];

export const HERO_TRUST_ITEMS = [
  { label: "Boutique Canadian Agency", color: "#f87b7b" },
  { label: "Mississauga & GTA Local Focus", color: "#4ecdc4" },
  { label: "10+ Years Marketing Expertise", color: "#fbbf24" },
  { label: "Dedicated Strategist for Every Client", color: "#4ecdc4" },
];

export const TRUST_BAR_STATS = [
  { value: "10+ Yrs", label: "Marketing Expertise", isHighlight: false },
  { value: "Mississauga & GTA", label: "Ontario, Canada Focus", isHighlight: true, color: "text-[#e11d48]" },
  { value: "End-to-End", label: "Strategy + Execution", isHighlight: false },
  { value: "Business First", label: "Honest Guidance, No Fluff", isHighlight: true, color: "text-[#0d9488]" },
  { value: "1 Dedicated", label: "Point of Contact", isHighlight: false },
];

export interface FunnelPillar {
  stage: string;
  subtitle: string;
  color: string;
  gradient: string;
  services: string[];
  description: string;
}

export const MARKETING_FUNNEL: FunnelPillar[] = [
  {
    stage: "ATTRACT",
    subtitle: "Capture Attention & Drive Discovery",
    color: "#f43f5e",
    gradient: "from-rose-500 to-pink-500",
    description: "Build an unmistakable first impression and get found when customers look for your services.",
    services: [
      "Branding & Visual Identity",
      "Custom Website Design",
      "Search Engine Optimization (SEO)",
      "Google Business Profile (GBP)",
      "Content Marketing & Blogs",
      "GEO / AI Search Optimization",
    ],
  },
  {
    stage: "ENGAGE",
    subtitle: "Build Personality & Real Connection",
    color: "#0d9488",
    gradient: "from-teal-500 to-emerald-500",
    description: "Engage your community with authentic storytelling, human-first visuals, and consistent brand messaging.",
    services: [
      "Social Media Management",
      "Strategic Content Direction",
      "Photo & Video Content Shoots (iPhone & Pro)",
      "Email Newsletters & Nurturing",
    ],
  },
  {
    stage: "CONVERT",
    subtitle: "Turn Interest Into Qualified Inquiries",
    color: "#ea580c",
    gradient: "from-amber-500 to-orange-500",
    description: "Guide high-intent buyers into calls, form submissions, and sales with precision paid campaigns.",
    services: [
      "Google Search & Performance Max Ads",
      "Meta Ads (Facebook & Instagram)",
      "High-Converting Landing Pages",
      "Lead Generation & Form Optimization",
    ],
  },
  {
    stage: "RETAIN",
    subtitle: "Nurture Long-Term Customer Loyalty",
    color: "#6366f1",
    gradient: "from-indigo-500 to-violet-500",
    description: "Turn one-time buyers into repeat clients and enthusiastic brand advocates who refer others.",
    services: [
      "Automated Email Retention Workflows",
      "Community & Customer Engagement",
      "Reputation & Google Review Growth",
      "Ongoing Marketing Advisory",
    ],
  },
];

export const EXTENDED_TEAM_BANNER = {
  eyebrow: "Your Extended Marketing Team",
  heading: "One Point of Contact. A Team of Specialists. Marketing Taken Care Of.",
  subheading:
    "Think of us as an extension of your business. You focus on running your operations, while we take care of the planning, coordination, and execution of your marketing efforts.",
  points: [
    "Dedicated marketing strategist who truly understands your business goals",
    "End-to-end management from designers, developers to ad campaigns & content",
    "Outsourced marketing department without the overhead of full-time internal hires",
    "Regular, transparent updates with honest recommendations on what to invest in",
  ],
};

export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  badge: string;
  pricingNote: string;
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
    id: "branding-identity",
    title: "Branding & Identity",
    shortTitle: "Branding",
    description:
      "Build a recognizable, professional brand that reflects your business and connects with your customers across logo, typography, and visual assets.",
    badge: "Identity",
    pricingNote: "Custom Quote",
    icon: "palette",
    iconBg: "bg-[#ffe4e6]",
    iconColor: "text-[#e11d48]",
    hoverBorder: "hover:border-[#f87b7b]/30",
    badgeBg: "bg-[#ffe4e6]",
    badgeColor: "text-[#e11d48]",
    hoverGradient: "group-hover:bg-gradient-to-r group-hover:from-[#f87b7b] group-hover:to-[#f43f5e] group-hover:text-white",
  },
  {
    id: "website-design-management",
    title: "Website Design & Management",
    shortTitle: "Websites",
    description:
      "Fast, mobile-friendly, user-centric websites built on strong technical foundations with SEO, tracking, and monthly maintenance included.",
    badge: "Core Foundation",
    pricingNote: "Custom Quote / Monthly Plans",
    icon: "terminal",
    iconBg: "bg-[#ffedd5]",
    iconColor: "text-[#ea580c]",
    hoverBorder: "hover:border-[#fb923c]/30",
    badgeBg: "bg-[#ffedd5]",
    badgeColor: "text-[#ea580c]",
    hoverGradient: "group-hover:bg-gradient-to-r group-hover:from-[#fb923c] group-hover:to-[#ea580c] group-hover:text-white",
  },
  {
    id: "google-business-management",
    title: "Google Business Profile Management",
    shortTitle: "Google Business (GBP)",
    description:
      "Strengthen your local presence on Google Search and Google Maps so customers in Mississauga and GTA discover and contact you first.",
    badge: "Local Pack",
    pricingNote: "Contact for Pricing",
    icon: "location_on",
    iconBg: "bg-[#ccfbf1]",
    iconColor: "text-[#0d9488]",
    hoverBorder: "hover:border-[#4ecdc4]/30",
    badgeBg: "bg-[#ccfbf1]",
    badgeColor: "text-[#0d9488]",
    hoverGradient: "group-hover:bg-gradient-to-r group-hover:from-[#4ecdc4] group-hover:to-[#0d9488] group-hover:text-white",
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    shortTitle: "Social Media",
    description:
      "Authentic social media with purpose and personality. Strategy, creative design, reels, copywriting, and monthly calendars without robotic templates.",
    badge: "Brand Voice",
    pricingNote: "Customized Monthly Packages",
    icon: "hub",
    iconBg: "bg-[#ffe4e6]",
    iconColor: "text-[#e11d48]",
    hoverBorder: "hover:border-[#f87b7b]/30",
    badgeBg: "bg-[#ffe4e6]",
    badgeColor: "text-[#e11d48]",
    hoverGradient: "group-hover:bg-gradient-to-r group-hover:from-[#f87b7b] group-hover:to-[#f43f5e] group-hover:text-white",
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    shortTitle: "Content Strategy",
    description:
      "A holistic approach to content that educates, inspires, and builds trust. Blogs, newsletters, educational videos, and resources that demonstrate your expertise.",
    badge: "Authority",
    pricingNote: "Contact for Pricing",
    icon: "article",
    iconBg: "bg-[#fef3c7]",
    iconColor: "text-[#b45309]",
    hoverBorder: "hover:border-[#fbbf24]/30",
    badgeBg: "bg-[#fef3c7]",
    badgeColor: "text-[#b45309]",
    hoverGradient: "group-hover:bg-gradient-to-r group-hover:from-[#fbbf24] group-hover:to-[#d97706] group-hover:text-white",
  },
  {
    id: "photo-video-shoots",
    title: "Photo & Video Content Shoots",
    shortTitle: "Content Shoots",
    description:
      "Authentic photo and video production tailored to your budget. From high-quality iPhone shoots for reels to high-res professional camera productions.",
    badge: "Visual Assets",
    pricingNote: "Half-Day / Full-Day / Custom",
    icon: "photo_camera",
    iconBg: "bg-[#e0e7ff]",
    iconColor: "text-[#4338ca]",
    hoverBorder: "hover:border-[#818cf8]/30",
    badgeBg: "bg-[#e0e7ff]",
    badgeColor: "text-[#4338ca]",
    hoverGradient: "group-hover:bg-gradient-to-r group-hover:from-[#818cf8] group-hover:to-[#4338ca] group-hover:text-white",
  },
  {
    id: "google-ads",
    title: "Google Ads Management",
    shortTitle: "Google Ads",
    description:
      "Search, Display, Performance Max & YouTube campaigns structured for high-intent customer inquiries with accurate conversion tracking.",
    badge: "High Intent",
    pricingNote: "Contact for Pricing",
    icon: "ads_click",
    iconBg: "bg-[#fef3c7]",
    iconColor: "text-[#b45309]",
    hoverBorder: "hover:border-[#fbbf24]/30",
    badgeBg: "bg-[#fef3c7]",
    badgeColor: "text-[#b45309]",
    hoverGradient: "group-hover:bg-gradient-to-r group-hover:from-[#fbbf24] group-hover:to-[#d97706] group-hover:text-white",
  },
  {
    id: "meta-ads",
    title: "Meta Ads (Facebook & Instagram)",
    shortTitle: "Meta Advertising",
    description:
      "Strategic social advertising campaigns that stop the scroll, engage targeted audiences, and generate qualified leads through Meta instant forms and landing pages.",
    badge: "Paid Social",
    pricingNote: "Contact for Pricing",
    icon: "campaign",
    iconBg: "bg-[#ccfbf1]",
    iconColor: "text-[#0d9488]",
    hoverBorder: "hover:border-[#4ecdc4]/30",
    badgeBg: "bg-[#ccfbf1]",
    badgeColor: "text-[#0d9488]",
    hoverGradient: "group-hover:bg-gradient-to-r group-hover:from-[#4ecdc4] group-hover:to-[#0d9488] group-hover:text-white",
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    shortTitle: "Email Campaigns",
    description:
      "Turn your customer list into a repeat revenue engine with welcome sequences, monthly newsletters, and automated retention campaigns.",
    badge: "Retention",
    pricingNote: "Contact for Pricing",
    icon: "mail",
    iconBg: "bg-[#dbeafe]",
    iconColor: "text-[#1d4ed8]",
    hoverBorder: "hover:border-[#60a5fa]/30",
    badgeBg: "bg-[#dbeafe]",
    badgeColor: "text-[#1d4ed8]",
    hoverGradient: "group-hover:bg-gradient-to-r group-hover:from-[#60a5fa] group-hover:to-[#1d4ed8] group-hover:text-white",
  },
  {
    id: "geo-ai-search",
    title: "GEO / AI Search Optimization",
    shortTitle: "AI Search & GEO",
    description:
      "Optimize your website content and structure for the future of search, including ChatGPT, Perplexity, and Google AI Overviews.",
    badge: "Future-Ready",
    pricingNote: "Contact for Pricing",
    icon: "psychology",
    iconBg: "bg-[#ffe4e6]",
    iconColor: "text-[#e11d48]",
    hoverBorder: "hover:border-[#f87b7b]/30",
    badgeBg: "bg-[#ffe4e6]",
    badgeColor: "text-[#e11d48]",
    hoverGradient: "group-hover:bg-gradient-to-r group-hover:from-[#f87b7b] group-hover:to-[#f43f5e] group-hover:text-white",
  },
  {
    id: "marketing-strategy-consulting",
    title: "Marketing Strategy & Consulting",
    shortTitle: "Strategy & Consulting",
    description:
      "Experienced guidance to evaluate your current marketing, eliminate wasted spend, and build a customized roadmap for growth.",
    badge: "Advisory",
    pricingNote: "$120/hr or Custom Scope",
    icon: "insights",
    iconBg: "bg-[#fef9c3]",
    iconColor: "text-[#a16207]",
    hoverBorder: "hover:border-[#facc15]/30",
    badgeBg: "bg-[#fef9c3]",
    badgeColor: "text-[#a16207]",
    hoverGradient: "group-hover:bg-gradient-to-r group-hover:from-[#facc15] group-hover:to-[#a16207] group-hover:text-white",
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
    category: "Real Estate & Housing",
    statBadge: "Local Lead Funnels",
    statColor: "text-[#fda4af]",
    title: "Real Estate Brokers & Agents",
    description:
      "Targeted local buyer/seller lead generation, community landing pages, and Google Business visibility for Canadian realtors.",
    imageUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=85&w=1200&auto=format&fit=crop",
    imageAlt: "Modern Canadian residential homes and real estate property keys",
  },
  {
    id: "home-maintenance-construction",
    category: "Home Services & Trades",
    statBadge: "High-Intent Inquiries",
    statColor: "text-[#4ecdc4]",
    title: "Home Maintenance, Construction & Renovation",
    description:
      "Attract homeowners looking for reliable contractors, renovation specialists, roofers, and maintenance experts across the GTA.",
    imageUrl:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=85&w=1200&auto=format&fit=crop",
    imageAlt: "Home construction and modern architectural renovation blueprints and tools",
  },
  {
    id: "automotive",
    category: "Automotive & Detailing",
    statBadge: "Repeat Bookings",
    statColor: "text-[#fbbf24]",
    title: "Automobile Car Wash & Service Centers",
    description:
      "Local Google Maps optimization, seasonal service promotions, and customer retention campaigns for auto centers.",
    imageUrl:
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=85&w=1200&auto=format&fit=crop",
    imageAlt: "High-end automobile detailing and professional service workshop",
  },
  {
    id: "healthcare-wellness",
    category: "Health & Wellness",
    statBadge: "Trust-Building Care",
    statColor: "text-[#4ecdc4]",
    title: "Healthcare, Clinics & Wellness",
    description:
      "Build patient trust with educational content, local SEO for clinics, dentists, physiotherapists, and wellness centers.",
    imageUrl:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=85&w=1200&auto=format&fit=crop",
    imageAlt: "Clean, contemporary healthcare clinic and wellness reception interior",
  },
  {
    id: "home-appliance-durables",
    category: "Consumer Durables",
    statBadge: "Direct Inbound Calls",
    statColor: "text-[#fda4af]",
    title: "Home Appliances & Consumer Durables",
    description:
      "Help homeowners find appliance repair, installation, and retail showrooms when they need help urgently.",
    imageUrl:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=85&w=1200&auto=format&fit=crop",
    imageAlt: "Modern kitchen equipped with premium durable home appliances",
  },
  {
    id: "professional-services",
    category: "B2B & Professional",
    statBadge: "Qualified Inquiries",
    statColor: "text-[#fbbf24]",
    title: "Professional Services & Legal / Advisory",
    description:
      "Position accountants, legal consultants, mortgage specialists, and advisory firms as trusted regional authorities.",
    imageUrl:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=85&w=1200&auto=format&fit=crop",
    imageAlt: "Professional business advisors in meeting discussing growth strategy",
  },
  {
    id: "travel-hospitality",
    category: "Hospitality & Leisure",
    statBadge: "Direct Bookings",
    statColor: "text-[#4ecdc4]",
    title: "Travel & Hospitality",
    description:
      "Captivating photo and video storytelling, social media campaigns, and Google Maps discovery for hospitality venues.",
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=85&w=1200&auto=format&fit=crop",
    imageAlt: "Boutique hospitality and luxury resort lounge setting",
  },
  {
    id: "fashion-beauty-lifestyle",
    category: "Fashion & Beauty",
    statBadge: "Engaged Community",
    statColor: "text-[#fda4af]",
    title: "Fashion, Beauty & Lifestyle",
    description:
      "Elevate lifestyle brands, salons, and beauty studios with creative visual campaigns, reels, and Meta ad funnels.",
    imageUrl:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=85&w=1200&auto=format&fit=crop",
    imageAlt: "High-end beauty salon and lifestyle cosmetic presentation",
  },
];

export const OTHER_SECTORS = [
  "Local Retail & Boutiques",
  "Accounting & Tax Consultancies",
  "Dental & Eye Clinics",
  "Specialty Contractors & Trades",
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
    title: "Understand The Business First",
    description:
      "We take the time to understand your operations, customers, current challenges, and genuine business goals before recommending any marketing service.",
    deliverable: "Discovery & Honest Audit",
    deliverableDot: "bg-[#f87b7b]",
    deliverableColor: "text-[#e11d48]",
    borderHover: "border-[#f87b7b]/15 hover:border-[#f87b7b]/50",
  },
  {
    step: "02",
    numberColor: "text-[#99f6e4]/40 group-hover:text-[#4ecdc4]",
    title: "Tailored Marketing Strategy",
    description:
      "No generic templates or unnecessary packages. We create a customized roadmap aligning channels, budget, and messaging with your target customers.",
    deliverable: "Clear Strategic Roadmap",
    deliverableDot: "bg-[#4ecdc4]",
    deliverableColor: "text-[#0d9488]",
    borderHover: "border-[#4ecdc4]/20 hover:border-[#4ecdc4]/60",
  },
  {
    step: "03",
    numberColor: "text-[#fef08a]/50 group-hover:text-[#fbbf24]",
    title: "Hands-On Execution",
    description:
      "From website builds and local SEO to graphic design, photo/video shoots, and advertising management, our team handles all the moving parts.",
    deliverable: "End-to-End Implementation",
    deliverableDot: "bg-[#fb923c]",
    deliverableColor: "text-[#ea580c]",
    borderHover: "border-[#fbbf24]/20 hover:border-[#fbbf24]/60",
  },
  {
    step: "04",
    numberColor: "text-[#fda4af]/40 group-hover:text-[#f87b7b]",
    title: "Transparent Review & Growth",
    description:
      "We explain what we did, why we did it, and how it performed in plain language. Continuous adjustments ensure your marketing compounds over time.",
    deliverable: "Ongoing Optimization & Sprints",
    deliverableDot: "bg-[#f87b7b]",
    deliverableColor: "text-[#e11d48]",
    borderHover: "border-[#f87b7b]/15 hover:border-[#f87b7b]/50",
  },
];

export const ADVANTAGES = [
  {
    icon: "storefront",
    title: "Business-First Approach",
    description:
      "We take the time to understand how your business operates before recommending services. Every action supports a real commercial objective.",
    tag: "Commercial Focus",
    iconBg: "bg-[#ffe4e6]",
    iconColor: "text-[#e11d48]",
    bg: "bg-[#fff5f5]",
    border: "border-[#f87b7b]/15",
    tagColor: "text-[#e11d48]",
  },
  {
    icon: "verified",
    title: "Honest Recommendations",
    description:
      "We focus on what your business actually needs rather than selling unnecessary retainers or every marketing channel available.",
    tag: "No Fluff / No Upsell",
    iconBg: "bg-[#ccfbf1]",
    iconColor: "text-[#0d9488]",
    bg: "bg-[#f0fdfa]",
    border: "border-[#4ecdc4]/20",
    tagColor: "text-[#0d9488]",
  },
  {
    icon: "engineering",
    title: "Strategy & Execution",
    description:
      "From campaign planning to designing graphics, building websites, and managing ad accounts, we support both the thinking and the doing.",
    tag: "Both Sides Covered",
    iconBg: "bg-[#fef08a]",
    iconColor: "text-[#b45309]",
    bg: "bg-[#fefce8]",
    border: "border-[#fbbf24]/30",
    tagColor: "text-[#b45309]",
  },
  {
    icon: "person_pin",
    title: "Personalized Attention",
    description:
      "You work directly with experienced marketing strategists who tailor every approach to your unique goals, resources, and customer base.",
    tag: "Dedicated Strategist",
    iconBg: "bg-[#ffedd5]",
    iconColor: "text-[#c2410c]",
    bg: "bg-[#fff7ed]",
    border: "border-[#fb923c]/20",
    tagColor: "text-[#c2410c]",
  },
  {
    icon: "alt_route",
    title: "Multi-Channel Expertise",
    description:
      "We understand how websites, local Google rankings, paid advertising, social media, and email retention work together seamlessly.",
    tag: "Unified Funnel",
    iconBg: "bg-[#e0e7ff]",
    iconColor: "text-[#4338ca]",
    bg: "bg-[#eef2ff]",
    border: "border-[#818cf8]/20",
    tagColor: "text-[#4338ca]",
  },
  {
    icon: "chat",
    title: "Clear Communication",
    description:
      "We explain what we're doing, why we're doing it, and how it's performing without confusing jargon or complicated dashboards.",
    tag: "Transparent Insights",
    iconBg: "bg-[#ccfbf1]",
    iconColor: "text-[#0d9488]",
    bg: "bg-[#f0fdfa]",
    border: "border-[#4ecdc4]/20",
    tagColor: "text-[#0d9488]",
  },
  {
    icon: "diversity_3",
    title: "Flexible Outsourced Support",
    description:
      "Access a full team of senior marketing talent without the heavy overhead and commitment of hiring an in-house department.",
    tag: "Your Extended Team",
    iconBg: "bg-[#ffe4e6]",
    iconColor: "text-[#e11d48]",
    bg: "bg-[#fff5f5]",
    border: "border-[#f87b7b]/15",
    tagColor: "text-[#e11d48]",
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
    id: "client-review-1",
    quote:
      "Step Up Marketing brought real clarity to our digital presence. Instead of selling us random ads, they took the time to understand our service business and built a website and Google setup that brings in genuine client calls every week.",
    author: "Verified Client",
    role: "Business Owner • Home & Renovation Services",
    location: "Mississauga, Ontario",
    initials: "MS",
    starColor: "text-[#f87b7b]",
    avatarBg: "bg-gradient-to-r from-[#f87b7b] to-[#f43f5e]",
    locationColor: "text-[#e11d48]",
    borderColor: "border-[#f87b7b]/15",
  },
  {
    id: "client-review-2",
    quote:
      "Garvita and her team are a breath of fresh air. They don't just execute; they think like business partners. Having one dedicated strategist coordinate our branding, social media, and ad campaigns has saved us countless hours.",
    author: "Client Partner",
    role: "Managing Director • Professional Services",
    location: "Toronto (GTA), Canada",
    initials: "CP",
    starColor: "text-[#4ecdc4]",
    avatarBg: "bg-gradient-to-r from-[#4ecdc4] to-[#0d9488]",
    locationColor: "text-[#0d9488]",
    borderColor: "border-[#4ecdc4]/20",
  },
  {
    id: "client-review-3",
    quote:
      "Finding a marketing agency that is genuinely honest about where to spend your budget is rare. Step Up Marketing gave us clear direction, improved our Google Business rankings, and continues to provide dependable ongoing support.",
    author: "Local Service Partner",
    role: "Clinic & Wellness Center Director",
    location: "Oakville, Ontario",
    initials: "LP",
    starColor: "text-[#fb923c]",
    avatarBg: "bg-gradient-to-r from-[#fb923c] to-[#ea580c]",
    locationColor: "text-[#ea580c]",
    borderColor: "border-[#fb923c]/20",
  },
];

export const SERVICE_AREAS = [
  {
    region: "Local Hub (In-Person & Hands-On)",
    cities: ["Mississauga", "Toronto", "Brampton", "Oakville", "Milton", "Vaughan", "Markham", "Greater Toronto Area (GTA)"],
  },
  {
    region: "Canada-Wide (Remote & Online)",
    cities: ["Ontario", "British Columbia", "Alberta", "Across All Canadian Provinces"],
  },
];

export const FOOTER_SECTIONS = {
  company: [
    { label: "About Us", href: "/#about" },
    { label: "Founder Profile", href: "/#founder" },
    { label: "Why Partner With Us", href: "/#why-us" },
    { label: "Our Framework", href: "/#framework" },
    { label: "Service Areas", href: "/#contact" },
    { label: "Contact Us", href: "/#contact" },
  ],
  services: [
    { label: "Branding & Identity", href: "/services/branding-identity" },
    { label: "Website Design & Management", href: "/services/website-design-management" },
    { label: "Google Business Profile (GBP)", href: "/services/google-business-management" },
    { label: "Social Media Management", href: "/services/social-media-management" },
    { label: "Content Marketing", href: "/services/content-marketing" },
    { label: "Photo & Video Content Shoots", href: "/services/photo-video-shoots" },
    { label: "Google Ads Management", href: "/services/google-ads" },
    { label: "Meta Ads (FB & IG)", href: "/services/meta-ads" },
    { label: "Email Marketing", href: "/services/email-marketing" },
    { label: "GEO / AI Search Optimization", href: "/services/geo-ai-search" },
    { label: "Marketing Strategy & Consulting", href: "/services/marketing-strategy-consulting" },
  ],
  industries: [
    { label: "Real Estate", href: "/#industries" },
    { label: "Home Maintenance & Renovation", href: "/#industries" },
    { label: "Automobile & Service Centers", href: "/#industries" },
    { label: "Healthcare & Wellness", href: "/#industries" },
    { label: "Home Appliances & Durables", href: "/#industries" },
    { label: "Professional Services", href: "/#industries" },
    { label: "Travel & Hospitality", href: "/#industries" },
    { label: "Fashion, Beauty & Lifestyle", href: "/#industries" },
  ],
  connect: [
    { label: "WhatsApp Direct", href: BRAND.whatsappLink },
    { label: "Google Business Profile", href: BRAND.googleMapsUrl },
    { label: "Google Reviews", href: BRAND.googleReviewsUrl },
    { label: "Founder on LinkedIn", href: BRAND.socialLinks.founderLinkedin },
    { label: "Instagram (@stepupmarketing.ca)", href: BRAND.socialLinks.instagram },
    { label: "Facebook Page", href: BRAND.socialLinks.facebook },
  ],
};

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
    id: "gta-home-services",
    category: "Home Services & Renovation",
    tags: "Website • Local SEO • GBP",
    tagColor: "text-[#e11d48]",
    region: "Mississauga & GTA",
    title: "GTA Home Contracting & Renovation",
    description: "Complete digital repositioning, mobile web redesign, and local Google 3-Pack optimization delivering high-intent quote requests.",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=85&w=1200&auto=format&fit=crop",
    imageAlt: "Contemporary home renovation project showcase",
    metric1Label: "Inbound Inquiries",
    metric1Value: "+240% Local Calls",
    metric1Color: "text-[#e11d48]",
    metric2Label: "Google Maps Rank",
    metric2Value: "#1 in Service Area",
    borderBox: "border-[#f87b7b]/15",
  },
  {
    id: "mississauga-health-clinic",
    category: "Healthcare & Wellness",
    tags: "Content Marketing • Meta Ads",
    tagColor: "text-[#0d9488]",
    region: "Mississauga, Ontario",
    title: "Regional Wellness & Dental Clinic",
    description: "Patient education campaigns, social media management, and targeted Meta ads driving booked initial consultations.",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=85&w=1200&auto=format&fit=crop",
    imageAlt: "Modern medical diagnostic clinic and wellness reception",
    metric1Label: "New Consultations",
    metric1Value: "+180% Patient Bookings",
    metric1Color: "text-[#0d9488]",
    metric2Label: "Local Reputation",
    metric2Value: "4.9-Star Google Score",
    borderBox: "border-[#4ecdc4]/20",
  },
];

