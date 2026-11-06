'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Project, projects } from '@/data/projects';
import { Container } from './Container';
import {
  FileText,
  ExternalLink,
  ChevronRight,
  ShieldAlert,
  X,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Workflow,
  Cpu,
} from 'lucide-react';

export function TheLedger() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="ledger" className="relative border-b-2 border-brass/40 bg-[#1e2320] py-24 text-ivory">
      {/* Background vintage ledger lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(169, 155, 121, 0.2) 1px, transparent 1px)',
          backgroundSize: '100% 32px',
        }}
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-brass/40 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 text-brass font-mono text-xs tracking-widest uppercase">
              <span className="h-2 w-2 bg-oxblood" />
              <span>CHAPTER 03 · THE LEDGER</span>
            </div>
            <h2 className="mt-2 font-condensed text-4xl sm:text-5xl font-black uppercase tracking-tight text-ivory">
              CONFIDENTIAL CASE FILES & AUDITED RECORDS
            </h2>
            <p className="mt-2 max-w-2xl font-serif italic text-sage text-sm">
              &ldquo;Historical engineering files. Every case study outlines the operational problem, system boundaries, and verifiable technical contributions.&rdquo;
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="vintage-stamp stamp-classified text-[10px] py-1">
              RECORD BOOK 1919
            </span>
          </div>
        </div>

        {/* The Case File Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={project.slug}
              className="group relative flex flex-col justify-between border-2 border-brass/35 bg-charcoal p-6 transition-all duration-300 hover:border-brass hover:-translate-y-1 hover:shadow-2xl"
              style={{
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}
            >
              {/* Top Case Bar */}
              <div>
                <div className="flex items-center justify-between border-b border-brass/20 pb-3 mb-3">
                  <span className="font-mono text-xs font-bold text-brass tracking-wider">
                    CASE FILE {project.caseNumber}
                  </span>
                  <span
                    className={`vintage-stamp text-[9px] py-0.5 ${
                      project.stamp === 'CLASSIFIED'
                        ? 'stamp-classified'
                        : project.stamp === 'CONFIDENTIAL'
                        ? 'stamp-classified text-oxblood'
                        : 'stamp-approved'
                    }`}
                  >
                    {project.stamp}
                  </span>
                </div>

                {/* Mini Vintage Archival Photo Banner for Project Card */}
                <div className="relative mb-3 h-20 w-full overflow-hidden border border-brass/25 bg-charcoal-deep shadow-inner">
                  <img
                    src={
                      idx === 0
                        ? '/images/peaky-character-main.jpg'
                        : idx === 1
                        ? '/images/thomas-shelby-portrait.png'
                        : idx === 2
                        ? '/images/peaky-character-2.jpg'
                        : idx === 3
                        ? '/images/whiskey-vintage-poster.jpg'
                        : '/images/peaky-character-1.jpg'
                    }
                    alt={project.name}
                    className="h-full w-full object-cover object-top opacity-40 filter contrast-125 sepia-[0.35] group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                  <div className="absolute bottom-1.5 left-2 font-mono text-[8px] text-brass uppercase tracking-widest">
                    RECORD REF #{project.caseNumber}
                  </div>
                </div>

                {/* Category & Title */}
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-sage">
                  {project.category}
                </p>
                <h3 className="mt-1 font-condensed text-2xl font-black uppercase tracking-wider text-ivory group-hover:text-brass transition-colors">
                  {project.name}
                </h3>
                <p className="mt-2 font-serif italic text-xs leading-relaxed text-ivory/80 line-clamp-2">
                  &ldquo;{project.tagline}&rdquo;
                </p>

                {/* Technical Overview snippet */}
                <p className="mt-3 text-xs leading-relaxed text-sage line-clamp-3">
                  {project.overview}
                </p>

                {/* Architecture Pipeline Nodes */}
                {project.architectureNodes && (
                  <div className="mt-4 border-t border-brass/15 pt-3">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-brass mb-2">
                      PIPELINE SPECIFICATION:
                    </p>
                    <div className="flex flex-wrap gap-1 font-mono text-[9px] text-sage">
                      {project.architectureNodes.slice(0, 4).map((node, i) => (
                        <span
                          key={node}
                          className="border border-brass/20 bg-charcoal-deep px-1.5 py-0.5"
                        >
                          {node}
                        </span>
                      ))}
                      {project.architectureNodes.length > 4 && (
                        <span className="text-brass/70 self-center">
                          +{project.architectureNodes.length - 4} nodes
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Actions & Technology Stack */}
              <div className="mt-6 pt-4 border-t border-brass/20 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="border border-brass/20 bg-forest/30 px-2 py-0.5 font-mono text-[10px] text-ivory"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 font-condensed text-xs font-bold uppercase tracking-wider text-brass hover:text-ivory transition-colors"
                  >
                    <FileText size={13} />
                    <span>Unfold Case Dossier</span>
                  </button>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex h-7 w-7 items-center justify-center border border-brass/40 text-sage hover:border-brass hover:bg-brass hover:text-charcoal transition-all"
                    title={`Full Case Study: ${project.name}`}
                  >
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ledger Bottom Guarantee */}
        <div className="mt-12 border border-brass/30 bg-charcoal p-5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-sage">
          <div className="flex items-center gap-3">
            <ShieldAlert size={18} className="text-oxblood shrink-0" />
            <span>
              All case studies selectively generalize client-confidential data and proprietary schemas in compliance with non-disclosure obligations.
            </span>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-2 border border-brass px-4 py-2 font-condensed text-xs uppercase tracking-wider text-ivory hover:bg-brass hover:text-charcoal transition-all whitespace-nowrap"
          >
            <span>All Case Studies Index</span>
            <ChevronRight size={13} />
          </Link>
        </div>
      </Container>

      {/* ==================== EXPANDABLE CASE FILE DOSSIER MODAL ==================== */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md">
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto border-2 border-brass bg-charcoal-deep p-6 text-ivory shadow-2xl md:p-8"
            style={{
              boxShadow: '0 25px 80px rgba(0,0,0,0.9), inset 0 0 100px rgba(0,0,0,0.5)',
            }}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b-2 border-brass/40 pb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-oxblood uppercase tracking-wider">
                  CASE DOSSIER {selectedProject.caseNumber}
                </span>
                <span className="vintage-stamp stamp-classified text-[9px] py-0.5">
                  CONFIDENTIAL
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="flex h-8 w-8 items-center justify-center border border-brass/40 text-sage hover:border-oxblood hover:bg-oxblood hover:text-ivory"
                aria-label="Close Case File"
              >
                <X size={16} />
              </button>
            </div>

            {/* Dossier Content */}
            <div className="mt-6 space-y-6">
              <div className="grid gap-6 sm:grid-cols-[1fr_130px] items-start">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-sage">
                    {selectedProject.category}
                  </p>
                  <h3 className="mt-1 font-condensed text-3xl sm:text-4xl font-black uppercase tracking-tight text-ivory">
                    {selectedProject.name}
                  </h3>
                  <p className="mt-2 font-serif italic text-sm text-brass">
                    &ldquo;{selectedProject.tagline}&rdquo;
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-sage">
                    {selectedProject.overview}
                  </p>
                </div>

                {/* Dual Rotated Archived Evidence Photos */}
                <div className="relative hidden sm:flex flex-col items-center">
                  <div className="w-28 -rotate-3 hover:rotate-0 transition-transform duration-300 bg-[#E7E4D6] p-1 border border-charcoal/50 shadow-xl z-10">
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-[#A4A58F]/60 rotate-1 border-b border-charcoal/30 shadow-xs" />
                    <div className="relative aspect-[3/3.8] overflow-hidden border border-charcoal/30 bg-charcoal">
                      <img
                        src="/images/peaky-character-2.jpg"
                        alt={`Case File ${selectedProject.caseNumber} Evidence`}
                        className="h-full w-full object-cover filter contrast-120 sepia-[0.25]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                    </div>
                    <p className="mt-0.5 text-center font-mono text-[6px] text-charcoal uppercase tracking-widest font-bold">
                      EXHIBIT A · {selectedProject.caseNumber}
                    </p>
                  </div>

                  <div className="w-24 -mt-5 ml-8 rotate-3 hover:rotate-0 transition-transform duration-300 bg-[#E7E4D6] p-1 border border-brass/50 shadow-xl z-20">
                    <div className="relative aspect-[3/3.8] overflow-hidden border border-charcoal/30 bg-charcoal">
                      <img
                        src="/images/thomas-shelby-portrait.png"
                        alt="Audited Schematic"
                        className="h-full w-full object-cover filter contrast-125 sepia-[0.3]"
                      />
                      <div className="absolute top-0.5 right-0.5 bg-oxblood text-ivory font-mono text-[5px] px-1 py-0.2 uppercase">
                        AUDITED
                      </div>
                    </div>
                    <p className="mt-0.5 text-center font-mono text-[6px] text-charcoal/90 uppercase tracking-widest font-bold">
                      ARCHIVE SPEC
                    </p>
                  </div>
                </div>
              </div>

              {/* The Challenge */}
              <div className="border-l-2 border-oxblood bg-charcoal p-4">
                <h4 className="font-condensed text-sm font-bold uppercase tracking-wider text-ivory">
                  OPERATIONAL CHALLENGE
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-sage">
                  {selectedProject.challenge}
                </p>
              </div>

              {/* Specific Engineering Contributions */}
              <div>
                <h4 className="font-condensed text-sm font-bold uppercase tracking-widest text-brass border-b border-brass/20 pb-2">
                  VERIFIED INDIVIDUAL CONTRIBUTIONS
                </h4>
                <ul className="mt-3 space-y-2 text-xs font-mono text-sage">
                  {selectedProject.contribution.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-brass font-bold">↳</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Engineering Approach */}
              <div>
                <h4 className="font-condensed text-sm font-bold uppercase tracking-widest text-brass border-b border-brass/20 pb-2">
                  ENGINEERING APPROACH & EXECUTION
                </h4>
                <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {selectedProject.approach.map((step, idx) => (
                    <div
                      key={idx}
                      className="border border-brass/20 bg-charcoal p-3 text-xs text-sage"
                    >
                      <span className="font-mono text-[10px] text-brass font-bold">
                        PHASE 0{idx + 1}
                      </span>
                      <p className="mt-1 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Nodes Flow */}
              {selectedProject.architectureNodes && (
                <div className="border border-brass/30 bg-[#1A1F1C] p-4 blueprint-grid">
                  <p className="font-mono text-[10px] text-brass uppercase tracking-wider mb-2">
                    SYSTEM PIPELINE ARCHITECTURE:
                  </p>
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[10px]">
                    {selectedProject.architectureNodes.map((node, i) => (
                      <div key={node} className="flex items-center gap-2">
                        <span className="border border-brass/40 bg-charcoal px-2.5 py-1 text-ivory">
                          {node}
                        </span>
                        {i < selectedProject.architectureNodes!.length - 1 && (
                          <span className="text-brass">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Outcomes & Disclaimer */}
              <div className="space-y-3">
                <h4 className="font-condensed text-sm font-bold uppercase tracking-widest text-brass border-b border-brass/20 pb-2">
                  OUTCOMES & OBSERVATIONS
                </h4>
                <ul className="space-y-1.5 font-mono text-xs text-sage">
                  {selectedProject.outcomes.map((out, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-brass shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>

                <p className="border border-brass/20 bg-charcoal/80 p-3 font-mono text-[10px] text-sage/80 leading-normal">
                  {selectedProject.disclaimer}
                </p>
              </div>

              {/* Bottom CTAs */}
              <div className="pt-4 border-t border-brass/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                <Link
                  href={`/projects/${selectedProject.slug}`}
                  className="flex items-center gap-2 border border-brass bg-brass/10 px-4 py-2 font-condensed text-xs uppercase tracking-wider text-ivory hover:bg-brass hover:text-charcoal transition-all w-full sm:w-auto justify-center"
                >
                  <span>Open Full Dedicated Case Page</span>
                  <ExternalLink size={13} />
                </Link>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="border border-brass/30 px-4 py-2 font-condensed text-xs uppercase tracking-wider text-sage hover:text-ivory w-full sm:w-auto"
                >
                  Close Case Dossier
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
