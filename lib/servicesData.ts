export interface ServiceHighlight {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceDeliverable {
  title: string;
  points: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  h2Heading: string;
  bulletPoints: string[];
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  tagline: string;
  description: string;
  longDescription: string[];
  rating: string;
  startingPrice: string;
  timeline: string;
  sla: string;
  heroImage: string;
  icon: string;
  highlights: ServiceHighlight[];
  deliverables: ServiceDeliverable[];
  industries: string[];
  faqs: ServiceFAQ[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    slug: "seo",
    title: "SEO Services Agency & Organic Traffic Growth Solutions",
    h2Heading: "Complete On-Page SEO Optimization & Local SEO Services",
    bulletPoints: [
          "Meticulous on-page SEO optimization optimizing metadata, header tags, keyword placement, and internal link structure.",
          "Technical crawl error resolution, site speed enhancements, mobile usability fixes, and clean XML sitemap management.",
          "Targeted local SEO services to capture local buyer searches and dominate localized Google search results.",
          "Sustainable white-hat link acquisition and topical authority building designed for compounding organic traffic growth."
    ],
    shortTitle: "Search Engine Optimization (SEO)",
    badge: "Organic Authority & GEO",
    tagline: "Dominate Google search results and generative AI answer engines like SearchGPT and Perplexity.",
    description: "Achieve sustainable, compounding visibility on search engines without ongoing ad spend. As a results-driven SEO services agency, we deliver exhaustive on-page SEO optimization, technical site enhancements, and authoritative local SEO services engineered to generate predictable organic traffic growth and high-value customer inquiries.",
    longDescription: [
      "Our SEO and Generative Engine Optimization (GEO) programs go far beyond basic meta tags. We conduct exhaustive technical audits, architectural restructuring, programmatic topic cluster builds, and brand authority campaigns to position your business as the definitive answer for search engines and generative AI models.",
      "By calibrating your digital assets for Google's Helpful Content System, core web vitals, and entity-based knowledge graphs, we guarantee compounding search visibility that yields predictable, qualified commercial pipeline month after month."
    ],
    rating: "4.9 / 5.0",
    startingPrice: "Starting from $1,500/mo",
    timeline: "30-Day Sprint to First Gains",
    sla: "Weekly Ranking & Telemetry Reports",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=80",
    icon: "psychology",
    highlights: [
      {
        icon: "troubleshoot",
        title: "Technical Site Audits",
        description: "Deep crawl diagnosis, crawl budget optimization, indexation fixes, and sub-second Core Web Vitals remediation."
      },
      {
        icon: "smart_toy",
        title: "AI Engine Optimization (GEO)",
        description: "Knowledge graph calibration ensuring your brand is cited as the primary source in SearchGPT, Perplexity, and SGE."
      },
      {
        icon: "hub",
        title: "High-Authority Link Equity",
        description: "White-hat digital PR and high-domain editorial placements that establish unshakeable topical authority."
      },
      {
        icon: "layers",
        title: "Programmatic Topic Clusters",
        description: "Comprehensive semantic silos covering high-intent buyer queries, comparison terms, and bottom-funnel searches."
      },
      {
        icon: "location_on",
        title: "Local & Multi-Location SEO",
        description: "Geo-targeted landing pages and local pack dominance for businesses targeting Mississauga, Toronto, and North America."
      },
      {
        icon: "insights",
        title: "Closed-Loop Attribution",
        description: "Direct tracking from organic search entry point to qualified pipeline and closed revenue inside your CRM."
      }
    ],
    deliverables: [
      {
        title: "Architecture & Technical Foundations",
        points: [
          "Complete core web vitals diagnostic & remediation",
          "XML sitemaps, robots.txt, and canonical directives overhaul",
          "Structured schema markup (JSON-LD Organization, Product, Article, FAQ)",
          "Mobile usability and JavaScript rendering audit"
        ]
      },
      {
        title: "Content Strategy & Semantic Clustering",
        points: [
          "Commercial intent keyword research and competitor gap matrix",
          "Pillar pages and supporting cluster articles written by vertical specialists",
          "Rich content optimization for search intent matching",
          "Ongoing internal linking and taxonomy optimization"
        ]
      },
      {
        title: "Off-Page Authority & Performance Telemetry",
        points: [
          "Strategic digital PR and contextual authority placements",
          "Brand mention building and unlinked citation reclamation",
          "Real-time Google Search Console & keyword tracking dashboard",
          "Monthly executive progress and pipeline attribution review"
        ]
      }
    ],
    industries: ["Real Estate", "Health & Medical", "Professional Services", "Legal Services", "E-commerce & Retail"],
    faqs: [
      {
        question: "How quickly can we expect measurable organic search results?",
        answer: "Initial technical improvements and crawl indexation updates typically reflect within 3 to 6 weeks. Significant competitive keyword movements and organic lead spikes generally accelerate within 60 to 90 days."
      },
      {
        question: "What is Generative Engine Optimization (GEO)?",
        answer: "GEO is the discipline of optimizing your digital entity so AI-driven platforms like OpenAI's SearchGPT, Perplexity AI, and Google Gemini cite your brand, data, and recommendations when users ask direct conversational questions."
      },
      {
        question: "Do you offer localized SEO for Mississauga, Ontario and Canada?",
        answer: "Yes, our Mississauga-based team specializes in local Google Map Pack rankings, Canadian regional SERPs, and national North American expansion campaigns."
      },
      {
        question: "Are your backlinking and link-building tactics compliant with Google Guidelines?",
        answer: "100%. We practice only white-hat editorial outreach, digital PR, data-driven research studies, and verified citations that protect and elevate your domain integrity permanently."
      }
    ],
    metaTitle: "SEO Services Agency & Organic Traffic Growth | Step Up Marketing",
    metaDescription: "Grow your business with a trusted SEO services agency. We provide on-page SEO optimization, local SEO services, and long-term organic traffic growth.",
    keywords: ["SEO services agency","on-page SEO optimization","local SEO services","organic traffic growth"]
  },
  {
    slug: "web-design-development",
    title: "Website Design Company & Custom Web Development",
    h2Heading: "Modern Responsive Website Design & UI/UX Web Design Services",
    bulletPoints: [
          "Sub-second loading Next.js and React architectures engineered to pass Google Core Web Vitals with flying colors.",
          "Seamless responsive website design providing intuitive navigation across smartphones, tablets, and desktops.",
          "High-converting user journeys and clean UI layouts created by our UI/UX web design services specialists.",
          "Built-in on-page SEO foundations, schema markup, and frictionless inquiry forms ready to generate business from day one."
    ],
    shortTitle: "Web Design & Development",
    badge: "Sub-Second Engineering",
    tagline: "High-performance websites engineered with Next.js, React, and modern conversion architectures.",
    description: "Your website is your company's most vital revenue engine. As an experienced website design company, Step Up Marketing specializes in custom web development and high-converting responsive website design. Our user-centric UI/UX web design services combine sub-second loading speeds with frictionless lead funnels that turn visitors into long-term clients.",
    longDescription: [
      "Your website is your company's most critical revenue asset. Slow loading times, generic templates, and clunky user journeys leak pipeline every single second. At Step Up Marketing, we design bespoke digital experiences with ultra-modern UI/UX aesthetics, responsive layouts, and clean headless architectures.",
      "From mobile-first speed optimization to integrated CRM hooks and frictionless quotation funnels, every build is crafted to convert high-ticket visitors into eager sales inquiries."
    ],
    rating: "4.95 / 5.0",
    startingPrice: "Starting from $2,500",
    timeline: "2-4 Weeks Turnaround",
    sla: "Sub-second 99+ Core Web Vitals",
    heroImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1800&q=80",
    icon: "terminal",
    highlights: [
      {
        icon: "speed",
        title: "Sub-Second Page Loads",
        description: "Built on Next.js, static server rendering, and edge CDN distribution for instant click-to-render speeds."
      },
      {
        icon: "devices",
        title: "Pixel-Perfect Responsive UI",
        description: "Meticulously optimized for 4K desktop, laptop, iPad, and mobile viewports with zero horizontal overflow."
      },
      {
        icon: "ads_click",
        title: "Conversion-Focused UX",
        description: "Frictionless form journeys, prominent sticky CTAs, interactive quotation tools, and smart lead routing."
      },
      {
        icon: "code",
        title: "Clean Headless Codebase",
        description: "Zero bloated plugins. Modular, maintainable TypeScript & Tailwind CSS architecture that never breaks."
      },
      {
        icon: "lock",
        title: "Enterprise Grade Security",
        description: "SSL encryption, sanitized inputs, CSRF protection, and GDPR/PIPEDA privacy compliance standard."
      },
      {
        icon: "sync",
        title: "Full CRM & Tool Integrations",
        description: "Direct webhooks to HubSpot, Salesforce, WhatsApp, Zapier, Google Tag Manager, and GA4."
      }
    ],
    deliverables: [
      {
        title: "Strategy, Wireframing & Bespoke UI Design",
        points: [
          "Competitor UX audits and user journey mapping",
          "Modern high-fidelity Figma prototypes with custom design systems",
          "Rich interactive micro-animations and typography hierarchy",
          "Stakeholder reviews and design signoff sprints"
        ]
      },
      {
        title: "Full-Stack Next.js & Frontend Engineering",
        points: [
          "App router, React Server Components, and modular code architecture",
          "Semantic HTML5 with accessibility (WCAG AA compliant)",
          "Dynamic blog/resources engine and SEO metadata injection",
          "Cross-browser and mobile device testing across 12+ screen resolutions"
        ]
      },
      {
        title: "Launch, Testing & Ongoing Support",
        points: [
          "Zero-downtime DNS deployment on Vercel / Cloudflare edge",
          "Complete GA4, Meta Pixel, and conversion event tagging",
          "Comprehensive client training and documentation handover",
          "30 days post-launch warranty and continuous maintenance plans"
        ]
      }
    ],
    industries: ["Real Estate", "Construction & Home Improvement", "Healthcare", "E-commerce & Retail", "Legal Services"],
    faqs: [
      {
        question: "How long does a custom website design and build take?",
        answer: "Most high-performance business website projects are delivered within 2 to 4 weeks using our disciplined two-week sprint methodology."
      },
      {
        question: "Will our team be able to update content easily?",
        answer: "Yes, we integrate user-friendly headless CMS solutions (or simple JSON content files) that allow non-technical team members to publish pages, blogs, and images with ease."
      },
      {
        question: "Is the website optimized for mobile phones and tablets?",
        answer: "Every single page is tested across standard desktop (1440px, 1280px), tablet (1024px, 768px), and mobile phone screens (430px, 390px, 375px) ensuring zero horizontal shift."
      }
    ],
    metaTitle: "Website Design Company & Custom Web Development | Step Up Marketing",
    metaDescription: "Build high-speed websites with our website design company. We offer custom web development, responsive website design, and modern UI/UX web design services.",
    keywords: ["website design company","custom web development","responsive website design","UI/UX web design services"]
  },
  {
    slug: "google-ads",
    title: "Google Ads Agency & Search Ads Marketing PPC Management",
    h2Heading: "Data-Driven Search Ads Marketing & Google Ads Optimization",
    bulletPoints: [
          "Granular keyword curation targeting high commercial intent queries while actively excluding wasteful negative keywords.",
          "Compelling responsive search ads and ad extensions crafted to maximize CTR and Quality Score.",
          "Advanced conversion tracking with Google Tag Manager and GA4 for real-time lead and sales measurement.",
          "Continuous bid adjustments and smart bidding strategies overseen by a certified Google Ads agency."
    ],
    shortTitle: "Google Ads",
    badge: "High-Intent Acquisition",
    tagline: "High-converting search ads, remarketing funnels, and precision target-CPA campaigns that capture buyer intent.",
    description: "Stop wasting your marketing budget on unqualified clicks. As a certified Google Ads agency, Step Up Marketing provides meticulous PPC campaign management and continuous Google Ads optimization. We build granular search ads marketing funnels that connect your offerings with high-intent commercial buyers actively seeking your solutions.",
    longDescription: [
      "Pay-Per-Click advertising only works when every single dollar is tied to qualified pipeline economics. At Step Up Marketing, our Google Certified Premier Partner team eliminates wasteful broad match spend, constructs tightly themed ad groups, writes persuasive ad copy, and matches campaigns with dedicated conversion landing pages.",
      "With real-time bid adjustments, negative keyword hygiene, and multi-touch CRM attribution, we consistently lower client acquisition costs while driving deal velocity."
    ],
    rating: "4.9 / 5.0",
    startingPrice: "Starting from $1,200/mo management",
    timeline: "7-Day Campaign Launch",
    sla: "Daily Optimization & Weekly Reports",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80",
    icon: "ads_click",
    highlights: [
      {
        icon: "filter_alt",
        title: "Negative Keyword Scrubbing",
        description: "Zero budget wasted on irrelevant searches, competitor job seekers, or free information hunters."
      },
      {
        icon: "currency_exchange",
        title: "Target-CPA & ROAS Bidding",
        description: "Algorithmic Smart Bidding configured around your true target cost per lead and closed customer value."
      },
      {
        icon: "web",
        title: "Dedicated Landing Pages",
        description: "A/B split-tested custom landing pages crafted to maximize Quality Score and click-to-lead rates."
      },
      {
        icon: "track_changes",
        title: "Competitor Conquesting",
        description: "Ethical search conquesting targeting competitor brand terms and alternative search queries."
      },
      {
        icon: "repeat",
        title: "Omnichannel Remarketing",
        description: "Display, YouTube, and Discovery retargeting that gently pulls undecided visitors back into the pipeline."
      },
      {
        icon: "bar_chart",
        title: "Complete Attribution Telemetry",
        description: "Call tracking, form tracking, and offline conversion sync directly into your sales CRM."
      }
    ],
    deliverables: [
      {
        title: "Account Structure & Campaign Engineering",
        points: [
          "Complete historical account audit and wasted spend diagnosis",
          "Single-theme ad groups (STAGs) and high-intent exact match keywords",
          "Dynamic search ads (DSA) and Performance Max calibration",
          "Ad assets: sitelinks, callouts, call buttons, and structured snippets"
        ]
      },
      {
        title: "Copywriting & High-Converting Creative",
        points: [
          "High-CTR responsive search ad copywriting",
          "Compelling value propositions tailored to decision-maker pain points",
          "High-contrast display & retargeting banners in all standard dimensions",
          "Landing page headline and CTA alignment"
        ]
      },
      {
        title: "Tracking, Telemetry & Continuous Optimization",
        points: [
          "Google Tag Manager server-side conversion tracking setup",
          "CallRail dynamic number insertion (DNI) setup for phone leads",
          "Weekly negative keyword pruning and search term reports",
          "Bi-weekly A/B testing of ad variations and bid adjustments"
        ]
      }
    ],
    industries: ["Automotive", "Real Estate", "Legal Services", "Construction & Home Improvement", "Healthcare"],
    faqs: [
      {
        question: "How much ad spend budget do we need to start?",
        answer: "We recommend a minimum ad spend of $1,500 to $3,000/month to allow Google's machine learning algorithm to gather sufficient conversion data and achieve optimal target-CPA efficiency."
      },
      {
        question: "Who owns the Google Ads account?",
        answer: "You do. You retain 100% full administrative ownership of your Google Ads account, billing profile, and conversion data forever."
      },
      {
        question: "How do you track actual phone calls and closed leads?",
        answer: "We deploy dynamic number insertion (DNI) and CRM webhook integrations so every inbound phone call and form submission is traced directly to the exact keyword that produced it."
      }
    ],
    metaTitle: "Google Ads Agency & PPC Campaign Management | Step Up Marketing",
    metaDescription: "Drive qualified leads fast with a certified Google Ads agency. We provide expert PPC campaign management, search ads marketing, and Google Ads optimization.",
    keywords: ["Google Ads agency","PPC campaign management","Google Ads optimization","search ads marketing"]
  },
  {
    slug: "social-media-management",
    title: "Social Media Management Services for Growing Businesses",
    h2Heading: "Why Choose Our Social Media Handling Agency",
    bulletPoints: [
          "Strategic content calendar management with structured weekly scheduling across Instagram, LinkedIn, and Facebook.",
          "High-quality visual creatives, trending reels, and engaging copywriting crafted for your local target audience.",
          "Dedicated community engagement and active direct message handling to nurture prospects into qualified leads.",
          "Monthly performance analytics tracking audience reach, engagement velocity, and measurable social media growth services."
    ],
    shortTitle: "Social Media Management",
    badge: "Organic Reach & Engagement",
    tagline: "Build a loyal community and predictable inbound pipeline across Instagram, LinkedIn, and Facebook.",
    description: "Step Up Marketing delivers comprehensive social media management services designed to turn everyday followers into paying customers. As a dedicated social media handling agency, our team handles strategic content calendar management, visual storytelling, and audience engagement to deliver dependable social media growth services for small and medium businesses.",
    longDescription: [
      "In a crowded digital marketplace, irregular posting and generic stock graphics damage your credibility. Step Up Marketing manages your entire social ecosystem with bespoke visual assets, thought-leadership ghostwriting, community moderation, and strategic cross-channel distribution.",
      "We focus on executive presence and business outcomes: driving direct website traffic, establishing category authority, and keeping your company top-of-mind with prospects."
    ],
    rating: "4.9 / 5.0",
    startingPrice: "Starting from $1,200/mo",
    timeline: "Monthly Content Calendar Delivery",
    sla: "Daily Community Engagement & Moderation",
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1800&q=80",
    icon: "hub",
    highlights: [
      {
        icon: "calendar_month",
        title: "Consistent Content Calendars",
        description: "Fully planned, designed, and approved editorial calendars 14 days in advance of every month."
      },
      {
        icon: "palette",
        title: "Bespoke Graphic Design & Reels",
        description: "Eye-catching carousels, infographics, short-form video reels, and brand-consistent visual design."
      },
      {
        icon: "history_edu",
        title: "Executive Ghostwriting",
        description: "Authoritative thought leadership for founders and C-level leaders on LinkedIn and X."
      },
      {
        icon: "forum",
        title: "Active Community Moderation",
        description: "Swift comment responses, DM qualification, and engagement with industry peers."
      },
      {
        icon: "analytics",
        title: "Monthly Growth Analytics",
        description: "Detailed engagement rates, follower quality insights, and website referral attribution."
      },
      {
        icon: "campaign",
        title: "Story & Highlights Strategy",
        description: "Interactive daily stories, product spotlights, client testimonials, and behind-the-scenes content."
      }
    ],
    deliverables: [
      {
        title: "Brand Voice & Visual Identity Guidelines",
        points: [
          "Social media brand audit and competitor positioning study",
          "Custom visual templates (Figma/Canva Pro) for stories, carousels, and single posts",
          "Tone of voice guidelines and content pillars definition",
          "Profile optimization (bios, banners, link trees, highlight covers)"
        ]
      },
      {
        title: "Content Creation & Production Sprints",
        points: [
          "16 to 24 high-impact custom posts per month across prioritized channels",
          "Engaging reels & short video snippets with captions and trending audio",
          "Hashtag research and algorithm-friendly copy formatting",
          "Bi-weekly client review and sign-off portal"
        ]
      },
      {
        title: "Growth, Outreach & Community Management",
        points: [
          "Daily response monitoring for comments, mentions, and inbound DMs",
          "Proactive networking and engagement on relevant industry discussions",
          "Influencer and partner brand collaboration outreach",
          "Comprehensive monthly performance telemetry and ROI analysis"
        ]
      }
    ],
    industries: ["Beauty & Wellness", "Hospitality & Travel", "Food & Beverage", "E-commerce & Retail", "Real Estate"],
    faqs: [
      {
        question: "Which social platforms do you manage?",
        answer: "We actively manage LinkedIn, Instagram, Facebook, X (Twitter), TikTok, and YouTube Shorts based on where your ideal buyers spend their attention."
      },
      {
        question: "Do we get to approve posts before they go live?",
        answer: "Always. All graphics, captions, and scheduling dates are loaded into a client approval portal where your team can review, request edits, or approve with one click."
      },
      {
        question: "Do you also create video reels and graphics?",
        answer: "Yes, our in-house design and multimedia team produces custom branded carousels, static graphics, animated posts, and high-impact vertical reels."
      }
    ],
    metaTitle: "Social Media Management Services | Social Media Handling Agency",
    metaDescription: "Scale your brand with expert social media management services. Our social media handling agency delivers content calendar management and organic growth.",
    keywords: ["social media management services","social media handling agency","content calendar management","social media growth services"]
  },
  {
    slug: "social-media-advertising",
    title: "Paid Social Media Marketing & High-ROI Ad Campaigns",
    h2Heading: "High-Converting Facebook Ads Agency & Instagram Ad Campaigns",
    bulletPoints: [
          "Laser-focused social media ad targeting leveraging custom audiences, lookalike modeling, and consumer buying behaviors.",
          "High-impact ad creatives, video hooks, and dynamic product catalogs developed by a proven Facebook ads agency.",
          "Multi-platform campaign execution across Meta, Instagram, and LinkedIn with continuous split testing to minimize CPA.",
          "Server-side conversion API tracking and transparent reporting ensuring closed-loop revenue attribution."
    ],
    shortTitle: "Social Media Advertising",
    badge: "High-ROI Paid Funnels",
    tagline: "Turn ad spend into measurable revenue with precision audience targeting and high-converting creative hooks.",
    description: "Maximize your advertising ROI with Step Up Marketing, a performance-focused Facebook ads agency serving ambitious SMBs. We launch high-converting Instagram ad campaigns and end-to-end paid social media marketing architectures calibrated with precision social media ad targeting to capture high-intent buyers and drive predictable revenue.",
    longDescription: [
      "Organic reach alone is not enough to hit aggressive enterprise revenue targets. Our paid social specialists build full-funnel paid advertising systems that target prospects by job title, industry, behavioral interests, and purchase intent.",
      "From UGC-style video ads and carousel creatives to advanced Meta Pixel / Conversions API (CAPI) setups, we ensure every advertising dollar yields transparent, measurable revenue."
    ],
    rating: "4.9 / 5.0",
    startingPrice: "Starting from $1,500/mo management",
    timeline: "7-Day Funnel Setup",
    sla: "A/B Creative Sprints & ROAS Optimization",
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1800&q=80",
    icon: "campaign",
    highlights: [
      {
        icon: "fingerprint",
        title: "Hyper-Targeted Audiences",
        description: "B2B LinkedIn targeting by company size, seniority, and skills; Meta targeting by intent and lookalikes."
      },
      {
        icon: "movie_creation",
        title: "Scroll-Stopping Ad Creatives",
        description: "High-converting motion graphics, video hooks, and graphic ad formats built for rapid testing."
      },
      {
        icon: "tune",
        title: "Meta Conversions API (CAPI)",
        description: "Server-side tracking setup bypassing iOS cookie restrictions to maintain accurate attribution."
      },
      {
        icon: "trending_up",
        title: "Full-Funnel Retargeting",
        description: "Multi-tiered retargeting addressing objections, showcasing proof, and driving checkout completion."
      },
      {
        icon: "sync_alt",
        title: "Automated Lead Sync",
        description: "Native lead forms instantly synchronized to your email marketing system and sales CRM."
      },
      {
        icon: "insights",
        title: "ROAS & LTV Optimization",
        description: "Daily budget allocation shifts towards winning creative angles and high-margin product lines."
      }
    ],
    deliverables: [
      {
        title: "Paid Funnel Strategy & Tracking Infrastructure",
        points: [
          "Target audience segmentation and competitor ad intelligence audit",
          "Meta Conversions API (CAPI) and LinkedIn Insight Tag server integration",
          "Custom conversion events and lead routing workflows",
          "Exclusion lists and custom audience hygiene"
        ]
      },
      {
        title: "Creative Production & Copywriting",
        points: [
          "10+ net-new ad creative variations per month (Static, Carousel, Short Video)",
          "Direct response copywriting tailored for emotional triggers and rational proof",
          "Dynamic creative testing (DCT) setup for rapid iteration",
          "Offer creation and irresistible lead magnet packaging"
        ]
      },
      {
        title: "Media Buying & Scaling Sprints",
        points: [
          "Bid strategy testing: Lowest Cost, Bid Cap, and Cost-Per-Result goals",
          "Budget scaling rules preventing ad fatigue and audience burn",
          "Live telemetry dashboard for ROAS, CAC, and lead volume",
          "Weekly strategy consultations with dedicated ad manager"
        ]
      }
    ],
    industries: ["E-commerce & Retail", "Real Estate", "Professional Services", "Education & Training", "Health & Medical"],
    faqs: [
      {
        question: "What is the difference between Google Ads and Social Ads?",
        answer: "Google Ads captures existing search intent (people already searching for your service), while Social Ads creates demand by proactively placing compelling offers in front of qualified buyers based on their profile and behavior."
      },
      {
        question: "How do you handle iOS privacy and cookie tracking changes?",
        answer: "We deploy server-side Conversions API (CAPI) on Meta and server Google Tag Manager containers, ensuring 95%+ data fidelity and complete attribution even on privacy-restricted devices."
      },
      {
        question: "Can you run B2B lead generation campaigns on LinkedIn?",
        answer: "Yes, we specialize in high-ticket B2B LinkedIn advertising targeting C-level executives, directors, and enterprise decision-makers with matched company lists."
      }
    ],
    metaTitle: "Facebook Ads Agency & Paid Social Media Marketing | Step Up",
    metaDescription: "Accelerate sales with our top-rated Facebook ads agency. We craft high-ROI Instagram ad campaigns and paid social media marketing with precision ad targeting.",
    keywords: ["Facebook ads agency","Instagram ad campaigns","paid social media marketing","social media ad targeting"]
  },
  {
    slug: "graphic-designing",
    title: "Professional Graphic Design Services & Visual Branding",
    h2Heading: "Premier Logo Design Agency & Creative Design Company",
    bulletPoints: [
          "Bespoke logo creation and visual identity guidelines designed by an experienced logo design agency.",
          "Comprehensive marketing collateral including business cards, brochures, presentation decks, and print-ready files.",
          "Attention-grabbing digital banners and high-converting ad graphics crafted by a dedicated creative design company.",
          "Full commercial asset ownership with vector source files delivered for web, social, and print applications."
    ],
    shortTitle: "Graphic Designing",
    badge: "Bespoke Brand Visuals",
    tagline: "Captivate prospects with cohesive visual brand collateral, packaging, and commercial design assets.",
    description: "Make a lasting first impression with professional graphic design services from Step Up Marketing. As a full-service logo design agency and creative design company, we craft bespoke visual assets, marketing collateral, and premium brand graphics design that elevate your brand perception and outperform competitors.",
    longDescription: [
      "Your visual identity directly signals the perceived value of your products and services. Inconsistent graphics, poor typography, and amateur layouts repel high-paying clients before they ever hear your pitch.",
      "Step Up Marketing's creative studio provides end-to-end graphic design solutions: from brand identity overhauls and digital marketing banners to premium print brochures, packaging, and presentation decks that leave a lasting impression."
    ],
    rating: "4.9 / 5.0",
    startingPrice: "Starting from $800 / project or monthly retainer",
    timeline: "3-5 Business Days Delivery",
    sla: "Unlimited Iterations within Scope",
    heroImage: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1800&q=80",
    icon: "palette",
    highlights: [
      {
        icon: "brush",
        title: "Complete Brand Identity",
        description: "Logo design, color palette tokens, typography suites, and comprehensive brand book guidelines."
      },
      {
        icon: "ad_units",
        title: "Digital Marketing Collateral",
        description: "High-converting display ad banners, social carousels, email newsletter templates, and web assets."
      },
      {
        icon: "menu_book",
        title: "Print & Corporate Collateral",
        description: "Luxury business cards, company profiles, multi-page brochures, event banners, and signage."
      },
      {
        icon: "slideshow",
        title: "Pitch Decks & Presentations",
        description: "Executive investor slide decks and sales presentations designed to close high-ticket deals."
      },
      {
        icon: "inventory_2",
        title: "Packaging & Merchandise",
        description: "Custom product packaging, label designs, and branded corporate merchandise that shines on shelves."
      },
      {
        icon: "vector_arts",
        title: "Vector Illustrations & Icons",
        description: "Custom icons, infographics, and bespoke vector illustrations that communicate complex ideas."
      }
    ],
    deliverables: [
      {
        title: "Discovery & Creative Concepting",
        points: [
          "Mood boards, visual references, and competitor aesthetics research",
          "Initial creative concept presentations (3 distinct design directions)",
          "Typography pairing and color psychology exploration",
          "Collaborative client feedback and refinement loops"
        ]
      },
      {
        title: "Execution & Asset Creation",
        points: [
          "Pixel-perfect digital designs prepared for web, mobile, and social formats",
          "Print-ready CMYK files with bleed lines, trim marks, and vector EPS outputs",
          "Source files delivered (Figma, Adobe Illustrator, Photoshop)",
          "Digital asset management organization and cloud delivery"
        ]
      },
      {
        title: "Brand Standards & Systemization",
        points: [
          "Comprehensive Brand Guidelines PDF (Logo spacing, color codes, typography rules)",
          "Reusable social media and document templates",
          "Iconography sets and visual device styles",
          "Full commercial copyright transfer to your organization"
        ]
      }
    ],
    industries: ["Real Estate", "Beauty & Wellness", "Hospitality & Travel", "Food & Beverage", "Corporate Services"],
    faqs: [
      {
        question: "Do you provide source files upon project completion?",
        answer: "Yes, 100%. You receive complete editable source files in Figma, Adobe Illustrator (AI), Photoshop (PSD), and print-ready high-resolution vector PDFs and PNGs."
      },
      {
        question: "How many revisions do we get?",
        answer: "We include multiple rounds of iterative feedback to ensure the final creative asset perfectly aligns with your brand standards and expectations."
      },
      {
        question: "Can we hire your graphic design studio on a monthly retainer?",
        answer: "Yes, we offer dedicated monthly creative retainers providing on-demand design support for ad banners, social assets, presentations, and sales collateral with guaranteed turnaround SLAs."
      }
    ],
    metaTitle: "Graphic Design Services & Logo Design Agency | Step Up Marketing",
    metaDescription: "Elevate your visual identity with professional graphic design services. Our logo design agency and creative design company crafts high-impact brand graphics.",
    keywords: ["graphic design services","logo design agency","creative design company","brand graphics design"]
  },
  {
    slug: "google-business-management",
    title: "Google My Business Optimization & Local Maps Ranking",
    h2Heading: "Complete GMB Profile Management & Local Listing Services",
    bulletPoints: [
          "Exhaustive Google My Business optimization covering verified categories, accurate NAP citations, and geo-tagged images.",
          "Active GMB profile management with weekly Google Posts, promotional offers, and customer Q&A management.",
          "Local citation syndication across major directories to elevate your organic Google Maps ranking.",
          "Automated review generation workflows and professional review responses that cultivate strong local social proof."
    ],
    shortTitle: "Google Business Management",
    badge: "Local Map Pack Dominance",
    tagline: "Capture nearby buyers right when they search. Dominate Google Map Pack rankings in your territory.",
    description: "Capture local buyers at the exact moment they search for your services. Our specialized Google My Business optimization and hands-on GMB profile management programs provide complete local business listing services engineered to secure dominant Google Maps ranking and drive a steady stream of calls, inquiries, and store visits.",
    longDescription: [
      "Over 46% of all Google searches have local commercial intent. When nearby prospects search for your services, showing up in the Google Maps Local 3-Pack is the difference between overflowing inquiries and complete obscurity.",
      "Step Up Marketing actively manages, optimizes, and protects your Google Business Profile (GBP) with weekly updates, geo-tagged photo uploads, review generation strategies, category optimization, and local citation synchronization across 50+ directories."
    ],
    rating: "4.95 / 5.0",
    startingPrice: "Starting from $650/mo",
    timeline: "14-Day Audit & Optimization",
    sla: "Weekly Updates & Review Monitoring",
    heroImage: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1800&q=80",
    icon: "location_on",
    highlights: [
      {
        icon: "pin_drop",
        title: "Google Maps 3-Pack Rank",
        description: "Systematic local signals engineered to elevate your pin into the coveted top 3 map positions."
      },
      {
        icon: "reviews",
        title: "Review Generation & Response",
        description: "Automated review request workflows and professional, keyword-rich responses to every customer review."
      },
      {
        icon: "edit_calendar",
        title: "Weekly Updates & Offers",
        description: "Regular Google Posts announcing services, seasonal offers, and company updates to signal active operation."
      },
      {
        icon: "add_photo_alternate",
        title: "Geo-Tagged Photo Uploads",
        description: "High-resolution, metadata-optimized photos uploaded regularly to boost visual engagement and authority."
      },
      {
        icon: "checklist",
        title: "Local NAP Citation Sync",
        description: "Harmonizing Name, Address, and Phone Number across 50+ local North American business directories."
      },
      {
        icon: "security",
        title: "Spam & Hijack Protection",
        description: "Continuous monitoring against malicious competitor edits, duplicate listings, and spam attacks."
      }
    ],
    deliverables: [
      {
        title: "Profile Audit & Structural Optimization",
        points: [
          "Primary and secondary category calibration matching search behavior",
          "Service menu and product catalog integration with direct booking links",
          "Verification and suspension troubleshooting with Google support",
          "Custom tracking parameters for Google Analytics 4 attribution"
        ]
      },
      {
        title: "Ongoing Content & Engagement Rhythm",
        points: [
          "4 to 8 weekly Google Posts with compelling call-to-actions",
          "Regular photo uploads (facility, team, projects, before/afters)",
          "Customer Q&A management and proactive FAQ population",
          "Weekly keyword-rich review reply management"
        ]
      },
      {
        title: "Local Authority & Geo-Grid Reporting",
        points: [
          "Geo-grid local ranking heatmaps tracking pin visibility mile-by-mile",
          "50+ Tier-1 local citation builds and consistency cleanup",
          "Inbound call, direction request, and website click telemetry",
          "Monthly local visibility progress review"
        ]
      }
    ],
    industries: ["Health & Medical", "Legal Services", "Automotive", "Construction & Home Improvement", "Real Estate"],
    faqs: [
      {
        question: "How long does it take to rank in Google's Local 3-Pack?",
        answer: "Most local profiles begin seeing notable visibility increases within 30 to 45 days after completing profile optimization, NAP synchronization, and regular geo-tagged posting."
      },
      {
        question: "Can you help remove fake or malicious negative reviews?",
        answer: "Yes, we actively dispute policy-violating reviews through Google's official legal and merchant support channels to protect your star rating."
      },
      {
        question: "Do you manage multi-location Google Business Profiles?",
        answer: "Yes, we manage businesses with multiple clinics, branches, or franchises across Ontario, Canada, and North America with centralized reporting."
      }
    ],
    metaTitle: "Google My Business Optimization & GMB Profile Management | Step Up",
    metaDescription: "Win local customers with Google My Business optimization. Our GMB profile management improves Google Maps ranking and local business listing visibility.",
    keywords: ["Google My Business optimization","GMB profile management","local business listing services","Google Maps ranking"]
  },
  {
    slug: "email-marketing",
    title: "Email Marketing Campaigns & Email Automation Services",
    h2Heading: "Full-Service Newsletter Marketing Agency & Email Automation",
    bulletPoints: [
          "Automated nurture sequences, welcome funnels, and cart abandonment triggers delivered via email automation services.",
          "Professionally branded, mobile-responsive email templates crafted by a specialized newsletter marketing agency.",
          "Subscriber segmentation based on customer interest and past engagement to boost open rates and click-throughs.",
          "Ongoing A/B testing of subject lines, sending times, and email copy backed by an actionable email marketing strategy."
    ],
    shortTitle: "Email Marketing",
    badge: "Automated Revenue Retention",
    tagline: "Nurture leads, recover abandoned carts, and maximize customer lifetime value with automated email funnels.",
    description: "Transform one-time buyers into repeat, high-lifetime-value clients. Our team crafts high-engagement email marketing campaigns powered by intelligent email automation services. As a full-service newsletter marketing agency, we build an airtight email marketing strategy that nurtures leads and drives steady revenue on autopilot.",
    longDescription: [
      "Email marketing consistently delivers the highest ROI of any digital channel—often exceeding 40:1 when executed with precision. Blasting generic monthly newsletters to an unsegmented list burns subscriber goodwill and hurts deliverability.",
      "Step Up Marketing engineers automated lifecycle flows: from welcome sequences and abandoned cart recovery to VIP loyalty loops, re-engagement campaigns, and high-converting promotional broadcasts that generate dependable cash flow on demand."
    ],
    rating: "4.9 / 5.0",
    startingPrice: "Starting from $1,200/mo",
    timeline: "2-Week Flow Implementation",
    sla: "99%+ Deliverability & DKIM Setup",
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80",
    icon: "mail",
    highlights: [
      {
        icon: "dynamic_feed",
        title: "Automated Lifecycle Flows",
        description: "Welcome journeys, post-purchase nurtures, abandoned checkout loops, and win-back sequences."
      },
      {
        icon: "groups",
        title: "Behavioral Segmentation",
        description: "Dynamic lists based on purchasing history, engagement recency, VIP spend tiers, and product interests."
      },
      {
        icon: "mark_email_read",
        title: "Dedicated Deliverability Setup",
        description: "Full SPF, DKIM, DMARC, and custom sending domain authentication preventing spam folder placement."
      },
      {
        icon: "edit_note",
        title: "Direct-Response Copywriting",
        description: "Engaging, conversational emails with high open rates and compelling conversion triggers."
      },
      {
        icon: "splitscreen",
        title: "Continuous A/B Subject Testing",
        description: "Rigorous testing of subject lines, preview texts, send times, and layout variations."
      },
      {
        icon: "attach_money",
        title: "Revenue Attribution Analytics",
        description: "Direct tracking from email clicks to dollars generated inside your e-commerce platform or CRM."
      }
    ],
    deliverables: [
      {
        title: "Infrastructure & Deliverability Hardening",
        points: [
          "Klaviyo, Mailchimp, ActiveCampaign, or HubSpot configuration",
          "DNS authentication: SPF, DKIM, and DMARC enforcement",
          "List cleaning, sunsetting inactive subscribers, and bounce rate reduction",
          "Sign-up popup form design with high-converting lead magnet packaging"
        ]
      },
      {
        title: "Core Automation Sequences (Flows)",
        points: [
          "High-converting 4-part Welcome series establishing brand loyalty",
          "Abandoned cart and checkout recovery sequences",
          "Customer thank-you, review request, and cross-sell workflows",
          "Lapsed buyer re-engagement and win-back sequences"
        ]
      },
      {
        title: "Campaign Management & Strategic Broadcasts",
        points: [
          "2 to 4 custom promotional broadcasts per month with bespoke graphics",
          "Seasonal holiday campaigns, flash sales, and product launch announcements",
          "Mobile-responsive HTML email template coding",
          "Monthly deliverability, open rate, click rate, and revenue reporting"
        ]
      }
    ],
    industries: ["E-commerce & Retail", "Hospitality & Travel", "Education & Training", "Professional Services", "Entertainment & Events"],
    faqs: [
      {
        question: "Which email platforms do you support?",
        answer: "We support Klaviyo, HubSpot, ActiveCampaign, Mailchimp, Omnisend, Brevo, and customized enterprise transactional email setups."
      },
      {
        question: "How do you ensure our emails don't end up in the Spam or Promotions tab?",
        answer: "We properly configure SPF, DKIM, DMARC records, warm up sending IP addresses, clean your list of invalid emails, and optimize text-to-image ratios."
      },
      {
        question: "Can email marketing work for B2B companies as well as B2C?",
        answer: "Absolutely. In B2B, email automation acts as an indispensable pipeline nurturing tool that educates buyers over multi-month sales cycles until they are ready for a demo."
      }
    ],
    metaTitle: "Email Marketing Campaigns & Automation Services | Step Up Marketing",
    metaDescription: "Engage subscribers and drive repeat sales with email marketing campaigns. Our newsletter marketing agency delivers automated email automation services.",
    keywords: ["email marketing campaigns","email automation services","newsletter marketing agency","email marketing strategy"]
  },
  {
    slug: "brand-strategy",
    title: "Brand Strategy Consulting & Strategic Brand Positioning Services",
    h2Heading: "Expert Brand Positioning Services & Identity Development",
    bulletPoints: [
          "In-depth customer research and competitor differentiation frameworks delivered through brand strategy consulting.",
          "Clear value propositions and market differentiation established through proven brand positioning services.",
          "Comprehensive brand identity development articulating brand vision, core values, tone of voice, and visual guidelines.",
          "Unified brand messaging strategy ensuring cohesive communication across digital ads, social media, and customer touchpoints."
    ],
    shortTitle: "Brand Strategy",
    badge: "Market Positioning Authority",
    tagline: "Articulate your true value proposition, establish competitive differentiation, and command market leadership.",
    description: "Carve out an uncontested position in your marketplace with expert brand strategy consulting from Step Up Marketing. We deliver strategic brand positioning services, cohesive brand identity development, and an authentic brand messaging strategy that builds trust, commands premium pricing, and fuels sustainable business growth.",
    longDescription: [
      "When companies struggle with pricing resistance or long sales cycles, the root cause is almost always weak market positioning. If your audience cannot immediately articulate why you are different and better, they default to comparing you on price.",
      "Step Up Marketing's brand strategy practice guides leadership teams through customer ICP profiling, competitor vulnerability analysis, value proposition refinement, and unified brand messaging playbooks that command premium pricing."
    ],
    rating: "4.95 / 5.0",
    startingPrice: "Starting from $2,500 / strategic sprint",
    timeline: "2-3 Weeks Strategic Sprint",
    sla: "Executive Workshop & Deliverable Playbook",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80",
    icon: "psychology_alt",
    highlights: [
      {
        icon: "radar",
        title: "Category & Competitor Audits",
        description: "Deep examination of market alternatives, customer complaints, and untapped white-space opportunities."
      },
      {
        icon: "person_search",
        title: "High-Value ICP Profiling",
        description: "Detailed persona breakdowns identifying your most profitable, friction-free customer segments."
      },
      {
        icon: "diamond",
        title: "Value Proposition Formulation",
        description: "Clear, undeniable statements that articulate why discerning clients choose you over everyone else."
      },
      {
        icon: "record_voice_over",
        title: "Messaging Matrix & Elevator Pitches",
        description: "Standardized elevator pitches, one-liners, and objection-handling scripts for sales and marketing."
      },
      {
        icon: "military_tech",
        title: "Competitive Moat Definition",
        description: "Uncovering and amplifying your proprietary advantages, methodologies, and technical superiority."
      },
      {
        icon: "workspace_premium",
        title: "Go-To-Market (GTM) Roadmap",
        description: "Actionable channel distribution plan mapping brand messaging directly to pipeline acquisition."
      }
    ],
    deliverables: [
      {
        title: "Discovery & Executive Strategy Workshop",
        points: [
          "Leadership team intake interview and customer perception survey",
          "Competitive landscape mapping and messaging gap matrix",
          "Unit economics analysis identifying highest-margin service lines",
          "Interactive positioning sprint workshop"
        ]
      },
      {
        title: "The Brand Positioning Playbook",
        points: [
          "Brand Purpose, Vision, Mission, and Core Values documentation",
          "Primary Value Proposition and supporting brand pillars",
          "Ideal Customer Profile (ICP) and Buyer Persona blueprints",
          "Elevator pitch variations (10-second, 30-second, 60-second)"
        ]
      },
      {
        title: "Go-To-Market Alignment & Implementation Guide",
        points: [
          "Website homepage messaging hierarchy and wireframe copy direction",
          "Sales team talk tracks, proposal language, and objection scripts",
          "Content marketing thematic pillars and campaign hooks",
          "Ongoing brand stewardship and team onboarding session"
        ]
      }
    ],
    industries: ["Professional Services", "Real Estate", "Legal Services", "Manufacturing & Industrial", "Healthcare"],
    faqs: [
      {
        question: "When does an enterprise need a brand strategy overhaul?",
        answer: "Whenever you encounter persistent price objections, enter a new market, launch high-ticket enterprise offerings, or find that your current website messaging no longer reflects your actual capabilities."
      },
      {
        question: "What is the primary deliverable of a brand strategy engagement?",
        answer: "You receive the Step Up Brand Positioning Playbook—a definitive, comprehensive blueprint detailing your ICPs, value propositions, elevator pitches, and messaging frameworks that align your marketing, sales, and executive teams."
      },
      {
        question: "How does brand strategy integrate with website development and SEO?",
        answer: "Brand strategy is the bedrock foundation. It dictates the exact headlines, architecture, and value points that go into your Next.js website and the commercial keywords targeted by our SEO campaigns."
      }
    ],
    metaTitle: "Brand Strategy Consulting & Positioning Services | Step Up Marketing",
    metaDescription: "Stand out in competitive markets with brand strategy consulting. We offer brand positioning services, brand identity development, and clear messaging.",
    keywords: ["brand strategy consulting","brand positioning services","brand identity development","brand messaging strategy"]
  }
];

export const SERVICE_CHECKBOX_OPTIONS = [
  "Social Media Management",
  "Social Media Advertising",
  "Graphic Designing",
  "Google Business Management",
  "Google Ads",
  "Web Design & Development",
  "Search Engine Optimization (SEO)",
  "Email Marketing",
  "Brand Strategy"
];

export const INDUSTRY_DROPDOWN_OPTIONS = [
  "Automotive",
  "Beauty & Wellness",
  "Construction & Home Improvement",
  "E-commerce & Retail",
  "Education & Training",
  "Entertainment & Events",
  "Food & Beverage",
  "Health & Medical",
  "Hospitality & Travel",
  "Legal Services",
  "Manufacturing & Industrial",
  "Non-profit & Social Services",
  "Professional Services",
  "Real Estate",
  "Others"
];
