import Link from 'next/link';
import { navigation } from '@/data/site';
import { Container } from './Container';
import { Logo } from './Logo';
export function Header() {
  return <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-ink/85 backdrop-blur-xl"><Container className="flex h-[76px] items-center justify-between"><Logo/><nav aria-label="Main navigation" className="flex items-center gap-2 sm:gap-4 md:gap-8">{navigation.map(item => <Link key={item.href} href={item.href} className="text-[11px] sm:text-xs md:text-sm text-muted transition hover:text-white">{item.label}</Link>)}</nav><Link href="/hire" className="rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-white">Let's talk <span aria-hidden>↗</span></Link></Container></header>;
}
