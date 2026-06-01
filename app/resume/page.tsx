'use client';

import { useEffect } from 'react';

const resumeData = {
  name: 'Roman Ivanov',
  title: 'Fullstack Developer',
  summary: 'Fullstack developer with 3+ years of experience building scalable web applications. Specialized in backend development with PHP (Laravel, Symfony) and Python (FastAPI, Django), with strong frontend skills in React and Next.js. Passionate about clean code, performance optimization, and distributed systems. Currently exploring Rust and DevOps.',
  contact: {
    email: 'roman.ivanov@email.com',
    github: 'github.com/an4rky1',
    linkedin: 'linkedin.com/in/an4rky1',
    location: 'Ukraine, Remote',
    languages: 'English (B2), Russian (Native), Ukrainian (Native)',
  },
  skills: {
    Languages: 'Python, Go, TypeScript, JavaScript, PHP, SQL, Rust',
    Frameworks: 'Laravel, Symfony, FastAPI, Django, React, Next.js, Vue.js',
    Databases: 'PostgreSQL, MySQL, Redis, MongoDB, Elasticsearch',
    Infrastructure: 'Docker, Kubernetes, AWS, GCP, Terraform, CI/CD',
  },
  experience: [
    {
      role: 'Next.js Developer',
      company: 'Freelance',
      period: '2024 - Present',
      highlights: [
        'Built production React/Next.js applications with TypeScript',
        'Implemented SSR and SSG for improved performance and SEO',
        'Optimized bundle size and improved Core Web Vitals scores',
      ],
    },
    {
      role: 'Laravel Fullstack Developer',
      company: 'CipherTech',
      period: '2023 - 2024',
      highlights: [
        'Developed RESTful APIs and real-time features with Laravel',
        'Integrated Vue.js frontend with Laravel backend',
        'Implemented authentication and payment processing systems',
      ],
    },
    {
      role: 'Symfony Fullstack Developer',
      company: 'Vertex Labs',
      period: '2022 - 2023',
      highlights: [
        'Built enterprise applications using Symfony framework',
        'Worked with PostgreSQL, Redis, and Elasticsearch',
        'Implemented REST APIs and microservices architecture',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Freelance',
      period: '2021 - 2022',
      highlights: [
        'Created responsive websites using HTML, CSS, JavaScript',
        'Worked with React.js and Next.js for modern web applications',
        'Implemented basic state management with Redux and Context API',
      ],
    },
  ],
  education: [
    { degree: 'B.Sc. Computer Science', school: 'Donbas State Engineering Academy', period: '2018 - 2023' },
    { degree: 'Applied Mathematics', school: 'Horlivka Technical College', period: '' },
  ],
};

export default function ResumePage() {
  useEffect(() => {
    document.title = 'Roman Ivanov — Resume';
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-bg-light">
      <div className="max-w-4xl mx-auto px-4 py-8 print:py-0">
        <div className="print:hidden flex justify-center mb-8">
          <button
            onClick={handlePrint}
            className="neo-btn inline-flex items-center gap-2 px-6 py-3 border-4 border-text-dark bg-acid-green text-text-dark font-bold shadow-neo text-sm hover:bg-acid-yellow cursor-pointer"
          >
            <i className="fas fa-file-pdf"></i>
            Save as PDF
          </button>
        </div>

        <div className="bg-white border-4 border-text-dark shadow-neo-lg p-6 sm:p-10 print:border-2 print:shadow-none">
          <div className="flex justify-between items-start border-b-2 border-text-dark pb-4 mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-text-dark">{resumeData.name}</h1>
              <p className="text-sm sm:text-base text-text-dark/60 font-semibold">{resumeData.title}</p>
            </div>
            <div className="text-right text-xs sm:text-sm text-text-dark/60 leading-relaxed">
              <div>{resumeData.contact.email}</div>
              <div>{resumeData.contact.github}</div>
              <div>{resumeData.contact.linkedin}</div>
              <div>{resumeData.contact.location}</div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-text-dark/70 leading-relaxed mb-6">
            {resumeData.summary}
          </p>

          <div className="flex gap-6 sm:gap-10 flex-col sm:flex-row">
            <div className="sm:w-[35%] space-y-5">
              <Section title="Technical Skills">
                {Object.entries(resumeData.skills).map(([cat, items]) => (
                  <div key={cat}>
                    <div className="text-xs font-bold text-text-dark/80">{cat}</div>
                    <div className="text-xs text-text-dark/60 mb-2">{items}</div>
                  </div>
                ))}
              </Section>

              <Section title="Education">
                {resumeData.education.map((edu, i) => (
                  <div key={i} className="mb-2">
                    <div className="text-xs font-bold text-text-dark">{edu.degree}</div>
                    <div className="text-xs text-text-dark/70">{edu.school}</div>
                    <div className="text-[11px] text-text-dark/50">{edu.period}</div>
                  </div>
                ))}
              </Section>

              <Section title="Languages">
                <div className="text-xs text-text-dark/70">
                  Russian (Native), Ukrainian (Native), English (B2)
                </div>
              </Section>
            </div>

            <div className="sm:w-[65%]">
              <Section title="Work Experience">
                {resumeData.experience.map((job, i) => (
                  <div key={i} className="mb-4">
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm font-bold text-text-dark">{job.role}</span>
                      <span className="text-[11px] text-text-dark/50 font-medium">{job.period}</span>
                    </div>
                    <div className="text-xs text-text-dark/70 font-medium mb-1">{job.company}</div>
                    <ul className="text-xs text-text-dark/60 ml-4 space-y-0.5">
                      {job.highlights.map((h, j) => (
                        <li key={j} className="list-disc">{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xs font-bold uppercase tracking-wider text-text-dark border-b border-text-dark/20 pb-1 mb-2">
        {title}
      </h2>
      {children}
    </div>
  );
}
