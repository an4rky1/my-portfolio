"use client";

import Header from "@/app/components/Header";
import Terminal from "@/app/components/Terminal";
import ContactForm from "@/app/components/ContactForm";
import SectionReveal from "@/app/components/SectionReveal";
import GitNode from "@/app/components/GitNode";
import ProjectsSection from "@/app/components/ProjectsSection";

const projects = [
  {
    title: "BLOG_PLATFORM",
    description:
      "Full-stack blog platform with JWT authentication, full-text search, tags, and user profiles. Built with Feature-Sliced Design architecture for scalability, smooth scroll with Lenis, and Zod validation.",
    tags: [
      "Next.js 14",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Framer Motion",
      "Lenis",
      "Zod",
      "JWT",
    ],
    color: "bg-acid-green",
    status: "[status: ready]",
    statusBg: "bg-acid-green text-text-dark",
    hoverBg: "hover:bg-acid-green",
    video: "/projects/1.mp4",
    codeLink: "https://github.com/an4rky1/retro-games-blog",
    demoLink: "https://retro-games-blog.vercel.app/",
  },
  {
    title: "PIXEL_ART",
    description:
      "Image-to-pixel-art converter with customizable settings and user gallery. Features JWT authentication, PostgreSQL database with Drizzle ORM, and Sharp for high-performance image processing.",
    tags: [
      "Next.js 14",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Sharp",
      "Tailwind CSS",
      "JWT",
    ],
    color: "bg-acid-yellow",
    status: "[status: ready]",
    statusBg: "bg-acid-yellow text-text-dark",
    hoverBg: "hover:bg-acid-yellow",
    video: "/projects/2.mp4",
    codeLink: "https://github.com/an4rky1/pixelart-converter",
    demoLink: "https://pixelart-converter-lemon.vercel.app/",
  },
  {
    title: "NEWS_PLATFORM",
    description:
      "Full-stack news aggregation platform with real-time updates, user authentication, and animated UI. Built with Supabase for backend, React Query for data fetching, and Framer Motion for smooth transitions.",
    tags: [
      "Next.js 16",
      "TypeScript",
      "Supabase",
      "Tailwind CSS 4",
      "React Query",
      "Framer Motion",
      "Zustand",
    ],
    color: "bg-acid-purple",
    status: "[status: ready]",
    statusBg: "bg-acid-purple text-white",
    hoverBg: "hover:bg-purple-200",
    video: "/projects/3.mp4",
    codeLink: "https://github.com/an4rky1/news",
    demoLink: "https://news-liart-two.vercel.app/feed",
  },
  {
    title: "ASCII_TERMINAL",
    description:
      "Interactive Matrix-style terminal for ASCII art generation. Features image-to-ASCII conversion via Canvas API, AI image generation (Hugging Face), bento grid gallery with glitch effects, and Supabase authentication.",
    tags: [
      "Next.js 16",
      "TypeScript",
      "Supabase",
      "Tailwind CSS 4",
      "Zustand",
      "React Query",
    ],
    color: "bg-acid-green",
    status: "[status: ready]",
    statusBg: "bg-acid-pink text-white",
    hoverBg: "hover:bg-acid-green",
    video: "/projects/4.mp4",
    codeLink: "https://github.com/an4rky1/ascii-generator",
    demoLink: "https://ascii-generator-eight.vercel.app/",
  },
  {
    title: "KANBAN_BOARD",
    description:
      "Real-time drag-and-drop Kanban board with columns and tasks. Supports WebSocket-based live broadcasting via Laravel Reverb when tasks are moved. Features a brutalist/neon aesthetic with thick borders and vibrant colors.",
    tags: [
      "PHP 8.4",
      "Laravel 13",
      "Livewire 4",
      "Alpine.js",
      "Laravel Reverb",
      "PostgreSQL",
      "Docker",
      "Tailwind CSS 4",
    ],
    color: "bg-acid-yellow",
    status: "[status: ready]",
    statusBg: "bg-acid-blue text-white",
    hoverBg: "hover:bg-acid-yellow",
    video: "/projects/5.mp4",
    codeLink: "https://github.com/an4rky1/kanban",
    demoLink: "https://kanban-ehxx.onrender.com",
  },
  {
    title: "TERMINAL_QUEST",
    description:
      "Text-based RPG styled as a retro hacker terminal. Players navigate rooms via slash-commands, interact with objects, and solve puzzles with persistent state saved to PostgreSQL. Built with Laravel and vanilla JavaScript.",
    tags: [
      "PHP 8.3",
      "Laravel 13",
      "JavaScript",
      "Tailwind CSS 4",
      "PostgreSQL",
      "Docker",
      "Vite",
    ],
    color: "bg-acid-purple",
    status: "[status: ready]",
    statusBg: "bg-acid-green text-text-dark",
    hoverBg: "hover:bg-purple-200",
    video: "/projects/6.mp4",
    codeLink: "https://github.com/an4rky1/terminal-quest",
    demoLink: "https://terminal-quest.onrender.com",
  },
  {
    title: "BRUTAL_THOUGHTS",
    description:
      "Random quote generator with neo-brutalist visual style — thick borders, flat shadows, acid/neon colors, and floating geometric shapes. Users can view random quotes and download them as PNG images.",
    tags: [
      "PHP 8.4",
      "Laravel 13",
      "Alpine.js",
      "Tailwind CSS 4",
      "PostgreSQL",
      "Docker",
      "Vite",
    ],
    color: "bg-acid-green",
    status: "[status: ready]",
    statusBg: "bg-acid-yellow text-text-dark",
    hoverBg: "hover:bg-acid-green",
    video: "/projects/7.mp4",
    codeLink: "https://github.com/an4rky1/brutal",
    demoLink: "https://brutal-38rs.onrender.com",
  },
  {
    title: "SMART_VCARD",
    description:
      "Digital business card (vCard) generator with custom QR codes. Users fill out a Livewire form to create a vcard with social links and avatar, and get a shareable public profile with stylish QR code that embeds their avatar.",
    tags: [
      "PHP 8.3",
      "Laravel 13",
      "Livewire 4",
      "Alpine.js",
      "Tailwind CSS 4",
      "PostgreSQL",
      "Docker",
    ],
    color: "bg-acid-yellow",
    status: "[status: ready]",
    statusBg: "bg-acid-purple text-white",
    hoverBg: "hover:bg-acid-yellow",
    video: "/projects/8.mp4",
    codeLink: "https://github.com/an4rky1/qr-code-generator",
    demoLink: "https://qr-code-generator-9zoi.onrender.com",
  },
  {
    title: "RESUME_GENERATOR",
    description:
      "Minimalist resume/card generator inspired by 1960s Swiss poster design. Users fill out a form with bio, skills, and experience, choose from 3 Swiss-inspired templates, and generate print-ready A4 PDFs server-side with WeasyPrint.",
    tags: [
      "Python 3.12",
      "Django 6.0",
      "WeasyPrint",
      "PostgreSQL",
      "Docker",
      "Tailwind CSS",
    ],
    color: "bg-acid-purple",
    status: "[status: ready]",
    statusBg: "bg-acid-pink text-white",
    hoverBg: "hover:bg-purple-200",
    video: "/projects/9.mp4",
    codeLink: "https://github.com/an4rky1/resume-generator",
    demoLink: "https://resume-generator-ob8d.onrender.com",
  },
  {
    title: "TAROT_CARD_DAILY",
    description:
      "Interactive daily Tarot card generator with Dark Academia / Gothic aesthetic — deep wine and emerald tones, gold borders, 3D card-flip CSS animations. One draw per day per IP with rate limiting middleware.",
    tags: [
      "Python 3.12",
      "Django 6.0",
      "Alpine.js",
      "Tailwind CSS",
      "Redis",
      "Docker",
    ],
    color: "bg-acid-green",
    status: "[status: ready]",
    statusBg: "bg-acid-blue text-white",
    hoverBg: "hover:bg-acid-green",
    video: "/projects/10.mp4",
    codeLink: "https://github.com/an4rky1/taro",
    demoLink: "https://taro-14go.onrender.com",
  },
  {
    title: "CORE_FRAMEWORK",
    description:
      "Core framework and shared libraries for microservices architecture. Built with Nx monorepo, NestJS, Express, and Zod for type-safe contracts. Provides reusable infrastructure drivers and domain modules.",
    tags: ["NestJS 11", "Nx", "TypeScript", "Express 5", "Zod", "RxJS", "Jest"],
    color: "bg-acid-yellow",
    status: "[status: in_progress]",
    statusBg: "bg-acid-yellow",
    hoverBg: "hover:bg-acid-yellow",
    video: undefined,
    codeLink: "https://github.com/an4rky1/core",
    demoLink: undefined,
  },
  {
    title: "SAAS_PLATFORM",
    description:
      "Microservices SaaS platform with GraphQL Federation, gRPC inter-service communication, and CQRS/DDD architecture. Includes auth, user management, API gateway, and Next.js frontend.",
    tags: [
      "NestJS 11",
      "GraphQL Federation",
      "gRPC",
      "CQRS",
      "Apollo Gateway",
      "Bull (Redis)",
      "Drizzle ORM",
      "Next.js",
    ],
    color: "bg-acid-yellow",
    status: "[status: in_progress]",
    statusBg: "bg-acid-yellow",
    hoverBg: "hover:bg-acid-yellow",
    video: undefined,
    codeLink: "https://github.com/an4rky1/pet-saas",
    demoLink: undefined,
  },
];

