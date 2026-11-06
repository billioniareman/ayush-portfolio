import Link from 'next/link';
import { site } from '@/data/site';

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Ayush Patidar — The Red Ledger"
      className="group flex items-center gap-2.5 font-condensed tracking-wider transition-opacity hover:opacity-90"
    >
      <div className="flex h-8 w-8 items-center justify-center border border-brass/70 bg-charcoal-deep font-mono text-[11px] font-bold text-brass shadow-sm">
        RL
      </div>
      <div className="flex flex-col">
        <span className="font-condensed text-base font-bold uppercase tracking-tight text-ivory group-hover:text-brass">
          {site.name}
        </span>
        <span className="font-mono text-[9px] tracking-[0.2em] text-sage uppercase">
          1919 LEDGER · NO. 019
        </span>
      </div>
    </Link>
  );
}
