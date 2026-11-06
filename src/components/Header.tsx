'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navigation, site } from '@/data/site';
import { Container } from './Container';
import { Logo } from './Logo';
import { CityMapModal } from './CityMapModal';
import { Map, Menu, X, FileText, Send } from 'lucide-react';

export function Header() {
  const [mapOpen, setMapOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-brass/30 bg-charcoal-deep/95 backdrop-blur-md">
        {/* Top vintage ledger status ticker */}
        <div className="border-b border-brass/15 bg-charcoal/80 py-1 text-[10px] text-sage font-mono">
          <Container className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brass animate-pulse" />
              <span className="tracking-widest uppercase">
                THE RED LEDGER · 1919 BIRMINGHAM ARCHIVE · DISPATCH READY
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-sage-light">
              <span>STATUS: {site.status}</span>
              <span className="text-brass/60">|</span>
              <span>RECORD: {site.recordId}</span>
            </div>
          </Container>
        </div>

        <Container className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop Chapter Navigation */}
          <nav
            aria-label="Chapter navigation"
            className="hidden xl:flex items-center gap-6 font-condensed tracking-wider uppercase text-xs"
          >
            {navigation.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-sage-light transition-colors hover:text-ivory"
              >
                <span className="font-mono text-[9px] text-brass/80 mr-1.5">
                  0{idx + 1}
                </span>
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-oxblood transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* City Map Trigger */}
            <button
              onClick={() => setMapOpen(true)}
              className="flex items-center gap-1.5 border border-brass/40 bg-forest/40 px-3 py-1.5 font-condensed text-xs uppercase tracking-wider text-ivory hover:border-brass hover:bg-forest transition-colors"
              title="Open Birmingham 1919 Ordnance Map"
            >
              <Map size={13} className="text-brass" />
              <span className="hidden md:inline">Ordnance Map</span>
            </button>

            {/* Resume button */}
            <a
              href={site.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 border border-brass/30 px-3 py-1.5 font-condensed text-xs uppercase tracking-wider text-sage hover:border-brass hover:text-ivory transition-colors"
            >
              <FileText size={13} className="text-brass" />
              <span>Resume</span>
            </a>

            {/* Let's Talk CTA */}
            <a
              href="#pub"
              className="flex items-center gap-1.5 border border-oxblood bg-oxblood/80 px-4 py-1.5 font-condensed text-xs uppercase tracking-wider text-ivory shadow-stamp hover:bg-oxblood transition-all"
            >
              <Send size={12} />
              <span>Let&apos;s Talk</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center border border-brass/30 text-sage hover:text-ivory xl:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </Container>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="border-t border-brass/30 bg-charcoal-deep p-4 xl:hidden">
            <nav className="flex flex-col space-y-3 font-condensed uppercase tracking-wider text-sm">
              {navigation.map((item, idx) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between border-b border-brass/10 py-2 text-sage hover:text-ivory"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-brass">0{idx + 1}</span>
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMapOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 border border-brass/50 bg-forest/40 py-2 font-condensed text-xs uppercase tracking-wider text-ivory"
                >
                  <Map size={14} className="text-brass" />
                  <span>Open 1919 Ordnance Map</span>
                </button>
                <a
                  href={site.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-brass/30 py-2 font-condensed text-xs uppercase tracking-wider text-sage"
                >
                  <FileText size={14} className="text-brass" />
                  <span>Download Dossier / Resume</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* 1919 Birmingham City Map Modal */}
      <CityMapModal isOpen={mapOpen} onClose={() => setMapOpen(false)} />
    </>
  );
}
