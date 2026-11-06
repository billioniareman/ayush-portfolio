import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { getAllDispatches } from '@/lib/dispatches';
import { ArrowLeft, BookOpen, Clock, Calendar, Tag, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Field Notes Archive · The 1919 Dispatch | Ayush Patidar',
  description: 'Technical essays, architectural dispatches, and engineering learnings by Ayush Patidar.',
};

export default function WritingArchivePage() {
  const dispatches = getAllDispatches();

  return (
    <div className="min-h-screen py-16 md:py-24 bg-[#E7E4D6] text-charcoal selection:bg-charcoal selection:text-ivory">
      {/* Background Newsprint Halftone Pattern */}
      <div
        className="pointer-events-none fixed inset-0 opacity-15 z-0"
        style={{
          backgroundImage: 'radial-gradient(#252B27 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      <Container className="relative z-10 max-w-5xl">
        {/* Navigation Breadcrumb */}
        <Link
          href="/#newspaper"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-charcoal/80 hover:text-oxblood mb-8 transition-colors"
        >
          <ArrowLeft size={14} className="text-oxblood" />
          <span>Return To The Newspaper (Chapter 05)</span>
        </Link>

        {/* Newspaper Broadsheet Header */}
        <div className="border-b-4 border-charcoal pb-6 mb-10 text-center space-y-2">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-charcoal/70 border-b border-charcoal/30 pb-2">
            <span>BIRMINGHAM DISPATCH & CHRONICLE</span>
            <span className="font-bold text-oxblood">LOCAL MARKDOWN ARCHIVE</span>
            <span>VOL. XIX · COMPLETE REPERTOIRE</span>
          </div>

          <h1 className="mt-2 font-serif text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-charcoal">
            THE FIELD NOTES ARCHIVE
          </h1>

          <p className="font-serif italic text-sm sm:text-base text-charcoal/85 max-w-2xl mx-auto pt-2">
            Dispatches on applied artificial intelligence, high-concurrency ledger durability, system design, and the quiet discipline of thoughtful software.
          </p>
        </div>

        {/* Dispatches Roster */}
        <div className="border-2 border-charcoal bg-white/70 divide-y-2 divide-charcoal shadow-xl">
          {dispatches.map((item, idx) => (
            <article
              key={item.slug}
              className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-charcoal/5 transition-colors group"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-wider text-charcoal/70">
                  <span className="font-bold text-oxblood">{item.category}</span>
                  <span>•</span>
                  <span>{item.readTime}</span>
                  <span>•</span>
                  <span>{item.displayDate}</span>
                </div>

                <Link href={`/writing/${item.slug}`} className="block">
                  <h2 className="font-serif text-2xl sm:text-3xl font-black uppercase tracking-tight text-charcoal group-hover:text-oxblood transition-colors leading-tight">
                    {item.headline}
                  </h2>
                </Link>

                <p className="font-serif italic text-xs sm:text-sm text-charcoal/80 line-clamp-2">
                  {item.subhead || item.excerpt}
                </p>

                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[9px] text-charcoal/70">
                    {item.tags.map((tag) => (
                      <span key={tag} className="border border-charcoal/30 bg-charcoal/5 px-1.5 py-0.5">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="shrink-0 flex items-center gap-4">
                <span className="border border-charcoal/40 bg-charcoal/10 px-3 py-1 font-mono text-[10px] font-bold text-charcoal uppercase">
                  {item.status}
                </span>

                <Link
                  href={`/writing/${item.slug}`}
                  className="inline-flex items-center gap-1.5 border-2 border-charcoal bg-charcoal px-3 py-2 font-mono text-xs font-bold uppercase tracking-wider text-ivory group-hover:bg-oxblood group-hover:border-oxblood transition-colors shadow-sm"
                >
                  <span>Read Article</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Local Markdown Workflow Note */}
        <div className="mt-8 border border-charcoal/40 bg-charcoal/5 p-4 text-center space-y-1 font-mono text-[10px] text-charcoal/75">
          <p className="font-bold uppercase tracking-wider text-oxblood">
            [LOCAL WORKFLOW]: WRITTEN IN REPOSITORY MARKDOWN
          </p>
          <p>
            Drop any new <code>.md</code> file with frontmatter into <code>content/dispatches/</code> to immediately publish a new learning.
          </p>
        </div>
      </Container>
    </div>
  );
}
