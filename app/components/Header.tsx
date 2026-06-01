'use client';

import { useState, useEffect } from 'react';

const sections = ['hero', 'about_me', 'projects', 'experience', 'contacts'];
const extensions: Record<string, string> = {
  hero: '.zsh',
  about_me: '.md',
  projects: '.go',
  experience: '.git',
  contacts: '.sh',
};
const icons: Record<string, string> = {
  hero: 'fa-terminal',
  about_me: 'fa-file-alt',
  projects: 'fa-folder-open',
  experience: 'fa-code-branch',
  contacts: 'fa-envelope',
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('hero');

  useEffect(() => {
    const update = () => {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const scrollPos = window.scrollY + headerHeight + 1;
      let current = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= scrollPos) current = id;
      }
      setActiveTab(current);
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const header = document.querySelector('header');
      const offset = header ? header.offsetHeight : 0;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - offset, behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const isActive = (id: string) => activeTab === id;

  return (
    <header className="sticky top-0 z-50 bg-bg-light border-b-4 border-text-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            onClick={(e) => handleNav(e, 'hero')}
            className="flex items-center gap-2 text-lg font-bold text-text-dark hover:text-acid-green transition-colors"
          >
            <span className="text-text-dark">$</span>
            <span className="hidden sm:inline">cd</span>
            <span className="text-acid-green">~/roman</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNav(e, id)}
                className={`ide-tab px-4 py-2 text-sm border-2 border-text-dark font-medium ${
                  isActive(id) ? 'active' : 'bg-gray-100'
                }`}
              >
                <i className={`fas ${icons[id]} mr-1`}></i>
                {id}
                {extensions[id]}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden neo-btn border-2 border-text-dark p-2 shadow-neo-sm bg-bg-light"
            >
              <i className="fas fa-bars text-text-dark"></i>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div id="mobile-menu" className="md:hidden pb-4 border-t-2 border-text-dark mt-2 pt-4">
            <div className="flex flex-col gap-2">
              {sections.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => handleNav(e, id)}
                  className="neo-btn px-4 py-2 text-sm border-2 border-text-dark shadow-neo-sm bg-bg-light font-medium"
                >
                  {id}
                  {extensions[id]}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
