'use client';

import { useState } from 'react';
import { Container } from './Container';
import {
  Layers,
  Cpu,
  Database,
  Server,
  Cloud,
  Activity,
  ArrowRight,
  Shield,
  HelpCircle,
  Code2,
  Workflow,
} from 'lucide-react';

interface ArchitectureNode {
  id: string;
  name: string;
  layer: string;
  category: string;
  tech: string;
  role: string;
  whyExists: string;
  considerations: string;
  tradeOffs: string;
  practicalExample: string;
}

const warRoomNodes: ArchitectureNode[] = [
  {
    id: 'client-edge',
    name: 'Client & Ingestion Gateway',
    layer: 'Layer 01 · Ingestion',
    category: 'Edge & Client Interaction',
    tech: 'React / Next.js, HTTP/2, WebSockets',
    role: 'Receives user interactions, uploads documents, and opens real-time streaming sockets for low-latency tokens.',
    whyExists: 'Provides an immediate, responsive interface while insulating backend services with rate limiting and payload validation.',
    considerations: 'Optimizing payload sizes, handling network dropouts during file uploads, and streaming chunks incrementally.',
    tradeOffs: 'Server-Sent Events (SSE) vs WebSockets: SSE is simpler for unidirectional token streams; WebSockets are favored for bidirectional interactive tutoring.',
    practicalExample: 'Streamlined resume upload in DataHire with instantaneous upload progress and streaming AI feedback.',
  },
  {
    id: 'api-gateway',
    name: 'FastAPI Orchestration Core',
    layer: 'Layer 02 · Application',
    category: 'API Gateway & Security',
    tech: 'FastAPI, Pydantic v2, Uvicorn, OAuth2',
    role: 'Enforces strict input validation, role-based access control (RBAC), idempotency checks, and routes requests to domain services.',
    whyExists: 'Serves as the central security and business logic boundary, ensuring malformed payloads never reach database transactions or model providers.',
    considerations: 'Strict schema typing via Pydantic v2 reduces runtime surprises. Async request handling keeps worker threads unblocked.',
    tradeOffs: 'Microservices vs Modular Monolith: For mid-size platforms, a cleanly partitioned modular monolith avoids unnecessary network serialization latency.',
    practicalExample: 'Shule Direct multi-tenant RBAC middleware ensuring strict institutional data boundary isolation on every HTTP request.',
  },
  {
    id: 'ai-engine',
    name: 'AI Intelligence & RAG Core',
    layer: 'Layer 03 · Intelligence',
    category: 'Model Orchestration & Retrieval',
    tech: 'AWS Bedrock, OpenAI, pgvector, LangChain',
    role: 'Orchestrates foundation models, constructs dense vector embeddings, performs semantic search, and applies deterministic prompt guardrails.',
    whyExists: 'Transforms raw LLM generation into grounded, accurate, domain-specific intelligence without hallucinations.',
    considerations: 'Token budgets, temperature control, prompt caching, and structured JSON output schema enforcement.',
    tradeOffs: 'Full fine-tuning vs Retrieval-Augmented Generation: RAG provides lower cost, real-time knowledge updates, and strict document provenance.',
    practicalExample: 'SuperBot RAG agent querying enterprise SQL schemas with verified semantic chunking and fallback guardrails.',
  },
  {
    id: 'async-workers',
    name: 'Asynchronous Task Workers',
    layer: 'Layer 04 · Async Processing',
    category: 'Message Broker & Workers',
    tech: 'Celery, Redis, BackgroundTasks',
    role: 'Offloads long-running computational workloads (OCR parsing, multi-page vectorization, email triggers) from synchronous HTTP cycles.',
    whyExists: 'Protects the API gateway from blocking during 10-second document extractions, keeping user interfaces fast and resilient.',
    considerations: 'Task idempotency, dead-letter queues, exponential retry backoff, and worker concurrency limits.',
    tradeOffs: 'Kafka vs Celery/Redis: Celery with Redis provides minimal operational overhead and zero latency overhead for task scheduling.',
    practicalExample: 'DataHire asynchronous resume parsing where compute-heavy PyMuPDF extraction runs in worker pools without stalling web threads.',
  },
  {
    id: 'persistence',
    name: 'PostgreSQL Relational Core & pgvector',
    layer: 'Layer 05 · Persistence',
    category: 'Data & State Ledger',
    tech: 'PostgreSQL 16, pgvector, SQLAlchemy, Alembic',
    role: 'Acts as the single source of truth for transactional balances, candidate profiles, tenant records, and vector embeddings.',
    whyExists: 'ACID guarantees and strict relational foreign keys guarantee zero state drift and auditable ledger operations.',
    considerations: 'Connection pooling (pgBouncer/AsyncEngine), row-level locks (SELECT FOR UPDATE) for financial transactions, and HNSW vector index tuning.',
    tradeOffs: 'Dedicated vector database (Pinecone/Weaviate) vs pgvector: Using pgvector keeps relational metadata and vector embeddings in a single ACID transaction without syncing overhead.',
    practicalExample: 'ALOpay wallet balance ledger with double-entry accounting records preventing double-spend anomalies under concurrent requests.',
  },
  {
    id: 'cloud-infra',
    name: 'Cloud Infrastructure & Observability',
    layer: 'Layer 06 · Infrastructure',
    category: 'Containerization & IaC',
    tech: 'AWS EC2, Docker, Terraform, GitHub Actions',
    role: 'Containerizes application services, manages automated CI/CD deployments, and provides structured logging and health metrics.',
    whyExists: 'Guarantees reliable runtime reproducibility across local development, staging environments, and production deployments.',
    considerations: 'Zero-downtime rolling deploys, encrypted secrets management via IAM, and structured JSON logging for fast incident triage.',
    tradeOffs: 'Full Kubernetes (EKS) vs Docker Compose/EC2: Matching infrastructure complexity to operational load avoids unnecessary cloud billing and overhead.',
    practicalExample: 'Continuous integration and deployment pipelines on AWS EC2 with automated container health probes and automated rollbacks.',
  },
];

