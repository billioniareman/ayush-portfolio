import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'The Study · About Ayush Patidar',
  description: 'Background, verified experience, and engineering ethos of Ayush Patidar.',
};

export default function About() {
  return (
    <div className="py-16 md:py-24 bg-[#161916] text-ivory">
      <Container>
        <Link
          href="/#private-room"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sage hover:text-ivory mb-8"
        >
          <ArrowLeft size={14} className="text-brass" />
          <span>Return To The Study (Chapter 06)</span>
        </Link>

        <SectionHeading
          eyebrow="DOSSIER SECTION · THE PRIVATE ROOM"
          title="AN ENGINEER CURIOUS ABOUT WHAT LIES BENEATH"
          description="Connecting deep systems thinking, applied AI, and dependable engineering execution."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_220px] items-start my-10 max-w-4xl">
          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-sage border-l-2 border-brass/40 pl-6">
            <p>
              I&apos;m <strong className="text-ivory">Ayush Patidar</strong>—an AI and backend engineer focused on building production-grade software, high-concurrency APIs, and LLM-powered systems that survive real-world demands.
            </p>
            <p>
              My engineering practice spans FastAPI, Python, PostgreSQL, pgvector, Redis, Celery, and AWS Bedrock. I value decisions that are understandable and deliberate: choosing the appropriate level of abstraction, enforcing strict invariants, and ensuring systems remain observable and durable once shipped.
            </p>
            <p>
              Outside engineering, I immerse myself in Hindi literature, Urdu poetry, stoic philosophy, and cognitive neuroscience. These pursuits keep me observant and influence how I approach technical clarity.
            </p>
          </div>

          {/* Tilted Bromide Portrait in the About Dossier */}
          <div className="relative -rotate-2 hover:rotate-0 transition-transform duration-300 bg-[#E7E4D6] p-2 border border-charcoal/50 shadow-2xl">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-[#A4A58F]/60 rotate-1 border-t border-b border-charcoal/30 shadow-xs" />
            <div className="relative aspect-[3/4] overflow-hidden border border-charcoal/30 bg-charcoal">
              <img
                src="/images/thomas-shelby-sketch.png"
                alt="Ayush Patidar Study Portrait"
                className="h-full w-full object-cover filter contrast-120 sepia-[0.25]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
            </div>
            <p className="mt-1 font-mono text-[8px] text-charcoal/90 text-center uppercase tracking-widest font-bold">
              THE STUDY · 1919
            </p>
          </div>
        </div>

        {/* Verified Experience Section */}
        <section className="mt-14 max-w-4xl space-y-6">
          <div className="border-b-2 border-brass/30 pb-3 flex items-center justify-between">
            <h2 className="font-condensed text-2xl font-bold uppercase tracking-wider text-ivory">
              VERIFIED PROFESSIONAL MILESTONES
            </h2>
            <span className="vintage-stamp stamp-approved text-[9px] py-0.5">
              AUDITED
            </span>
          </div>

          <div className="border-2 border-brass/35 bg-charcoal p-6 md:p-8 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-brass/20 pb-4">
              <div>
                <h3 className="font-condensed text-xl font-bold uppercase tracking-wider text-ivory">
                  AI Engineer · Supersourcing
                </h3>
                <p className="font-mono text-xs text-sage mt-1">
                  Indore, Madhya Pradesh, India · Full-time
                </p>
              </div>
              <span className="border border-oxblood bg-oxblood/20 px-3 py-1 font-mono text-xs text-ivory font-bold">
                MAR 2025 — PRESENT
              </span>
            </div>

            <ul className="mt-4 space-y-2.5 font-mono text-xs sm:text-sm text-sage">
              <li className="flex items-start gap-2.5">
                <span className="text-brass font-bold">↳</span>
                <span>Architected multi-tenant AI recruitment and enterprise platforms with FastAPI, Flask, and PostgreSQL.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brass font-bold">↳</span>
                <span>Built OCR and LLM-powered resume parsing and optimization workflows with Redis and Celery queues.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brass font-bold">↳</span>
                <span>Developed automated application workflows, SuperBot (RAG-based SQL agent), and an AI interview assessment system.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brass font-bold">↳</span>
                <span>Implemented WebSocket notifications and CI/CD pipelines using GitHub Actions for AWS EC2 deployments.</span>
              </li>
            </ul>

            <div className="pt-3 border-t border-brass/15">
              <p className="font-mono text-[10px] text-sage/80 leading-normal">
                <strong className="text-brass">Disclosure Notice:</strong> Resume-reported outcomes include 50% lower processing latency and 95% workflow reliability.
              </p>
            </div>
          </div>

          <div className="border border-brass/30 bg-charcoal p-6">
            <h3 className="font-condensed text-lg font-bold uppercase tracking-wider text-ivory">
              Education & Academic Foundation
            </h3>
            <p className="mt-2 text-sm text-sage">
              B.Tech in Computer Science Engineering (Data Science) · Acropolis Institute of Technology and Research, Indore (2021–2025)
            </p>
            <p className="mt-1 font-mono text-xs text-brass">
              Cumulative Grade Point Average (CGPA): 7.52 / 10
            </p>
          </div>
        </section>

        {/* Core Values */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3 max-w-4xl">
          {[
            { t: 'Curiosity & Discipline', d: 'Never stop at superficial answers. Interrogate the underlying system.' },
            { t: 'Total Ownership', d: 'Think beyond the ticket. Build systems that outlive initial specifications.' },
            { t: 'Craftsmanship', d: 'Prioritize clarity, durability, and thoughtful architectural execution.' },
          ].map((x) => (
            <div key={x.t} className="border border-brass/30 bg-charcoal p-5 space-y-2">
              <h4 className="font-condensed text-base font-bold uppercase tracking-wider text-brass">
                {x.t}
              </h4>
              <p className="text-xs text-sage leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={site.resumePath}
            target="_blank"
            rel="noreferrer"
            className="border-2 border-brass bg-brass/10 px-6 py-3 font-condensed text-xs font-bold uppercase tracking-wider text-ivory hover:bg-brass hover:text-charcoal transition-all shadow-md"
          >
            Download Engineering Dossier (PDF) ↓
          </a>
          <Link
            href="/#pub"
            className="border border-oxblood bg-oxblood/80 px-6 py-3 font-condensed text-xs font-bold uppercase tracking-wider text-ivory hover:bg-oxblood transition-all"
          >
            Enter The Garrison / Let&apos;s Talk ↗
          </Link>
        </div>
      </Container>
    </div>
  );
}
