'use client';

import { useState, useEffect } from 'react';
import { FastForward, Flame } from 'lucide-react';

export function AtmosphericIntro() {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Check if user has already seen the intro in this session
    const seen = sessionStorage.getItem('red_ledger_intro_seen');
    if (!seen) {
      setVisible(true);
      const timer = setTimeout(() => {
        handleDismiss();
      }, 4200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setFading(true);
    setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('red_ledger_intro_seen', 'true');
    }, 600);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#121513] text-ivory transition-opacity duration-700 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* 1919 Atmospheric Mist / Rain / Chimney Silhouette Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Distant industrial chimneys & brick roofline silhouette */}
          <path
            d="M 0 900 L 0 680 L 140 680 L 140 520 L 170 520 L 170 680 L 320 680 L 390 620 L 460 680 L 600 680 L 600 480 L 640 480 L 640 680 L 780 680 L 880 590 L 980 680 L 1120 680 L 1120 500 L 1150 500 L 1150 680 L 1440 680 L 1440 900 Z"
            fill="#1A1F1C"
          />
          {/* Industrial smoke plumes */}
          <circle cx="155" cy="460" r="40" fill="#35443B" opacity="0.35" filter="blur(20px)" />
          <circle cx="620" cy="420" r="50" fill="#35443B" opacity="0.35" filter="blur(25px)" />
          <circle cx="1135" cy="440" r="45" fill="#35443B" opacity="0.35" filter="blur(22px)" />
          {/* Subtle gas street lamp */}
          <line x1="280" y1="680" x2="280" y2="760" stroke="#A99B79" strokeWidth="3" />
          <circle cx="280" cy="675" r="8" fill="#A99B79" className="lamp-glow" />
          <circle cx="280" cy="675" r="28" fill="#A99B79" opacity="0.25" filter="blur(10px)" />
        </svg>

        {/* Rain streaks */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(231,228,214,0.12) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Cinematic Text Reveal */}
      <div className="relative z-10 max-w-2xl px-6 text-center space-y-4">
        {/* Thomas Shelby 1919 Charcoal Sketch Cameo in the Fog */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-brass/60 bg-charcoal p-1 shadow-2xl overflow-hidden">
          <img
            src="/images/thomas-shelby-sketch.png"
            alt="Thomas Shelby 1919 Sketch"
            className="h-full w-full rounded-full object-cover sepia-[0.3] contrast-125 filter"
          />
        </div>

        <div className="flex items-center justify-center gap-3 text-brass font-mono text-[11px] tracking-[0.3em] uppercase">
          <Flame size={14} className="text-oxblood animate-pulse" />
          <span>BIRMINGHAM · ENGLAND · 1919</span>
          <Flame size={14} className="text-oxblood animate-pulse" />
        </div>

        <h2 className="font-condensed text-2xl sm:text-3xl font-bold uppercase tracking-widest text-ivory">
          EVERY CITY HAS ITS STORIES.
          <br />
          <span className="text-brass">EVERY STORY HAS ITS ARCHITECT.</span>
        </h2>

        <div className="mx-auto h-[1px] w-24 bg-oxblood" />

        <div className="space-y-1">
          <p className="font-condensed text-xl sm:text-2xl font-bold tracking-wider text-ivory">
            AYUSH PATIDAR
          </p>
          <p className="font-mono text-xs tracking-[0.25em] text-sage uppercase">
            ENGINEER · STRATEGIST · BUILDER OF INTELLIGENT SYSTEMS
          </p>
        </div>

        <p className="font-serif italic text-sm text-ivory/70 pt-2">
          &ldquo;The world doesn&apos;t need more code. It needs better thinking.&rdquo;
        </p>
      </div>

      {/* Skip Button */}
      <button
        onClick={handleDismiss}
        className="absolute bottom-8 right-8 z-20 flex items-center gap-2 border border-brass/40 bg-charcoal/80 px-4 py-2 font-mono text-xs uppercase tracking-wider text-sage hover:border-brass hover:text-ivory transition-all"
      >
        <span>Skip Prologue</span>
        <FastForward size={13} className="text-brass" />
      </button>
    </div>
  );
}
