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
    h2Heading: "Targeted Local SEO Services & High-Impact Search Rankings",
    bulletPoints: [
      "Targeted local SEO services designed to capture high-intent regional buyer searches and dominate Google Local results.",
      "Sustainable white-hat link acquisition and topical authority building designed for compounding organic traffic growth.",
      "Meticulous technical audits, crawl budget optimization, and structured schema markup ensuring rapid indexing.",
      "Transparent monthly keyword telemetry and closed-loop CRM attribution reporting showing real revenue generated from search."
    ],
    shortTitle: "Search Engine Optimization (SEO)",
    badge: "Organic Authority & GEO",
    tagline: "Dominate Google search results and generative AI answer engines like SearchGPT and Perplexity.",
    description: "Achieve long-term search visibility and capture qualified prospective clients. As a dedicated SEO services agency, Step Up Marketing builds custom search architectures that deliver real commercial pipeline.",
    longDescription: [
      "Modern search engines prioritize authoritative content and flawless user experience over simple keyword frequency. Through comprehensive on-page SEO optimization, our technical team fixes crawl inefficiencies, refines schema metadata, and aligns site structure with intent-rich buyer queries.",
      "We combine technical foundation audits with high-authority digital PR and topical clusters to position your business as the definitive leader across traditional search engines and generative AI answer engines."
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
    h2Heading: "Responsive Website Design & Conversion-Focused UI/UX Web Design Services",
    bulletPoints: [
      "Mobile-first, lightning-fast responsive website design that delivers a seamless browsing experience across all smartphones, tablets, and desktops.",
      "User-centric UI/UX web design services that guide visitors smoothly through high-converting inquiry funnels and booking forms.",
      "Sub-second load times engineered with clean semantic code, edge caching, and optimized media assets.",
      "Built-in technical SEO foundations, schema markup, and an intuitive CMS allowing your team to update content effortlessly."
    ],
    shortTitle: "Web Design & Development",
    badge: "Sub-Second Engineering",
    tagline: "High-performance websites engineered with Next.js, React, and modern conversion architectures.",
    description: "Turn your digital presence into a 24/7 revenue engine. As an award-winning website design company, Step Up Marketing creates modern, sub-second loading web solutions tailored to help small and medium businesses scale.",
    longDescription: [
      "Your website is your company's most vital commercial touchpoint. Through modern custom web development, our engineering team builds bespoke web applications on Next.js and React that eliminate user friction and maximize lead capture.",
      "From sub-second Core Web Vitals to integrated CRM booking workflows, every website we build is crafted to transform casual traffic into high-value sales conversations."
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
    h2Heading: "Continuous Google Ads Optimization & High-Intent Campaign Scaling",
    bulletPoints: [
      "Daily Google Ads optimization and smart bidding calibration to decrease cost-per-click and maximize return on ad spend.",
      "High-intent search ads marketing architectures that capture bottom-funnel customers ready to make an immediate purchasing decision.",
      "Advanced conversion tracking and Google Tag Manager setups for complete visibility into lead and revenue metrics.",
      "Transparent weekly reporting with clear attribution data highlighting cost-per-acquisition and pipeline value."
    ],
    shortTitle: "Google Ads",
    badge: "High-Intent Acquisition",
    tagline: "High-converting search ads, remarketing funnels, and precision target-CPA campaigns that capture buyer intent.",
    description: "Connect with ready-to-buy commercial customers actively searching for your services with a certified Google Ads agency focused on bottom-line profitability.",
    longDescription: [
      "Wasting advertising budget on irrelevant clicks is the most common pitfall in search advertising. Through disciplined PPC campaign management, Step Up Marketing structures tightly themed ad groups, crafts compelling direct-response copy, and pairs every ad with high-converting landing pages.",
      "We maintain continuous negative keyword scrubbing and monitor CRM attribution so you only invest capital into search queries that convert into high-margin clients."
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
    h2Heading: "Strategic Content Calendar Management & Audience Retention",
    bulletPoints: [
      "Strategic monthly content calendar management aligned with your promotional launches, holiday campaigns, and product announcements.",
      "Proven social media growth services leveraging trending short-form video reels, carousels, and proactive community engagement.",
      "Daily audience moderation and direct message response protocols ensuring zero prospective customer inquiries go unanswered.",
      "Comprehensive monthly performance telemetry tracking real business outcomes, follower growth velocity, and lead attribution."
    ],
    shortTitle: "Social Media Management",
    badge: "Organic Reach & Engagement",
    tagline: "Build a loyal community and predictable inbound pipeline across Instagram, LinkedIn, and Facebook.",
    description: "Build an engaged digital audience and turn followers into paying customers with social media management services engineered for ambitious businesses.",
    longDescription: [
      "In an overcrowded digital landscape, sporadic posting and generic graphics dilute your brand authority. As a dedicated social media handling agency, Step Up Marketing takes full ownership of your channel presence with bespoke visual assets, executive thought leadership, and active community engagement.",
      "We focus on real business outcomes: driving direct website traffic, establishing category authority, and keeping your company top-of-mind with prospective clients."
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
    h2Heading: "High-Converting Instagram Ad Campaigns & Precision Targeting",
    bulletPoints: [
      "High-converting Instagram ad campaigns designed specifically to stop the scroll and drive instant user action.",
      "Laser-precision social media ad targeting utilizing custom audiences, lookalike modeling, and pixel behavioral triggers.",
      "Full-funnel customer acquisition architectures connecting top-of-funnel discovery to high-margin retargeting flows.",
      "Real-time budget pacing and conversion rate optimization that consistently lowers your cost-per-acquisition."
    ],
    shortTitle: "Social Media Advertising",
    badge: "High-ROI Paid Funnels",
    tagline: "Turn ad spend into measurable revenue with precision audience targeting and high-converting creative hooks.",
    description: "Generate predictable customer acquisition and scale your revenue with a results-obsessed Facebook ads agency dedicated to high-return advertising funnels.",
    longDescription: [
      "Organic reach alone is rarely enough to hit aggressive commercial growth targets. Our approach to paid social media marketing combines rigorous financial modeling, rapid creative iteration, and multi-stage remarketing to turn cold audiences into loyal customers.",
      "From UGC-style video ads and carousel creatives to advanced Meta Pixel and Conversions API (CAPI) setups, we ensure every advertising dollar yields transparent, measurable revenue."
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
    h2Heading: "Premier Logo Design Agency & Complete Brand Systems",
    bulletPoints: [
      "Memorable visual identities and vector brand marks developed by our experienced logo design agency.",
      "Cohesive brand graphics design across pitch decks, digital advertising banners, packaging, and marketing collateral.",
      "Comprehensive typography, color palette, and asset guidelines for seamless multi-platform brand consistency.",
      "Full commercial usage rights and high-resolution master vector files delivered ready for web and print applications."
    ],
    shortTitle: "Graphic Designing",
    badge: "Bespoke Brand Visuals",
    tagline: "Captivate prospects with cohesive visual brand collateral, packaging, and commercial design assets.",
    description: "Command immediate attention and build instant brand credibility with bespoke graphic design services crafted for modern, growing businesses.",
    longDescription: [
      "Your visual identity directly signals the perceived value of your products and services. As an innovative creative design company, Step Up Marketing delivers visually captivating assets that communicate authority, clarify complex value propositions, and inspire immediate action across digital and print channels.",
      "Whether launching a new brand or elevating established collateral, our design studio produces production-ready creative assets tailored to your exact industry standards and commercial goals."
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
    h2Heading: "Dominate Google Maps Ranking & Local Search Visibility",
    bulletPoints: [
      "Rank consistently in the Google Local 3-Pack and drive inbound phone calls with higher Google Maps ranking.",
      "NAP consistency across top regional citations and directories powered by our local business listing services.",
      "Proactive customer review generation strategies and review response playbooks to build lasting community trust.",
      "Localized geo-grid tracking and search performance reports showcasing monthly increases in directional and phone inquiries."
    ],
    shortTitle: "Google Business Management",
    badge: "Local Map Pack Dominance",
    tagline: "Capture nearby buyers right when they search. Dominate Google Map Pack rankings in your territory.",
    description: "Capture high-intent local customers right when they search nearby with expert Google My Business optimization that drives direct calls and store visits.",
    longDescription: [
      "Over 46% of all Google searches have local commercial intent. Our hands-on GMB profile management ensures your business information remains flawless, active, and fully optimized to capture prime visibility when buyers search in your area.",
      "We handle continuous geo-tagged photo uploads, weekly promotional updates, review generation funnels, and attribute auditing to build unmatched local topical authority."
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
    h2Heading: "Full-Service Newsletter Marketing Agency & Retention Strategy",
    bulletPoints: [
      "Engaging, high-open-rate newsletters crafted by our experienced newsletter marketing agency.",
      "Comprehensive lifecycle email marketing strategy integrating acquisition, nurturing, retention, and win-back flows.",
      "Advanced audience segmentation and dynamic content personalization to maximize click-through and purchase rates.",
      "Rigorous list hygiene, SPF/DKIM/DMARC verification, and deliverability monitoring to ensure 99%+ inbox placement."
    ],
    shortTitle: "Email Marketing",
    badge: "Automated Revenue Retention",
    tagline: "Nurture leads, recover abandoned carts, and maximize customer lifetime value with automated email funnels.",
    description: "Turn one-time visitors into repeat lifelong customers with targeted email marketing campaigns that drive consistent, predictable revenue.",
    longDescription: [
      "Email marketing consistently delivers the highest ROI of any digital marketing channel. With turnkey email automation services, Step Up Marketing builds behavioral triggers, welcome funnels, and cart abandonment sequences that generate sales while you sleep.",
      "We maintain pristine sender reputation, optimize inbox deliverability, and segment your audience so every subscriber receives relevant, timely, and persuasive communication."
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
    h2Heading: "Brand Identity Development & Unified Messaging Systems",
    bulletPoints: [
      "Comprehensive brand identity development articulating your core vision, mission, personality, and visual design standards.",
      "Unified brand messaging strategy providing persuasive copy frameworks for website, sales decks, and advertising.",
      "Customer persona research and Ideal Customer Profile (ICP) mapping to ensure resonant, high-converting messaging.",
      "Competitive vulnerability analysis and positioning frameworks that protect margins and command market leadership."
    ],
    shortTitle: "Brand Strategy",
    badge: "Market Positioning Authority",
    tagline: "Articulate your true value proposition, establish competitive differentiation, and command market leadership.",
    description: "Carve out an uncontested market position and command premium pricing with senior brand strategy consulting from Step Up Marketing.",
    longDescription: [
      "When businesses struggle with price resistance, the root cause is almost always weak differentiation. Through rigorous brand positioning services, we analyze your target audience, evaluate competitors, and establish a distinctive value proposition that makes your company the obvious choice.",
      "We translate strategic positioning into actionable brand guidelines, empowering your marketing, sales, and executive teams to communicate with absolute clarity and authority."
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
