// Single source of truth: content comes from the uploaded resume. Edit here to update the site.

export const profile =
  "Results-driven Digital Marketing & SEO Specialist with a track record in organic growth, multi-platform campaign management, video production, and team leadership. Proven expertise across technology, visa consulting, and gaming sectors. Skilled in GEO, AEO, and LLM ranking optimization to grow brand visibility in AI search and answer engines.";

export const heroIntro =
  "Digital Marketing & SEO specialist growing brand visibility across Google, social platforms, and AI answer engines.";

export const marqueeItems = [
  "SEO Strategy",
  "Technical SEO",
  "GEO",
  "AEO",
  "LLM Optimization",
  "Schema Markup",
  "Social Media Management",
  "Meta Ads",
  "Content Strategy",
  "Team Leadership",
];

export const heroFacts = [
  { value: "6", label: "Roles held" },
  { value: "Nov 2022", label: "In the industry since" },
  { value: "3", label: "Sectors: tech, visa, gaming" },
];

export type Expertise = { id: string; title: string; kicker: string; text: string; tags: string[] };

export const expertise: Expertise[] = [
  {
    id: "seo",
    title: "SEO",
    kicker: "On-Page & Off-Page",
    text: "Developed and executed comprehensive SEO strategies improving search rankings, organic traffic, and digital visibility.",
    tags: ["Keyword Research", "Backlink Building", "Content Optimization"],
  },
  {
    id: "technical-seo",
    title: "Technical SEO",
    kicker: "Audits & Structured Data",
    text: "Performed technical SEO audits resolving indexing issues, crawl errors, and performance bottlenecks.",
    tags: ["Schema Markup", "Crawlability", "Site Speed"],
  },
  {
    id: "geo",
    title: "GEO",
    kicker: "Generative Engine Optimization",
    text: "Implemented GEO strategies to boost brand visibility and citations in ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
    tags: ["ChatGPT", "Gemini", "Perplexity", "AI Overviews"],
  },
  {
    id: "aeo",
    title: "AEO",
    kicker: "Answer Engine Optimization",
    text: "Applied AEO: answer-first content, FAQ/schema markup, and featured snippet targeting for zero-click and voice search.",
    tags: ["FAQ Schema", "Featured Snippets", "Voice Search"],
  },
  {
    id: "llm",
    title: "LLM Optimization",
    kicker: "Ranking & AI Visibility",
    text: "Optimized content for LLM ranking using entity-based content, topical authority, and E-E-A-T signals; tracked AI visibility.",
    tags: ["Entity-Based Content", "Topical Authority", "E-E-A-T"],
  },
  {
    id: "social",
    title: "Social Media Management",
    kicker: "Strategy & Content",
    text: "Managed social media platforms (LinkedIn, Instagram, Facebook, Pinterest) to enhance brand visibility, with content calendars and campaign planning.",
    tags: ["Content Calendars", "Campaign Planning", "Brand Voice"],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    kicker: "Paid, Analytics & Reporting",
    text: "Ran and optimized Meta Ads campaigns focusing on brand awareness, engagement, and audience growth, and delivered detailed monthly reports.",
    tags: ["Meta Ads", "Audience Segmentation", "KPI Reporting"],
  },
];

export const fullExpertise = [
  "On-Page & Off-Page SEO & Technical SEO",
  "Generative Engine Optimization (GEO)",
  "Answer Engine Optimization (AEO)",
  "LLM Ranking & AI Visibility",
  "Schema Markup & Structured Data",
  "Technical SEO Audits",
  "Keyword Research & Strategy",
  "Meta Ads Campaign Management",
  "Short-Form Video Production",
  "Brand Identity & Voice",
  "Content Calendar Management",
  "Team Mentorship & Leadership",
  "Monthly KPI Reporting",
  "Competitor Analysis",
];

export type Job = {
  company: string;
  role: string;
  mode: string;
  dates: string;
  current?: boolean;
  note?: string;
  bullets: string[];
};

