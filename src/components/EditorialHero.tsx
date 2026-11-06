'use client';

import { useState } from 'react';
import { site } from '@/data/site';
import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  ShieldCheck,
  Cpu,
  Layers,
  Database,
  Terminal,
} from 'lucide-react';

export function EditorialHero() {
  const [hoveredSlice, setHoveredSlice] = useState<string | null>(null);

  return (
    <section
      id="street"
      className="relative min-h-screen overflow-hidden bg-[#85866D] text-charcoal py-12 md:py-16 border-b-2 border-charcoal selection:bg-charcoal selection:text-ivory"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 30%, rgba(231, 228, 214, 0.18) 0%, transparent 70%),
          radial-gradient(circle at 80% 80%, rgba(37, 43, 39, 0.12) 0%, transparent 60%)
        `,
      }}
    >
      {/* Background Registration Marks & Vintage Ruler Lines */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-25">
        <div className="absolute left-6 top-6 font-mono text-[10px] tracking-widest text-charcoal">
          + REG. 52.4862° N, 1.8904° W · BIRMINGHAM DISTRICT 1919
        </div>
        <div className="absolute right-6 top-6 font-mono text-[10px] tracking-widest text-charcoal">
          ARCHIVE SPECIFICATION NO. AP-1919-01
        </div>
        <div className="absolute left-6 bottom-6 font-mono text-[10px] tracking-widest text-charcoal">
          [01 / THE STREET: EDITORIAL DOSSIER]
        </div>
        <div className="absolute right-6 bottom-6 font-mono text-[10px] tracking-widest text-charcoal">
          AUTHENTIC RECORD · ZERO MANUFACTURED CLAIMS
        </div>

        {/* Vintage blueprint rule grid line */}
        <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-charcoal/15" />
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-charcoal/15" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b-2 border-charcoal pb-4 gap-3">
          <div className="flex items-center gap-3">
            <span className="bg-charcoal px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-ivory">
              VOL. XIX · NO. 42
            </span>
            <span className="font-condensed text-sm font-bold uppercase tracking-widest text-charcoal">
              THE RED LEDGER · SPECIAL DOSSIER
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-charcoal">
            <span className="flex items-center gap-1.5 font-bold">
              <span className="h-2 w-2 rounded-full bg-oxblood animate-pulse" />
              STATUS: {site.status}
            </span>
            <span className="text-charcoal/40">|</span>
            <span>BASE: INDORE / REMOTE</span>
          </div>
        </div>

        {/* Central Asymmetrical Editorial Infographic Composition */}
        <div className="relative mt-8 grid gap-8 lg:grid-cols-12 items-start">

          {/* ==================== LEFT COLUMN: METRICS & PIE CHART (Cols 1-3) ==================== */}
          <div className="space-y-6 lg:col-span-3 z-20">
            {/* Top Stat: +5 Core Initiatives with concentric circles */}
            <div className="border-b border-charcoal/30 pb-5">
              <div className="flex items-baseline gap-2">
                <span className="font-condensed text-5xl sm:text-6xl font-extrabold text-charcoal tracking-tighter">
                  +5
                </span>
                <span className="font-condensed text-base uppercase tracking-wider font-bold text-charcoal/80 leading-tight">
                  Core Production & AI Initiatives
                </span>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-charcoal/70 mt-1">
                From autonomous RAG agents to high-concurrency fintech ledgers
              </p>

              {/* Overlapping concentric circles representation (as in reference image) */}
              <div className="mt-4 flex items-center -space-x-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal bg-charcoal text-ivory font-mono text-[11px] font-bold shadow-sm">
                  3 AI
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal bg-[#35443B] text-ivory font-mono text-[10px] font-bold shadow-sm">
                  4 API
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal bg-[#A4A58F] text-charcoal font-mono text-[9px] font-bold shadow-sm">
                  2 CLD
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-charcoal bg-ivory text-charcoal font-mono text-[8px] font-bold shadow-sm">
                  1 PUB
                </div>
              </div>
            </div>

            {/* Enhanced Core Technical Repertoire: Categorized & Mapped to Actual Production Work */}
            <div className="space-y-3 border-b border-charcoal/30 pb-5">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-widest text-charcoal font-bold">
                  CORE TECHNICAL REPERTOIRE
                </p>
                <span className="font-mono text-[8px] bg-charcoal text-ivory px-1.5 py-0.5 uppercase tracking-wider font-bold">
                  VERIFIED STACK
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                {/* Domain 1: AI & LLM Systems */}
                <div className="border-l-2 border-oxblood pl-2.5 space-y-0.5">
                  <div className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-oxblood font-bold">
                    <span>AI & LLM Orchestration</span>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 font-condensed">
                    <span className="text-base font-bold text-charcoal">AWS Bedrock</span>
                    <span className="text-xs text-charcoal/40">/</span>
                    <span className="text-sm font-semibold text-oxblood">pgvector RAG</span>
                    <span className="text-xs text-charcoal/40">/</span>
                    <span className="text-xs italic text-charcoal/80">PyMuPDF OCR</span>
                    <span className="text-xs text-charcoal/40">/</span>
                    <span className="text-xs font-mono text-charcoal/70">Context Guardrails</span>
                  </div>
                </div>

                {/* Domain 2: Backend & Distributed Ledgers */}
                <div className="border-l-2 border-charcoal pl-2.5 space-y-0.5">
                  <div className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-charcoal font-bold">
                    <span>Backend & Transaction Ledgers</span>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 font-condensed">
                    <span className="text-base font-bold text-charcoal">Python 3.11+</span>
                    <span className="text-xs text-charcoal/40">/</span>
                    <span className="text-sm font-bold text-charcoal">FastAPI</span>
                    <span className="text-xs text-charcoal/40">/</span>
                    <span className="text-base font-bold text-charcoal">PostgreSQL</span>
                    <span className="text-xs text-charcoal/40">/</span>
                    <span className="text-sm font-semibold text-oxblood">Redis & Celery</span>
                  </div>
                </div>

                {/* Domain 3: Cloud, Tenancy & Architecture */}
                <div className="border-l-2 border-[#35443B] pl-2.5 space-y-0.5">
                  <div className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-[#35443B] font-bold">
                    <span>Cloud, Tenancy & Reliability</span>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 font-condensed">
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal">Multi-Tenant RBAC</span>
                    <span className="text-xs text-charcoal/40">/</span>
                    <span className="text-xs font-semibold text-charcoal/90">Docker</span>
                    <span className="text-xs text-charcoal/40">/</span>
                    <span className="text-xs font-semibold text-charcoal/80">AWS Cloud</span>
                    <span className="text-xs text-charcoal/40">/</span>
                    <span className="text-xs font-mono text-charcoal/70">TypeScript / Node</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture Domains Pie Chart (Replicating Behance layout) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-widest text-charcoal/70">
                  SYSTEM DOMAIN ALLOCATION
                </p>
                <span className="font-mono text-[9px] text-charcoal/60">EST. 100%</span>
              </div>

              <div className="grid grid-cols-[80px_1fr] items-center gap-3">
                {/* SVG Pie Chart */}
                <div className="relative h-20 w-20">
                  <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                    {/* Slice 1: AI & LLMs (35%) -> 0 to 126 deg */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#252B27"
                      strokeWidth="20"
                      strokeDasharray="88 251"
                      strokeDashoffset="0"
                      className="cursor-pointer hover:opacity-85 transition-opacity"
                      onMouseEnter={() => setHoveredSlice('AI & LLMs: 35%')}
                    />
                    {/* Slice 2: Backend & APIs (30%) -> 126 to 234 deg */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#35443B"
                      strokeWidth="20"
                      strokeDasharray="75 251"
                      strokeDashoffset="-88"
                      className="cursor-pointer hover:opacity-85 transition-opacity"
                      onMouseEnter={() => setHoveredSlice('Backend & APIs: 30%')}
                    />
                    {/* Slice 3: Cloud & Infra (20%) -> 234 to 306 deg */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#A4A58F"
                      strokeWidth="20"
                      strokeDasharray="50 251"
                      strokeDashoffset="-163"
                      className="cursor-pointer hover:opacity-85 transition-opacity"
                      onMouseEnter={() => setHoveredSlice('Cloud & Infrastructure: 20%')}
                    />
                    {/* Slice 4: Data & Architecture (15%) -> 306 to 360 deg */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#E7E4D6"
                      strokeWidth="20"
                      strokeDasharray="38 251"
                      strokeDashoffset="-213"
                      className="cursor-pointer hover:opacity-85 transition-opacity"
                      onMouseEnter={() => setHoveredSlice('Data Modeling: 15%')}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center font-mono text-[9px] font-bold text-charcoal">
                    {hoveredSlice ? '' : '100%'}
                  </div>
                </div>

                {/* Legend swatches */}
                <div className="space-y-1 font-mono text-[9px] text-charcoal">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 bg-charcoal" />
                    <span>AI & Intelligence (35%)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 bg-[#35443B]" />
                    <span>Backend & APIs (30%)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 bg-[#A4A58F]" />
                    <span>Cloud & Delivery (20%)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 bg-ivory border border-charcoal/30" />
                    <span>Data & Persistence (15%)</span>
                  </div>
                </div>
              </div>

              {hoveredSlice && (
                <p className="font-mono text-[9px] font-bold text-oxblood">{hoveredSlice}</p>
              )}
            </div>

            {/* Bottom-left: Evolution Timeline Coordinate */}
            <div className="border-t border-charcoal/30 pt-4 space-y-2">
              <div className="flex items-center justify-between text-charcoal font-mono text-[9px]">
                <span>SCALE HORIZON</span>
                <span className="font-bold">2021 → 2025</span>
              </div>
              <div className="relative h-12 w-full border border-charcoal/30 bg-charcoal/5 p-2">
                <svg className="h-full w-full" viewBox="0 0 200 40" fill="none">
                  <path
                    d="M 10 32 L 60 25 L 120 18 L 190 6"
                    stroke="#252B27"
                    strokeWidth="2"
                  />
                  <circle cx="10" cy="32" r="3" fill="#252B27" />
                  <circle cx="60" cy="25" r="3" fill="#252B27" />
                  <circle cx="120" cy="18" r="3" fill="#252B27" />
                  <circle cx="190" cy="6" r="4" fill="#743A36" />
                </svg>
                <div className="flex justify-between font-mono text-[7px] text-charcoal/80 pt-0.5">
                  <span>Foundations</span>
                  <span>APIs & Data</span>
                  <span>Enterprise RAG</span>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== CENTER COLUMN: MASTER BLUEPRINT & CLARENDON TITLE (Cols 4-9) ==================== */}
          <div className="relative flex flex-col items-center text-center lg:col-span-6 z-10 space-y-4">

            {/* ========================================================================= */}
            {/* MASTER BLUEPRINT WIDESCREEN CENTERPIECE: 1919 Shelby Archives AP-01 */}
            {/* ========================================================================= */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden border-4 border-charcoal bg-[#1A1F1C] shadow-[0_20px_50px_rgba(21,24,21,0.65)]">
              <img
                src="/images/peaky-character-main.jpg"
                alt="Master Technical Blueprint — Thomas Shelby 1919"
                className="h-full w-full object-cover object-center filter contrast-115"
              />

              {/* Multi-stop Vignette Gradients: Blends smoothly with Aged Olive background */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-charcoal/40" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal/40 via-transparent to-charcoal/40" />

              {/* Authentic Brass Frame Accents */}
              <div className="pointer-events-none absolute top-2.5 left-2.5 w-5 h-5 border-t-2 border-l-2 border-brass" />
              <div className="pointer-events-none absolute top-2.5 right-2.5 w-5 h-5 border-t-2 border-r-2 border-brass" />
              <div className="pointer-events-none absolute bottom-2.5 left-2.5 w-5 h-5 border-b-2 border-l-2 border-brass" />
              <div className="pointer-events-none absolute bottom-2.5 right-2.5 w-5 h-5 border-b-2 border-r-2 border-brass" />

              {/* Archival Stamped Tags */}
              <div className="absolute top-3.5 left-3.5 bg-charcoal/90 border border-brass px-2.5 py-1 font-mono text-[9px] text-brass uppercase tracking-widest shadow-md">
                BIRMINGHAM 1919 · SHELBY ARCHIVES NO. AP-01
              </div>
              <div className="absolute bottom-3.5 right-3.5 vintage-stamp stamp-classified text-[9px] py-1 px-2.5 bg-charcoal/95 text-ivory border-oxblood shadow-lg">
                CLASSIFIED BLUEPRINT · VERIFIED SPECIFICATION
              </div>
            </div>

            {/* Oversized Clarendon Condensed Wood-Type Typography (Peaky Blinders Letterpress) */}
            <div className="mt-2 w-full">
              <h1 className="peaky-title text-6xl sm:text-7xl md:text-8xl font-bold uppercase text-center distressed-title my-2">
                <span className="block peaky-title-grit leading-[0.82]">AYUSH</span>
                <span className="block peaky-title-grit leading-[0.82] mt-1.5">PATIDAR</span>
              </h1>

              <div className="mt-4 font-mono text-[11px] tracking-[0.28em] uppercase text-charcoal font-bold">
                THOMAS SHELBY-INSPIRED DISCIPLINE
              </div>

              <p className="mt-1 font-condensed text-base sm:text-lg font-bold uppercase tracking-wider text-charcoal/90">
                ENGINEER · STRATEGIST · BUILDER OF INTELLIGENT SYSTEMS
              </p>

              {/* Core Philosophy Banner */}
              <div className="mt-3 border-y-2 border-charcoal bg-charcoal text-ivory py-2 px-4 shadow-md max-w-xl mx-auto">
                <p className="font-condensed text-xs sm:text-sm font-bold uppercase tracking-widest text-brass">
                  &ldquo;THE WORLD DOESN&apos;T NEED MORE CODE. IT NEEDS BETTER THINKING.&rdquo;
                </p>
              </div>

              <p className="mt-2 font-serif italic text-xs sm:text-sm text-charcoal/80 max-w-sm mx-auto">
                &ldquo;I build intelligent systems, scalable backends, and products that solve real problems.&rdquo;
              </p>
            </div>
          </div>

          {/* ==================== RIGHT COLUMN: PERFORMANCE BARS & DOSSIER (Cols 10-12) ==================== */}
          <div className="space-y-6 lg:col-span-3 z-20">
            {/* Top-Right: Horizontal Bar Chart (Replicating Behance format) */}
            <div className="border-b border-charcoal/30 pb-5 space-y-3">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-widest text-charcoal/70">
                  SYSTEM INTEGRITY & BENCHMARKS
                </p>
                <span className="font-mono text-[9px] text-oxblood font-bold">DISCLOSED</span>
              </div>

              {/* Bar 1: Pipeline Reliability 95% */}
              <div className="space-y-1">
                <div className="flex justify-between font-condensed text-xs font-bold text-charcoal">
                  <span>PIPELINE RELIABILITY</span>
                  <span>95%</span>
                </div>
                <div className="h-3 w-full bg-charcoal/15 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-charcoal to-[#35443B]"
                    style={{ width: '95%' }}
                  />
                </div>
              </div>

              {/* Bar 2: Latency Reduction 50% (Resume reported) */}
              <div className="space-y-1">
                <div className="flex justify-between font-condensed text-xs font-bold text-charcoal">
                  <span>PROCESSING LATENCY REDUCTION</span>
                  <span>50%</span>
                </div>
                <div className="h-3 w-full bg-charcoal/15 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-charcoal to-oxblood"
                    style={{ width: '50%' }}
                  />
                </div>
                <p className="font-mono text-[8px] text-charcoal/70">
                  *Resume-reported optimization figure for OCR/LLM parsing
                </p>
              </div>

              {/* Bar 3: Candidate AI Interviews 500+/mo */}
              <div className="space-y-1">
                <div className="flex justify-between font-condensed text-xs font-bold text-charcoal">
                  <span>AI INTERVIEW WORKFLOWS</span>
                  <span>500+ / MO</span>
                </div>
                <div className="h-3 w-full bg-charcoal/15 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-charcoal to-[#35443B]"
                    style={{ width: '80%' }}
                  />
                </div>
              </div>

              {/* Bar 4: Production Readiness */}
              <div className="space-y-1">
                <div className="flex justify-between font-condensed text-xs font-bold text-charcoal">
                  <span>ROLE-BASED TENANT ISOLATION</span>
                  <span>100%</span>
                </div>
                <div className="h-3 w-full bg-charcoal/15 overflow-hidden">
                  <div className="h-full bg-charcoal" style={{ width: '100%' }} />
                </div>
              </div>
            </div>

            {/* Mid-Right: Brush-Stroke / Highlight Badge */}
            <div className="relative border border-charcoal bg-charcoal/10 p-3 shadow-inner">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-charcoal uppercase tracking-widest font-bold">
                  VERIFIED DISCLOSURES
                </span>
                <span className="font-mono text-xs font-bold text-oxblood">+100%</span>
              </div>
              <p className="mt-1 font-mono text-[9px] text-charcoal/80 leading-normal">
                Strict adherence to professional integrity: zero fabricated companies, fake revenue, or fictitious awards.
              </p>
            </div>

            {/* Bottom-Right: Editorial Stats Dossier (Replicating Behance stats card) */}
            <div className="border-2 border-charcoal bg-charcoal p-4 text-ivory space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-ivory/20 pb-3">
                <span className="font-condensed text-sm font-bold uppercase tracking-wider text-brass">
                  OPERATIONAL RECORD
                </span>
                <span className="font-mono text-[10px] text-sage">NO. 1919-AP</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center divide-x divide-ivory/15 font-condensed">
                <div>
                  <p className="text-2xl font-black text-ivory">05</p>
                  <p className="font-mono text-[8px] uppercase tracking-wider text-sage">
                    Case Files
                  </p>
                </div>
                <div className="pl-1">
                  <p className="text-2xl font-black text-brass">100%</p>
                  <p className="font-mono text-[8px] uppercase tracking-wider text-sage">
                    Verifiable
                  </p>
                </div>
                <div className="pl-1">
                  <p className="text-2xl font-black text-oxblood">24/7</p>
                  <p className="font-mono text-[8px] uppercase tracking-wider text-sage">
                    Uptime Care
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-ivory/15 space-y-1.5 text-xs font-mono text-sage">
                <div className="flex justify-between">
                  <span>DISCIPLINE:</span>
                  <span className="text-ivory font-bold">AI + BACKEND</span>
                </div>
                <div className="flex justify-between">
                  <span>LOCATION:</span>
                  <span className="text-ivory">INDORE / REMOTE</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-1">
              <a
                href="#ledger"
                className="flex items-center justify-center gap-2 w-full border-2 border-charcoal bg-charcoal py-2.5 font-condensed text-xs font-bold uppercase tracking-wider text-ivory hover:bg-oxblood hover:border-oxblood transition-all shadow-md"
              >
                <span>Inspect The Case Ledger</span>
                <ArrowDown size={13} />
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={site.resumePath}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 border border-charcoal bg-transparent py-2 font-condensed text-xs font-bold uppercase tracking-wider text-charcoal hover:bg-charcoal hover:text-ivory transition-all"
                >
                  <FileText size={12} />
                  <span>Resume</span>
                </a>
                <a
                  href="#pub"
                  className="flex items-center justify-center gap-1.5 border border-oxblood bg-oxblood/90 py-2 font-condensed text-xs font-bold uppercase tracking-wider text-ivory hover:bg-oxblood transition-all"
                >
                  <ArrowUpRight size={12} />
                  <span>Let&apos;s Talk</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Editorial Quote Strip */}
        <div className="mt-10 border-t-2 border-charcoal pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-charcoal">
          <div className="flex items-center gap-2">
            <span className="font-bold text-oxblood">[SHELBY MOTTO]:</span>
            <span className="italic">
              &ldquo;When you plan something well, there&apos;s no need to rush.&rdquo;
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 font-bold hover:text-oxblood transition-colors"
            >
              <Github size={13} /> GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 font-bold hover:text-oxblood transition-colors"
            >
              <Linkedin size={13} /> LinkedIn
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-1 font-bold hover:text-oxblood transition-colors"
            >
              <Mail size={13} /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
