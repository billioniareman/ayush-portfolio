import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { ContactForm } from '@/components/ContactForm';
import { site } from '@/data/site';
import { ArrowLeft, Mail, Github, Linkedin, FileText, Flame } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Pub · Contact & Opportunities',
  description: 'Transmit a message to Ayush Patidar regarding AI engineering, backend systems, or collaborations.',
};

export default function Contact() {
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
          eyebrow="CHAPTER 07 · THE PUB"
          title="EVERY GREAT OPERATION BEGINS WITH A CONVERSATION"
          description="Share the problem, system, or opportunity. I will review the context and reply with direct, actionable engineering feedback."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_360px] items-start">
          <ContactForm />

          <aside className="space-y-6">
            <div className="border-2 border-brass/40 bg-charcoal p-6 space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-brass">
                DIRECT ELECTRONIC WIRE
              </span>
              <a
                href={`mailto:${site.email}`}
                className="block break-all font-mono text-sm font-bold text-ivory hover:text-brass transition-colors"
              >
                {site.email}
              </a>
              <p className="font-mono text-xs text-sage leading-relaxed pt-2 border-t border-brass/15">
                For contract architecture, AI pipelines, or full-time opportunities.
              </p>
            </div>

            <div className="border border-brass/30 bg-charcoal p-6 space-y-3 font-mono text-xs text-sage">
              <span className="font-mono text-[10px] uppercase tracking-wider text-brass">
                GLOBAL CHANNELS
              </span>
              <div className="space-y-2 pt-2">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between hover:text-ivory"
                >
                  <span className="flex items-center gap-2">
                    <Github size={14} className="text-brass" /> GitHub
                  </span>
                  <span className="text-brass">↗</span>
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between hover:text-ivory"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin size={14} className="text-brass" /> LinkedIn
                  </span>
                  <span className="text-brass">↗</span>
                </a>
                <a
                  href={site.resumePath}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between hover:text-ivory"
                >
                  <span className="flex items-center gap-2">
                    <FileText size={14} className="text-brass" /> Resume Dossier
                  </span>
                  <span className="text-brass">↓</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}