const experience = [
  {
    branch: "origin/main",
    commit: "a1b2c3d",
    head: true,
    title: "Fullstack Developer",
    company: "Freelance",
    desc: "Built and shipped full-stack web applications using Next.js and TypeScript. Developed REST APIs with NestJS and Express, connected to PostgreSQL. Containerized and deployed projects on Vercel and Render with Docker and CI/CD pipelines.",
    icon: "fa-laptop-code",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "NestJS",
      "Express",
      "Docker",
    ],
  },
  {
    branch: "origin/laravel",
    commit: "e4f5g6h",
    head: false,
    title: "Laravel Fullstack Developer",
    company: "CipherTech",
    desc: "Developed and deployed RESTful APIs and real-time features for client projects using Laravel and Livewire. Set up WebSocket broadcasting with Laravel Reverb for live updates. Managed PostgreSQL databases and Redis caching layer.",
    icon: "fa-bolt",
    tags: ["PHP", "Laravel", "Livewire", "PostgreSQL", "Redis", "Docker"],
  },
  {
    branch: "origin/symfony",
    commit: "i7j8k9l",
    head: false,
    title: "Symfony Fullstack Developer",
    company: "Vertex Labs",
    desc: "Built web applications and REST APIs for clients using Symfony framework. Integrated third-party services, worked with MySQL and Elasticsearch for data storage and search. Used Docker for local development and deployment.",
    icon: "fa-cube",
    tags: ["PHP", "Symfony", "MySQL", "Elasticsearch", "JavaScript", "Docker"],
  },
  {
    branch: "origin/frontend",
    commit: "m0n1o2p",
    head: false,
    title: "Frontend Developer",
    company: "Freelance",
    desc: "Built responsive web interfaces from mockups using HTML, CSS, JavaScript, and React. Collaborated with designers to implement pixel-perfect layouts and smooth user experiences.",
    icon: "fa-paint-brush",
    tags: ["HTML", "CSS", "JavaScript", "React", "Vue.js", "Figma"],
  },
];

