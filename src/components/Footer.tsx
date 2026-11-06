import { site } from '@/data/site';
import { Container } from './Container';
import { ArrowUpRight, ShieldCheck, Mail, Github, Linkedin, FileText } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t-2 border-brass/40 bg-charcoal-deep py-16 text-sage">
      <Container>
        <div className="grid gap-10 md:grid-cols-4 pb-12 border-b border-brass/20">
          {/* Column 1: Identity & Stamp */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-condensed text-xl font-bold tracking-wider text-ivory">
                {site.brandName}
              </span>
              <span className="vintage-stamp stamp-classified text-[9px] py-0.5">
                RECORD NO. 019
              </span>
            </div>
            <p className="font-serif italic text-sm text-ivory/80 max-w-md">
              &ldquo;{site.philosophy}&rdquo;
            </p>
            <p className="text-xs text-sage leading-relaxed max-w-md">
              Designed as a 1919 Birmingham engineering dossier for {site.name}. Chronicling systems, architectures, and intelligent workflows built with clinical rigor.
            </p>
          </div>

          {/* Column 2: Sectors / Navigation */}
          <div>
            <h4 className="font-condensed text-xs uppercase tracking-widest text-brass border-b border-brass/20 pb-2 mb-3">
              LEDGER SECTORS
            </h4>
            <ul className="space-y-2 font-condensed uppercase tracking-wider text-xs">
              <li>
                <a href="#street" className="hover:text-ivory transition-colors">
                  01 · The Street (Hero)
                </a>
              </li>
              <li>
                <a href="#factory" className="hover:text-ivory transition-colors">
                  02 · The Factory (Expertise)
                </a>
              </li>
              <li>
                <a href="#ledger" className="hover:text-ivory transition-colors">
                  03 · The Ledger (Case Files)
                </a>
              </li>
              <li>
                <a href="#war-room" className="hover:text-ivory transition-colors">
                  04 · The War Room (Architecture)
                </a>
              </li>
              <li>
                <a href="#newspaper" className="hover:text-ivory transition-colors">
                  05 · The Newspaper (Writing)
                </a>
              </li>
              <li>
                <a href="#private-room" className="hover:text-ivory transition-colors">
                  06 · The Study (About)
                </a>
              </li>
              <li>
                <a href="#pub" className="hover:text-ivory transition-colors">
                  07 · The Pub (Contact)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Communication Lines */}
          <div>
            <h4 className="font-condensed text-xs uppercase tracking-widest text-brass border-b border-brass/20 pb-2 mb-3">
              COMMUNICATION LINES
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 hover:text-ivory transition-colors"
                >
                  <Mail size={13} className="text-brass" />
                  <span className="truncate">{site.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-ivory transition-colors"
                >
                  <Github size={13} className="text-brass" />
                  <span>github.com/billioniareman</span>
                  <ArrowUpRight size={11} className="text-brass" />
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-ivory transition-colors"
                >
                  <Linkedin size={13} className="text-brass" />
                  <span>linkedin.com/in/ram-patidar</span>
                  <ArrowUpRight size={11} className="text-brass" />
                </a>
              </li>
              <li>
                <a
                  href={site.resumePath}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-ivory transition-colors"
                >
                  <FileText size={13} className="text-brass" />
                  <span>Engineering Dossier (PDF)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Vintage Legal & Archive Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px]">
          <div className="flex items-center gap-2 text-sage">
            <ShieldCheck size={14} className="text-brass" />
            <span>ALL DISCLOSURES VERIFIED · NO FABRICATED METRICS · 1919 ARCHIVE</span>
          </div>
          <p className="text-sage">
            © {new Date().getFullYear()} {site.name} · {site.brandName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
