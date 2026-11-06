'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { ArrowRight, X, Newspaper, ExternalLink } from 'lucide-react';
import type { Dispatch } from '@/lib/dispatches';
import { MarkdownContent } from './MarkdownContent';

interface TheNewspaperProps {
  dispatches?: Dispatch[];
}

const fallbackDispatches: Dispatch[] = [
  {
    slug: 'the-world-doesnt-need-more-code',
    title: "The World Doesn't Need More Code. It Needs Better Thinking.",
    headline: "THE WORLD DOESN'T NEED MORE CODE. IT NEEDS BETTER THINKING.",
    subhead: 'An inquiry into software excess, artificial intelligence hype, and the quiet discipline of building systems that actually endure.',
    date: '1919-11-01',
    displayDate: 'SPECIAL DISPATCH · 1919 / 2025',
    category: 'System Philosophy · AI Engineering',
    readTime: '6 MIN READ',
    status: 'PUBLISHED ESSAY',
    featured: true,
    excerpt:
      'We live in an era where generating lines of code has dropped in marginal cost to near zero. Anyone can prompt a model and receive two hundred lines of boilerplate in seconds. But when systems buckle under real traffic at 3:00 AM, the crisis is never an absence of syntax. The crisis is almost invariably an absence of thought.',
    tags: ['Architecture', 'Philosophy', 'AI Engineering', 'Production'],
    author: 'Ayush Patidar',
    content: `We live in an era where generating lines of code has dropped in marginal cost to near zero. Anyone can prompt a model and receive two hundred lines of boilerplate in seconds. But when systems buckle under real traffic at 3:00 AM, the crisis is never an absence of syntax. The crisis is almost invariably an absence of thought.

In 1919 Birmingham, an iron founder who cut corners on furnace metallurgical calculations did not save time; he guaranteed disaster when the boiler breached. Software engineering is no different. The true cost of software is rarely the afternoon spent writing the first pull request—it is the months and years spent defending, debugging, and maintaining poorly chosen abstractions.

Thomas Shelby did not conquer Birmingham through reckless noise; he planned every maneuver before a single coin was wagered. In software, this translates into asking the uncomfortable questions early: What is the single source of truth? What happens when this third-party LLM API experiences a 10-second timeout? How do we prevent phantom reads and double-spend race conditions in the ledger?

Real engineering begins when you resist the urge to immediately type. It begins when you sketch domain boundaries, enforce transactional state machines, and design for graceful degradation. The world does not need another unvetted demo. It needs systems built with clinical precision.`,
  },
  {
    slug: 'resilient-rag-pipelines',
    title: 'On the Anatomy of Resilient RAG Pipelines',
    headline: 'ON THE ANATOMY OF RESILIENT RAG PIPELINES',
    subhead: 'Moving past naive cosine similarity toward hybrid search, metadata filtering, and deterministic guardrails.',
    date: '1919-11-03',
    displayDate: 'AUTUMN DISPATCH · 1919',
    category: 'Applied AI · Retrieval Architecture',
    readTime: '5 MIN READ',
    status: 'EDITORIAL DISPATCH',
    featured: false,
    excerpt:
      'The initial excitement of Retrieval-Augmented Generation frequently blinds teams to its failure modes. When developers simply dump raw text into a vector database and retrieve the top-3 chunks by cosine similarity, they frequently inject irrelevant noise into prompt context windows.',
    tags: ['RAG', 'Vector Search', 'pgvector', 'FastAPI'],
    author: 'Ayush Patidar',
    content: `The initial excitement of Retrieval-Augmented Generation frequently blinds teams to its failure modes. When developers simply dump raw text into a vector database and retrieve the top-3 chunks by cosine similarity, they frequently inject irrelevant noise into prompt context windows.

A resilient RAG architecture requires multi-tiered retrieval: first, applying deterministic relational and metadata filters (tenant ID, date range, document permissions); second, combining dense vector embeddings with sparse BM25 keyword matching; and third, applying cross-encoder reranking to ensure only authoritative context reaches the LLM.`,
  },
  {
    slug: 'silent-cost-of-concurrency-in-ledger-systems',
    title: 'The Silent Cost of Concurrency in Ledger Systems',
    headline: 'THE SILENT COST OF CONCURRENCY IN LEDGER SYSTEMS',
    subhead: 'Handling double-spend hazards, race conditions, and row-level locking in PostgreSQL.',
    date: '1919-11-05',
    displayDate: 'WINTER FIELD NOTE · 1919',
    category: 'Backend · Transactional Integrity',
    readTime: '7 MIN READ',
    status: 'TECHNICAL ESSAY',
    featured: false,
    excerpt:
      'In financial and ledger systems, balance is not a single mutable column—it is an immutable aggregation of historical debit and credit records. When two concurrent API calls attempt to debit the same wallet balance, naive read-modify-write patterns result in negative balances.',
    tags: ['PostgreSQL', 'Concurrency', 'ACID', 'Ledgers'],
    author: 'Ayush Patidar',
    content: `In financial and ledger systems, balance is not a single mutable column—it is an immutable aggregation of historical debit and credit records. When two concurrent API calls attempt to debit the same wallet balance, naive read-modify-write patterns result in negative balances.

This disquisition explores pessimistic locking patterns (\`SELECT FOR UPDATE\`), idempotent transaction keys, and Redis distributed locks to ensure zero balance drift under extreme concurrent load.`,
  },
  {
    slug: 'architecture-begins-with-better-questions',
    title: 'Why Good Architecture Begins With Better Questions',
    headline: 'WHY GOOD ARCHITECTURE BEGINS WITH BETTER QUESTIONS',
    subhead: 'How identifying unstated constraints prevents catastrophic rewrites down the line.',
    date: '1919-11-02',
    displayDate: 'FIELD NOTE 03 · 1919',
    category: 'System Design · Strategy',
    readTime: '4 MIN READ',
    status: 'FIELD NOTE',
    featured: false,
    excerpt:
      'Junior engineers ask how to build a feature. Senior engineers ask why the feature exists, what invariants must never be violated, and what happens when the network fails.',
    tags: ['System Design', 'Invariants', 'Engineering Culture'],
    author: 'Ayush Patidar',
    content: `The greatest mistake in software architecture is solving the wrong problem with high technical sophistication. Before designing database schemas or selecting frameworks, you must interrogate the business invariants.

Who is the ultimate consumer of this data? What latency budget is actually acceptable to a human operator? What is the cost of a false positive versus a false negative? If the answer is vague, the code will inevitably be brittle. Architectural discipline is the art of eliminating ambiguity before committing bytes to disk.`,
  },
];

