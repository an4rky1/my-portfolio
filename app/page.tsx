'use client';

import Header from '@/app/components/Header';
import Terminal from '@/app/components/Terminal';
import ContactForm from '@/app/components/ContactForm';
import SectionReveal from '@/app/components/SectionReveal';
import GitNode from '@/app/components/GitNode';
import ProjectsSection from '@/app/components/ProjectsSection';

const projects = [
  {
    title: 'BLOG_PLATFORM',
    description: 'Full-stack blog platform with JWT authentication, full-text search, tags, and user profiles. Built with Feature-Sliced Design architecture for scalability, smooth scroll with Lenis, and Zod validation.',
    tags: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Framer Motion', 'Lenis', 'Zod', 'JWT'],
    color: 'bg-acid-green',
    status: '[status: production]',
    statusBg: 'bg-acid-green',
    hoverBg: 'hover:bg-acid-green',
    video: '1.mp4',
    codeLink: 'https://github.com/an4rky1/retro-games-blog',
    demoLink: 'https://retro-games-blog.vercel.app/',
  },
  {
    title: 'PIXEL_ART_CONVERTER',
    description: 'Image-to-pixel-art converter with customizable settings and user gallery. Features JWT authentication, PostgreSQL database with Drizzle ORM, and Sharp for high-performance image processing.',
    tags: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Sharp', 'Tailwind CSS', 'JWT'],
    color: 'bg-acid-yellow',
    status: '[status: in_development]',
    statusBg: 'bg-acid-yellow',
    hoverBg: 'hover:bg-acid-yellow',
    video: '2.mp4',
    codeLink: 'https://github.com/an4rky1/pixelart-converter',
    demoLink: 'https://pixelart-converter-lemon.vercel.app/',
  },
  {
    title: 'NEWS_PLATFORM',
    description: 'Full-stack news aggregation platform with real-time updates, user authentication, and animated UI. Built with Supabase for backend, React Query for data fetching, and Framer Motion for smooth transitions.',
    tags: ['Next.js 16', 'TypeScript', 'Supabase', 'Tailwind CSS 4', 'React Query', 'Framer Motion', 'Zustand'],
    color: 'bg-acid-purple',
    status: '[status: refactoring]',
    statusBg: 'bg-purple-200 text-purple-900',
    hoverBg: 'hover:bg-purple-200',
    video: '3.mp4',
    codeLink: 'https://github.com/an4rky1/news',
    demoLink: 'https://news-liart-two.vercel.app/feed',
  },
  {
    title: 'ASCII_TERMINAL',
    description: 'Interactive Matrix-style terminal for ASCII art generation. Features image-to-ASCII conversion via Canvas API, AI image generation (Hugging Face), bento grid gallery with glitch effects, and Supabase authentication.',
    tags: ['Next.js 16', 'TypeScript', 'Supabase', 'Tailwind CSS 4', 'Zustand', 'React Query'],
    color: 'bg-acid-green',
    status: '[status: production]',
    statusBg: 'bg-acid-green',
    hoverBg: 'hover:bg-acid-green',
    video: '4.mp4',
    codeLink: 'https://github.com/an4rky1/ascii-generator',
    demoLink: 'https://ascii-generator-eight.vercel.app/',
  },
  {
    title: 'KANBAN_BOARD',
    description: 'Real-time drag-and-drop Kanban board with columns and tasks. Supports WebSocket-based live broadcasting via Laravel Reverb when tasks are moved. Features a brutalist/neon aesthetic with thick borders and vibrant colors.',
    tags: ['PHP 8.4', 'Laravel 13', 'Livewire 4', 'Alpine.js', 'Laravel Reverb', 'PostgreSQL', 'Docker', 'Tailwind CSS 4'],
    color: 'bg-acid-yellow',
    status: '[status: in_development]',
    statusBg: 'bg-acid-yellow',
    hoverBg: 'hover:bg-acid-yellow',
    video: '5.mp4',
    codeLink: 'https://github.com/an4rky1/kanban',
    demoLink: 'https://kanban-ehxx.onrender.com',
  },
  {
    title: 'TERMINAL_QUEST',
    description: 'Text-based RPG styled as a retro hacker terminal. Players navigate rooms via slash-commands, interact with objects, and solve puzzles with persistent state saved to PostgreSQL. Built with Laravel and vanilla JavaScript.',
    tags: ['PHP 8.3', 'Laravel 13', 'JavaScript', 'Tailwind CSS 4', 'PostgreSQL', 'Docker', 'Vite'],
    color: 'bg-acid-purple',
    status: '[status: refactoring]',
    statusBg: 'bg-purple-200 text-purple-900',
    hoverBg: 'hover:bg-purple-200',
    video: '6.mp4',
    codeLink: 'https://github.com/an4rky1/terminal-quest',
    demoLink: 'https://terminal-quest.onrender.com',
  },
  {
    title: 'BRUTAL_THOUGHTS',
    description: 'Random quote generator with neo-brutalist visual style — thick borders, flat shadows, acid/neon colors, and floating geometric shapes. Users can view random quotes and download them as PNG images.',
    tags: ['PHP 8.4', 'Laravel 13', 'Alpine.js', 'Tailwind CSS 4', 'PostgreSQL', 'Docker', 'Vite'],
    color: 'bg-acid-green',
    status: '[status: production]',
    statusBg: 'bg-acid-green',
    hoverBg: 'hover:bg-acid-green',
    video: '7.mp4',
    codeLink: 'https://github.com/an4rky1/brutal',
    demoLink: 'https://brutal-38rs.onrender.com',
  },
  {
    title: 'SMART_VCARD',
    description: 'Digital business card (vCard) generator with custom QR codes. Users fill out a Livewire form to create a vcard with social links and avatar, and get a shareable public profile with stylish QR code that embeds their avatar.',
    tags: ['PHP 8.3', 'Laravel 13', 'Livewire 4', 'Alpine.js', 'Tailwind CSS 4', 'PostgreSQL', 'Docker'],
    color: 'bg-acid-yellow',
    status: '[status: in_development]',
    statusBg: 'bg-acid-yellow',
    hoverBg: 'hover:bg-acid-yellow',
    video: '8.mp4',
    codeLink: 'https://github.com/an4rky1/qr-code-generator',
    demoLink: 'https://qr-code-generator-9zoi.onrender.com',
  },
  {
    title: 'RESUME_GENERATOR',
    description: 'Minimalist resume/card generator inspired by 1960s Swiss poster design. Users fill out a form with bio, skills, and experience, choose from 3 Swiss-inspired templates, and generate print-ready A4 PDFs server-side with WeasyPrint.',
    tags: ['Python 3.12', 'Django 6.0', 'WeasyPrint', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
    color: 'bg-acid-purple',
    status: '[status: refactoring]',
    statusBg: 'bg-purple-200 text-purple-900',
    hoverBg: 'hover:bg-purple-200',
    video: '9.mp4',
    codeLink: 'https://github.com/an4rky1/resume-generator',
    demoLink: 'https://resume-generator-ob8d.onrender.com',
  },
  {
    title: 'TAROT_CARD_DAILY',
    description: 'Interactive daily Tarot card generator with Dark Academia / Gothic aesthetic — deep wine and emerald tones, gold borders, 3D card-flip CSS animations. One draw per day per IP with rate limiting middleware.',
    tags: ['Python 3.12', 'Django 6.0', 'Alpine.js', 'Tailwind CSS', 'Redis', 'Docker'],
    color: 'bg-acid-green',
    status: '[status: production]',
    statusBg: 'bg-acid-green',
    hoverBg: 'hover:bg-acid-green',
    video: '10.mp4',
    codeLink: 'https://github.com/an4rky1/taro',
    demoLink: 'https://taro-14go.onrender.com',
  },
  {
    title: 'CORE_FRAMEWORK',
    description: 'Core framework and shared libraries for microservices architecture. Built with Nx monorepo, NestJS, Express, and Zod for type-safe contracts. Provides reusable infrastructure drivers and domain modules.',
    tags: ['NestJS 11', 'Nx', 'TypeScript', 'Express 5', 'Zod', 'RxJS', 'Jest'],
    color: 'bg-acid-yellow',
    status: '[status: in_progress]',
    statusBg: 'bg-acid-yellow',
    hoverBg: 'hover:bg-acid-yellow',
    video: undefined,
    codeLink: undefined,
    demoLink: undefined,
  },
  {
    title: 'SAAS_PLATFORM',
    description: 'Microservices SaaS platform with GraphQL Federation, gRPC inter-service communication, and CQRS/DDD architecture. Includes auth, user management, API gateway, and Next.js frontend.',
    tags: ['NestJS 11', 'GraphQL Federation', 'gRPC', 'CQRS', 'Apollo Gateway', 'Bull (Redis)', 'Drizzle ORM', 'Next.js'],
    color: 'bg-acid-yellow',
    status: '[status: in_progress]',
    statusBg: 'bg-acid-yellow',
    hoverBg: 'hover:bg-acid-yellow',
    video: undefined,
    codeLink: undefined,
    demoLink: undefined,
  },
];

const experience = [
  {
    branch: 'origin/main',
    commit: 'a1b2c3d',
    head: true,
    title: 'Next.js Developer',
    company: 'Freelance',
    desc: 'Building modern web applications with Next.js, TypeScript, and Tailwind CSS. Developing full-stack solutions with PostgreSQL, Drizzle ORM, and various cloud services.',
    icon: 'fa-laptop-code',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
  },
  {
    branch: 'origin/laravel',
    commit: 'e4f5g6h',
    head: false,
    title: 'Laravel Fullstack Developer',
    company: 'CipherTech',
    desc: 'Developed and maintained enterprise-level web applications using Laravel and Livewire. Designed RESTful APIs, implemented real-time features with Laravel Reverb, and managed PostgreSQL databases.',
    icon: 'fa-bolt',
    tags: ['PHP', 'Laravel', 'Livewire', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    branch: 'origin/symfony',
    commit: 'i7j8k9l',
    head: false,
    title: 'Symfony Fullstack Developer',
    company: 'Vertex Labs',
    desc: 'Built scalable web applications using Symfony framework. Implemented complex business logic, REST APIs, and integrated third-party services. Worked with MySQL and Elasticsearch for data management.',
    icon: 'fa-cube',
    tags: ['PHP', 'Symfony', 'MySQL', 'Elasticsearch', 'JavaScript', 'Docker'],
  },
  {
    branch: 'origin/frontend',
    commit: 'm0n1o2p',
    head: false,
    title: 'Frontend Developer',
    company: 'Freelance',
    desc: 'Created responsive web interfaces using HTML, CSS, JavaScript, and React. Collaborated with designers to implement pixel-perfect layouts and smooth user experiences.',
    icon: 'fa-paint-brush',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'Figma'],
  },
];

const education = [
  {
    branch: 'origin/edu',
    commit: 'q3r4s5t',
    head: false,
    edu: true,
    title: 'Computer Science, BSc',
    company: 'Donbas State Engineering Academy (2018 - 2023)',
    desc: 'Bachelor degree in Computer Science. Studied algorithms, data structures, software engineering, and computer systems architecture.',
    icon: 'fa-graduation-cap',
    tags: ['Computer Science', 'Algorithms', 'Software Engineering'],
  },
  {
    branch: 'init',
    commit: 'u6v7w8x',
    head: false,
    last: true,
    edu: true,
    title: 'Applied Mathematics',
    company: 'Horlivka Technical College · init commit',
    desc: 'Foundation in applied mathematics, mathematical modeling, and computational methods.',
    icon: 'fa-calculator',
    tags: ['Applied Mathematics', 'Mathematical Modeling'],
  },
];

const contacts = [
  {
    href: 'https://github.com/an4rky1',
    icon: 'fab fa-github',
    label: 'GitHub',
    url: 'github.com/an4rky1',
    arrowHover: true,
  },
  {
    href: 'https://t.me/an4rky1',
    icon: 'fab fa-telegram',
    label: 'Telegram',
    url: 't.me/an4rky1',
    arrowHover: true,
  },
  {
    href: 'https://linkedin.com/in/an4rky1',
    icon: 'fab fa-linkedin',
    label: 'LinkedIn',
    url: 'linkedin.com/in/an4rky1',
    arrowHover: true,
  },
  {
    href: 'mailto:roman.ivanov@email.com',
    icon: 'fas fa-envelope',
    label: 'Email',
    url: 'roman.ivanov@email.com',
    arrowHover: true,
  },
];

const skillCategories = {
  languages: {
    items: [
      { name: 'Python', icon: 'fab fa-python', color: 'text-[#3776AB]' },
      { name: 'Go', icon: 'fab fa-golang', color: 'text-[#00ADD8]' },
      { name: 'TypeScript', icon: 'fab fa-js', color: 'text-[#3178C6]' },
      { name: 'JavaScript', icon: 'fab fa-js', color: 'text-[#F7DF1E]' },
      { name: 'PHP', icon: 'fab fa-php', color: 'text-[#777BB4]' },
      { name: 'SQL', icon: 'fas fa-database', color: 'text-[#CC2927]' },
      { name: 'Rust', icon: 'fab fa-rust', color: 'text-[#000000]', label: 'learning' },
    ],
    labelColor: 'text-[#3399FF]',
  },
  frameworks: {
    items: [
      { name: 'FastAPI', icon: 'fas fa-bolt', color: 'text-[#009688]' },
      { name: 'Django', icon: 'fas fa-leaf', color: 'text-[#092E20]' },
      { name: 'Laravel', icon: 'fab fa-laravel', color: 'text-[#FF2D20]' },
      { name: 'Symfony', icon: 'fab fa-symfony', color: 'text-[#000000]' },
      { name: 'React', icon: 'fab fa-react', color: 'text-[#61DAFB]' },
      { name: 'Next.js', icon: 'fab fa-js', color: 'text-[#000000]' },
      { name: 'Vue.js', icon: 'fab fa-vuejs', color: 'text-[#4FC08D]' },
    ],
    labelColor: 'text-[#00FF66]',
  },
  databases: {
    items: [
      { name: 'PostgreSQL', icon: 'fas fa-database', color: 'text-[#336791]' },
      { name: 'MySQL', icon: 'fas fa-database', color: 'text-[#4479A1]' },
      { name: 'Redis', icon: 'fas fa-server', color: 'text-[#DC382D]' },
      { name: 'MongoDB', icon: 'fas fa-leaf', color: 'text-[#47A248]' },
      { name: 'Elasticsearch', icon: 'fas fa-search', color: 'text-[#005571]' },
    ],
    labelColor: 'text-[#FFE600]',
  },
  infrastructure: {
    items: [
      { name: 'Docker', icon: 'fab fa-docker', color: 'text-[#2496ED]' },
      { name: 'K8s', icon: 'fas fa-cubes', color: 'text-[#326CE5]' },
      { name: 'AWS', icon: 'fab fa-aws', color: 'text-[#FF9900]' },
      { name: 'GCP', icon: 'fab fa-google', color: 'text-[#4285F4]' },
      { name: 'Terraform', icon: 'fas fa-code', color: 'text-[#7B42BC]' },
      { name: 'CI/CD', icon: 'fas fa-sync', color: 'text-[#FF6C37]' },
    ],
    labelColor: 'text-[#FF8800]',
  },
};

export default function Home() {
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const header = document.querySelector('header');
      const offset = header ? header.offsetHeight : 0;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - offset, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <main>
        <SectionReveal id="hero" className="min-h-0 sm:min-h-[50vh] md:min-h-[70vh] lg:min-h-screen flex items-start sm:items-center py-1 sm:py-4 md:py-8 lg:py-12">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-12">
              <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 self-start sm:self-center">
                <div className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 text-[10px] sm:text-xs md:text-sm font-bold border-2 border-text-dark bg-acid-green shadow-neo-sm leading-tight">
                  <i className="fas fa-circle text-[6px] text-acid-pink animate-pulse"></i>
                  <span>status: available_for_hire</span>
                </div>

                <h1 className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold text-text-dark leading-tight">
                  <span className="text-acid-green">echo</span>{' '}
                  <span className="text-text-dark/60">&ldquo;Hello, I&apos;m</span>{' '}
                  <span className="text-text-dark">fullstack_developer&rdquo;</span>
                </h1>

                <p className="text-[11px] sm:text-xs md:text-base lg:text-lg text-text-dark/70 leading-relaxed max-w-xl">
                  Fullstack developer with 3+ years of experience building scalable web applications.
                  Backend-heavy fullstack developer specializing in PHP, Python, React, and Next.js.
                </p>

                <div className="flex flex-wrap gap-2 text-[10px] sm:text-xs md:text-sm font-bold">
                  <span className="px-2 py-1 border-2 border-text-dark bg-acid-pink text-white shadow-neo-sm leading-tight">3+ years experience</span>
                  <span className="px-2 py-1 border-2 border-text-dark bg-acid-yellow shadow-neo-sm leading-tight">10+ projects</span>
                  <span className="px-2 py-1 border-2 border-text-dark bg-acid-purple text-white shadow-neo-sm leading-tight">clean code</span>
                  <span className="px-2 py-1 border-2 border-text-dark bg-acid-green shadow-neo-sm leading-tight">coffee_powered</span>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-3 pt-1 sm:pt-2">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="neo-btn px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 border-3 sm:border-4 text-[10px] sm:text-xs md:text-base font-bold bg-acid-green text-text-dark shadow-neo hover:bg-acid-green/90 leading-tight"
                  >
                    <i className="fas fa-folder-open mr-1"></i>
                    view_projects()
                  </button>
                  <button
                    onClick={() => scrollToSection('experience')}
                    className="neo-btn px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 border-3 sm:border-4 text-[10px] sm:text-xs md:text-base font-bold bg-bg-light text-text-dark shadow-neo hover:bg-acid-yellow leading-tight"
                  >
                    <i className="fas fa-code-branch mr-1"></i>
                    experience()
                  </button>
                  <a
                    href="/resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 border-3 sm:border-4 text-[10px] sm:text-xs md:text-base font-bold bg-bg-light text-text-dark shadow-neo hover:bg-acid-purple leading-tight inline-flex items-center"
                  >
                    <i className="fas fa-download mr-1"></i>
                    download_cv()
                  </a>
                  <button
                    onClick={() => scrollToSection('contacts')}
                    className="neo-btn px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 border-3 sm:border-4 text-[10px] sm:text-xs md:text-base font-bold bg-bg-light text-text-dark shadow-neo hover:bg-acid-pink hover:text-white leading-tight"
                  >
                    <i className="fas fa-envelope mr-1"></i>
                    contact_me()
                  </button>
                </div>
              </div>

              <div className="hidden lg:block self-center">
                <Terminal />
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal id="about_me" className="py-16 sm:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-text-dark mb-8 sm:mb-12 font-mono flex items-center gap-2">
              <span className="text-acid-green">$</span>
              <span>cat /home/about_me.txt</span>
              <span className="text-text-dark/40 text-sm font-normal">— whoami</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              <div className="neo-card border-4 border-text-dark bg-bg-light p-5 sm:p-6 lg:p-8 shadow-neo">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-text-dark/20">
                  <div className="w-3 h-3 rounded-full bg-acid-pink border-2 border-text-dark"></div>
                  <div className="w-3 h-3 rounded-full bg-acid-yellow border-2 border-text-dark"></div>
                  <div className="w-3 h-3 rounded-full bg-acid-green border-2 border-text-dark"></div>
                  <span className="ml-2 text-sm text-text-dark/60">skills.json</span>
                </div>
                <div className="mb-3 text-xs"><span className="text-text-dark font-bold">$ cat skills.json | jq</span></div>
                <div className="font-mono text-xs leading-tight space-y-3">
                  <p className="text-text-dark/50"><span className="text-text-dark/40">{</span></p>
                  <div>
                    {Object.entries(skillCategories).map(([category, { items, labelColor }]) => (
                      <div key={category}>
                        <p className="text-text-dark"><span className={`${labelColor} font-bold`}>&quot;{category}&quot;</span><span className="text-text-dark/40">: [</span></p>
                        <div className="flex flex-wrap gap-1.5 ml-4 mt-1 mb-1">
                          {items.map((skill) => {
                            // Assign colors based on category for visual consistency with port.html
                            let bgColor = 'bg-blue-50 text-blue-600';
                            if (category === 'languages') bgColor = 'bg-blue-50 text-blue-600';
                            else if (category === 'frameworks') bgColor = 'bg-green-50 text-green-600';
                            else if (category === 'databases') bgColor = 'bg-yellow-50 text-yellow-600';
                            else if (category === 'infrastructure') bgColor = 'bg-purple-50 text-purple-600';
                            return (
                              <span
                                key={skill.name}
                                className={`px-2 py-1 border-2 border-text-dark ${bgColor} text-[10px] font-bold shadow-neo-sm leading-tight`}
                              >
                                {skill.icon && <i className={`${skill.icon} text-[10px]`}></i>}
                                {!skill.icon && <span className="font-bold text-[10px]">{skill.label}</span>}
                                {skill.name}
                              </span>
                            );
                          })}
                        </div>
                        <p className="text-text-dark/40 ml-1">],</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-text-dark/50"><span className="text-text-dark/40">{</span></p>
                </div>
              </div>
                <div className="space-y-4 text-sm sm:text-base text-text-dark/80 leading-relaxed">
                  <p><span className="text-text-dark font-bold">$ whoami</span></p>
                  <p>
                    Fullstack developer with{' '}
                    <span className="bg-acid-green px-1 border border-text-dark font-bold">3+ years</span>{' '}
                    of experience building scalable web applications. Specialized in backend development with PHP and Python, with strong frontend skills in React and Next.js.
                  </p>
                  <p><span className="text-text-dark font-bold">$ cat philosophy.txt</span></p>
                  <p>
                    Passionate about building scalable backend systems,
                    clean APIs, and performant web applications.
                    Currently diving deep into <span className="text-acid-green font-bold">Go</span> and systems programming.
                  </p>
                  <p>Remote-first, based in Eastern Europe.</p>
                  <div className="pt-4 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 border-2 border-text-dark text-xs font-bold bg-acid-green shadow-neo-sm">
                      <i className="fas fa-map-marker-alt text-[10px]"></i> Remote, Eastern Europe
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 border-2 border-text-dark text-xs font-bold bg-bg-light shadow-neo-sm">
                      <i className="fas fa-language text-[10px]"></i> RU / EN
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 border-2 border-text-dark text-xs font-bold bg-bg-light shadow-neo-sm">
                      <i className="fas fa-coffee text-[10px]"></i> coffee-powered
                    </span>
                  </div>
                </div>
              </div>

              <div className="neo-card border-4 border-text-dark bg-bg-light p-5 sm:p-6 lg:p-8 shadow-neo">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-acid-green font-mono text-sm">$</span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-text-dark">cat skills.json | jq</span>
                </div>
                <div className="font-mono text-xs sm:text-sm space-y-4">
                  {Object.entries(skillCategories).map(([category, { items, labelColor }]) => (
                    <div key={category}>
                      <span className={`${labelColor} font-bold`}>
                        &ldquo;{category}&rdquo;: [
                      </span>
                      <div className="flex flex-wrap gap-1.5 ml-4 mt-1">
                        {items.map((skill) => (
                          <span
                            key={skill.name}
                            className="px-2 py-1 border-2 border-text-dark bg-bg-light text-[10px] sm:text-xs font-bold shadow-neo-sm leading-tight flex items-center gap-1"
                          >
                            <i className={`${skill.icon} ${skill.color}`}></i>
                            {skill.name}
                            {'label' in skill && skill.label && (
                              <span className="text-[8px] text-acid-pink ml-0.5">({skill.label})</span>
                            )}
                          </span>
                        ))}
                      </div>
                      <span className={`${labelColor} font-bold`}>,</span>
                    </div>
                  ))}
                  <div className="text-text-dark/40">{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal id="projects">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-text-dark mb-8 sm:mb-12 font-mono flex items-center gap-2">
              <span className="text-acid-green">$</span>
              <span>ls -la ./projects/</span>
              <span className="text-text-dark/40 text-sm font-normal">— 12 entries</span>
            </h2>
            <ProjectsSection projects={projects} initialCount={6} />
          </div>
        </SectionReveal>

        <SectionReveal id="experience">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-text-dark mb-8 sm:mb-12 font-mono flex items-center gap-2">
              <span className="text-acid-green">$</span>
              <span>git log --oneline</span>
              <span className="text-text-dark/40 text-sm font-normal">— 6 commits</span>
            </h2>
            <div className="relative pl-8 sm:pl-10 border-l-4 border-text-dark ml-2 sm:ml-3">
              {experience.map((exp, i) => (
                <GitNode key={i} {...exp} id={`exp-${i}`} />
              ))}
              {education.map((edu, i) => (
                <GitNode key={`edu-${i}`} {...edu} id={`edu-${i}`} />
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal id="contacts">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-text-dark mb-8 sm:mb-12 font-mono flex items-center gap-2">
              <span className="text-acid-green">$</span>
              <span>curl contacts/api</span>
              <span className="text-text-dark/40 text-sm font-normal">— 4 endpoints</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {contacts.map((contact, i) => (
                <a
                  key={i}
                  href={contact.href}
                  target={contact.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={contact.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="neo-card border-4 border-text-dark bg-bg-light p-5 sm:p-6 shadow-neo hover:shadow-neo-lg transition-shadow group flex items-center gap-4"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 border-4 border-text-dark bg-acid-green flex items-center justify-center text-lg sm:text-xl shadow-neo-sm shrink-0">
                    <i className={`${contact.icon} text-text-dark`}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-text-dark/50 font-mono">{contact.label}</p>
                    <p className="text-sm sm:text-base font-bold text-text-dark truncate">{contact.url}</p>
                  </div>
                  <div className="w-8 h-8 border-2 border-text-dark bg-bg-light flex items-center justify-center shadow-neo-sm group-hover:bg-acid-green transition-colors shrink-0">
                    <i className="fas fa-arrow-right text-text-dark text-xs"></i>
                  </div>
                </a>
              ))}
            </div>

            <div className="neo-card border-4 border-text-dark bg-bg-light shadow-neo overflow-hidden">
              <div className="bg-acid-yellow border-b-4 border-text-dark px-5 sm:px-6 py-3 flex items-center gap-2">
                <i className="fas fa-terminal text-text-dark"></i>
                <span className="font-mono font-bold text-sm text-text-dark">send_message.sh</span>
                <span className="text-text-dark/50 text-xs font-mono ml-auto">— write a message</span>
              </div>
              <ContactForm />
            </div>

            <footer className="mt-16 sm:mt-24 text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-1">
                  {['#FF3366', '#FFE600', '#00FF66', '#3399FF', '#B026FF'].map((c, i) => (
                    <span key={i} className="w-4 sm:w-6 h-1" style={{ backgroundColor: c }}></span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-text-dark/50 font-mono">
                  <span className="text-acid-green">©</span> 2026 Roman Ivanov
                  <span className="mx-2 text-text-dark/30">|</span>
                  <span className="text-acid-green">Built with</span> Next.js <span className="text-acid-green">•</span> TypeScript <span className="text-acid-green">•</span> Coffee
                </p>
                <p className="text-[10px] text-text-dark/30 font-mono">
                  <i className="fas fa-check-circle text-acid-green mr-1"></i>
                  status: 200 OK
                </p>
              </div>
            </footer>
          </div>
        </SectionReveal>
      </main>
    </>
  );
}
