import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { ArrowLeft, Cpu, Server, Cloud, Compass } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Factory · Technical Capabilities',
  description: 'AI engineering, backend development, and cloud infrastructure capabilities by Ayush Patidar.',
};

const groups = [
  {
    icon: Cpu,
    title: 'Artificial Intelligence & Applied AI',
    code: 'FAC-AI-01',
    items: [
      'Retrieval-Augmented Generation (RAG) with hybrid search & reranking',
      'LLM orchestration via AWS Bedrock & OpenAI APIs',
      'Dense vector indexing & semantic search with PostgreSQL pgvector',
      'Document intelligence & high-throughput OCR parsers (PyMuPDF)',
      'Deterministic JSON schema validation & guardrail enforcement',
    ],
  },
  {
    icon: Server,
    title: 'Backend & Systems Engineering',
    code: 'FAC-BE-02',
    items: [
      'Production FastAPI asynchronous REST APIs with Pydantic v2',
      'Relational schema design, normalization & migrations in PostgreSQL',
      'Asynchronous task processing & queue orchestration with Redis & Celery',
      'Multi-tenant role-based access control (RBAC) & authentication',
      'Double-entry transaction modeling & ACID concurrency locks',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    code: 'FAC-CLD-03',
    items: [
      'AWS cloud architectures: EC2, Bedrock, RDS PostgreSQL, S3, IAM',
      'Containerization with multi-stage Docker builds & Compose',
      'Infrastructure as Code (IaC) principles & Terraform specifications',
      'Automated CI/CD build & test pipelines via GitHub Actions',
      'Structured application logging, health probes & error tracing',
    ],
  },
  {
    icon: Compass,
    title: 'Product & System Strategy',
    code: 'FAC-STR-04',
    items: [
      'Decomposing vague business objectives into strict domain boundaries',
      'Architecture Decision Records (ADRs) & technical RFC specifications',
      'Designing for failure modes: circuit breakers, retries & backpressure',
      'Performance profiling, latency reduction & token budget stewardship',
      'Clean modular architectures that simplify future team velocity',
    ],
  },
];

export default function Expertise() {
  return (
    <div className="py-16 md:py-24 bg-charcoal-deep text-ivory">
      <Container>
        <Link
          href="/#factory"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sage hover:text-ivory mb-8"
        >
          <ArrowLeft size={14} className="text-brass" />
          <span>Return To The Factory (Chapter 02)</span>
        </Link>

        <SectionHeading
          eyebrow="FACILITY RECORD · THE FACTORY"
          title="ENGINEERING REPERTOIRE & PRACTICAL DISCIPLINE"
          description="Capabilities across the software and AI lifecycle. Every competency is backed by production deliverables or rigorous open initiatives."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {groups.map((g) => {
            const Icon = g.icon;
            return (
              <section
                key={g.title}
                className="border-2 border-brass/35 bg-charcoal p-6 md:p-8 space-y-5 ledger-card"
              >
                <div className="flex items-center justify-between border-b border-brass/20 pb-3">
                  <div className="flex items-center gap-2.5">
                    <Icon size={18} className="text-brass" />
                    <span className="font-mono text-xs font-bold text-brass uppercase">
                      {g.code}
                    </span>
                  </div>
                  <span className="vintage-stamp stamp-approved text-[8px] py-0.5">
                    AUDITED
                  </span>
                </div>

                <h2 className="font-condensed text-2xl font-bold uppercase tracking-wider text-ivory">
                  {g.title}
                </h2>

                <ul className="space-y-3 font-mono text-xs text-sage">
                  {g.items.map((x) => (
                    <li key={x} className="flex items-start gap-2.5">
                      <span className="text-brass font-bold">↳</span>
                      <span className="leading-relaxed">{x}</span>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <div className="mt-14 border border-brass/30 bg-charcoal p-5 text-center font-mono text-xs text-sage">
          <span>NO FABRICATED LEVEL PERCENTAGES · ONLY APPLIED SYSTEMS AND VERIFIABLE RESULTS</span>
        </div>
      </Container>
    </div>
  );
}