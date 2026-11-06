import Link from 'next/link';
import type { Project } from '@/data/projects';
import { ArrowUpRight, FileText } from 'lucide-react';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col justify-between border-2 border-brass/35 bg-charcoal p-6 transition-all duration-300 hover:border-brass hover:-translate-y-1 hover:shadow-2xl ledger-card"
      style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}
    >
      <div>
        <div className="flex items-center justify-between border-b border-brass/20 pb-3 mb-3">
          <span className="font-mono text-xs font-bold text-brass tracking-wider">
            CASE FILE {project.caseNumber || `00${index + 1}`}
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
            {project.stamp || 'AUDITED'}
          </span>
        </div>

        {/* Mini Vintage Archival Photo Banner */}
        <div className="relative mb-3 h-20 w-full overflow-hidden border border-brass/25 bg-charcoal-deep shadow-inner">
          <img
            src={
              index === 0
                ? '/images/peaky-character-main.jpg'
                : index === 1
                ? '/images/thomas-shelby-sketch.png'
                : index === 2
                ? '/images/peaky-character-2.jpg'
                : index === 3
                ? '/images/whiskey-vintage-poster.jpg'
                : '/images/thomas-shelby-sketch.png'
            }
            alt={project.name}
            className="h-full w-full object-cover object-top opacity-40 filter contrast-125 sepia-[0.35] group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
          <div className="absolute bottom-1.5 left-2 font-mono text-[8px] text-brass uppercase tracking-widest">
            RECORD REF #{project.caseNumber || `00${index + 1}`}
          </div>
        </div>

        <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-sage">
          {project.category}
        </p>

        <h3 className="mt-1 font-condensed text-2xl font-black uppercase tracking-wider text-ivory group-hover:text-brass transition-colors">
          {project.name}
        </h3>

        <p className="mt-2 font-serif italic text-xs leading-relaxed text-ivory/80 line-clamp-2">
          &ldquo;{project.tagline}&rdquo;
        </p>

        <p className="mt-3 text-xs leading-relaxed text-sage line-clamp-3">
          {project.overview}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-brass/20 space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((item) => (
            <span
              key={item}
              className="border border-brass/20 bg-forest/30 px-2 py-0.5 font-mono text-[10px] text-ivory"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="inline-flex items-center gap-1.5 font-condensed text-xs font-bold uppercase tracking-wider text-brass group-hover:text-ivory transition-colors">
            <FileText size={13} />
            <span>Open Case Dossier</span>
          </span>
          <span className="flex h-7 w-7 items-center justify-center border border-brass/40 text-sage group-hover:border-brass group-hover:bg-brass group-hover:text-charcoal transition-all">
            <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
