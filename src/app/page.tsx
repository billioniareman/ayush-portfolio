import { AtmosphericIntro } from '@/components/AtmosphericIntro';
import { EditorialHero } from '@/components/EditorialHero';
import { TheFactory } from '@/components/TheFactory';
import { TheLedger } from '@/components/TheLedger';
import { TheWarRoom } from '@/components/TheWarRoom';
import { TheNewspaper } from '@/components/TheNewspaper';
import { ThePrivateRoom } from '@/components/ThePrivateRoom';
import { ThePub } from '@/components/ThePub';
import { getAllDispatches } from '@/lib/dispatches';

export default function Home() {
  const dispatches = getAllDispatches();

  return (
    <>
      {/* 1919 Atmospheric Birmingham Street Opening (Brief & Skippable) */}
      <AtmosphericIntro />

      {/* Chapter 01: THE STREET — Editorial Infographic Hero (Behance-inspired) */}
      <EditorialHero />

      {/* Chapter 02: THE FACTORY — Technical Expertise & Industrial Blueprints */}
      <TheFactory />

      {/* Chapter 03: THE LEDGER — Confidential Project Case Files */}
      <TheLedger />

      {/* Chapter 04: THE WAR ROOM — System Architecture Tactical Board */}
      <TheWarRoom />

      {/* Chapter 05: THE NEWSPAPER — Field Notes & The 1919 Dispatch (Local Markdown Powered) */}
      <TheNewspaper dispatches={dispatches} />

      {/* Chapter 06: THE PRIVATE ROOM — Personal Study & Antique Pocket Watch Journey */}
      <ThePrivateRoom />

      {/* Chapter 07: THE PUB — The Garrison Tavern & Strategic Contact */}
      <ThePub />
    </>
  );
}
