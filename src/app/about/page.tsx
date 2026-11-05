import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
export const metadata: Metadata = { title: 'About', description: 'About Ayush Patidar, an AI, backend, and product engineer.' };
export default function About(){return <Container className="py-20"><SectionHeading eyebrow="ABOUT ME" title="An engineer curious about how things work beneath the surface." description="I enjoy connecting technology, systems thinking, and practical product outcomes."/><div className="max-w-3xl space-y-6 text-lg leading-9 text-muted"><p>I'm Ayush Patidar, an engineer working across AI applications, backend development, and product engineering. I enjoy taking complex requirements, understanding the underlying problem, and shaping them into useful software.</p><p>My work and learning interests include LLM-powered applications, retrieval-augmented generation, NLP, API design, databases, distributed systems, and cloud infrastructure.</p><p>I value engineering decisions that are understandable and deliberate: choosing the right level of complexity, designing for maintainability, and making systems observable once they reach production.</p><p>Outside engineering, I enjoy books, poetry, philosophy, and learning about how people think and learn. Those interests keep me curious and influence how I approach creative and technical problems.</p></div><section className="mt-16 max-w-4xl">
  <h2 className="text-2xl font-semibold text-white">Professional experience</h2>
  <div className="mt-6 rounded-2xl border border-line bg-panel p-6">
    <div className="flex flex-wrap items-start justify-between gap-3"><div><h3 className="font-semibold text-white">AI Engineer · Supersourcing</h3><p className="mt-1 text-sm text-muted">Indore, Madhya Pradesh, India</p></div><span className="font-mono text-xs text-lime">MAR 2025 — PRESENT</span></div>
    <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
      <li>Architected multi-tenant AI recruitment and enterprise platforms with FastAPI, Flask, and PostgreSQL.</li>
      <li>Built OCR- and LLM-powered resume parsing and optimization workflows, using Redis and Celery for asynchronous processing.</li>
      <li>Developed billing and automated application workflows, plus SuperBot, a RAG-based SQL agent, and an AI interview system.</li>
      <li>Implemented WebSocket notifications and CI/CD workflows using GitHub Actions for AWS EC2 deployments.</li>
    </ul>
    <p className="mt-4 text-xs leading-5 text-muted">Impact figures on the resume include 50% lower processing latency, 95% workflow reliability, and AI interviews for 500+ candidates monthly. These are resume-reported figures.</p>
  </div>
  <div className="mt-5 rounded-2xl border border-line bg-panel p-6"><h3 className="font-semibold text-white">Education</h3><p className="mt-2 text-sm text-muted">B.Tech, Computer Science Engineering (Data Science) · Acropolis Institute of Technology and Research, Indore · 2021–2025</p><p className="mt-1 text-sm text-muted">CGPA: 7.52 / 10</p></div>
</section>
<div className="mt-16 grid gap-4 sm:grid-cols-3">{[{t:'Curiosity',d:'Keep learning and question assumptions.'},{t:'Ownership',d:'Think beyond the ticket and understand the outcome.'},{t:'Craft',d:'Prefer clarity, reliability, and thoughtful execution.'}].map(x=><div key={x.t} className="rounded-2xl border border-line bg-panel p-6"><h3 className="font-semibold text-white">{x.t}</h3><p className="mt-3 text-sm leading-6 text-muted">{x.d}</p></div>)}</div><div className="mt-12 flex flex-wrap gap-3"><a href="/resume/ayush-patidar-resume.pdf" className="rounded-full bg-lime px-5 py-3 text-sm font-semibold text-ink hover:bg-white">Download resume ↗</a><Link href="/contact" className="rounded-full border border-line px-5 py-3 text-sm text-white hover:border-lime">Get in touch</Link></div></Container>;}