const education = [
  {
    branch: "origin/edu",
    commit: "q3r4s5t",
    head: false,
    edu: true,
    title: "Computer Science, BSc",
    company: "Donbas State Engineering Academy (2018 - 2023)",
    desc: "Bachelor degree in Computer Science. Studied algorithms, data structures, software engineering, and computer systems architecture.",
    icon: "fa-graduation-cap",
    tags: ["Computer Science", "Algorithms", "Software Engineering"],
  },
  {
    branch: "init",
    commit: "u6v7w8x",
    head: false,
    last: true,
    edu: true,
    title: "Applied Mathematics",
    company: "Horlivka Technical College (2011 - 2014)",
    desc: "Foundation in applied mathematics, mathematical modeling, and computational methods.",
    icon: "fa-calculator",
    tags: ["Applied Mathematics", "Mathematical Modeling"],
  },
];

const contacts = [
  {
    href: "https://github.com/an4rky1",
    icon: "fab fa-github",
    label: "GitHub",
    url: "github.com/an4rky1",
    arrowHover: true,
  },
  {
    href: "https://t.me/an4rky1",
    icon: "fab fa-telegram",
    label: "Telegram",
    url: "t.me/an4rky1",
    arrowHover: true,
  },
  {
    href: "https://www.linkedin.com/in/roman-ivanov-b19528410/",
    icon: "fab fa-linkedin",
    label: "LinkedIn",
    url: "linkedin.com/in/roman-ivanov-b19528410/",
    arrowHover: true,
  },
  {
    href: "mailto:anarky13proton.me",
    icon: "fas fa-envelope",
    label: "Email",
    url: "anarky13@proton.me",
    arrowHover: true,
  },
];

