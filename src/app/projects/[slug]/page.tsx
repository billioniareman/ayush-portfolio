import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/Container';
import { projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  return {
    title: p ? `Case File ${p.caseNumber} — ${p.name}` : 'Case File',
    description: p?.tagline,
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) notFound();

  return (
    <div className="py-16 md:py-24 bg-[#1e2320] text-ivory">
      <Container>
        {/* Back Link */}
        <Link
          href="/#ledger"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sage hover:text-ivory transition-colors"
        >
          <ArrowLeft size={14} className="text-brass" />
          <span>Return To The Ledger Archive</span>
        </Link>

        {/* Dossier Header */}
        <div className="mt-8 border-2 border-brass/40 bg-charcoal p-6 md:p-10 shadow-2xl space-y-6">
          <div className="flex flex-wrap items-center justify-between border-b border-brass/25 pb-4 gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-brass uppercase tracking-widest">
                CASE DOSSIER {p.caseNumber}
              </span>
              <span className="text-brass/40">|</span>
              <span className="font-mono text-xs text-sage uppercase">{p.category}</span>
            </div>
            <span
              className={`vintage-stamp text-[10px] py-0.5 ${
                p.stamp === 'CLASSIFIED'
                  ? 'stamp-classified'
                  : p.stamp === 'CONFIDENTIAL'
                  ? 'stamp-classified text-oxblood'
                  : 'stamp-approved'
              }`}
            >
              {p.stamp}
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-[1fr_160px] items-start">
            <div>
              <h1 className="font-condensed text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-ivory">
                {p.name}
              </h1>
              <p className="mt-3 font-serif italic text-lg sm:text-xl text-brass max-w-3xl">
                &ldquo;{p.tagline}&rdquo;
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-sage max-w-3xl">
                {p.overview}
              </p>
            </div>

            {/* Tilted Vintage Evidence Polaroid */}
            <div className="hidden md:block relative rotate-2 hover:rotate-0 transition-transform duration-300 bg-[#E7E4D6] p-1.5 border border-charcoal/50 shadow-2xl">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-3 bg-[#A4A58F]/60 -rotate-1 border-t border-b border-charcoal/30 shadow-xs" />
              <div className="relative aspect-[3/3.8] overflow-hidden border border-charcoal/30 bg-charcoal">
                <img
                  src="/images/thomas-shelby-sketch.png"
                  alt={`Case Evidence ${p.caseNumber}`}
                  className="h-full w-full object-cover filter contrast-125 sepia-[0.3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-1 left-1 font-mono text-[7px] text-ivory tracking-widest uppercase">
                  DOSSIER #{p.caseNumber}
                </div>
              </div>
              <p className="mt-0.5 text-center font-mono text-[7px] text-charcoal/90 uppercase tracking-widest font-bold">
                VERIFIED RECORD
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-brass/20 flex flex-wrap items-center gap-3 font-mono text-xs text-sage">
            <span className="border border-brass/30 bg-charcoal-deep px-3 py-1">
              STATUS: {p.status}
            </span>
            <span className="border border-brass/30 bg-charcoal-deep px-3 py-1">
              RECORD NO. 1919-{p.caseNumber}
            </span>
          </div>
        </div>

        {/* Dossier Grid Details */}
        <div className="mt-12 grid gap-10 lg:grid-cols-12 items-start">
          
          {/* Main Dossier Content (8 Cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* The Challenge */}
            <section className="border-l-4 border-oxblood bg-charcoal p-6 space-y-2">
              <h2 className="font-condensed text-xl font-bold uppercase tracking-wider text-ivory">
                THE OPERATIONAL CHALLENGE
              </h2>
              <p className="text-sm leading-relaxed text-sage">
                {p.challenge}
              </p>
            </section>

            {/* Individual Contribution */}
            <section className="space-y-4">
              <h2 className="font-condensed text-xl font-bold uppercase tracking-widest text-brass border-b border-brass/30 pb-2">
                VERIFIED INDIVIDUAL CONTRIBUTIONS
              </h2>
              <ul className="space-y-3 font-mono text-xs sm:text-sm text-sage">
                {p.contribution.map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-brass/10 pb-2.5">
                    <span className="text-brass font-bold text-base leading-none">↳</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Engineering Approach */}
            <section className="space-y-4">
              <h2 className="font-condensed text-xl font-bold uppercase tracking-widest text-brass border-b border-brass/30 pb-2">
                ENGINEERING APPROACH & EXECUTION
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {p.approach.map((step, idx) => (
                  <div
                    key={step}
                    className="border border-brass/25 bg-charcoal p-4 space-y-1 text-xs text-sage"
                  >
                    <span className="font-mono text-[10px] text-brass font-bold">
                      PHASE 0{idx + 1}
                    </span>
                    <p className="leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Architecture Pipeline Nodes */}
            {p.architectureNodes && (
              <section className="border-2 border-brass/40 bg-[#1A1F1C] p-6 blueprint-grid space-y-3">
                <h2 className="font-condensed text-lg font-bold uppercase tracking-widest text-brass">
                  SYSTEM PIPELINE ARCHITECTURE
                </h2>
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                  {p.architectureNodes.map((node, i) => (
                    <div key={node} className="flex items-center gap-2">
                      <span className="border border-brass/40 bg-charcoal px-3 py-1.5 text-ivory">
                        {node}
                      </span>
                      {i < p.architectureNodes!.length - 1 && (
                        <span className="text-brass font-bold">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Outcomes & Learnings */}
            <section className="space-y-4">
              <h2 className="font-condensed text-xl font-bold uppercase tracking-widest text-brass border-b border-brass/30 pb-2">
                OUTCOMES & TECHNICAL OBSERVATIONS
              </h2>
              <ul className="space-y-2.5 font-mono text-xs sm:text-sm text-sage">
                {p.outcomes.map((out) => (
                  <li key={out} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-brass shrink-0 mt-0.5" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Disclaimer & Disclosure */}
            <div className="border border-brass/25 bg-charcoal/80 p-5 font-mono text-xs text-sage/80 leading-relaxed">
              <strong className="text-brass uppercase block mb-1">CONFIDENTIALITY & ETHICS:</strong>
              {p.disclaimer}
            </div>
          </div>

          {/* Sticky Aside Panel (4 Cols) */}
          <aside className="lg:col-span-4 sticky top-24 space-y-6">
            <div className="border-2 border-brass/40 bg-charcoal p-6 space-y-5 shadow-2xl">
              <h3 className="font-condensed text-base font-bold uppercase tracking-wider text-brass border-b border-brass/20 pb-2">
                INSTRUMENTATION & STACK
              </h3>

              <div className="flex flex-wrap gap-2">
                {p.stack.map((item) => (
                  <span
                    key={item}
                    className="border border-brass/30 bg-charcoal-deep px-2.5 py-1 font-mono text-xs text-ivory"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-brass/20 space-y-3">
                <Link
                  href="/#pub"
                  className="flex items-center justify-between border-2 border-oxblood bg-oxblood/90 px-4 py-3 font-condensed text-xs font-bold uppercase tracking-wider text-ivory shadow-stamp hover:bg-oxblood transition-all"
                >
                  <span>Discuss A Similar Architecture</span>
                  <ArrowUpRight size={15} />
                </Link>

                <Link
                  href="/#ledger"
                  className="block text-center border border-brass/30 px-4 py-2.5 font-condensed text-xs uppercase tracking-wider text-sage hover:text-ivory transition-colors"
                >
                  View Next Case File
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </Container>
    </div>
  );
}
