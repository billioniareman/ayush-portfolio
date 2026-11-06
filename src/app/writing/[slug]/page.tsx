import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { getAllDispatches, getDispatchBySlug } from '@/lib/dispatches';
import { MarkdownContent } from '@/components/MarkdownContent';
import { ArrowLeft, ArrowRight, Bookmark, Calendar, Clock, Newspaper, Share2, Tag } from 'lucide-react';

interface DispatchPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const dispatches = getAllDispatches();
  return dispatches.map((dispatch) => ({
    slug: dispatch.slug,
  }));
}

export async function generateMetadata({ params }: DispatchPageProps): Promise<Metadata> {
  const dispatch = getDispatchBySlug(params.slug);
  if (!dispatch) {
    return {
      title: 'Dispatch Not Found — The 1919 Dispatch',
    };
  }

  return {
    title: `${dispatch.title} — The 1919 Dispatch | Ayush Patidar`,
    description: dispatch.excerpt,
    openGraph: {
      title: dispatch.headline,
      description: dispatch.excerpt,
      type: 'article',
      publishedTime: dispatch.date,
      authors: [dispatch.author],
    },
  };
}

export default function DispatchPage({ params }: DispatchPageProps) {
  const dispatch = getDispatchBySlug(params.slug);

  if (!dispatch) {
    notFound();
  }

  const allDispatches = getAllDispatches();
  const currentIndex = allDispatches.findIndex((d) => d.slug === dispatch.slug);
  const prevDispatch = currentIndex > 0 ? allDispatches[currentIndex - 1] : null;
  const nextDispatch = currentIndex < allDispatches.length - 1 ? allDispatches[currentIndex + 1] : null;

  return (
    <article className="min-h-screen bg-[#E7E4D6] text-charcoal py-16 md:py-24 selection:bg-charcoal selection:text-ivory">
      {/* Background Newsprint Halftone Texture */}
      <div
        className="pointer-events-none fixed inset-0 opacity-15 z-0"
        style={{
          backgroundImage: 'radial-gradient(#252B27 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      <Container className="relative z-10 max-w-4xl">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-charcoal/30 pb-4 mb-8 text-xs font-mono">
          <Link
            href="/#newspaper"
            className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-charcoal hover:text-oxblood transition-colors"
          >
            <ArrowLeft size={13} className="text-oxblood" />
            <span>Return to The 1919 Dispatch</span>
          </Link>

          <Link
            href="/writing"
            className="inline-flex items-center gap-1 font-bold uppercase tracking-wider text-charcoal/70 hover:text-charcoal"
          >
            <Newspaper size={13} />
            <span>All Dispatches</span>
          </Link>
        </div>

        {/* Broadsheet Masthead */}
        <div className="border-b-4 border-charcoal pb-4 mb-8 text-center space-y-2">
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-charcoal/70 border-b border-charcoal/30 pb-2">
            <span>BIRMINGHAM · VOL. XIX · NO. 42</span>
            <span className="font-bold text-oxblood">{dispatch.status}</span>
            <span>{dispatch.displayDate}</span>
          </div>

          <p className="font-mono text-xs uppercase tracking-[0.25em] text-oxblood font-bold pt-1">
            {dispatch.category}
          </p>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-charcoal leading-tight">
            {dispatch.headline}
          </h1>

          <p className="font-serif italic text-base sm:text-lg text-charcoal/80 max-w-2xl mx-auto pt-2 border-t border-charcoal/20">
            {dispatch.subhead}
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-charcoal/70">
            <span>BY {dispatch.author.toUpperCase()}</span>
            <span>·</span>
            <span>{dispatch.readTime}</span>
            <span>·</span>
            <span className="bg-charcoal px-2 py-0.5 text-ivory font-bold">1919 EDITORIAL ARCHIVE</span>
          </div>
        </div>

        {/* Article Body */}
        <div className="border-2 border-charcoal bg-white/70 p-6 md:p-10 shadow-xl space-y-6">
          <MarkdownContent content={dispatch.content} />

          {/* Tags */}
          {dispatch.tags && dispatch.tags.length > 0 && (
            <div className="pt-6 border-t border-charcoal/30 flex flex-wrap items-center gap-2 font-mono text-[10px]">
              <span className="font-bold uppercase tracking-wider text-charcoal flex items-center gap-1">
                <Tag size={12} className="text-oxblood" /> TAGS:
              </span>
              {dispatch.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-charcoal/40 bg-charcoal/5 px-2 py-0.5 text-charcoal font-semibold"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Stamped Author Sign-off */}
          <div className="mt-8 border-t-2 border-charcoal pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-condensed text-base font-bold uppercase tracking-wider text-charcoal">
                AYUSH PATIDAR
              </p>
              <p className="font-mono text-[10px] text-charcoal/70 uppercase">
                AI Engineer · Backend Systems · Product Builder
              </p>
            </div>

            <div className="vintage-stamp stamp-classified text-[9px] py-1 px-3 bg-charcoal text-ivory border-oxblood">
              VERIFIED ARCHIVE SPECIFICATION
            </div>
          </div>
        </div>

        {/* Next / Previous Dispatch Navigation */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevDispatch ? (
            <Link
              href={`/writing/${prevDispatch.slug}`}
              className="border-2 border-charcoal bg-charcoal/5 p-4 hover:bg-charcoal/10 transition-colors group block text-left"
            >
              <span className="font-mono text-[9px] uppercase tracking-wider text-oxblood font-bold flex items-center gap-1">
                <ArrowLeft size={11} /> PREVIOUS DISPATCH
              </span>
              <p className="mt-1 font-serif text-sm font-bold text-charcoal group-hover:text-oxblood transition-colors line-clamp-1">
                {prevDispatch.headline}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {nextDispatch && (
            <Link
              href={`/writing/${nextDispatch.slug}`}
              className="border-2 border-charcoal bg-charcoal/5 p-4 hover:bg-charcoal/10 transition-colors group block text-right"
            >
              <span className="font-mono text-[9px] uppercase tracking-wider text-oxblood font-bold flex items-center justify-end gap-1">
                NEXT DISPATCH <ArrowRight size={11} />
              </span>
              <p className="mt-1 font-serif text-sm font-bold text-charcoal group-hover:text-oxblood transition-colors line-clamp-1">
                {nextDispatch.headline}
              </p>
            </Link>
          )}
        </div>
      </Container>
    </article>
  );
}