const skillCategories = {
  languages: {
    items: [
      { name: "Python", icon: "fab fa-python", color: "text-[#3776AB]" },
      { name: "Go", icon: "fab fa-golang", color: "text-[#00ADD8]" },
      { name: "TypeScript", icon: "fab fa-js", color: "text-[#3178C6]" },
      { name: "JavaScript", icon: "fab fa-js", color: "text-[#F7DF1E]" },
      { name: "PHP", icon: "fab fa-php", color: "text-[#777BB4]" },
      { name: "SQL", icon: "fas fa-database", color: "text-[#CC2927]" },
      {
        name: "Rust",
        icon: "fab fa-rust",
        color: "text-[#000000]",
        label: "learning",
      },
      { name: "Bash", icon: "fas fa-terminal", color: "text-[#4EAA25]" },
    ],
    labelColor: "text-[#3399FF]",
  },
  frameworks: {
    items: [
      { name: "FastAPI", icon: "fas fa-bolt", color: "text-[#009688]" },
      { name: "Django", icon: "fas fa-leaf", color: "text-[#092E20]" },
      { name: "Laravel", icon: "fab fa-laravel", color: "text-[#FF2D20]" },
      { name: "Symfony", icon: "fab fa-symfony", color: "text-[#000000]" },
      { name: "React", icon: "fab fa-react", color: "text-[#61DAFB]" },
      { name: "Next.js", icon: "fab fa-js", color: "text-[#000000]" },
      { name: "Vue.js", icon: "fab fa-vuejs", color: "text-[#4FC08D]" },
      { name: "NestJS", icon: "fas fa-cog", color: "text-[#E0234E]" },
      { name: "Express", icon: "fas fa-bolt", color: "text-[#000000]" },
    ],
    labelColor: "text-[#00FF66]",
  },
  databases: {
    items: [
      { name: "PostgreSQL", icon: "fas fa-database", color: "text-[#336791]" },
      { name: "MySQL", icon: "fas fa-database", color: "text-[#4479A1]" },
      { name: "Redis", icon: "fas fa-server", color: "text-[#DC382D]" },
      { name: "MongoDB", icon: "fas fa-leaf", color: "text-[#47A248]" },
      { name: "Elasticsearch", icon: "fas fa-search", color: "text-[#005571]" },
    ],
    labelColor: "text-[#FFE600]",
  },
  infrastructure: {
    items: [
      { name: "Docker", icon: "fab fa-docker", color: "text-[#2496ED]" },
      { name: "K8s", icon: "fas fa-cubes", color: "text-[#326CE5]" },
      { name: "AWS", icon: "fab fa-aws", color: "text-[#FF9900]" },
      { name: "GCP", icon: "fab fa-google", color: "text-[#4285F4]" },
      { name: "Terraform", icon: "fas fa-code", color: "text-[#7B42BC]" },
      { name: "CI/CD", icon: "fas fa-sync", color: "text-[#FF6C37]" },
      { name: "Linux", icon: "fab fa-linux", color: "text-[#FCC624]" },
    ],
    labelColor: "text-[#FF8800]",
  },
};

