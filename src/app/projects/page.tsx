import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Case Ledger · All Files',
  description: 'Confidential engineering case files and audited records by Ayush Patidar.',
};

export default function ProjectsPage() {
  return (
    <div className="py-16 md:py-24 bg-[#1e2320]">
      <Container>
        <Link
          href="/#ledger"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sage hover:text-ivory mb-8"
        >
          <ArrowLeft size={14} className="text-brass" />
          <span>Return To Main Ledger</span>
        </Link>

        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-brass/40 pb-6 gap-4 mb-12">
          <SectionHeading
            eyebrow="ARCHIVE SECTION · THE LEDGER"
            title="CONFIDENTIAL CASE FILES & RECORDS"
            description="A closer look at products and systems I've contributed to or explored. Each record distinguishes my specific contribution from the broader effort."
          />
          <div className="flex items-center gap-2">
            <span className="vintage-stamp stamp-classified text-[10px] py-1">
              5 VERIFIED FILES
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        {/* Audit Note */}
        <div className="mt-14 border border-brass/30 bg-charcoal p-5 flex items-center gap-3 font-mono text-xs text-sage">
          <ShieldCheck size={18} className="text-brass shrink-0" />
          <span>
            Strict compliance notice: All metrics disclosed represent verifiable resume disclosures or architectural benchmarks. Implementation internals and proprietary business formulas remain generalized.
          </span>
        </div>
      </Container>
    </div>
  );
}