export function TheWarRoom() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('ai-engine');
  const activeNode = warRoomNodes.find((n) => n.id === selectedNodeId) || warRoomNodes[0];

  return (
    <section id="war-room" className="relative border-b-2 border-brass/40 bg-charcoal-deep py-24 text-ivory">
      {/* Blueprint Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-15 blueprint-grid" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-brass/40 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 text-brass font-mono text-xs tracking-widest uppercase">
              <span className="h-2 w-2 bg-brass" />
              <span>CHAPTER 04 · THE WAR ROOM</span>
            </div>
            <h2 className="mt-2 font-condensed text-4xl sm:text-5xl font-black uppercase tracking-tight text-ivory">
              SYSTEM ARCHITECTURE & TACTICAL BOARD
            </h2>
            <p className="mt-2 max-w-2xl font-serif italic text-sage text-sm">
              &ldquo;How production systems are conceived, structured, and protected. Every component has a dedicated purpose, clear boundaries, and documented trade-offs.&rdquo;
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="vintage-stamp stamp-approved text-[10px] py-1">
              SYSTEM MAP 1919
            </span>
          </div>
        </div>

        {/* The Tactical Board Layout */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 items-start">
          
          {/* ==================== LEFT: INTERACTIVE ARCHITECTURE NODES (Cols 1-7) ==================== */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between border-b border-brass/20 pb-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-brass">
                CONNECTED SYSTEM TOPOLOGY · SELECT A NODE TO INSPECT
              </span>
              <span className="font-mono text-[9px] text-sage">6 ARCHITECTURAL LAYERS</span>
            </div>

            <div className="space-y-3">
              {warRoomNodes.map((node, index) => {
                const isSelected = selectedNodeId === node.id;
                return (
                  <div key={node.id} className="relative">
                    {/* Node Card */}
                    <button
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`w-full text-left p-4 border transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        isSelected
                          ? 'border-brass bg-charcoal shadow-stamp text-ivory'
                          : 'border-brass/25 bg-[#1C201D] text-sage hover:border-brass/60 hover:text-ivory hover:bg-charcoal/80'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center border font-mono text-xs font-bold ${
                            isSelected
                              ? 'border-oxblood bg-oxblood text-ivory'
                              : 'border-brass/40 bg-charcoal text-brass'
                          }`}
                        >
                          0{index + 1}
                        </div>
                        <div>
                          <p className="font-mono text-[9px] uppercase tracking-wider text-brass">
                            {node.layer}
                          </p>
                          <h4 className="font-condensed text-base font-bold uppercase tracking-wider text-ivory">
                            {node.name}
                          </h4>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 self-end sm:self-center font-mono text-xs">
                        <span className="border border-brass/20 bg-charcoal-deep px-2 py-0.5 text-[10px] text-sage">
                          {node.tech.split(',')[0]}
                        </span>
                        <span
                          className={`text-xs ${
                            isSelected ? 'text-brass font-bold' : 'text-sage/40'
                          }`}
                        >
                          →
                        </span>
                      </div>
                    </button>

                    {/* Connecting Brass Line between layers */}
                    {index < warRoomNodes.length - 1 && (
                      <div className="mx-auto h-3 w-[1.5px] bg-brass/30" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Architecture Principles Footer */}
            <div className="border border-brass/20 bg-forest/20 p-4 font-mono text-xs text-sage flex items-center justify-between">
              <span>PRINCIPLE: ZERO UNCHECKED ASSUMPTIONS</span>
              <span className="text-brass">STRATEGY BEFORE SYNTAX</span>
            </div>
          </div>

          {/* ==================== RIGHT: DETAILED NODE INSPECTOR (Cols 8-12) ==================== */}
          <div className="lg:col-span-5 border-2 border-brass/50 bg-[#1A1F1C] p-6 blueprint-grid shadow-2xl space-y-5 sticky top-24">
            <div className="flex items-center justify-between border-b border-brass/30 pb-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-brass">
                TACTICAL INSPECTOR
              </span>
              <span className="vintage-stamp stamp-classified text-[8px] py-0.5">
                ACTIVE FOCUS
              </span>
            </div>

            {/* Tactical Commander Header with User-Added Peaky Blinders Character Photo */}
            <div className="flex items-center gap-3.5 border-b border-brass/25 pb-3">
              <div className="relative h-14 w-12 shrink-0 overflow-hidden border border-brass/50 bg-charcoal shadow-md">
                <img
                  src="/images/peaky-character-2.jpg"
                  alt="Tactical Headquarters Commander"
                  className="h-full w-full object-cover object-top filter contrast-125 sepia-[0.2]"
                />
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-brass">
                  STRATEGY HQ · BIRMINGHAM 1919
                </span>
                <p className="font-condensed text-sm font-bold uppercase tracking-wider text-ivory">
                  &ldquo;STRATEGY BEFORE SYNTAX.&rdquo;
                </p>
                <p className="font-mono text-[8px] text-sage">
                  TACTICAL ARCHITECT · AYUSH PATIDAR
                </p>
              </div>
            </div>

            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-sage">
                {activeNode.layer} · {activeNode.category}
              </span>
              <h3 className="mt-1 font-condensed text-2xl font-black uppercase tracking-wider text-ivory">
                {activeNode.name}
              </h3>
              <p className="mt-1 font-mono text-xs text-brass">
                INSTRUMENTATION: {activeNode.tech}
              </p>
            </div>

            {/* What It Does */}
            <div className="space-y-1 border-t border-brass/20 pt-3">
              <h5 className="font-condensed text-xs uppercase tracking-widest text-brass">
                WHAT IT DOES
              </h5>
              <p className="text-xs leading-relaxed text-sage">
                {activeNode.role}
              </p>
            </div>

            {/* Why It Exists */}
            <div className="space-y-1 border-t border-brass/20 pt-3">
              <h5 className="font-condensed text-xs uppercase tracking-widest text-brass">
                WHY IT EXISTS IN PRODUCTION
              </h5>
              <p className="text-xs leading-relaxed text-sage">
                {activeNode.whyExists}
              </p>
            </div>

            {/* Design Considerations & Trade-Offs */}
            <div className="space-y-2 border-t border-brass/20 pt-3">
              <h5 className="font-condensed text-xs uppercase tracking-widest text-brass">
                DESIGN CONSIDERATIONS & TRADE-OFFS
              </h5>
              <div className="border-l-2 border-oxblood bg-charcoal p-3 space-y-1.5 text-xs text-sage">
                <p>
                  <strong className="text-ivory font-mono">Considerations:</strong>{' '}
                  {activeNode.considerations}
                </p>
                <p className="pt-1 border-t border-brass/10">
                  <strong className="text-brass font-mono">Trade-Off Analysis:</strong>{' '}
                  {activeNode.tradeOffs}
                </p>
              </div>
            </div>

            {/* Practical Example */}
            <div className="border border-brass/30 bg-charcoal-deep p-3 space-y-1">
              <p className="font-mono text-[9px] uppercase tracking-wider text-brass">
                VERIFIED ARCHITECTURE PRECEDENT:
              </p>
              <p className="text-xs leading-relaxed text-ivory font-mono">
                {activeNode.practicalExample}
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
