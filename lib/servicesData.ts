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
    "slug": "branding-identity",
    "title": "Branding & Identity Design Services in Mississauga & GTA",
    "h2Heading": "Build a Recognizable, Professional Brand That Connects With Customers",
    "bulletPoints": [
      "Logo design, brand refresh, and comprehensive visual identity development.",
      "Custom brand guidelines, colour palettes, typography, and official style documents.",
      "Social media templates, business cards, print marketing collateral, and digital promotional assets.",
      "Cohesive brand messaging and positioning that establishes instant trust and customer recognition."
    ],
    "shortTitle": "Branding & Identity",
    "badge": "Identity & Visual Assets",
    "tagline": "Build a recognizable, professional brand that reflects your business and connects with your customers.",
    "description": "Your brand is often the first impression someone has of your business. From your logo and colours to your messaging and marketing materials, every element should communicate who you are and what makes your business different.",
    "longDescription": [
      "We help small and medium-sized businesses develop and maintain a consistent visual identity that looks professional across websites, social media, advertising, and print materials.",
      "Our process begins with brand discovery, diving into your industry, competitors, and ideal customers to craft a brand identity that not only looks exceptional but supports your long-term growth objectives."
    ],
    "rating": "5.0 / 5.0",
    "startingPrice": "Custom Quote",
    "timeline": "2 to 3 Weeks",
    "sla": "Full Vector & Brand Kit Delivery",
    "heroImage": "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1800&q=80",
    "icon": "palette",
    "highlights": [
      {
        "icon": "brush",
        "title": "Logo Design & Refresh",
        "description": "Modern, memorable logo marks crafted for digital and print versatility."
      },
      {
        "icon": "palette",
        "title": "Colours & Typography",
        "description": "Curated colour systems, font pairings, and visual hierarchy standards."
      },
      {
        "icon": "menu_book",
        "title": "Brand Guidelines",
        "description": "Complete brand playbook detailing usage rules, tone of voice, and asset specifications."
      },
      {
        "icon": "share",
        "title": "Social Media Templates",
        "description": "Custom Canva or Figma branded templates for reels, carousels, and stories."
      },
      {
        "icon": "badge",
        "title": "Print & Collateral",
        "description": "Business cards, brochures, flyers, signage, and marketing leave-behinds."
      },
      {
        "icon": "sync_alt",
        "title": "Brand Consistency",
        "description": "Ensuring your identity remains unified across web, socials, and campaigns."
      }
    ],
    "deliverables": [
      {
        "title": "Visual Assets Kit",
        "points": [
          "Vector logo files (SVG, PNG, EPS)",
          "Primary and secondary logo variations",
          "Favicon and social media profile icons"
        ]
      },
      {
        "title": "Brand Standards",
        "points": [
          "Official brand style guide PDF",
          "Typography hierarchy specifications",
          "Colour palette codes (HEX, RGB, CMYK)"
        ]
      },
      {
        "title": "Marketing Collateral",
        "points": [
          "Branded social post templates",
          "Print-ready business card files",
          "Email signature graphics"
        ]
      }
    ],
    "industries": [
      "Real Estate",
      "Home Services",
      "Healthcare & Clinics",
      "Automotive",
      "Professional Services",
      "Beauty & Lifestyle"
    ],
    "faqs": [
      {
        "question": "What is included in the Branding & Identity service?",
        "answer": "We provide complete brand discovery, logo design or refresh, typography and colour selection, brand guidelines, and essential collateral templates like business cards and social media kits."
      },
      {
        "question": "How long does a brand identity project take?",
        "answer": "Most branding projects are completed within 2 to 3 weeks, including research, concept development, and revision rounds."
      },
      {
        "question": "Do you provide editable files?",
        "answer": "Yes, you receive all original vector source files (SVG, EPS, PNG, PDF) along with editable template files where applicable."
      }
    ],
    "metaTitle": "Branding & Identity Design Services Mississauga & GTA | Step Up Marketing",
    "metaDescription": "Professional logo design, brand guidelines, and visual identity for growing businesses in Mississauga and the Greater Toronto Area.",
    "keywords": [
      "branding services mississauga",
      "brand identity design gta",
      "logo design mississauga",
      "graphic design ontario"
    ]
  },
  {
    "slug": "website-design-management",
    "title": "Website Design & Management Services in Mississauga & GTA",
    "h2Heading": "Fast, User-Friendly Websites Backed by Expert Technical Foundations",
    "bulletPoints": [
      "Custom WordPress and modern web development designed for optimal user experience and conversions.",
      "Fully responsive, mobile-optimized layouts with fast load times and Core Web Vitals optimization.",
      "SEO-friendly site architecture, on-page SEO foundations, and conversion tracking integration.",
      "Ongoing monthly website management, security updates, backups, troubleshooting, and support."
    ],
    "shortTitle": "Website Design & Management",
    "badge": "Core Foundation",
    "tagline": "Beautiful websites are great, but a strong technical foundation is what makes them work.",
    "description": "We build professional, fast, user-friendly websites designed to support your business goals and turn visitors into customers. From strategy to development, launch, and monthly management, we handle the entire process.",
    "longDescription": [
      "Most business owners shouldn't have to figure out which platform to use, how their website should be structured, or what technical features they actually need. That's where our expertise comes in.",
      "We take the time to understand your business, your customers, and your goals before recommending the right approach. Our focus is on building websites that are not only visually appealing but also fast, mobile-friendly, easy to navigate, SEO-ready, and designed to encourage visitors to take action."
    ],
    "rating": "5.0 / 5.0",
    "startingPrice": "Custom Quote / Monthly Plans",
    "timeline": "2 to 4 Weeks",
    "sla": "Zero Downtime & Monthly Maintenance",
    "heroImage": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=80",
    "icon": "terminal",
    "highlights": [
      {
        "icon": "devices",
        "title": "Responsive & Mobile-First",
        "description": "Flawless performance across smartphones, tablets, laptops, and desktop screens."
      },
      {
        "icon": "speed",
        "title": "Speed & Core Web Vitals",
        "description": "Engineered for sub-second load times and high Google PageSpeed scores."
      },
      {
        "icon": "search",
        "title": "SEO-Ready Architecture",
        "description": "Structured on-page metadata, semantic HTML, schema, and clean URL hierarchy."
      },
      {
        "icon": "conversion_path",
        "title": "Conversion UX",
        "description": "Intuitive navigation and strategic calls-to-action that turn visitors into customer inquiries."
      },
      {
        "icon": "security",
        "title": "Security & Backups",
        "description": "SSL encryption, automated backups, malware protection, and regular software updates."
      },
      {
        "icon": "support_agent",
        "title": "Monthly Management",
        "description": "Dedicated ongoing technical support, content updates, and troubleshooting."
      }
    ],
    "deliverables": [
      {
        "title": "Design & Development",
        "points": [
          "Custom responsive website build",
          "Clean navigation and user experience",
          "Contact forms and booking integrations"
        ]
      },
      {
        "title": "SEO & Tracking Setup",
        "points": [
          "Google Analytics 4 configuration",
          "Google Search Console integration",
          "Conversion event tracking setup"
        ]
      },
      {
        "title": "Ongoing Support",
        "points": [
          "Monthly security and plugin updates",
          "Cloud backups and uptime monitoring",
          "Priority content updates and troubleshooting"
        ]
      }
    ],
    "industries": [
      "Home Services & Contractors",
      "Real Estate",
      "Automotive",
      "Clinics & Wellness",
      "Professional Services",
      "Retail"
    ],
    "faqs": [
      {
        "question": "What platforms do you build websites on?",
        "answer": "We build custom websites on WordPress and modern web stacks tailored to your specific functionality requirements, budget, and ease of management."
      },
      {
        "question": "Is SEO included in website development?",
        "answer": "Yes! Every website we build includes foundational on-page SEO, clean URL architecture, metadata, schema markup, and speed optimization."
      },
      {
        "question": "Do you provide ongoing website maintenance?",
        "answer": "Yes, we offer ongoing website management packages covering security, backups, content updates, plugin maintenance, and technical troubleshooting."
      }
    ],
    "metaTitle": "Website Design & Management Mississauga & Toronto | Step Up Marketing",
    "metaDescription": "Professional website design and ongoing management for small and medium businesses in Mississauga and the Greater Toronto Area.",
    "keywords": [
      "web design mississauga",
      "website management gta",
      "wordpress developer mississauga",
      "responsive web design ontario"
    ]
  },
  {
    "slug": "google-business-management",
    "title": "Google Business Profile Management Services in Mississauga & GTA",
    "h2Heading": "Dominate Local Search & Maps in Your City to Win High-Intent Customers",
    "bulletPoints": [
      "Complete Google Business Profile setup, verification support, and category optimization.",
      "Local keyword integration and engaging monthly Google Posts with photo updates.",
      "Review monitoring, response management, and active assets to increase 5-star customer reviews.",
      "Google Maps visibility tracking and multi-location profile management across Ontario."
    ],
    "shortTitle": "Google Business (GBP)",
    "badge": "Local 3-Pack Dominance",
    "tagline": "Help local customers discover your business when they search on Google Search and Maps.",
    "description": "When someone searches for a service in their city, your business needs a strong local presence. We optimize and manage your Google Business Profile to attract high-intent local customer calls, inquiries, and visits.",
    "longDescription": [
      "Google Business Profile is an essential tool for local businesses, helping customers find essential information, read reviews, view services, and contact you directly.",
      "We help businesses set up, optimize, and maintain their profiles with regular updates, keyword-rich descriptions, photo additions, and review growth strategies to keep you ahead of local competitors."
    ],
    "rating": "4.9 / 5.0",
    "startingPrice": "Contact for Pricing",
    "timeline": "Immediate Setup & Monthly Sprints",
    "sla": "Weekly Updates & Review Monitoring",
    "heroImage": "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1800&q=80",
    "icon": "location_on",
    "highlights": [
      {
        "icon": "verified",
        "title": "Setup & Verification",
        "description": "Complete account verification and category configuration for accurate local mapping."
      },
      {
        "icon": "rate_review",
        "title": "Review Growth Strategy",
        "description": "Turn satisfied clients into glowing 5-star reviews with proven QR and link assets."
      },
      {
        "icon": "post_add",
        "title": "Monthly Google Posts",
        "description": "Keep your profile active with promotional offers, service highlights, and news."
      },
      {
        "icon": "photo_library",
        "title": "Photo & Media Uploads",
        "description": "High-quality visual updates showcasing your workplace, team, and projects."
      },
      {
        "icon": "map",
        "title": "Local Maps Rank Tracking",
        "description": "Track your position in the local 3-pack across key neighborhood zip codes."
      },
      {
        "icon": "store",
        "title": "Multi-Location Support",
        "description": "Unified management for businesses with multiple branches or service areas."
      }
    ],
    "deliverables": [
      {
        "title": "Profile Optimization",
        "points": [
          "Complete category and service listing setup",
          "Local keyword-optimized description",
          "Accurate business hours and contact details"
        ]
      },
      {
        "title": "Monthly Maintenance",
        "points": [
          "Regular weekly Google Posts and updates",
          "New photo and media additions",
          "Review response management and spam removal"
        ]
      },
      {
        "title": "Reporting",
        "points": [
          "Monthly call, direction, and website click telemetry",
          "Search queries and discovery insights"
        ]
      }
    ],
    "industries": [
      "Home Contractors & Trades",
      "Auto Repair & Car Wash",
      "Medical & Dental Clinics",
      "Real Estate Agents",
      "Restaurants & Salons"
    ],
    "faqs": [
      {
        "question": "Why is Google Business Profile important for local businesses?",
        "answer": "When customers search 'plumber near me' or 'accountant in Mississauga', Google shows the Local 3-Pack before regular search results. An optimized profile is the fastest way to get direct phone calls."
      },
      {
        "question": "How do you help us get more Google reviews?",
        "answer": "We provide easy-to-use review request templates, direct review links, and QR code assets that make it seamless for your happy customers to leave 5-star reviews."
      }
    ],
    "metaTitle": "Google Business Profile Management Mississauga & GTA | Step Up Marketing",
    "metaDescription": "Boost your Google Maps rankings and local customer inquiries with dedicated Google Business Profile optimization in Mississauga and GTA.",
    "keywords": [
      "google business profile management mississauga",
      "local seo gta",
      "google maps optimization ontario",
      "gbp management canada"
    ]
  },
  {
    "slug": "social-media-management",
    "title": "Social Media Management Services in Mississauga & GTA",
    "h2Heading": "Social Media With Purpose, Personality, and a Little Less of the Generic Stuff",
    "bulletPoints": [
      "Custom monthly content strategies and calendars tailored to your brand and audience.",
      "Original creative concepts, custom branded graphic design, reels, and video editing.",
      "Brand-aligned captions, storytelling copywriting, and strategic hashtag/trend research.",
      "Consistent publishing, active community engagement, and monthly performance insights."
    ],
    "shortTitle": "Social Media Management",
    "badge": "Brand Voice & Community",
    "tagline": "Social media with a purpose, personality, and a little less of the generic stuff.",
    "description": "We bring strategy, creativity, and consistency together to help your business connect with the right audience, build recognition, and stay top of mind across Instagram, Facebook, and LinkedIn.",
    "longDescription": [
      "Your customers are on social media. The question is: are you giving them a reason to notice, remember, and connect with your business? Good social media doesn't happen by simply posting more. It starts with understanding what to post, why it matters, and who you're trying to reach.",
      "We believe in personality over generic, overly polished content. Rather than filling your feed with repetitive templates or robotic AI captions, we focus on original ideas, authentic storytelling, and content that feels human."
    ],
    "rating": "5.0 / 5.0",
    "startingPrice": "Customized Monthly Packages",
    "timeline": "Monthly Retainer",
    "sla": "Bi-Weekly Calendar Approvals",
    "heroImage": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1800&q=80",
    "icon": "hub",
    "highlights": [
      {
        "icon": "calendar_month",
        "title": "Monthly Content Calendars",
        "description": "Structured content plans with themes, captions, and graphics approved in advance."
      },
      {
        "icon": "movie",
        "title": "Reels & Short-Form Video",
        "description": "Engaging video edits and trending sound integration designed for high organic reach."
      },
      {
        "icon": "auto_awesome",
        "title": "Custom Graphic Design",
        "description": "Branded carousels, infographics, and promotional banners tailored to your aesthetic."
      },
      {
        "icon": "chat",
        "title": "Human Copywriting",
        "description": "Captions written in your authentic brand voice that invite conversation and interaction."
      },
      {
        "icon": "forum",
        "title": "Community Management",
        "description": "Monitoring comments and direct messages to foster responsive customer relationships."
      },
      {
        "icon": "analytics",
        "title": "Monthly Reporting",
        "description": "Transparent review of follower growth, engagement rates, and top-performing content."
      }
    ],
    "deliverables": [
      {
        "title": "Content Creation",
        "points": [
          "Custom graphic feed posts and carousels",
          "Short-form video editing for Reels & TikTok",
          "Interactive Stories and promotional announcements"
        ]
      },
      {
        "title": "Publishing & Coordination",
        "points": [
          "Scheduling and multi-platform publishing",
          "Copywriting with strategic calls-to-action",
          "Hashtag and local keyword optimization"
        ]
      }
    ],
    "industries": [
      "Lifestyle & Beauty",
      "Real Estate",
      "Home Renovation",
      "Healthcare & Wellness",
      "Hospitality",
      "Automotive"
    ],
    "faqs": [
      {
        "question": "Which social media platforms do you manage?",
        "answer": "We primarily manage Instagram, Facebook, and LinkedIn, selecting the platforms most relevant to where your ideal customers spend their time."
      },
      {
        "question": "Do we get to approve the content before it gets posted?",
        "answer": "Absolutely. We share monthly content calendars with all graphics, captions, and dates for your review and approval before anything goes live."
      }
    ],
    "metaTitle": "Social Media Management Mississauga & Toronto | Step Up Marketing",
    "metaDescription": "Authentic, high-engagement social media management for growing businesses in Mississauga and the Greater Toronto Area.",
    "keywords": [
      "social media management mississauga",
      "instagram marketing gta",
      "social media agency ontario",
      "content creation canada"
    ]
  },
  {
    "slug": "content-marketing",
    "title": "Content Marketing Strategy & Execution in Mississauga & GTA",
    "h2Heading": "A Holistic Approach That Builds Your Digital Brand Identity Through Value",
    "bulletPoints": [
      "Cross-platform content strategy aligning blogs, email newsletters, and social channels.",
      "Educational, informative, and engaging content that establishes your authority and trust.",
      "SEO-optimized blog articles answering high-intent customer questions and search queries.",
      "Content repurposing workflows turning one key insight into multi-channel marketing assets."
    ],
    "shortTitle": "Content Marketing",
    "badge": "Authority & Thought Leadership",
    "tagline": "A more holistic approach to marketing that builds your brand's digital identity through valuable, relevant content.",
    "description": "Not every interaction with your business needs to be a sales pitch. We create content that educates, entertains, inspires, and solves customer problems while positioning your business as a trusted industry authority.",
    "longDescription": [
      "Content marketing takes a holistic approach to building your brand's presence online. Rather than treating each channel separately, we look at how your content works together across platforms to create a consistent, recognizable digital identity.",
      "We find out what questions your customers are asking, what challenges they face, and what unique expertise your business has. Then we turn that knowledge into blogs, newsletters, and resources your audience actually cares about."
    ],
    "rating": "4.9 / 5.0",
    "startingPrice": "Contact for Pricing",
    "timeline": "Ongoing Monthly Sprints",
    "sla": "Editorial Calendar Delivered Monthly",
    "heroImage": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1800&q=80",
    "icon": "article",
    "highlights": [
      {
        "icon": "menu_book",
        "title": "Editorial Strategy",
        "description": "Structured calendars mapped to seasonal customer needs and industry trends."
      },
      {
        "icon": "edit_note",
        "title": "SEO Blog Articles",
        "description": "Well-researched, authoritative articles targeting high-intent long-tail keywords."
      },
      {
        "icon": "psychology",
        "title": "Thought Leadership",
        "description": "Positioning founders and business leaders as trusted voices in their domain."
      },
      {
        "icon": "autorenew",
        "title": "Content Repurposing",
        "description": "Translating one comprehensive guide into emails, social carousels, and FAQs."
      },
      {
        "icon": "quiz",
        "title": "Customer FAQs & Guides",
        "description": "Answering pre-purchase questions to shorten the sales cycle and improve trust."
      },
      {
        "icon": "insights",
        "title": "Performance Analysis",
        "description": "Tracking organic read times, social shares, and assisted lead conversions."
      }
    ],
    "deliverables": [
      {
        "title": "Written Content",
        "points": [
          "In-depth SEO articles and guides",
          "Email newsletter copy and resources",
          "Website resource hub content"
        ]
      },
      {
        "title": "Distribution Plan",
        "points": [
          "Multi-channel publishing schedule",
          "Social snippet creation",
          "Internal linking architecture"
        ]
      }
    ],
    "industries": [
      "Professional Services",
      "Healthcare & Clinics",
      "Home Maintenance & Renovation",
      "Real Estate",
      "B2B Services"
    ],
    "faqs": [
      {
        "question": "How does content marketing help my business get customers?",
        "answer": "Valuable content answers customer questions before they reach out, demonstrates your expertise, improves your search rankings, and keeps your brand top of mind when they are ready to hire."
      }
    ],
    "metaTitle": "Content Marketing Services Mississauga & GTA | Step Up Marketing",
    "metaDescription": "Build authority and attract loyal customers with strategic content marketing, SEO blogs, and educational resources.",
    "keywords": [
      "content marketing mississauga",
      "blog writing services gta",
      "seo content agency ontario",
      "content strategy canada"
    ]
  },
  {
    "slug": "photo-video-shoots",
    "title": "Photo & Video Content Shoots in Mississauga & GTA",
    "h2Heading": "Authentic Visuals That Capture the Real People, Services & Personality of Your Brand",
    "bulletPoints": [
      "Flexible production: from agile, high-quality iPhone shoots to professional camera equipment.",
      "Workplace, team portrait, product, service, and behind-the-scenes candid business content.",
      "Full creative direction, shot lists, video editing, colour grading, and platform formatting.",
      "Half-day, full-day, and campaign shoots creating a versatile library of reusable marketing assets."
    ],
    "shortTitle": "Content Shoots",
    "badge": "Authentic Visual Assets",
    "tagline": "Authentic, professional photo and video content that captures the people, services, and personality behind your business.",
    "description": "People connect with people, not just logos. We provide flexible content shoots in Mississauga and the GTA, capturing natural photos and video reels that make your business relatable, memorable, and trusted.",
    "longDescription": [
      "We believe great visual content doesn't always require an elaborate production. It requires the right creative direction and an understanding of where and how the content will be used.",
      "That's why we offer flexible options ranging from high-quality iPhone shoots for candid, social-first reels to professional camera photography for polished website and commercial assets."
    ],
    "rating": "5.0 / 5.0",
    "startingPrice": "Custom Quote (Half-Day / Full-Day)",
    "timeline": "Single or Multi-Day Shoots",
    "sla": "Edited Assets Delivered in 5-7 Days",
    "heroImage": "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1800&q=80",
    "icon": "photo_camera",
    "highlights": [
      {
        "icon": "smartphone",
        "title": "High-Quality iPhone Shoots",
        "description": "Agile, candid content creation ideal for trending reels, TikToks, and behind-the-scenes."
      },
      {
        "icon": "camera_alt",
        "title": "Pro Camera Productions",
        "description": "High-resolution studio photography for website banners, team portraits, and print."
      },
      {
        "icon": "checklist",
        "title": "Custom Shot Lists",
        "description": "Carefully planned scenes, angles, and deliverables to maximize on-site time."
      },
      {
        "icon": "movie_edit",
        "title": "Post-Production & Editing",
        "description": "Professional colour grading, captions, audio balancing, and transition effects."
      },
      {
        "icon": "aspect_ratio",
        "title": "Multi-Platform Formatting",
        "description": "Deliverables formatted in 9:16 vertical, 16:9 landscape, and 1:1 square."
      },
      {
        "icon": "folder_zip",
        "title": "Reusable Content Library",
        "description": "Months of versatile marketing assets stored and categorized for easy deployment."
      }
    ],
    "deliverables": [
      {
        "title": "Shoot Planning",
        "points": [
          "Creative direction and shot list preparation",
          "On-site content capture at your location",
          "Direction for team members and featured services"
        ]
      },
      {
        "title": "Final Deliverables",
        "points": [
          "High-res edited photo gallery",
          "Edited vertical video reels with sound and captions",
          "Raw B-roll footage for future marketing needs"
        ]
      }
    ],
    "industries": [
      "Home Services & Contractors",
      "Auto Detailing & Garages",
      "Clinics & Wellness",
      "Restaurants & Cafes",
      "Retail & Salons"
    ],
    "faqs": [
      {
        "question": "Where do you conduct the content shoots?",
        "answer": "We come directly to your office, clinic, workshop, job site, or storefront in Mississauga, Toronto, and across the GTA."
      },
      {
        "question": "What is the difference between an iPhone shoot and a Pro Camera shoot?",
        "answer": "iPhone shoots are fast, natural, and specifically designed for social media reels and candid stories. Pro Camera shoots provide ultra-high resolution imagery ideal for website hero banners, print, and commercial campaigns."
      }
    ],
    "metaTitle": "Photo & Video Content Shoots Mississauga & GTA | Step Up Marketing",
    "metaDescription": "Professional photography and videography shoots for local businesses in Mississauga and the GTA. iPhone reels and pro camera productions.",
    "keywords": [
      "content shoot mississauga",
      "business photography gta",
      "reels videography ontario",
      "social media photographer toronto"
    ]
  },
  {
    "slug": "google-ads",
    "title": "Google Ads Management Services in Mississauga & GTA",
    "h2Heading": "Strategy Before Spending: Turn High-Intent Google Searches Into Business Opportunities",
    "bulletPoints": [
      "Custom Google Search, Display, Performance Max, and YouTube campaign architecture.",
      "Deep keyword research, negative keyword pruning, and search intent alignment.",
      "Compelling ad copywriting, extension setup, and landing page conversion recommendations.",
      "Accurate Google Analytics 4 (GA4) and Tag Manager conversion tracking with honest reporting."
    ],
    "shortTitle": "Google Ads Management",
    "badge": "High-Intent Performance",
    "tagline": "Google Ads is more than choosing keywords and setting a budget. We bring the strategy and ongoing optimization needed to turn clicks into clients.",
    "description": "Reach customers who are actively looking for your services right now. We structure and manage Google Ads campaigns that focus on qualified inquiries rather than wasted clicks.",
    "longDescription": [
      "Google Ads is an entire advertising ecosystem. Without the right strategy and technical setup, it's easy to spend money attracting clicks that don't translate into genuine business opportunities.",
      "At Step Up Marketing, we don't start by launching campaigns. We first understand your business, services, competitors, and margins. Then we construct targeted campaigns backed by accurate conversion tracking so you know exactly what your budget delivers."
    ],
    "rating": "4.9 / 5.0",
    "startingPrice": "Contact for Pricing",
    "timeline": "Account Audit in 3 Days, Launch in 7",
    "sla": "Weekly Monitoring & Monthly Strategic Review",
    "heroImage": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80",
    "icon": "ads_click",
    "highlights": [
      {
        "icon": "search",
        "title": "Search Intent Alignment",
        "description": "Bidding on commercial and transactional queries where customers are ready to buy."
      },
      {
        "icon": "block",
        "title": "Negative Keyword Management",
        "description": "Proactively eliminating irrelevant clicks to protect your advertising budget."
      },
      {
        "icon": "tune",
        "title": "Smart Bidding Strategies",
        "description": "Managing Target CPA and Maximize Conversions to achieve the best cost per lead."
      },
      {
        "icon": "track_changes",
        "title": "Conversion Telemetry",
        "description": "GA4 and call tracking integration verifying every phone call and form submission."
      },
      {
        "icon": "web",
        "title": "Landing Page Guidance",
        "description": "Actionable recommendations to ensure landing pages convert visitors into inquiries."
      },
      {
        "icon": "experiment",
        "title": "Continuous A/B Testing",
        "description": "Testing headlines, descriptions, and extensions to improve Quality Score."
      }
    ],
    "deliverables": [
      {
        "title": "Campaign Setup",
        "points": [
          "Account structuring and keyword research",
          "Ad copywriting and asset extensions",
          "Negative keyword lists and geo-fencing"
        ]
      },
      {
        "title": "Tracking & Analytics",
        "points": [
          "Google Tag Manager conversion setup",
          "Call tracking configuration",
          "GA4 attribution integration"
        ]
      },
      {
        "title": "Ongoing Optimization",
        "points": [
          "Search term analysis and bid adjustments",
          "Quality score improvements",
          "Monthly performance report with plain-English insights"
        ]
      }
    ],
    "industries": [
      "Contractors & Home Services",
      "Legal & Financial Services",
      "Medical & Dental Clinics",
      "Auto Centers",
      "Real Estate"
    ],
    "faqs": [
      {
        "question": "How much advertising budget do I need for Google Ads?",
        "answer": "Ad spend is paid directly to Google and depends on your industry and competition. We recommend an initial testing budget based on your target cost per lead and service area."
      },
      {
        "question": "Is ad spend included in your management fee?",
        "answer": "No, ad spend is paid directly by you to Google. Our management fee covers campaign strategy, setup, copywriting, tracking, testing, and continuous weekly optimization."
      }
    ],
    "metaTitle": "Google Ads Management Mississauga & GTA | Step Up Marketing",
    "metaDescription": "High-converting Google Ads management for small and medium businesses in Mississauga and GTA. Search, Display, and Performance Max campaigns.",
    "keywords": [
      "google ads agency mississauga",
      "ppc management gta",
      "google adwords ontario",
      "local search ads canada"
    ]
  },
  {
    "slug": "meta-ads",
    "title": "Meta Ads Management (Facebook & Instagram) in Mississauga & GTA",
    "h2Heading": "Stop the Scroll: Combine Creative Storytelling With Precision Targeting",
    "bulletPoints": [
      "Targeted Facebook and Instagram advertising campaigns built around clear business goals.",
      "Lead generation through Meta instant forms, website landing pages, and direct messaging.",
      "Creative concept development, scroll-stopping visual design, and persuasive ad copywriting.",
      "Meta Pixel and Conversions API (CAPI) setup with ongoing retargeting and audience testing."
    ],
    "shortTitle": "Meta Ads (FB & IG)",
    "badge": "Paid Social Growth",
    "tagline": "We combine advertising strategy, creative thinking, and technical expertise to turn advertising spend into real business opportunities.",
    "description": "Unlike search ads where customers are already looking, social advertising requires giving people a compelling reason to stop scrolling and take action. We design and run Meta Ads that generate real interest and qualified inquiries.",
    "longDescription": [
      "Facebook and Instagram offer businesses powerful opportunities to reach potential customers and build awareness. But successful Meta Ads take more than simply clicking 'Boost Post'.",
      "We look beyond surface-level likes and impressions to the metrics that matter to your business: qualified inquiries, phone calls, form completions, and customer acquisition."
    ],
    "rating": "4.9 / 5.0",
    "startingPrice": "Contact for Pricing",
    "timeline": "Campaign Launch in 7-10 Days",
    "sla": "Weekly Creative Testing & Optimization",
    "heroImage": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1800&q=80",
    "icon": "campaign",
    "highlights": [
      {
        "icon": "view_carousel",
        "title": "High-Impact Ad Creatives",
        "description": "Image, carousel, and video formats engineered to capture attention instantly."
      },
      {
        "icon": "groups",
        "title": "Targeted Audience Segments",
        "description": "Geographic targeting, interest filters, and lookalike audience models."
      },
      {
        "icon": "assignment",
        "title": "Instant Lead Forms",
        "description": "Frictionless mobile lead capture forms with custom qualification questions."
      },
      {
        "icon": "replay",
        "title": "Strategic Retargeting",
        "description": "Reconnecting with website visitors, video viewers, and engaged followers."
      },
      {
        "icon": "data_object",
        "title": "Meta Pixel & CAPI Setup",
        "description": "Server-side tracking configuration ensuring complete data accuracy after iOS updates."
      },
      {
        "icon": "speed",
        "title": "Fatigue Monitoring",
        "description": "Proactive creative refreshes preventing audience burnout and rising costs."
      }
    ],
    "deliverables": [
      {
        "title": "Creative & Copy",
        "points": [
          "Custom graphic and video ad formats",
          "Compelling offer hooks and copywriting",
          "Clear calls-to-action tailored to mobile users"
        ]
      },
      {
        "title": "Technical Tracking",
        "points": [
          "Meta Pixel and Conversions API integration",
          "Custom conversion event setup",
          "Audience segment creation"
        ]
      },
      {
        "title": "Campaign Management",
        "points": [
          "Budget pacing and bid optimization",
          "A/B creative testing",
          "Monthly reporting with actionable recommendations"
        ]
      }
    ],
    "industries": [
      "Home Renovation & Services",
      "Salons, Beauty & Lifestyle",
      "Auto Detailing",
      "Real Estate",
      "Healthcare Clinics",
      "Retail"
    ],
    "faqs": [
      {
        "question": "Why should I run Meta Ads instead of just boosting posts?",
        "answer": "Boosting posts primarily optimizes for likes and comments. Meta Ads Manager allows precision demographic targeting, custom form creation, conversion tracking, and retargeting that drives actual sales inquiries."
      },
      {
        "question": "Can Meta Ads generate qualified leads for my service business?",
        "answer": "Yes! By pairing qualified questions inside instant forms with clear offer messaging, we filter out tire-kickers and deliver serious prospective clients to your inbox."
      }
    ],
    "metaTitle": "Meta Ads Agency Mississauga & Toronto (FB & IG) | Step Up Marketing",
    "metaDescription": "Professional Facebook and Instagram advertising management in Mississauga and GTA. High-converting social ad campaigns that generate real leads.",
    "keywords": [
      "facebook ads mississauga",
      "instagram advertising gta",
      "meta ads agency ontario",
      "social media marketing canada"
    ]
  },
  {
    "slug": "email-marketing",
    "title": "Email Marketing & Customer Retention in Mississauga & GTA",
    "h2Heading": "Turn Your Existing Customer List Into a Predictable Source of Repeat Business",
    "bulletPoints": [
      "Complete email marketing strategy, audience segmentation, and campaign planning.",
      "Custom responsive newsletter designs and engaging, conversational copywriting.",
      "Automated welcome sequences, review requests, and customer retention workflows.",
      "Platform setup (Klaviyo, Mailchimp, etc.) with open rate, click, and conversion reporting."
    ],
    "shortTitle": "Email Marketing",
    "badge": "Retention & Repeat Revenue",
    "tagline": "Stay connected with your customers, encourage repeat business, and make better use of your existing relationships.",
    "description": "Your existing customers are your most valuable asset. We help you plan, design, and automate email campaigns that deliver relevant messages to the right people, driving repeat bookings and long-term loyalty.",
    "longDescription": [
      "Acquiring a new customer costs significantly more than keeping an existing one. Email marketing allows you to communicate directly with people who already know and trust your business without relying on social algorithms.",
      "From informative monthly newsletters to automated post-service follow-ups and seasonal promotions, we handle the strategy, design, copywriting, and technical delivery."
    ],
    "rating": "4.9 / 5.0",
    "startingPrice": "Contact for Pricing",
    "timeline": "Setup in 1-2 Weeks",
    "sla": "Consistent Scheduled Broadcasts",
    "heroImage": "https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?auto=format&fit=crop&w=1800&q=80",
    "icon": "mail",
    "highlights": [
      {
        "icon": "schedule_send",
        "title": "Automated Workflows",
        "description": "Triggered emails for new subscribers, post-purchase follow-ups, and re-engagement."
      },
      {
        "icon": "newspaper",
        "title": "Branded Newsletters",
        "description": "Clean, mobile-optimized email templates reflecting your brand aesthetic."
      },
      {
        "icon": "segment",
        "title": "Audience Segmentation",
        "description": "Delivering targeted offers based on past purchases, location, or customer status."
      },
      {
        "icon": "draw",
        "title": "Engaging Copywriting",
        "description": "Subject lines that get opened and copy that motivates action without being pushy."
      },
      {
        "icon": "shield_check",
        "title": "Deliverability Health",
        "description": "SPF, DKIM, and DMARC record checks ensuring emails land in the primary inbox."
      },
      {
        "icon": "query_stats",
        "title": "Open & Click Telemetry",
        "description": "Detailed tracking of open rates, click-throughs, and revenue generated."
      }
    ],
    "deliverables": [
      {
        "title": "Strategy & Automation",
        "points": [
          "Customer list cleanup and segmentation",
          "Automated welcome series configuration",
          "Review request automation"
        ]
      },
      {
        "title": "Campaign Execution",
        "points": [
          "Monthly newsletter and promotional broadcasts",
          "Custom responsive HTML email design",
          "Subject line A/B testing"
        ]
      }
    ],
    "industries": [
      "Contractors & Home Services",
      "Automotive Centers",
      "Clinics & Wellness",
      "Retail & E-Commerce",
      "Salons & Spas"
    ],
    "faqs": [
      {
        "question": "Which email platforms do you support?",
        "answer": "We support major email platforms including Mailchimp, Klaviyo, Constant Contact, ActiveCampaign, and HubSpot."
      },
      {
        "question": "What kind of emails should my service business send?",
        "answer": "A mix of helpful maintenance tips, customer spotlights, seasonal reminders, exclusive promotional offers, and review requests works exceptionally well."
      }
    ],
    "metaTitle": "Email Marketing & Automation Mississauga & GTA | Step Up Marketing",
    "metaDescription": "Professional email marketing, newsletters, and automated retention workflows for small businesses in Mississauga and the Greater Toronto Area.",
    "keywords": [
      "email marketing mississauga",
      "newsletter design gta",
      "customer retention agency ontario",
      "email automation canada"
    ]
  },
  {
    "slug": "geo-ai-search",
    "title": "GEO / AI Search Optimization Services in Mississauga & GTA",
    "h2Heading": "Prepare Your Brand for the Future of Search: ChatGPT, Perplexity & AI Overviews",
    "bulletPoints": [
      "AI search visibility assessments evaluating how AI engines understand your business.",
      "Clear, question-based website content structuring optimized for LLM knowledge extraction.",
      "Comprehensive FAQ development, schema markup, and entity consistency across directories.",
      "Authority-building content strategies to improve discoverability in emerging AI search experiences."
    ],
    "shortTitle": "GEO / AI Search",
    "badge": "Future-Ready Search",
    "tagline": "Help your business build a stronger digital presence for the way people search today, including AI-powered search experiences.",
    "description": "The way people discover information is shifting. Alongside traditional Google searches, customers increasingly use AI assistants to research services and compare businesses. We help you adapt your digital content for modern AI discoverability.",
    "longDescription": [
      "Generative Engine Optimization (GEO) focuses on improving the clarity, structure, relevance, and credibility of online content so that it can be more easily understood and referenced by AI-powered search systems.",
      "While no agency can guarantee mentions by ChatGPT or Perplexity, we focus on the fundamental content structures, semantic schemas, and authority signals that make your brand accessible across both traditional and AI-driven platforms."
    ],
    "rating": "4.9 / 5.0",
    "startingPrice": "Contact for Pricing",
    "timeline": "30-Day Content Calibration",
    "sla": "Quarterly AI Discoverability Audit",
    "heroImage": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1800&q=80",
    "icon": "psychology",
    "highlights": [
      {
        "icon": "visibility",
        "title": "AI Search Audits",
        "description": "Evaluating your brand's presence across AI answer engines and search summaries."
      },
      {
        "icon": "format_quote",
        "title": "Question-Based Copy",
        "description": "Structuring content around the exact questions prospective customers ask LLMs."
      },
      {
        "icon": "schema",
        "title": "Entity & Schema Markup",
        "description": "Rich JSON-LD data clarifying your business type, services, location, and credentials."
      },
      {
        "icon": "fact_check",
        "title": "Information Consistency",
        "description": "Ensuring your business details match uniformly across all recognized web sources."
      },
      {
        "icon": "military_tech",
        "title": "Authority Signals",
        "description": "Publishing deep, well-referenced industry content that AI models regard as credible."
      },
      {
        "icon": "trending_up",
        "title": "Hybrid Search Optimization",
        "description": "Optimizing for both classic Google rankings and generative AI summaries simultaneously."
      }
    ],
    "deliverables": [
      {
        "title": "Audit & Analysis",
        "points": [
          "AI search visibility report",
          "Competitor entity comparison",
          "Content clarity recommendations"
        ]
      },
      {
        "title": "Content & Schema Optimization",
        "points": [
          "Comprehensive FAQ page development",
          "Structured schema markup implementation",
          "Direct answer content blocks"
        ]
      }
    ],
    "industries": [
      "Professional Services",
      "Medical & Clinics",
      "Home Construction & Renovation",
      "Real Estate",
      "Specialized B2B"
    ],
    "faqs": [
      {
        "question": "What is Generative Engine Optimization (GEO)?",
        "answer": "GEO is the practice of optimizing website content, structure, and entity data so that AI-powered search tools like ChatGPT, Perplexity, and Google AI Overviews can easily understand and reference your business."
      },
      {
        "question": "Can you guarantee ChatGPT will recommend my business?",
        "answer": "No ethical agency can guarantee specific AI recommendations, as LLMs generate outputs algorithmically. However, implementing structured data and authoritative content significantly improves your discoverability."
      }
    ],
    "metaTitle": "GEO & AI Search Optimization Mississauga & GTA | Step Up Marketing",
    "metaDescription": "Prepare your business for AI search engines like ChatGPT, Perplexity, and Google AI Overviews with Generative Engine Optimization (GEO).",
    "keywords": [
      "geo ai search mississauga",
      "generative engine optimization gta",
      "ai search marketing ontario",
      "chatgpt seo canada"
    ]
  },
  {
    "slug": "marketing-strategy-consulting",
    "title": "Marketing Strategy & Consulting in Mississauga & GTA",
    "h2Heading": "Experienced Marketing Guidance to Help You Invest Wisely and Scale With Confidence",
    "bulletPoints": [
      "In-depth marketing audits evaluating current efforts, spend efficiency, and missed opportunities.",
      "Target customer profiling, competitor analysis, and clear brand positioning.",
      "Custom channel recommendations and marketing budget planning without agency pressure.",
      "One-on-one consulting ($120/hr) or ongoing outsourced marketing leadership packages."
    ],
    "shortTitle": "Strategy & Consulting",
    "badge": "Fractional Leadership",
    "tagline": "Experienced marketing guidance to help business owners understand what their business needs and where to invest their efforts.",
    "description": "Not every business needs a brand new website or aggressive ad campaigns right away. Sometimes, what you need most is clarity. We help you make informed decisions about your marketing so you stop wasting money on guesswork.",
    "longDescription": [
      "Our marketing consulting services help business owners step back, evaluate what is actually working, and develop an actionable roadmap tailored to their specific resources and objectives.",
      "Led by Principal Consultant Garvita Uppal, who brings close to a decade of marketing leadership, we offer straightforward, honest guidance that puts your business first."
    ],
    "rating": "5.0 / 5.0",
    "startingPrice": "$120/hr or Custom Scope",
    "timeline": "Flexible Consultation or Monthly Sprints",
    "sla": "Actionable Written Roadmap Included",
    "heroImage": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80",
    "icon": "insights",
    "highlights": [
      {
        "icon": "troubleshoot",
        "title": "Marketing Audits",
        "description": "Objective review of existing websites, social channels, and past ad spend."
      },
      {
        "icon": "map",
        "title": "Strategic Roadmap",
        "description": "Step-by-step prioritized plan of high-impact marketing initiatives."
      },
      {
        "icon": "monetization_on",
        "title": "Budget Planning",
        "description": "Determining where every marketing dollar will generate the greatest return."
      },
      {
        "icon": "pie_chart",
        "title": "Channel Selection",
        "description": "Identifying which marketing channels to focus on and which to ignore."
      },
      {
        "icon": "support",
        "title": "Troubleshooting",
        "description": "Uncovering why current campaigns or agencies aren't producing results."
      },
      {
        "icon": "supervised_user_circle",
        "title": "Fractional Leadership",
        "description": "Serving as your dedicated senior marketing director on a flexible advisory basis."
      }
    ],
    "deliverables": [
      {
        "title": "Consultation & Audit",
        "points": [
          "Comprehensive marketing discovery session",
          "Review of digital assets and past performance",
          "Competitive landscape analysis"
        ]
      },
      {
        "title": "Actionable Roadmap",
        "points": [
          "Written strategy document with prioritized next steps",
          "Channel and budget recommendations",
          "Follow-up Q&A and implementation support"
        ]
      }
    ],
    "industries": [
      "Growing SMBs",
      "Contractors & Home Services",
      "Professional Practices",
      "Clinics & Healthcare",
      "Retail Founders"
    ],
    "faqs": [
      {
        "question": "What happens during a marketing consulting session?",
        "answer": "We review your business goals, target customers, current marketing channels, and past results. We identify bottlenecks and provide a prioritized, actionable plan of what to do next."
      },
      {
        "question": "Can we hire you for ongoing consulting instead of a full execution package?",
        "answer": "Yes! Many business owners hire us on an ongoing hourly or monthly advisory retainer to guide their internal team or oversee third-party vendors."
      }
    ],
    "metaTitle": "Marketing Strategy & Consulting Mississauga & GTA | Step Up Marketing",
    "metaDescription": "Experienced marketing consulting and fractional leadership for growing businesses in Mississauga and the Greater Toronto Area. Honest guidance by Garvita Uppal.",
    "keywords": [
      "marketing consultant mississauga",
      "marketing strategy gta",
      "fractional cmo ontario",
      "business marketing advisory canada"
    ]
  },
  {
    "slug": "seo",
    "title": "GEO / AI Search Optimization Services in Mississauga & GTA",
    "h2Heading": "Prepare Your Brand for the Future of Search: ChatGPT, Perplexity & AI Overviews",
    "bulletPoints": [
      "AI search visibility assessments evaluating how AI engines understand your business.",
      "Clear, question-based website content structuring optimized for LLM knowledge extraction.",
      "Comprehensive FAQ development, schema markup, and entity consistency across directories.",
      "Authority-building content strategies to improve discoverability in emerging AI search experiences."
    ],
    "shortTitle": "GEO / AI Search",
    "badge": "Future-Ready Search",
    "tagline": "Help your business build a stronger digital presence for the way people search today, including AI-powered search experiences.",
    "description": "The way people discover information is shifting. Alongside traditional Google searches, customers increasingly use AI assistants to research services and compare businesses. We help you adapt your digital content for modern AI discoverability.",
    "longDescription": [
      "Generative Engine Optimization (GEO) focuses on improving the clarity, structure, relevance, and credibility of online content so that it can be more easily understood and referenced by AI-powered search systems.",
      "While no agency can guarantee mentions by ChatGPT or Perplexity, we focus on the fundamental content structures, semantic schemas, and authority signals that make your brand accessible across both traditional and AI-driven platforms."
    ],
    "rating": "4.9 / 5.0",
    "startingPrice": "Contact for Pricing",
    "timeline": "30-Day Content Calibration",
    "sla": "Quarterly AI Discoverability Audit",
    "heroImage": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1800&q=80",
    "icon": "psychology",
    "highlights": [
      {
        "icon": "visibility",
        "title": "AI Search Audits",
        "description": "Evaluating your brand's presence across AI answer engines and search summaries."
      },
      {
        "icon": "format_quote",
        "title": "Question-Based Copy",
        "description": "Structuring content around the exact questions prospective customers ask LLMs."
      },
      {
        "icon": "schema",
        "title": "Entity & Schema Markup",
        "description": "Rich JSON-LD data clarifying your business type, services, location, and credentials."
      },
      {
        "icon": "fact_check",
        "title": "Information Consistency",
        "description": "Ensuring your business details match uniformly across all recognized web sources."
      },
      {
        "icon": "military_tech",
        "title": "Authority Signals",
        "description": "Publishing deep, well-referenced industry content that AI models regard as credible."
      },
      {
        "icon": "trending_up",
        "title": "Hybrid Search Optimization",
        "description": "Optimizing for both classic Google rankings and generative AI summaries simultaneously."
      }
    ],
    "deliverables": [
      {
        "title": "Audit & Analysis",
        "points": [
          "AI search visibility report",
          "Competitor entity comparison",
          "Content clarity recommendations"
        ]
      },
      {
        "title": "Content & Schema Optimization",
        "points": [
          "Comprehensive FAQ page development",
          "Structured schema markup implementation",
          "Direct answer content blocks"
        ]
      }
    ],
    "industries": [
      "Professional Services",
      "Medical & Clinics",
      "Home Construction & Renovation",
      "Real Estate",
      "Specialized B2B"
    ],
    "faqs": [
      {
        "question": "What is Generative Engine Optimization (GEO)?",
        "answer": "GEO is the practice of optimizing website content, structure, and entity data so that AI-powered search tools like ChatGPT, Perplexity, and Google AI Overviews can easily understand and reference your business."
      },
      {
        "question": "Can you guarantee ChatGPT will recommend my business?",
        "answer": "No ethical agency can guarantee specific AI recommendations, as LLMs generate outputs algorithmically. However, implementing structured data and authoritative content significantly improves your discoverability."
      }
    ],
    "metaTitle": "GEO & AI Search Optimization Mississauga & GTA | Step Up Marketing",
    "metaDescription": "Prepare your business for AI search engines like ChatGPT, Perplexity, and Google AI Overviews with Generative Engine Optimization (GEO).",
    "keywords": [
      "geo ai search mississauga",
      "generative engine optimization gta",
      "ai search marketing ontario",
      "chatgpt seo canada"
    ]
  },
  {
    "slug": "web-design-development",
    "title": "Website Design & Management Services in Mississauga & GTA",
    "h2Heading": "Fast, User-Friendly Websites Backed by Expert Technical Foundations",
    "bulletPoints": [
      "Custom WordPress and modern web development designed for optimal user experience and conversions.",
      "Fully responsive, mobile-optimized layouts with fast load times and Core Web Vitals optimization.",
      "SEO-friendly site architecture, on-page SEO foundations, and conversion tracking integration.",
      "Ongoing monthly website management, security updates, backups, troubleshooting, and support."
    ],
    "shortTitle": "Website Design & Management",
    "badge": "Core Foundation",
    "tagline": "Beautiful websites are great, but a strong technical foundation is what makes them work.",
    "description": "We build professional, fast, user-friendly websites designed to support your business goals and turn visitors into customers. From strategy to development, launch, and monthly management, we handle the entire process.",
    "longDescription": [
      "Most business owners shouldn't have to figure out which platform to use, how their website should be structured, or what technical features they actually need. That's where our expertise comes in.",
      "We take the time to understand your business, your customers, and your goals before recommending the right approach. Our focus is on building websites that are not only visually appealing but also fast, mobile-friendly, easy to navigate, SEO-ready, and designed to encourage visitors to take action."
    ],
    "rating": "5.0 / 5.0",
    "startingPrice": "Custom Quote / Monthly Plans",
    "timeline": "2 to 4 Weeks",
    "sla": "Zero Downtime & Monthly Maintenance",
    "heroImage": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=80",
    "icon": "terminal",
    "highlights": [
      {
        "icon": "devices",
        "title": "Responsive & Mobile-First",
        "description": "Flawless performance across smartphones, tablets, laptops, and desktop screens."
      },
      {
        "icon": "speed",
        "title": "Speed & Core Web Vitals",
        "description": "Engineered for sub-second load times and high Google PageSpeed scores."
      },
      {
        "icon": "search",
        "title": "SEO-Ready Architecture",
        "description": "Structured on-page metadata, semantic HTML, schema, and clean URL hierarchy."
      },
      {
        "icon": "conversion_path",
        "title": "Conversion UX",
        "description": "Intuitive navigation and strategic calls-to-action that turn visitors into customer inquiries."
      },
      {
        "icon": "security",
        "title": "Security & Backups",
        "description": "SSL encryption, automated backups, malware protection, and regular software updates."
      },
      {
        "icon": "support_agent",
        "title": "Monthly Management",
        "description": "Dedicated ongoing technical support, content updates, and troubleshooting."
      }
    ],
    "deliverables": [
      {
        "title": "Design & Development",
        "points": [
          "Custom responsive website build",
          "Clean navigation and user experience",
          "Contact forms and booking integrations"
        ]
      },
      {
        "title": "SEO & Tracking Setup",
        "points": [
          "Google Analytics 4 configuration",
          "Google Search Console integration",
          "Conversion event tracking setup"
        ]
      },
      {
        "title": "Ongoing Support",
        "points": [
          "Monthly security and plugin updates",
          "Cloud backups and uptime monitoring",
          "Priority content updates and troubleshooting"
        ]
      }
    ],
    "industries": [
      "Home Services & Contractors",
      "Real Estate",
      "Automotive",
      "Clinics & Wellness",
      "Professional Services",
      "Retail"
    ],
    "faqs": [
      {
        "question": "What platforms do you build websites on?",
        "answer": "We build custom websites on WordPress and modern web stacks tailored to your specific functionality requirements, budget, and ease of management."
      },
      {
        "question": "Is SEO included in website development?",
        "answer": "Yes! Every website we build includes foundational on-page SEO, clean URL architecture, metadata, schema markup, and speed optimization."
      },
      {
        "question": "Do you provide ongoing website maintenance?",
        "answer": "Yes, we offer ongoing website management packages covering security, backups, content updates, plugin maintenance, and technical troubleshooting."
      }
    ],
    "metaTitle": "Website Design & Management Mississauga & Toronto | Step Up Marketing",
    "metaDescription": "Professional website design and ongoing management for small and medium businesses in Mississauga and the Greater Toronto Area.",
    "keywords": [
      "web design mississauga",
      "website management gta",
      "wordpress developer mississauga",
      "responsive web design ontario"
    ]
  },
  {
    "slug": "social-media-advertising",
    "title": "Meta Ads Management (Facebook & Instagram) in Mississauga & GTA",
    "h2Heading": "Stop the Scroll: Combine Creative Storytelling With Precision Targeting",
    "bulletPoints": [
      "Targeted Facebook and Instagram advertising campaigns built around clear business goals.",
      "Lead generation through Meta instant forms, website landing pages, and direct messaging.",
      "Creative concept development, scroll-stopping visual design, and persuasive ad copywriting.",
      "Meta Pixel and Conversions API (CAPI) setup with ongoing retargeting and audience testing."
    ],
    "shortTitle": "Meta Ads (FB & IG)",
    "badge": "Paid Social Growth",
    "tagline": "We combine advertising strategy, creative thinking, and technical expertise to turn advertising spend into real business opportunities.",
    "description": "Unlike search ads where customers are already looking, social advertising requires giving people a compelling reason to stop scrolling and take action. We design and run Meta Ads that generate real interest and qualified inquiries.",
    "longDescription": [
      "Facebook and Instagram offer businesses powerful opportunities to reach potential customers and build awareness. But successful Meta Ads take more than simply clicking 'Boost Post'.",
      "We look beyond surface-level likes and impressions to the metrics that matter to your business: qualified inquiries, phone calls, form completions, and customer acquisition."
    ],
    "rating": "4.9 / 5.0",
    "startingPrice": "Contact for Pricing",
    "timeline": "Campaign Launch in 7-10 Days",
    "sla": "Weekly Creative Testing & Optimization",
    "heroImage": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1800&q=80",
    "icon": "campaign",
    "highlights": [
      {
        "icon": "view_carousel",
        "title": "High-Impact Ad Creatives",
        "description": "Image, carousel, and video formats engineered to capture attention instantly."
      },
      {
        "icon": "groups",
        "title": "Targeted Audience Segments",
        "description": "Geographic targeting, interest filters, and lookalike audience models."
      },
      {
        "icon": "assignment",
        "title": "Instant Lead Forms",
        "description": "Frictionless mobile lead capture forms with custom qualification questions."
      },
      {
        "icon": "replay",
        "title": "Strategic Retargeting",
        "description": "Reconnecting with website visitors, video viewers, and engaged followers."
      },
      {
        "icon": "data_object",
        "title": "Meta Pixel & CAPI Setup",
        "description": "Server-side tracking configuration ensuring complete data accuracy after iOS updates."
      },
      {
        "icon": "speed",
        "title": "Fatigue Monitoring",
        "description": "Proactive creative refreshes preventing audience burnout and rising costs."
      }
    ],
    "deliverables": [
      {
        "title": "Creative & Copy",
        "points": [
          "Custom graphic and video ad formats",
          "Compelling offer hooks and copywriting",
          "Clear calls-to-action tailored to mobile users"
        ]
      },
      {
        "title": "Technical Tracking",
        "points": [
          "Meta Pixel and Conversions API integration",
          "Custom conversion event setup",
          "Audience segment creation"
        ]
      },
      {
        "title": "Campaign Management",
        "points": [
          "Budget pacing and bid optimization",
          "A/B creative testing",
          "Monthly reporting with actionable recommendations"
        ]
      }
    ],
    "industries": [
      "Home Renovation & Services",
      "Salons, Beauty & Lifestyle",
      "Auto Detailing",
      "Real Estate",
      "Healthcare Clinics",
      "Retail"
    ],
    "faqs": [
      {
        "question": "Why should I run Meta Ads instead of just boosting posts?",
        "answer": "Boosting posts primarily optimizes for likes and comments. Meta Ads Manager allows precision demographic targeting, custom form creation, conversion tracking, and retargeting that drives actual sales inquiries."
      },
      {
        "question": "Can Meta Ads generate qualified leads for my service business?",
        "answer": "Yes! By pairing qualified questions inside instant forms with clear offer messaging, we filter out tire-kickers and deliver serious prospective clients to your inbox."
      }
    ],
    "metaTitle": "Meta Ads Agency Mississauga & Toronto (FB & IG) | Step Up Marketing",
    "metaDescription": "Professional Facebook and Instagram advertising management in Mississauga and GTA. High-converting social ad campaigns that generate real leads.",
    "keywords": [
      "facebook ads mississauga",
      "instagram advertising gta",
      "meta ads agency ontario",
      "social media marketing canada"
    ]
  },
  {
    "slug": "graphic-designing",
    "title": "Branding & Identity Design Services in Mississauga & GTA",
    "h2Heading": "Build a Recognizable, Professional Brand That Connects With Customers",
    "bulletPoints": [
      "Logo design, brand refresh, and comprehensive visual identity development.",
      "Custom brand guidelines, colour palettes, typography, and official style documents.",
      "Social media templates, business cards, print marketing collateral, and digital promotional assets.",
      "Cohesive brand messaging and positioning that establishes instant trust and customer recognition."
    ],
    "shortTitle": "Branding & Identity",
    "badge": "Identity & Visual Assets",
    "tagline": "Build a recognizable, professional brand that reflects your business and connects with your customers.",
    "description": "Your brand is often the first impression someone has of your business. From your logo and colours to your messaging and marketing materials, every element should communicate who you are and what makes your business different.",
    "longDescription": [
      "We help small and medium-sized businesses develop and maintain a consistent visual identity that looks professional across websites, social media, advertising, and print materials.",
      "Our process begins with brand discovery, diving into your industry, competitors, and ideal customers to craft a brand identity that not only looks exceptional but supports your long-term growth objectives."
    ],
    "rating": "5.0 / 5.0",
    "startingPrice": "Custom Quote",
    "timeline": "2 to 3 Weeks",
    "sla": "Full Vector & Brand Kit Delivery",
    "heroImage": "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1800&q=80",
    "icon": "palette",
    "highlights": [
      {
        "icon": "brush",
        "title": "Logo Design & Refresh",
        "description": "Modern, memorable logo marks crafted for digital and print versatility."
      },
      {
        "icon": "palette",
        "title": "Colours & Typography",
        "description": "Curated colour systems, font pairings, and visual hierarchy standards."
      },
      {
        "icon": "menu_book",
        "title": "Brand Guidelines",
        "description": "Complete brand playbook detailing usage rules, tone of voice, and asset specifications."
      },
      {
        "icon": "share",
        "title": "Social Media Templates",
        "description": "Custom Canva or Figma branded templates for reels, carousels, and stories."
      },
      {
        "icon": "badge",
        "title": "Print & Collateral",
        "description": "Business cards, brochures, flyers, signage, and marketing leave-behinds."
      },
      {
        "icon": "sync_alt",
        "title": "Brand Consistency",
        "description": "Ensuring your identity remains unified across web, socials, and campaigns."
      }
    ],
    "deliverables": [
      {
        "title": "Visual Assets Kit",
        "points": [
          "Vector logo files (SVG, PNG, EPS)",
          "Primary and secondary logo variations",
          "Favicon and social media profile icons"
        ]
      },
      {
        "title": "Brand Standards",
        "points": [
          "Official brand style guide PDF",
          "Typography hierarchy specifications",
          "Colour palette codes (HEX, RGB, CMYK)"
        ]
      },
      {
        "title": "Marketing Collateral",
        "points": [
          "Branded social post templates",
          "Print-ready business card files",
          "Email signature graphics"
        ]
      }
    ],
    "industries": [
      "Real Estate",
      "Home Services",
      "Healthcare & Clinics",
      "Automotive",
      "Professional Services",
      "Beauty & Lifestyle"
    ],
    "faqs": [
      {
        "question": "What is included in the Branding & Identity service?",
        "answer": "We provide complete brand discovery, logo design or refresh, typography and colour selection, brand guidelines, and essential collateral templates like business cards and social media kits."
      },
      {
        "question": "How long does a brand identity project take?",
        "answer": "Most branding projects are completed within 2 to 3 weeks, including research, concept development, and revision rounds."
      },
      {
        "question": "Do you provide editable files?",
        "answer": "Yes, you receive all original vector source files (SVG, EPS, PNG, PDF) along with editable template files where applicable."
      }
    ],
    "metaTitle": "Branding & Identity Design Services Mississauga & GTA | Step Up Marketing",
    "metaDescription": "Professional logo design, brand guidelines, and visual identity for growing businesses in Mississauga and the Greater Toronto Area.",
    "keywords": [
      "branding services mississauga",
      "brand identity design gta",
      "logo design mississauga",
      "graphic design ontario"
    ]
  },
  {
    "slug": "brand-strategy",
    "title": "Branding & Identity Design Services in Mississauga & GTA",
    "h2Heading": "Build a Recognizable, Professional Brand That Connects With Customers",
    "bulletPoints": [
      "Logo design, brand refresh, and comprehensive visual identity development.",
      "Custom brand guidelines, colour palettes, typography, and official style documents.",
      "Social media templates, business cards, print marketing collateral, and digital promotional assets.",
      "Cohesive brand messaging and positioning that establishes instant trust and customer recognition."
    ],
    "shortTitle": "Branding & Identity",
    "badge": "Identity & Visual Assets",
    "tagline": "Build a recognizable, professional brand that reflects your business and connects with your customers.",
    "description": "Your brand is often the first impression someone has of your business. From your logo and colours to your messaging and marketing materials, every element should communicate who you are and what makes your business different.",
    "longDescription": [
      "We help small and medium-sized businesses develop and maintain a consistent visual identity that looks professional across websites, social media, advertising, and print materials.",
      "Our process begins with brand discovery, diving into your industry, competitors, and ideal customers to craft a brand identity that not only looks exceptional but supports your long-term growth objectives."
    ],
    "rating": "5.0 / 5.0",
    "startingPrice": "Custom Quote",
    "timeline": "2 to 3 Weeks",
    "sla": "Full Vector & Brand Kit Delivery",
    "heroImage": "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1800&q=80",
    "icon": "palette",
    "highlights": [
      {
        "icon": "brush",
        "title": "Logo Design & Refresh",
        "description": "Modern, memorable logo marks crafted for digital and print versatility."
      },
      {
        "icon": "palette",
        "title": "Colours & Typography",
        "description": "Curated colour systems, font pairings, and visual hierarchy standards."
      },
      {
        "icon": "menu_book",
        "title": "Brand Guidelines",
        "description": "Complete brand playbook detailing usage rules, tone of voice, and asset specifications."
      },
      {
        "icon": "share",
        "title": "Social Media Templates",
        "description": "Custom Canva or Figma branded templates for reels, carousels, and stories."
      },
      {
        "icon": "badge",
        "title": "Print & Collateral",
        "description": "Business cards, brochures, flyers, signage, and marketing leave-behinds."
      },
      {
        "icon": "sync_alt",
        "title": "Brand Consistency",
        "description": "Ensuring your identity remains unified across web, socials, and campaigns."
      }
    ],
    "deliverables": [
      {
        "title": "Visual Assets Kit",
        "points": [
          "Vector logo files (SVG, PNG, EPS)",
          "Primary and secondary logo variations",
          "Favicon and social media profile icons"
        ]
      },
      {
        "title": "Brand Standards",
        "points": [
          "Official brand style guide PDF",
          "Typography hierarchy specifications",
          "Colour palette codes (HEX, RGB, CMYK)"
        ]
      },
      {
        "title": "Marketing Collateral",
        "points": [
          "Branded social post templates",
          "Print-ready business card files",
          "Email signature graphics"
        ]
      }
    ],
    "industries": [
      "Real Estate",
      "Home Services",
      "Healthcare & Clinics",
      "Automotive",
      "Professional Services",
      "Beauty & Lifestyle"
    ],
    "faqs": [
      {
        "question": "What is included in the Branding & Identity service?",
        "answer": "We provide complete brand discovery, logo design or refresh, typography and colour selection, brand guidelines, and essential collateral templates like business cards and social media kits."
      },
      {
        "question": "How long does a brand identity project take?",
        "answer": "Most branding projects are completed within 2 to 3 weeks, including research, concept development, and revision rounds."
      },
      {
        "question": "Do you provide editable files?",
        "answer": "Yes, you receive all original vector source files (SVG, EPS, PNG, PDF) along with editable template files where applicable."
      }
    ],
    "metaTitle": "Branding & Identity Design Services Mississauga & GTA | Step Up Marketing",
    "metaDescription": "Professional logo design, brand guidelines, and visual identity for growing businesses in Mississauga and the Greater Toronto Area.",
    "keywords": [
      "branding services mississauga",
      "brand identity design gta",
      "logo design mississauga",
      "graphic design ontario"
    ]
  }
];

export const SERVICE_CHECKBOX_OPTIONS = [
  "Branding & Identity",
  "Website Design & Management",
  "Google Business Profile Management",
  "Social Media Management",
  "Content Marketing",
  "Photo & Video Content Shoots",
  "Google Ads Management",
  "Meta Ads (Facebook & Instagram)",
  "Email Marketing",
  "GEO / AI Search Optimization",
  "Marketing Strategy & Consulting",
  "End-to-End Extended Marketing Team",
];

export const INDUSTRY_DROPDOWN_OPTIONS = [
  "Real Estate",
  "Home Maintenance, Construction & Renovation",
  "Automobile Car Wash & Service Centers",
  "Healthcare & Wellness",
  "Home Appliance & Consumer Durables",
  "Professional Services",
  "Travel & Hospitality",
  "Fashion, Beauty & Lifestyle",
  "Other Local Service / Business",
];
