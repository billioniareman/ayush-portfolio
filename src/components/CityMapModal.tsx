'use client';

import { useState } from 'react';
import { chapters } from '@/data/site';
import { Compass, MapPin, X, Navigation } from 'lucide-react';

interface CityMapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CityMapModal({ isOpen, onClose }: CityMapModalProps) {
  const [hoveredChapter, setHoveredChapter] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md transition-all">
      <div
        className="relative w-full max-w-4xl border-2 border-brass bg-charcoal-deep p-6 text-ivory shadow-2xl md:p-8"
        style={{
          boxShadow: '0 20px 60px rgba(0,0,0,0.8), inset 0 0 100px rgba(0,0,0,0.6)',
        }}
      >
        {/* Vintage cartography border frame */}
        <div className="pointer-events-none absolute inset-2 border border-dashed border-brass/30" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-brass/30 pb-4">
          <div className="flex items-center gap-3">
            <Compass className="h-6 w-6 text-brass animate-spin-slow" />
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] text-sage uppercase">
                ORDNANCE SURVEY · BIRMINGHAM INDUSTRIAL DISTRICT · 1919
              </p>
              <h2 className="font-condensed text-2xl font-bold uppercase tracking-wider text-ivory">
                THE SEVEN SECTORS OF THE RED LEDGER
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center border border-brass/50 text-sage hover:border-oxblood hover:bg-oxblood hover:text-ivory"
            aria-label="Close City Map"
          >
            <X size={18} />
          </button>
        </div>

        {/* Map Canvas & Interactive Nodes */}
        <div className="relative mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Fictional Blueprint Map Area */}
          <div className="relative min-h-[340px] overflow-hidden border border-brass/40 bg-[#1e2320] p-6 blueprint-grid">
            {/* Canals & Railway stylized SVG vectors */}
            <svg
              className="absolute inset-0 h-full w-full opacity-35"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Canal curve */}
              <path
                d="M 10 60 Q 140 120, 260 80 T 480 200 T 700 160"
                fill="none"
                stroke="#A99B79"
                strokeWidth="6"
                strokeDasharray="4 2"
              />
              <path
                d="M 20 280 C 180 240, 240 140, 420 180 S 600 320, 720 280"
                fill="none"
                stroke="#743A36"
                strokeWidth="3"
                opacity="0.6"
              />
              {/* Crosshair coordinates */}
              <circle cx="120" cy="90" r="4" fill="#A99B79" />
              <circle cx="280" cy="180" r="4" fill="#A99B79" />
              <circle cx="450" cy="130" r="4" fill="#A99B79" />
            </svg>

            {/* Map Labels and Pins */}
            <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[9px] uppercase tracking-widest text-brass border border-brass/30 px-2 py-0.5 bg-charcoal/80">
                  GRID: 52°28&apos;N 1°54&apos;W · SMALL HEATH
                </span>
                <span className="font-mono text-[9px] text-sage">
                  CANAL FEEDER / DIGBETH BASIN
                </span>
              </div>

              {/* Landmark interactive pins positioned over the stylized map */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {chapters.map((ch) => {
                  const isHovered = hoveredChapter === ch.id;
                  return (
                    <a
                      key={ch.id}
                      href={ch.href}
                      onClick={onClose}
                      onMouseEnter={() => setHoveredChapter(ch.id)}
                      onMouseLeave={() => setHoveredChapter(null)}
                      className={`group relative flex flex-col border p-3 transition-all duration-200 ${
                        isHovered
                          ? 'border-oxblood bg-oxblood/20 shadow-stamp scale-[1.03]'
                          : 'border-brass/30 bg-charcoal/90 hover:border-brass hover:bg-forest/60'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-brass">
                          SEC.{ch.number}
                        </span>
                        <MapPin
                          size={14}
                          className={isHovered ? 'text-oxblood' : 'text-brass/70 group-hover:text-brass'}
                        />
                      </div>
                      <h4 className="mt-1 font-condensed text-sm font-bold uppercase tracking-wider text-ivory">
                        {ch.title}
                      </h4>
                      <p className="mt-0.5 line-clamp-1 font-mono text-[9px] text-sage">
                        {ch.subtitle}
                      </p>
                    </a>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-brass/20 text-sage font-mono text-[9px]">
                <span>SELECT ANY SECTOR TO ENGAGE NAVIGATION</span>
                <span className="text-brass">EST. 1919</span>
              </div>
            </div>
          </div>

          {/* Ledger Dossier Preview Box */}
          <div className="flex flex-col justify-between border border-brass/30 bg-charcoal p-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-brass uppercase">
                  ACTIVE DOSSIER
                </span>
                <span className="vintage-stamp stamp-classified text-[9px] py-0.5">
                  RECORDED
                </span>
              </div>

              <div className="mt-4 border-l-2 border-oxblood pl-3">
                <p className="font-mono text-[10px] text-sage">PHILOSOPHY OF THE OPERATION</p>
                <p className="mt-1 font-serif text-sm italic text-ivory">
                  &ldquo;The world doesn&apos;t need more code. It needs better thinking.&rdquo;
                </p>
              </div>

              {/* Ordnance Map Vignette Badge */}
              <div className="flex items-center gap-3 mt-3 border border-brass/25 bg-charcoal-deep p-2 shadow-sm">
                <div className="relative h-12 w-10 shrink-0 overflow-hidden border border-brass/40">
                  <img
                    src="/images/peaky-character-2.jpg"
                    alt="Birmingham 1919 Cartography Dossier"
                    className="h-full w-full object-cover filter contrast-125 sepia-[0.3]"
                  />
                </div>
                <div>
                  <span className="font-mono text-[8px] uppercase tracking-widest text-brass">
                    ORDNANCE DISTRICT AP-019
                  </span>
                  <p className="font-condensed text-xs font-bold uppercase text-ivory">
                    SMALL HEATH TO THE GARRISON
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-2.5 text-xs text-sage">
                <p>
                  Welcome to <strong className="text-ivory">The Red Ledger</strong>. Each sector represents a critical dimension of engineering practice, from low-level systems and database durability to LLM architectures and production reliability.
                </p>
                <div className="bg-forest/30 p-2.5 border border-forest font-mono text-[10px] text-sage-light">
                  <span className="text-brass font-bold">DISPATCH:</span> Direct, verifiable disclosures only. No manufactured metrics. No superficial hype.
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-brass/20 pt-4 flex items-center justify-between">
              <a
                href="#street"
                onClick={onClose}
                className="inline-flex items-center gap-2 border border-brass bg-brass/10 px-4 py-2 font-condensed text-xs uppercase tracking-wider text-ivory hover:bg-brass hover:text-charcoal transition-all"
              >
                <Navigation size={13} />
                Enter At The Street
              </a>
              <span className="font-mono text-[9px] text-sage">AYUSH PATIDAR</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