export const jobs: Job[] = [
  {
    company: "Comtanix",
    role: "SR SEO Specialist & Digital Marketer",
    mode: "Onsite",
    dates: "June 2025 – Present",
    current: true,
    bullets: [
      "Developed and executed comprehensive SEO strategies improving search rankings, organic traffic, and digital visibility.",
      "Conducted in-depth keyword research and competitor analysis using SEMrush, Ahrefs, and Google tools.",
      "Managed on-page SEO including metadata, site structure, internal linking, and content optimization.",
      "Performed technical SEO audits resolving indexing issues, crawl errors, and performance bottlenecks.",
      "Implemented GEO strategies to boost brand visibility and citations in ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
      "Applied AEO: answer-first content, FAQ/schema markup, and featured snippet targeting for zero-click and voice search.",
      "Optimized content for LLM ranking using entity-based content, topical authority, and E-E-A-T signals; tracked AI visibility.",
      "Implemented off-page SEO strategies including backlink building, outreach, and authority development.",
      "Managed social media platforms (LinkedIn, Instagram, Facebook, Pinterest) to enhance brand visibility.",
      "Planned and executed social media strategies including content calendars and campaign planning.",
      "Ran and optimized Meta Ads campaigns focusing on brand awareness, engagement, and audience growth.",
      "Built targeted ad sets using audience segmentation to improve campaign performance and ROI.",
      "Tracked and analyzed KPIs: traffic, rankings, engagement, conversions, and campaign performance.",
      "Delivered detailed monthly reports covering SEO, social media, and paid campaigns.",
      "Collaborated with creative teams to produce high-performing visual content optimized for engagement.",
    ],
  },
  {
    company: "Mirpur Visa Consultant – Averroes Technology",
    note: "Sister Company of Cloud Gate Technology",
    role: "Social Media Growth Manager & Team Lead",
    mode: "Onsite",
    dates: "Oct 2024 – June 2025",
    bullets: [
      "Led multi-platform digital marketing strategies across YouTube, TikTok, Facebook, Instagram, and LinkedIn.",
      "Developed campaigns to drive brand awareness and generate qualified leads for visa services (student, work, tourist).",
      "Implemented SEO optimization strategies to enhance organic visibility and search rankings.",
      "Created high-performing content including short-form videos, informational posts, and interactive campaigns.",
      "Collaborated directly with executive leadership to align marketing with business goals.",
      "Analyzed campaign performance and optimized for improved reach, engagement, and conversions.",
      "Managed and mentored a marketing team ensuring consistent brand messaging across all channels.",
    ],
  },
  {
    company: "Game Hive Studio & Hive Mind Studio",
    note: "Sister Company of Cloud Gate Technology",
    role: "Video Editor & Social Media Growth Strategist",
    mode: "Onsite",
    dates: "Oct 2024 – June 2025",
    bullets: [
      "Managed and scaled social media accounts across Instagram, TikTok, and YouTube for gaming brands.",
      "Produced high-performing short-form content (Reels, TikToks, Shorts) optimized for virality and retention.",
      "Edited cinematic gameplay videos, trailers, and promotional assets for game launches.",
      "Developed data-driven content strategies based on trend analysis and competitor research.",
      "Applied advanced editing techniques: storytelling, pacing, hooks, and caption optimization.",
      "Created performance-focused ad creatives targeting installs, engagement, and conversions.",
    ],
  },
  {
    company: "AppWorks – Cloud Gate Technology",
    note: "Sister Company of Cloud Gate Technology",
    role: "Social Media Manager",
    mode: "Onsite",
    dates: "Oct 2024 – June 2025",
    bullets: [
      "Managed social media presence across Instagram, Facebook, and Twitter for VPN and technology products.",
      "Designed high-quality content: product showcases, engagement-driven posts, polls, and educational creatives.",
      "Monitored performance metrics to improve reach, engagement, and audience growth.",
      "Utilized Canva, Meta Business Suite, and Instagram Insights for planning, scheduling, and analytics.",
    ],
  },
  {
    company: "Texas Brain",
    role: "SEO Specialist",
    mode: "Onsite",
    dates: "Jan 2024 – Oct 2024",
    bullets: [
      "Developed SEO strategies that boosted search rankings and organic traffic.",
      "Conducted technical SEO audits, resolving site speed and crawlability issues.",
      "Performed keyword research, optimizing for broad and niche markets.",
      "Led an SEO team, ensuring efficient execution and collaboration across projects.",
      "Aligned SEO strategies with business goals and supported the sales pipeline.",
    ],
  },
  {
    company: "Aquarius FZE",
    role: "SEO Executive",
    mode: "Onsite",
    dates: "Nov 2022 – Jan 2024",
    bullets: [
      "Conducted keyword research with Ahrefs, identifying high-potential targets.",
      "Crafted SEO copy for web pages and marketing materials, boosting engagement.",
      "Assisted in content strategy development, increasing page views.",
      "Participated in link-building efforts to enhance domain authority.",
      "Created SEO-optimized product descriptions and landing pages.",
    ],
  },
];

export const skillGroups = [
  { title: "Search & AI Visibility", index: "01", skills: ["SEO Strategy", "Technical SEO", "Link Building", "Content Strategy", "GEO / AEO / LLM Opt."] },
  { title: "Social & Paid Media", index: "02", skills: ["Social Media Mgmt", "Meta Ads", "Video Editing"] },
  { title: "Analytics & Leadership", index: "03", skills: ["Analytics & Reporting", "Team Leadership"] },
];

export const toolGroups = [
  { title: "SEO & Analytics", tools: ["SEMrush", "Ahrefs", "Google Analytics", "Google Search Console"] },
  { title: "AI Platforms", tools: ["ChatGPT", "Perplexity", "Gemini"] },
  { title: "Social & Design", tools: ["Meta Business Suite", "Canva", "Instagram Insights"] },
  { title: "Planning", tools: ["Notion", "Trello"] },
];

export const platforms = [
  { name: "Instagram", focus: "Growth · Ads · Stories" },
  { name: "TikTok", focus: "Short-form · Virality" },
  { name: "YouTube", focus: "Shorts · Long-form" },
  { name: "LinkedIn", focus: "B2B · Lead Gen" },
  { name: "Facebook", focus: "Campaigns · Pages" },
  { name: "Twitter / X", focus: "Engagement" },
  { name: "Pinterest", focus: "SEO · Pins" },
];

export const education = [{ title: "Intermediate – Pre Engineering", school: "Karachi Board of Secondary Education" }];

export const navItems = [
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "tools", label: "Tools" },
  { id: "contact", label: "Contact" },
];
