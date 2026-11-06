'use client';

import { useState } from 'react';
import { Container } from './Container';
import {
  Watch,
  Book,
  Feather,
  Brain,
  Sparkles,
  Compass,
  GraduationCap,
  Briefcase,
  ChevronRight,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

interface Milestone {
  year: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  details: string[];
  verificationNote: string;
}

const verifiedMilestones: Milestone[] = [
  {
    year: '2025–PRESENT',
    period: 'MAR 2025 — PRESENT',
    role: 'AI Engineer',
    organization: 'Supersourcing',
    location: 'Indore, Madhya Pradesh, India',
    details: [
      'Architected multi-tenant AI recruitment platforms using FastAPI, Flask, and PostgreSQL.',
      'Engineered OCR and LLM-powered resume parsing and optimization workflows with Redis and Celery.',
      'Developed automated billing workflows, SuperBot (RAG-based SQL agent), and an AI interview assessment system.',
      'Configured CI/CD deployment pipelines on AWS EC2 with GitHub Actions and WebSocket notifications.',
    ],
    verificationNote: 'Resume reports 50% latency reduction and 95% workflow reliability (resume-reported figures).',
  },
  {
    year: '2024',
    period: '2024 — INDEPENDENT RESEARCH',
    role: 'Product Engineer & Creator',
    organization: 'InknEchoes & ALOpay Initiatives',
    location: 'Independent Initiatives',
    details: [
      'Engineered InknEchoes: a publishing platform tailored for authors, poetry, and multi-chapter book structures using FastAPI and PostgreSQL.',
      'Architected ALOpay: a wallet-first fintech infrastructure concept modeling double-entry persistence and KYC state machines.',
    ],
    verificationNote: 'Architectural designs and codebases documented in private and public repositories.',
  },
  {
    year: '2021–2025',
    period: '2021 — 2025',
    role: 'B.Tech in Computer Science Engineering (Data Science)',
    organization: 'Acropolis Institute of Technology and Research',
    location: 'Indore, Madhya Pradesh, India',
    details: [
      'Specialized in Data Science, relational database architectures, algorithms, and applied machine learning.',
      'Cumulative Grade Point Average (CGPA): 7.52 / 10.',
      'Active leadership in developer communities, technical writing, and hackathons.',
    ],
    verificationNote: 'Verified university degree accreditation in Computer Science & Data Science.',
  },
];

const personalInterests = [
  {
    icon: Feather,
    title: 'Poetry & Hindi Literature',
    description: 'Deep affinity for Hindi literature, Urdu ghazals, and meter. Writing with linguistic precision mirrors writing disciplined code.',
  },
  {
    icon: Book,
    title: 'Storytelling & Books',
    description: 'Avid reader of history, classical narratives, and biographies. Believing that every system is a story waiting to be clarified.',
  },
  {
    icon: Compass,
    title: 'Philosophy & Ethics',
    description: 'Stoicism, epistemic humility, and systems philosophy: questioning why we build before deciding how to execute.',
  },
  {
    icon: Brain,
    title: 'Cognitive Neuroscience & AI',
    description: 'Fascinated by the gap between biological neural networks and synthetic LLM token prediction engines.',
  },
];

export function ThePrivateRoom() {
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState<number>(0);
  const activeMilestone = verifiedMilestones[activeMilestoneIndex];

  return (
    <section id="private-room" className="relative border-b-2 border-brass/40 bg-[#161916] py-24 text-ivory">
      {/* Wood & Leather Grain Background Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'radial-gradient(circle at 70% 30%, #A99B79 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-brass/40 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 text-brass font-mono text-xs tracking-widest uppercase">
              <span className="h-2 w-2 bg-brass" />
              <span>CHAPTER 06 · THE PRIVATE ROOM</span>
            </div>
            <h2 className="mt-2 font-condensed text-4xl sm:text-5xl font-black uppercase tracking-tight text-ivory">
              THE STUDY, THE JOURNAL & THE MAN BEHIND THE SYSTEM
            </h2>
            <p className="mt-2 max-w-2xl font-serif italic text-sage text-sm">
              &ldquo;An engineer curious about how things work beneath the surface. Beyond the terminal, grounded in literature, neuroscience, and relentless learning.&rdquo;
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="vintage-stamp stamp-approved text-[10px] py-1">
              PRIVATE STUDY
            </span>
          </div>
        </div>

        {/* Split Editorial Layout */}
        <div className="mt-12 grid gap-10 lg:grid-cols-12 items-start">
          
          {/* ==================== LEFT: PERSONAL ESSAY & INTERESTS (Cols 1-7) ==================== */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border border-brass/35 bg-charcoal p-6 md:p-8 space-y-4">
              <div className="flex items-center justify-between border-b border-brass/20 pb-3">
                <span className="font-mono text-xs font-bold text-brass uppercase tracking-wider">
                  MEMOIR & PHILOSOPHY
                </span>
                <span className="font-mono text-[9px] text-sage">INDORE · RECORD NO. 019</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory leading-snug">
                Building technology that respects complexity without succumbing to chaos.
              </h3>

              <div className="grid gap-6 md:grid-cols-[1fr_200px] items-start">
                <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-sage">
                  <p>
                    I’m <strong className="text-ivory">Ayush Patidar</strong>—an engineer working at the intersection of applied artificial intelligence, backend reliability, and product architecture. I believe the highest form of engineering craftsmanship is not making a system look complex, but making complex problems feel natural, robust, and understandable.
                  </p>
                  <p>
                    At Supersourcing, I build and refine production multi-tenant AI pipelines, RAG agents that query live databases, and asynchronous parsing workflows. When dealing with foundational models, I treat the LLM as an unpredictable combustion engine: it requires careful fuel mixture (clean embeddings), strict temperature governors (guardrails), and resilient safety exhausts (deterministic validation).
                  </p>
                  <p>
                    Outside the terminal, I read deeply in Hindi poetry, classical philosophy, and human cognition. These disciplines teach that language is our oldest technology. Understanding how humans communicate, think, and structure ideas directly informs how I design APIs, data models, and intelligent workflows.
                  </p>
                </div>

                {/* Vintage Study Desk Archival Plate */}
                <div className="relative pt-2 pb-4 flex flex-col items-center">
                  <div className="relative w-44 rotate-1 hover:rotate-0 transition-transform duration-300 bg-[#E7E4D6] p-1.5 border border-brass/50 shadow-2xl">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-[#A4A58F]/60 -rotate-1 border-t border-b border-charcoal/30 shadow-xs" />
                    <div className="relative aspect-[3/3.9] overflow-hidden border border-charcoal/30 bg-charcoal">
                      <img
                        src="/images/thomas-shelby-portrait.png"
                        alt="The Private Study — 1919 Portrait"
                        className="h-full w-full object-cover filter contrast-125 sepia-[0.2]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                      <div className="absolute top-1 left-1 bg-charcoal/90 border border-brass/40 px-1.5 py-0.5 text-[7px] font-mono uppercase text-brass tracking-wider">
                        THE STUDY · 1919
                      </div>
                    </div>
                    <p className="mt-1 text-center font-mono text-[7px] text-charcoal/90 uppercase tracking-widest font-bold">
                      ARCHIVAL RECORD · BIRMINGHAM
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-brass/20 flex items-center justify-between font-mono text-[10px] text-brass">
                <span>ETHOS: OWNERSHIP · CLARITY · CRAFT</span>
                <span>AUTHENTIC RECORD</span>
              </div>
            </div>

            {/* Personal Interests Grid */}
            <div className="space-y-3">
              <h4 className="font-condensed text-sm font-bold uppercase tracking-widest text-brass">
                INTELLECTUAL INFLUENCES & PURSUITS
              </h4>
              <div className="grid gap-3 sm:grid-cols-2">
                {personalInterests.map((interest) => {
                  const Icon = interest.icon;
                  return (
                    <div
                      key={interest.title}
                      className="border border-brass/25 bg-[#1C201D] p-4 space-y-2 hover:border-brass/60 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Icon size={16} className="text-brass" />
                        <h5 className="font-condensed text-sm font-bold uppercase tracking-wider text-ivory">
                          {interest.title}
                        </h5>
                      </div>
                      <p className="text-xs leading-relaxed text-sage">
                        {interest.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ==================== RIGHT: ANTIQUE POCKET WATCH TIMELINE (Cols 8-12) ==================== */}
          <div className="lg:col-span-5 border-2 border-brass/45 bg-[#1B1E1B] p-6 blueprint-grid space-y-6">
            <div className="flex items-center justify-between border-b border-brass/30 pb-3">
              <div className="flex items-center gap-2">
                <Watch size={16} className="text-brass" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-brass">
                  ANTIQUE POCKET WATCH TIMELINE
                </span>
              </div>
              <span className="vintage-stamp stamp-classified text-[8px] py-0.5">
                VERIFIED MILESTONES
              </span>
            </div>

            {/* Stylized Antique Pocket Watch Graphic */}
            <div className="relative mx-auto flex h-36 w-36 items-center justify-center rounded-full border-4 border-brass bg-charcoal shadow-2xl">
              {/* Pocket Watch Ring on Top */}
              <div className="absolute -top-4 h-4 w-6 rounded-t-full border-2 border-brass bg-transparent" />
              
              {/* Watch Face Roman Numerals */}
              <div className="relative h-28 w-28 rounded-full border border-brass/40 bg-charcoal-deep flex items-center justify-center">
                <span className="absolute top-1 font-serif text-[10px] font-bold text-brass">XII</span>
                <span className="absolute right-2 font-serif text-[10px] font-bold text-brass">III</span>
                <span className="absolute bottom-1 font-serif text-[10px] font-bold text-brass">VI</span>
                <span className="absolute left-2 font-serif text-[10px] font-bold text-brass">IX</span>

                {/* Watch Hands */}
                <div
                  className="absolute h-10 w-[2px] bg-brass origin-bottom transition-transform duration-500"
                  style={{
                    transform: `rotate(${activeMilestoneIndex * 90 + 30}deg)`,
                  }}
                />
                <div
                  className="absolute h-7 w-[2.5px] bg-oxblood origin-bottom transition-transform duration-500"
                  style={{
                    transform: `rotate(${activeMilestoneIndex * 60 + 120}deg)`,
                  }}
                />
                <div className="h-2 w-2 rounded-full bg-brass z-10" />
              </div>
            </div>

            {/* Milestone Selector Tabs */}
            <div className="grid grid-cols-3 gap-1 border-t border-b border-brass/25 py-2">
              {verifiedMilestones.map((m, i) => (
                <button
                  key={m.year}
                  onClick={() => setActiveMilestoneIndex(i)}
                  className={`p-2 text-center font-mono text-[10px] uppercase font-bold border transition-all ${
                    activeMilestoneIndex === i
                      ? 'border-brass bg-charcoal text-brass shadow-sm'
                      : 'border-transparent text-sage hover:text-ivory'
                  }`}
                >
                  {m.year}
                </button>
              ))}
            </div>

            {/* Active Milestone Card */}
            <div className="border border-brass/30 bg-charcoal p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-wider text-oxblood font-bold">
                  {activeMilestone.period}
                </span>
                <span className="font-mono text-[9px] text-sage">
                  {activeMilestone.location}
                </span>
              </div>

              <div>
                <h4 className="font-condensed text-xl font-bold uppercase tracking-wider text-ivory">
                  {activeMilestone.role}
                </h4>
                <p className="font-serif italic text-xs text-brass">
                  {activeMilestone.organization}
                </p>
              </div>

              <ul className="mt-3 space-y-2 text-xs font-mono text-sage">
                {activeMilestone.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle size={13} className="text-brass shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-brass/15">
                <p className="font-mono text-[9px] text-sage/80 leading-normal">
                  <strong className="text-brass">Audit Note:</strong> {activeMilestone.verificationNote}
                </p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