export function TheNewspaper({ dispatches }: TheNewspaperProps) {
  const items = dispatches && dispatches.length > 0 ? dispatches : fallbackDispatches;
  const leadArticle = items.find((d) => d.featured) || items[0];
  const sideArticles = items.filter((d) => d.slug !== leadArticle.slug);

  const [activeDispatch, setActiveDispatch] = useState<Dispatch | null>(null);

  return (
    <section id="newspaper" className="relative border-b-2 border-brass/40 bg-[#E7E4D6] py-24 text-charcoal">
      {/* Vintage Newsprint Halftone Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'radial-gradient(#252B27 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      <Container className="relative z-10">
        {/* Newspaper Broadsheet Masthead Header */}
        <div className="border-b-4 border-charcoal pb-4 text-center">
          <div className="flex flex-wrap items-center justify-between border-b border-charcoal/40 pb-2 text-[10px] font-mono uppercase tracking-widest text-charcoal/80">
            <span>BIRMINGHAM DISPATCH & CHRONICLE</span>
            <span>PUBLISHED AT THE RED LEDGER ATELIER</span>
            <Link
              href="/writing"
              className="font-bold text-oxblood hover:underline inline-flex items-center gap-1"
            >
              <span>[VIEW COMPLETE FIELD NOTES ARCHIVE ({items.length})]</span>
              <ArrowRight size={11} />
            </Link>
          </div>

          <h2 className="mt-3 font-serif text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-charcoal leading-none">
            THE 1919 DISPATCH
          </h2>

          <div className="mt-2 flex flex-wrap items-center justify-between border-t-2 border-b-2 border-charcoal py-1.5 text-xs font-mono uppercase tracking-wider text-charcoal font-bold">
            <span>VOL. XIX · SPECIAL FIELD NOTES</span>
            <span>EDITED BY AYUSH PATIDAR</span>
            <span>WEATHER: OVERCAST & INDUSTRIAL</span>
          </div>
        </div>

        {/* Newspaper Grid Layout */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          
          {/* ==================== LEAD ARTICLE (Cols 1-8) ==================== */}
          <div className="lg:col-span-8 border-b-2 lg:border-b-0 lg:border-r-2 border-charcoal/40 lg:pr-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-oxblood font-bold">
                ★ LEAD EDITORIAL ESSAY
              </span>
              <span className="font-mono text-[10px] text-charcoal/70">
                {leadArticle.readTime} · {leadArticle.displayDate}
              </span>
            </div>

            <Link href={`/writing/${leadArticle.slug}`} className="block group">
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-charcoal leading-tight group-hover:text-oxblood transition-colors">
                {leadArticle.headline}
              </h3>
            </Link>

            <p className="font-serif italic text-base sm:text-lg text-charcoal/80 border-l-2 border-oxblood pl-3">
              {leadArticle.subhead}
            </p>

            {/* Broadsheet prose layout with vintage woodblock engraving */}
            <div className="mt-4 grid gap-6 sm:grid-cols-12 text-xs leading-relaxed text-charcoal/90 text-justify items-start">
              <div className="sm:col-span-8 space-y-3">
                <p className="dropcap leading-relaxed">
                  {leadArticle.excerpt}
                </p>
                {leadArticle.tags && leadArticle.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[9px] text-charcoal/70">
                    {leadArticle.tags.map((tag) => (
                      <span key={tag} className="border border-charcoal/30 bg-charcoal/5 px-1.5 py-0.5">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Vintage Newsprint Woodblock Engraving */}
              <div className="sm:col-span-4 border-2 border-charcoal p-1.5 bg-[#E7E4D6] shadow-md space-y-1">
                <div className="relative aspect-[3/4] overflow-hidden grayscale contrast-150 border border-charcoal">
                  <img
                    src="/images/thomas-shelby-sketch.png"
                    alt="Thomas Shelby 1919 Engraving"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-charcoal/10 mix-blend-multiply" />
                </div>
                <p className="font-mono text-[8px] text-center uppercase tracking-widest text-charcoal/80 pt-0.5">
                  FIG. 1 · T. SHELBY (1919)
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-charcoal/30">
              <div className="flex items-center gap-2">
                <Link
                  href={`/writing/${leadArticle.slug}`}
                  className="inline-flex items-center gap-2 border-2 border-charcoal bg-charcoal px-4 py-2 font-condensed text-xs font-bold uppercase tracking-wider text-ivory hover:bg-oxblood hover:border-oxblood transition-all shadow-sm"
                >
                  <span>Read Full Disquisition</span>
                  <ArrowRight size={13} />
                </Link>
                <button
                  onClick={() => setActiveDispatch(leadArticle)}
                  className="border border-charcoal/40 bg-charcoal/5 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-charcoal hover:bg-charcoal hover:text-ivory transition-all"
                >
                  Quick Modal View
                </button>
              </div>
              <span className="font-mono text-[10px] text-charcoal/70 uppercase">
                CONTINUED IN DOSSIER
              </span>
            </div>
          </div>

          {/* ==================== SIDE DISPATCHES (Cols 9-12) ==================== */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center justify-between border-b-2 border-charcoal pb-2">
              <h4 className="font-condensed text-base font-bold uppercase tracking-widest text-charcoal">
                DISPATCHES & FIELD NOTES
              </h4>
              <Link
                href="/writing"
                className="font-mono text-[10px] uppercase font-bold text-oxblood hover:underline flex items-center gap-1"
              >
                <span>Full Archive</span>
                <ArrowRight size={11} />
              </Link>
            </div>

            <div className="space-y-5 divide-y divide-charcoal/30">
              {sideArticles.map((article) => (
                <div key={article.slug} className="pt-4 first:pt-0 space-y-2">
                  <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-charcoal/70">
                    <span className="font-bold text-oxblood">{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <Link href={`/writing/${article.slug}`} className="block group">
                    <h5 className="font-serif text-lg font-bold text-charcoal group-hover:text-oxblood transition-colors leading-snug">
                      {article.headline}
                    </h5>
                  </Link>

                  <p className="text-xs text-charcoal/80 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-3 pt-1">
                    <Link
                      href={`/writing/${article.slug}`}
                      className="font-mono text-[10px] uppercase font-bold text-oxblood hover:underline flex items-center gap-1"
                    >
                      <span>Read essay</span>
                      <ArrowRight size={11} />
                    </Link>
                    <span className="text-charcoal/30">·</span>
                    <button
                      onClick={() => setActiveDispatch(article)}
                      className="font-mono text-[10px] uppercase text-charcoal/70 hover:text-charcoal"
                    >
                      Quick inspect
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* 1919 Broadsheet Technical Schematic: The Atomic Concurrency Ledger Lock */}
            <div className="border-2 border-charcoal bg-[#E7E4D6] p-3 shadow-md rotate-1 hover:rotate-0 transition-transform duration-300 space-y-2">
              <div className="flex items-center justify-between border-b border-charcoal/40 pb-1.5 font-mono text-[8px] uppercase tracking-wider text-charcoal">
                <span className="font-bold text-oxblood">FIG. 2 · BROADSHEET TECHNICAL SCHEMATIC</span>
                <span>REG. AP-1919</span>
              </div>

              {/* Vintage Hand-Crafted Blueprint Engraving of Ledger Concurrency & Balance Locking */}
              <div className="relative aspect-[16/10] w-full border border-charcoal bg-[#252B27]/5 p-2 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 240 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Subtle 1919 newsprint coordinate grid */}
                  <defs>
                    <pattern id="engravingGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#252B27" strokeWidth="0.3" strokeOpacity="0.25" />
                    </pattern>
                  </defs>
                  <rect width="240" height="130" fill="url(#engravingGrid)" />

                  {/* Concurrent Stream A */}
                  <rect x="8" y="14" width="62" height="24" fill="#252B27" stroke="#252B27" strokeWidth="1" />
                  <text x="39" y="25" fill="#E7E4D6" fontSize="6.5" fontFamily="IBM Plex Mono" textAnchor="middle" fontWeight="bold">CONCURRENT API A</text>
                  <text x="39" y="33" fill="#A4A58F" fontSize="5.5" fontFamily="IBM Plex Mono" textAnchor="middle">DEBIT 100s WALLET</text>

                  {/* Concurrent Stream B */}
                  <rect x="8" y="52" width="62" height="24" fill="#252B27" stroke="#252B27" strokeWidth="1" />
                  <text x="39" y="63" fill="#E7E4D6" fontSize="6.5" fontFamily="IBM Plex Mono" textAnchor="middle" fontWeight="bold">CONCURRENT API B</text>
                  <text x="39" y="71" fill="#A4A58F" fontSize="5.5" fontFamily="IBM Plex Mono" textAnchor="middle">DEBIT 50s WALLET</text>

                  {/* Concurrency Arrows pointing to Lock Layer */}
                  <path d="M 70 26 L 90 26 L 90 42 L 98 42" stroke="#252B27" strokeWidth="1.2" strokeDasharray="2 1" />
                  <path d="M 70 64 L 90 64 L 90 48 L 98 48" stroke="#252B27" strokeWidth="1.2" strokeDasharray="2 1" />

                  {/* Center: Row-Level Mutex & State Invariant Lock */}
                  <rect x="98" y="30" width="60" height="32" fill="#743A36" stroke="#252B27" strokeWidth="1.2" />
                  <text x="128" y="42" fill="#E7E4D6" fontSize="6.5" fontFamily="IBM Plex Mono" textAnchor="middle" fontWeight="bold">ATOMIC ROW LOCK</text>
                  <text x="128" y="50" fill="#E7E4D6" fontSize="5" fontFamily="IBM Plex Mono" textAnchor="middle">SELECT ... FOR UPDATE</text>
                  <text x="128" y="58" fill="#A99B79" fontSize="5" fontFamily="IBM Plex Mono" textAnchor="middle" fontWeight="bold">ZERO BALANCE DRIFT</text>

                  {/* Serialized Arrow to Ledger */}
                  <path d="M 158 46 L 176 46" stroke="#252B27" strokeWidth="1.2" />
                  <polygon points="176,43 182,46 176,49" fill="#252B27" />

                  {/* Immutable Double-Entry Ledger Core */}
                  <rect x="182" y="16" width="50" height="60" fill="#35443B" stroke="#252B27" strokeWidth="1" />
                  <text x="207" y="28" fill="#E7E4D6" fontSize="6.5" fontFamily="IBM Plex Mono" textAnchor="middle" fontWeight="bold">LEDGER CORE</text>
                  <text x="207" y="37" fill="#A4A58F" fontSize="5" fontFamily="IBM Plex Mono" textAnchor="middle">DOUBLE ENTRY</text>
                  <line x1="188" y1="42" x2="226" y2="42" stroke="#A99B79" strokeWidth="0.8" />
                  <text x="207" y="52" fill="#A99B79" fontSize="6" fontFamily="IBM Plex Mono" textAnchor="middle" fontWeight="bold">ACID SETTLED</text>
                  <text x="207" y="61" fill="#E7E4D6" fontSize="5" fontFamily="IBM Plex Mono" textAnchor="middle">AUDIT VERIFIED</text>
                  <text x="207" y="70" fill="#A4A58F" fontSize="4.5" fontFamily="IBM Plex Mono" textAnchor="middle">BALANCE = EXACT</text>

                  {/* Mechanical Scale Invariant Illustration at Bottom */}
                  <line x1="20" y1="96" x2="220" y2="96" stroke="#252B27" strokeWidth="1" />
                  <circle cx="120" cy="96" r="3" fill="#743A36" stroke="#252B27" />
                  <path d="M 120 96 L 120 108 L 110 114 L 130 114 Z" fill="#252B27" />
                  <circle cx="40" cy="104" r="6" fill="#252B27" />
                  <text x="40" y="106" fill="#E7E4D6" fontSize="5" fontFamily="IBM Plex Mono" textAnchor="middle">DEBIT</text>
                  <circle cx="200" cy="104" r="6" fill="#252B27" />
                  <text x="200" y="106" fill="#E7E4D6" fontSize="5" fontFamily="IBM Plex Mono" textAnchor="middle">CREDIT</text>

                  <text x="120" y="124" fill="#252B27" fontSize="5" fontFamily="IBM Plex Mono" textAnchor="middle" fontWeight="bold">
                    INVARIANT: ∑ DEBITS ≡ ∑ CREDITS (ZERO RACE CONDITION)
                  </text>
                </svg>
              </div>

              <p className="font-mono text-[8px] text-charcoal/80 uppercase tracking-widest text-center pt-0.5">
                SCHEMATIC: THE DETERMINISTIC ATOMIC TRANSACTION STATE MACHINE
              </p>
            </div>

            {/* Vintage Quote Box */}
            <div className="border-2 border-charcoal bg-[#85866D]/20 p-4 space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-widest text-oxblood font-bold">
                THOMAS SHELBY OBSERVATION
              </p>
              <p className="font-serif italic text-xs leading-relaxed text-charcoal">
                &ldquo;Never assume that loud is strong and quiet is weak. A system that hums silently with strict invariants will outlive every noisy prototype.&rdquo;
              </p>
            </div>
          </div>

        </div>
      </Container>

      {/* ==================== ARTICLE READER MODAL ==================== */}
      {activeDispatch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md">
          <div className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto border-2 border-charcoal bg-[#E7E4D6] p-6 text-charcoal shadow-2xl md:p-8">
            <div className="flex items-center justify-between border-b-2 border-charcoal pb-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-oxblood">
                {activeDispatch.category} · {activeDispatch.readTime}
              </span>
              <button
                onClick={() => setActiveDispatch(null)}
                className="flex h-8 w-8 items-center justify-center border border-charcoal text-charcoal hover:bg-oxblood hover:border-oxblood hover:text-ivory"
                aria-label="Close Article"
              >
                <X size={16} />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-black uppercase tracking-tight text-charcoal leading-tight">
                {activeDispatch.headline}
              </h3>

              <p className="font-serif italic text-sm text-charcoal/80 border-l-2 border-oxblood pl-3">
                {activeDispatch.subhead}
              </p>

              <div className="pt-4 border-t border-charcoal/20">
                <MarkdownContent content={activeDispatch.content} />
              </div>

              <div className="pt-6 border-t border-charcoal/30 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] text-charcoal/70">
                <Link
                  href={`/writing/${activeDispatch.slug}`}
                  className="font-bold uppercase text-oxblood hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Open Dedicated Broadsheet Page</span>
                  <ExternalLink size={12} />
                </Link>
                <button
                  onClick={() => setActiveDispatch(null)}
                  className="font-bold uppercase text-charcoal hover:underline"
                >
                  Return To Newspaper
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
