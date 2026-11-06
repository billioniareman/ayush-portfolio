import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Engage Ayush Patidar · Opportunities',
  description: 'Engage Ayush Patidar for full-time AI engineering, contract architectures, or strategic builds.',
};

const options = [
  {
    title: 'Full-time Engineering Role',
    tag: 'CAREER COMMITTMENT',
    desc: 'Joining an engineering or product team building mission-critical AI systems, high-concurrency backends, or enterprise platforms.',
    cta: 'Discuss A Role',
  },
  {
    title: 'Contract Engineering',
    tag: 'SHORT / MEDIUM TERM',
    desc: 'Injecting dedicated technical capacity for complex RAG pipelines, API re-architectures, vector database setups, or cloud deployments.',
    cta: 'Discuss A Contract',
  },
  {
    title: 'Freelance & Advisory',
    tag: 'PROJECT-BASED',
    desc: 'Scoping and building focused features, custom AI parsers, FastAPI integrations, or database performance optimizations.',
    cta: 'Discuss A Project',
  },
];

export default function Hire() {
  return (
    <div className="py-16 md:py-24 bg-[#141714] text-ivory">
      <Container>
        <Link
          href="/#pub"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sage hover:text-ivory mb-8"
        >
          <ArrowLeft size={14} className="text-brass" />
          <span>Return To The Garrison (Chapter 07)</span>
        </Link>

        <SectionHeading
          eyebrow="ENGAGEMENT ROSTER · THE GARRISON"
          title="A DISCIPLINED ENGINEERING PARTNER FOR YOUR NEXT CHALLENGE"
          description="Open to strategic conversations across AI engineering, high-durability backend systems, and product development."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {options.map((o, i) => (
            <div
              key={o.title}
              className="flex flex-col justify-between border-2 border-brass/35 bg-charcoal p-6 md:p-8 space-y-6 ledger-card"
            >
              <div>
                <span className="font-mono text-[10px] tracking-widest text-brass uppercase">
                  0{i + 1} / {o.tag}
                </span>
                <h2 className="mt-4 font-condensed text-2xl font-bold uppercase tracking-wider text-ivory">
                  {o.title}
                </h2>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-sage">
                  {o.desc}
                </p>
              </div>

              <Link
                href="/contact"
                className="flex items-center justify-between border-t border-brass/20 pt-4 font-condensed text-xs font-bold uppercase tracking-wider text-brass hover:text-ivory transition-colors"
              >
                <span>{o.cta}</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* The 3-Step Engagement Protocol */}
        <div className="mt-14 border-2 border-brass/40 bg-charcoal p-6 md:p-8 space-y-6 blueprint-grid">
          <div className="flex items-center justify-between border-b border-brass/25 pb-3">
            <h3 className="font-condensed text-xl font-bold uppercase tracking-wider text-ivory">
              THE 3-STEP ENGAGEMENT PROTOCOL
            </h3>
            <span className="vintage-stamp stamp-approved text-[8px] py-0.5">
              SYSTEMATIC
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                t: '01 · DECOMPOSE & ALIGN',
                d: 'Clarify constraints, failure modes, data schemas, and verified success criteria before writing code.',
              },
              {
                t: '02 · PLAN & ARCHITECT',
                d: 'Establish milestones, API contracts, database locks, and observable telemetry without fluff.',
              },
              {
                t: '03 · SHIP & VALIDATE',
                d: 'Deliver hardened services with tests, CI/CD automation, and transparent documentation.',
              },
            ].map((x) => (
              <div key={x.t} className="space-y-1.5 font-mono text-xs">
                <p className="text-brass font-bold">{x.t}</p>
                <p className="text-sage leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}