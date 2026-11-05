import Link from 'next/link';
import { site } from '@/data/site';
import { Container } from './Container';
export function Footer() { return <footer className="border-t border-line py-10"><Container className="flex flex-col justify-between gap-5 text-sm text-muted sm:flex-row sm:items-center"><div><span className="font-semibold text-white">AYUSH<span className="text-lime">.</span></span><p className="mt-2">Building thoughtful software, one system at a time.</p></div><div className="flex flex-wrap gap-5"><Link href="/projects">Work</Link><Link href="/hire">Hire me</Link><a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div><p>© {new Date().getFullYear()} Ayush Patidar</p></Container></footer>; }