export default function Home() {
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const header = document.querySelector("header");
      const offset = header ? header.offsetHeight : 0;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <SectionReveal
          id="hero"
          className="min-h-screen flex items-center section-reveal py-12"
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 border-2 border-text-dark bg-acid-green text-text-dark text-sm font-bold shadow-neo-sm neo-btn">
                  <i className="fas fa-circle text-[8px] mr-2 animate-pulse text-acid-pink"></i>
                  status: available_for_hire
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="text-text-dark">echo</span>{" "}
                  <span className="text-acid-green">
                    &ldquo;Hello, I&apos;m
                  </span>
                  <br />
                  <span className="text-text-dark">roman_ivanov&rdquo;</span>
                </h1>
                <p className="text-base sm:text-lg text-text-dark/70 max-w-xl leading-relaxed">
                  Fullstack developer with 3+ years of experience building
                  scalable web applications. I focus on backend development with
                  PHP and TypeScript, and build frontends with React and
                  Next.js. I believe in writing clean, maintainable code and
                  learning something new every day.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="neo-btn inline-flex items-center gap-2 px-6 py-3 border-4 border-text-dark bg-acid-green text-text-dark font-bold shadow-neo text-sm sm:text-base"
                  >
                    <i className="fas fa-rocket"></i> view_projects()
                  </button>
                  <button
                    onClick={() => scrollToSection("experience")}
                    className="neo-btn inline-flex items-center gap-2 px-6 py-3 border-4 border-text-dark bg-bg-light text-text-dark font-bold shadow-neo text-sm sm:text-base hover:bg-acid-yellow"
                  >
                    <i className="fas fa-code-branch"></i> experience()
                  </button>
                  <a
                    href="/resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn inline-flex items-center gap-2 px-6 py-3 border-4 border-text-dark bg-bg-light text-text-dark font-bold shadow-neo text-sm sm:text-base hover:bg-acid-purple"
                  >
                    <i className="fas fa-download"></i> download_cv()
                  </a>
                  <button
                    onClick={() => scrollToSection("contacts")}
                    className="neo-btn inline-flex items-center gap-2 px-6 py-3 border-4 border-text-dark bg-bg-light text-text-dark font-bold shadow-neo text-sm sm:text-base hover:bg-acid-pink"
                  >
                    <i className="fas fa-envelope"></i> contact_me()
                  </button>
                </div>
              </div>
              <div className="self-center md:mt-0 mt-6">
                <div className="flex items-center gap-2 mb-2 px-4 text-xs">
                  <span className="w-3 h-3 rounded-full bg-[#FF3366]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#FFE600]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#00FF66]"></span>
                  <span className="text-text-dark/30 ml-2 font-mono">
                    roman_ivanov@portfolio:~$
                  </span>
                </div>
                <Terminal />
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* ── Separator ── */}
        <div className="flex items-center gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex-1 h-[3px] bg-text-dark"></div>
          <span className="text-xs font-bold text-text-dark/30 tracking-[0.2em] uppercase flex items-center gap-2">
            <i className="fas fa-chevron-down text-acid-green text-[10px]"></i>
            <span>~/continue</span>
            <i className="fas fa-chevron-down text-acid-green text-[10px]"></i>
          </span>
          <div className="flex-1 h-[3px] bg-text-dark"></div>
        </div>

        {/* ── About + Skills ── */}
        <SectionReveal id="about_me" className="py-16 sm:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold">
                <span className="text-text-dark">cat</span>{" "}
                <span className="text-acid-green">/home/about_me.txt</span>
              </h2>
              <div className="h-1 w-24 bg-acid-green mt-3 border-2 border-text-dark shadow-neo-sm"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* about_me.txt */}
              <div className="neo-card border-4 border-text-dark bg-bg-light shadow-neo p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b-2 border-text-dark/20">
                  <div className="w-3 h-3 rounded-full bg-acid-pink border-2 border-text-dark"></div>
                  <div className="w-3 h-3 rounded-full bg-acid-yellow border-2 border-text-dark"></div>
                  <div className="w-3 h-3 rounded-full bg-acid-green border-2 border-text-dark"></div>
                  <span className="ml-2 text-sm text-text-dark/60">
                    about_me.txt
                  </span>
                </div>
                <div className="space-y-4 text-sm sm:text-base text-text-dark/80 leading-relaxed">
                  <p>
                    <span className="text-text-dark font-bold">$ whoami</span>
                  </p>
                  <p>
                    Fullstack developer with{" "}
                    <span className="bg-acid-green px-1 border border-text-dark font-bold">
                      3+ years
                    </span>{" "}
                    of experience building scalable web applications.
                    Specialized in backend development with PHP and TypeScript,
                    with strong frontend skills in React and Next.js.
                  </p>
                  <p>
                    <span className="text-text-dark font-bold">
                      $ cat philosophy.txt
                    </span>
                  </p>
                  <p>
                    Passionate about building scalable backend systems, clean
                    APIs, and performant web applications. Currently diving deep
                    into <span className="text-acid-green font-bold">Go</span>{" "}
                    and systems programming.
                  </p>
                  <p>Remote-first, based in Eastern Europe 🇺🇦</p>
                  <div className="pt-4 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 border-2 border-text-dark text-xs font-bold bg-acid-green shadow-neo-sm">
                      <i className="fas fa-map-marker-alt text-[10px]"></i>{" "}
                      Remote, Eastern Europe
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 border-2 border-text-dark text-xs font-bold bg-bg-light shadow-neo-sm">
                      <i className="fas fa-language text-[10px]"></i> RU / EN /
                      UA
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 border-2 border-text-dark text-xs font-bold bg-bg-light shadow-neo-sm">
                      <i className="fas fa-coffee text-[10px]"></i>{" "}
                      coffee-powered
                    </span>
                  </div>
                </div>
              </div>
              {/* skills.json */}
              <div
                id="skills"
                className="neo-card border-4 border-text-dark bg-bg-light shadow-neo p-5 sm:p-6"
              >
                <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-text-dark/20">
                  <div className="w-3 h-3 rounded-full bg-acid-pink border-2 border-text-dark"></div>
                  <div className="w-3 h-3 rounded-full bg-acid-yellow border-2 border-text-dark"></div>
                  <div className="w-3 h-3 rounded-full bg-acid-green border-2 border-text-dark"></div>
                  <span className="ml-2 text-sm text-text-dark/60">
                    skills.json
                  </span>
                </div>
                <div className="mb-3 text-xs">
                  <span className="text-text-dark font-bold">
                    $ cat skills.json | jq
                  </span>
                </div>
                <div className="font-mono text-xs leading-tight space-y-3">
                  <p className="text-text-dark/50">
                    <span className="text-text-dark/40">{"{"}</span>
                  </p>
                  {Object.entries(skillCategories).map(
                    ([category, { items, labelColor }]) => (
                      <div key={category}>
                        <p className="text-text-dark">
                          <span className={`${labelColor} font-bold`}>
                            &quot;{category}&quot;
                          </span>
                          <span className="text-text-dark/40">: [</span>
                        </p>
                        <div className="flex flex-wrap gap-1.5 ml-4 mt-1 mb-1">
                          {items.map((skill) => {
                            let bgColor = "bg-blue-50 text-blue-600";
                            if (category === "languages")
                              bgColor = "bg-blue-50 text-blue-600";
                            else if (category === "frameworks")
                              bgColor = "bg-green-50 text-green-600";
                            else if (category === "databases")
                              bgColor = "bg-yellow-50 text-yellow-600";
                            else if (category === "infrastructure")
                              bgColor = "bg-purple-50 text-purple-600";
                            return (
                              <span
                                key={skill.name}
                                className={`skill-tag inline-flex items-center gap-1 px-2 py-1 border-2 border-text-dark ${bgColor} text-[11px] font-bold shadow-neo-sm leading-tight cursor-pointer`}
                              >
                                {skill.icon && (
                                  <i
                                    className={`${skill.icon} ${skill.color} text-[10px]`}
                                  ></i>
                                )}
                                {"label" in skill && !skill.icon && (
                                  <span className="font-bold text-[10px]">
                                    {skill.label}
                                  </span>
                                )}
                                {skill.name}
                                {"label" in skill && skill.label && (
                                  <span className="text-[8px] text-acid-pink ml-0.5">
                                    ({skill.label})
                                  </span>
                                )}
                              </span>
                            );
                          })}
                        </div>
                        <p className="text-text-dark/40 ml-1">],</p>
                      </div>
                    ),
                  )}
                  <p className="text-text-dark/50">
                    <span className="text-text-dark/40">{"}"}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* ── Separator ── */}
        <div className="flex items-center gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex-1 h-[3px] bg-text-dark"></div>
          <span className="text-xs font-bold text-text-dark/30 tracking-[0.2em] uppercase flex items-center gap-2">
            <i className="fas fa-chevron-down text-acid-yellow text-[10px]"></i>
            <span>~/continue</span>
            <i className="fas fa-chevron-down text-acid-yellow text-[10px]"></i>
          </span>
          <div className="flex-1 h-[3px] bg-text-dark"></div>
        </div>

        {/* ── Projects ── */}
        <SectionReveal id="projects" className="py-16 sm:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold">
                <span className="text-text-dark">ls -la</span>{" "}
                <span className="text-acid-green">/home/projects/</span>
              </h2>
              <div className="h-1 w-24 bg-acid-yellow mt-3 border-2 border-text-dark shadow-neo-sm"></div>
            </div>
            <ProjectsSection projects={projects} initialCount={6} />
          </div>
        </SectionReveal>

        {/* ── Separator ── */}
        <div className="flex items-center gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex-1 h-[3px] bg-text-dark"></div>
          <span className="text-xs font-bold text-text-dark/30 tracking-[0.2em] uppercase flex items-center gap-2">
            <i className="fas fa-chevron-down text-acid-purple text-[10px]"></i>
            <span>~/continue</span>
            <i className="fas fa-chevron-down text-acid-purple text-[10px]"></i>
          </span>
          <div className="flex-1 h-[3px] bg-text-dark"></div>
        </div>

        {/* ── Experience ── */}
        <SectionReveal id="experience" className="py-12 sm:py-24">
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold">
                <span className="text-text-dark">git log</span>{" "}
                <span className="text-acid-green">--oneline --graph</span>
              </h2>
              <div className="h-1 w-24 bg-acid-green mt-3 border-2 border-text-dark shadow-neo-sm"></div>
            </div>
            <div className="relative pl-8 sm:pl-12">
              <div className="absolute left-[18px] sm:left-[34px] top-0 bottom-0 w-1 bg-text-dark"></div>
              {experience.map((exp, i) => (
                <GitNode key={i} {...exp} id={`exp-${i}`} />
              ))}
              {education.map((edu, i) => (
                <GitNode key={`edu-${i}`} {...edu} id={`edu-${i}`} />
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* ── Separator ── */}
        <div className="flex items-center gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex-1 h-[3px] bg-text-dark"></div>
          <span className="text-xs font-bold text-text-dark/30 tracking-[0.2em] uppercase flex items-center gap-2">
            <i className="fas fa-chevron-down text-acid-pink text-[10px]"></i>
            <span>~/continue</span>
            <i className="fas fa-chevron-down text-acid-pink text-[10px]"></i>
          </span>
          <div className="flex-1 h-[3px] bg-text-dark"></div>
        </div>

        {/* ── Contacts ── */}
        <SectionReveal id="contacts" className="py-16 sm:py-24">
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold">
                <span className="text-text-dark">ssh</span>{" "}
                <span className="text-acid-green">user_name@contacts</span>
              </h2>
              <div className="h-1 w-24 bg-acid-green mt-3 border-2 border-text-dark shadow-neo-sm"></div>
              <p className="text-sm text-text-dark/50 mt-4">
                <span className="text-text-dark/40">
                  Connection established
                </span>{" "}
                · <span className="text-acid-green">encrypted</span> ·{" "}
                <span className="text-text-dark/40">port 22</span>
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {contacts.map((contact, i) => (
                <a
                  key={i}
                  href={contact.href}
                  target={
                    contact.href.startsWith("mailto") ? undefined : "_blank"
                  }
                  rel={
                    contact.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="contact-card neo-card border-4 border-text-dark bg-bg-light shadow-neo p-5 block group"
                >
                  <div className="flex items-start gap-4">
                    <div className="contact-icon-wrap flex-shrink-0 w-12 h-12 border-3 border-text-dark bg-bg-light shadow-neo-sm flex items-center justify-center text-xl">
                      <i className={`${contact.icon} text-text-dark`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-text-dark">
                          {contact.label}
                        </h3>
                        <span className="pulse-dot inline-block w-2 h-2 rounded-full bg-acid-green border border-text-dark"></span>
                      </div>
                      <p className="text-xs text-text-dark/50 truncate">
                        {contact.url}
                      </p>
                      <div className="mt-2 inline-block px-2 py-0.5 border-2 border-text-dark text-[10px] font-bold bg-acid-green shadow-neo-sm">
                        [status: active]
                      </div>
                    </div>
                    <div className="flex-shrink-0 text-text-dark/30 group-hover:text-acid-green group-hover:translate-x-1 transition-all">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="neo-card border-4 border-text-dark bg-bg-light shadow-neo overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b-2 border-text-dark">
                <i className="fas fa-terminal text-text-dark"></i>
                <span className="font-mono font-bold text-sm text-text-dark">
                  send_message.sh
                </span>
                <span className="text-text-dark/40 text-xs font-mono ml-auto">
                  — write a message
                </span>
              </div>
              <ContactForm />
            </div>
          </div>
        </SectionReveal>

        <footer className="border-t-4 border-text-dark bg-bg-light py-8">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-text-dark/60 text-balance text-center sm:text-left">
                ©{" "}
                <span className="text-text-dark font-bold">Roman Ivanov</span>.
                Powered by{" "}
                <span className="text-acid-green font-bold">
                  pure_coffee_and_code
                </span>
                .
              </p>
              <p className="text-xs sm:text-sm shrink-0">
                <span className="inline-flex items-center gap-2 px-3 py-1 border-2 border-text-dark bg-acid-green text-text-dark font-bold shadow-neo-sm text-xs whitespace-nowrap">
                  <i className="fas fa-check-circle"></i>Project status: 200 OK
                </span>
              </p>
            </div>
            <div className="mt-4 text-center text-xs text-text-dark/30">
              <span className="text-text-dark">$</span> echo &ldquo;Thanks for
              stopping by!&rdquo;
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
