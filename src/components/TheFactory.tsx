'use client';

import { useState } from 'react';
import {
  BrainCircuit,
  Server,
  Cloud,
  Compass,
  CheckCircle2,
  Cpu,
  Layers,
  Database,
  Terminal,
  Activity,
  GitBranch,
  Shield,
  FileCode,
} from 'lucide-react';
import { Container } from './Container';

interface CapabilityGroup {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  icon: any;
  leadQuote: string;
  capabilities: {
    name: string;
    description: string;
    tools: string[];
  }[];
  blueprintTitle: string;
  blueprintAnnotations: string[];
}

const expertiseGroups: CapabilityGroup[] = [
  {
    id: 'ai',
    code: 'FAC-AI-01',
    title: 'Artificial Intelligence & Applied AI',
    subtitle: 'LLM Orchestration, RAG Pipelines & Document Intelligence',
    icon: BrainCircuit,
    leadQuote: '“Intelligence is not an afterthought; it is a meticulously engineered inference loop.”',
    capabilities: [
      {
        name: 'Retrieval-Augmented Generation (RAG)',
        description: 'Multi-stage retrieval using dense vector embeddings, hybrid keyword matching, semantic reranking, and contextual chunking.',
        tools: ['AWS Bedrock', 'pgvector', 'OpenAI', 'LangChain', 'LlamaIndex'],
      },
      {
        name: 'AI Agents & Tool Orchestration',
        description: 'State machine-driven agents with deterministic guardrails, structured function calling, and verified fallback routes.',
        tools: ['FastAPI', 'Custom Tool Callers', 'Function Calling', 'JSON Schema'],
      },
      {
        name: 'Document Intelligence & OCR',
        description: 'High-throughput document extraction pipelines converting noisy multi-page resumes and PDFs into verified JSON schemas.',
        tools: ['PyMuPDF', 'Tesseract OCR', 'Regex Parsers', 'NLP Tokenizers'],
      },
      {
        name: 'Inference Optimization & Streaming',
        description: 'Token streaming over WebSockets and SSE, prompt caching, token budget management, and sub-second latency controls.',
        tools: ['AWS Bedrock', 'Streaming Async Generators', 'Prompt Engineering'],
      },
    ],
    blueprintTitle: 'NEURAL INFERENCE & RAG PIPELINE BLUEPRINT',
    blueprintAnnotations: [
      'Token budget guardrail at Ingestion Gateway',
      'Dense vector indexing via pgvector with HNSW similarity',
      'Deterministic output validation against Pydantic schema',
      'Asynchronous token streaming to client via WebSockets',
    ],
  },
  {
    id: 'backend',
    code: 'FAC-BE-02',
    title: 'Backend & Systems Engineering',
    subtitle: 'High-Concurrency APIs, Relational Integrity & Asynchronous Processing',
    icon: Server,
    leadQuote: '“A system without transactional integrity is merely a house waiting to burn down.”',
    capabilities: [
      {
        name: 'FastAPI & Python Services',
        description: 'Production-ready asynchronous backend APIs with strict type validation, dependency injection, and clean architecture patterns.',
        tools: ['Python 3.11+', 'FastAPI', 'Pydantic v2', 'Uvicorn'],
      },
      {
        name: 'Relational & Vector Data Modeling',
        description: 'ACID-compliant relational schemas with explicit foreign keys, migration management, and vector similarity indexing.',
        tools: ['PostgreSQL', 'SQLAlchemy 2.0', 'Alembic', 'pgvector'],
      },
      {
        name: 'Task Queues & Asynchronous Processing',
        description: 'Decoupled worker architectures handling compute-intensive tasks, batch document parsing, and third-party webhooks.',
        tools: ['Redis', 'Celery', 'BackgroundTasks', 'Event Emitters'],
      },
      {
        name: 'Multi-Tenant RBAC & Security',
        description: 'Granular role-based access control, JWT authentication, tenant boundary isolation, and rate limiting.',
        tools: ['OAuth2 / JWT', 'Row-Level Isolation', 'CORS / CSP Headers'],
      },
    ],
    blueprintTitle: 'HIGH-CONCURRENCY BACKEND CONTROL BOARD',
    blueprintAnnotations: [
      'Idempotent API endpoints with Redis deduplication keys',
      'Double-entry transaction records with row-level SELECT FOR UPDATE',
      'Asynchronous task offload via Celery Redis message broker',
      'Database connection pooling with SQLAlchemy AsyncEngine',
    ],
  },
  {
    id: 'cloud',
    code: 'FAC-CLD-03',
    title: 'Cloud & Infrastructure',
    subtitle: 'Containerization, IaC & Production Observability',
    icon: Cloud,
    leadQuote: '“Infrastructure is not just where code runs; it is the boundary that ensures survival.”',
    capabilities: [
      {
        name: 'Containerization & Orchestration',
        description: 'Multi-stage production Docker images, Kubernetes pod deployment specs, and resource boundary enforcement.',
        tools: ['Docker', 'Docker Compose', 'Kubernetes (EKS)', 'Helm'],
      },
      {
        name: 'Cloud Infrastructure (AWS)',
        description: 'Deployments across AWS compute, managed databases, serverless queues, and bedrock AI foundational models.',
        tools: ['AWS EC2', 'AWS Bedrock', 'RDS PostgreSQL', 'S3', 'IAM Roles'],
      },
      {
        name: 'Infrastructure as Code (IaC)',
        description: 'Reproducible environment configurations, declarative state tracking, and cloud parameter management.',
        tools: ['Terraform', 'Nginx Configs', 'Environment Segregation'],
      },
      {
        name: 'CI/CD & Operational Observability',
        description: 'Automated test runners, GitHub Actions build pipelines, structured JSON logging, and error tracking.',
        tools: ['GitHub Actions', 'Pytest', 'Structured Logging', 'Health Checks'],
      },
    ],
    blueprintTitle: 'CLOUD REPOSITORY & CONTAINER DEPLOYMENT SCHEMATIC',
    blueprintAnnotations: [
      'Zero-root Docker containers with minimal Alpine/Debian base',
      'Automated staging-to-production CI/CD via GitHub Actions',
      'Encrypted secrets injection via environment variables & IAM roles',
      'Nginx reverse proxy with SSL termination & gzip compression',
    ],
  },
  {
    id: 'strategy',
    code: 'FAC-STR-04',
    title: 'Product & Engineering Strategy',
    subtitle: 'System Design, Architecture Decision Records & Reliability',
    icon: Compass,
    leadQuote: '“Before you write a single line of code, dissect the problem until no ambiguity remains.”',
    capabilities: [
      {
        name: 'System Design & Trade-Off Analysis',
        description: 'Decomposing complex business requirements into clean domain boundaries, balancing latency, cost, and complexity.',
        tools: ['Event Storming', 'C4 Architecture Models', 'Sequence Diagrams'],
      },
      {
        name: 'Architecture Decision Records (ADRs)',
        description: 'Documenting the context, consequences, alternatives, and rationale behind crucial architectural commitments.',
        tools: ['Markdown ADRs', 'RFC Specifications', 'Technical Roadmaps'],
      },
      {
        name: 'Scalability & Reliability Engineering',
        description: 'Designing for graceful failure, circuit breakers, backpressure, retries with exponential backoff, and idempotent APIs.',
        tools: ['Circuit Breakers', 'Dead Letter Queues', 'Graceful Degradation'],
      },
      {
        name: 'Product Velocity & Developer Craft',
        description: 'Strict typing, automated linting, test suites, and documentation that empowers team delivery without friction.',
        tools: ['Type Hints', 'Ruff / Black', 'Modular Directory Structures'],
      },
    ],
    blueprintTitle: 'ENGINEERING DECISION & SYSTEM LIFECYCLE LEDGER',
    blueprintAnnotations: [
      'Requirements decomposed into domain boundaries before code',
      'Failure modes mapped: network timeouts, LLM rate limits, DB disconnects',
      'Verified performance targets established prior to implementation',
      'Auditable post-mortems and evolutionary architecture notes',
    ],
  },
];

export function TheFactory() {
  const [activeTab, setActiveTab] = useState<string>('ai');
  const current = expertiseGroups.find((g) => g.id === activeTab) || expertiseGroups[0];

  return (
    <section id="factory" className="relative border-b-2 border-brass/40 bg-charcoal-deep py-20 text-ivory">
      {/* Industrial Blueprint Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-15 blueprint-grid" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-brass/30 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 text-brass font-mono text-xs tracking-widest uppercase">
              <span className="h-2 w-2 bg-brass" />
              <span>CHAPTER 02 · THE FACTORY</span>
            </div>
            <h2 className="mt-2 font-condensed text-4xl sm:text-5xl font-black uppercase tracking-tight text-ivory">
              TECHNICAL EXPERTISE & INDUSTRIAL FORGE
            </h2>
            <p className="mt-2 max-w-2xl text-sm font-serif italic text-sage">
              &ldquo;No percentage bars. No meaningless skill gauges. Just verified architectural capabilities, battle-tested tools, and rigorous systems thinking.&rdquo;
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="vintage-stamp stamp-approved text-[10px] py-1">
              FACILITY VERIFIED
            </span>
          </div>
        </div>

        {/* Industrial Control Panel Navigation Tabs */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-2">
          {expertiseGroups.map((group) => {
            const Icon = group.icon;
            const isActive = activeTab === group.id;
            return (
              <button
                key={group.id}
                onClick={() => setActiveTab(group.id)}
                className={`group relative flex flex-col p-4 text-left border transition-all duration-200 ${
                  isActive
                    ? 'border-brass bg-charcoal shadow-stamp text-ivory'
                    : 'border-brass/25 bg-charcoal/50 text-sage hover:border-brass/60 hover:text-ivory hover:bg-charcoal/80'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-mono text-[10px] text-brass">
                    {group.code}
                  </span>
                  <Icon
                    size={18}
                    className={isActive ? 'text-brass' : 'text-sage/60 group-hover:text-brass'}
                  />
                </div>
                <h3 className="mt-3 font-condensed text-base sm:text-lg font-bold uppercase tracking-wider">
                  {group.title}
                </h3>
                <span
                  className={`mt-2 h-0.5 w-8 transition-all ${
                    isActive ? 'bg-oxblood w-full' : 'bg-transparent'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Active Capability Group Display */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12 items-start">
          
          {/* Left Column: Interactive Technical Blueprint Schematics (5 Cols) */}
          <div className="lg:col-span-5 border-2 border-brass/50 bg-[#1A1F1C] p-6 blueprint-grid space-y-5">
            <div className="flex items-center justify-between border-b border-brass/30 pb-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-brass">
                {current.code} // BLUEPRINT SCHEMATIC
              </span>
              <span className="font-mono text-[9px] text-sage">REV. 1919-C</span>
            </div>

            <h4 className="font-condensed text-lg font-bold uppercase tracking-wider text-ivory">
              {current.blueprintTitle}
            </h4>

            {/* Dynamic Visual SVG Blueprint Diagram based on selected tab */}
            <div className="relative h-56 w-full border border-brass/30 bg-charcoal-deep/90 p-4 overflow-hidden flex flex-col justify-between">
              {activeTab === 'ai' && (
                <svg className="h-full w-full" viewBox="0 0 360 180" fill="none">
                  {/* Ingestion node */}
                  <rect x="10" y="25" width="70" height="34" rx="2" fill="#252B27" stroke="#A99B79" strokeWidth="1.5" />
                  <text x="45" y="46" fill="#E7E4D6" fontSize="9" fontFamily="monospace" textAnchor="middle">Documents</text>

                  {/* Arrow to Parser */}
                  <line x1="80" y1="42" x2="115" y2="42" stroke="#A99B79" strokeWidth="1.5" strokeDasharray="3 2" />
                  
                  {/* Parser node */}
                  <rect x="115" y="25" width="75" height="34" rx="2" fill="#35443B" stroke="#A99B79" strokeWidth="1.5" />
                  <text x="152" y="46" fill="#E7E4D6" fontSize="9" fontFamily="monospace" textAnchor="middle">OCR / Chunks</text>

                  {/* Arrow to Embedding */}
                  <line x1="190" y1="42" x2="225" y2="42" stroke="#A99B79" strokeWidth="1.5" />

                  {/* Vector Store node */}
                  <rect x="225" y="15" width="95" height="54" rx="2" fill="#252B27" stroke="#743A36" strokeWidth="2" />
                  <text x="272" y="38" fill="#E7E4D6" fontSize="9" fontFamily="monospace" textAnchor="middle">pgvector HNSW</text>
                  <text x="272" y="54" fill="#A4A58F" fontSize="8" fontFamily="monospace" textAnchor="middle">Cosine Index</text>

                  {/* Down arrow to Bedrock LLM */}
                  <line x1="272" y1="69" x2="272" y2="105" stroke="#743A36" strokeWidth="2" />

                  {/* AWS Bedrock LLM node */}
                  <rect x="215" y="105" width="115" height="50" rx="2" fill="#743A36" stroke="#A99B79" strokeWidth="1.5" />
                  <text x="272" y="126" fill="#E7E4D6" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">AWS Bedrock</text>
                  <text x="272" y="142" fill="#E7E4D6" fontSize="8" fontFamily="monospace" textAnchor="middle">Reasoning & Hints</text>

                  {/* Arrow back to Output Stream */}
                  <line x1="215" y1="130" x2="115" y2="130" stroke="#A99B79" strokeWidth="1.5" strokeDasharray="4 2" />

                  {/* Guardrail & Output node */}
                  <rect x="15" y="105" width="100" height="50" rx="2" fill="#252B27" stroke="#A99B79" strokeWidth="1.5" />
                  <text x="65" y="126" fill="#A99B79" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">JSON Guardrail</text>
                  <text x="65" y="142" fill="#A4A58F" fontSize="8" fontFamily="monospace" textAnchor="middle">WebSocket SSE</text>
                </svg>
              )}

              {activeTab === 'backend' && (
                <svg className="h-full w-full" viewBox="0 0 360 180" fill="none">
                  {/* Client Request */}
                  <rect x="10" y="30" width="75" height="34" rx="2" fill="#252B27" stroke="#A99B79" strokeWidth="1.5" />
                  <text x="47" y="51" fill="#E7E4D6" fontSize="9" fontFamily="monospace" textAnchor="middle">Client HTTP</text>

                  {/* Arrow */}
                  <line x1="85" y1="47" x2="120" y2="47" stroke="#A99B79" strokeWidth="1.5" />

                  {/* FastAPI Gateway */}
                  <rect x="120" y="20" width="90" height="55" rx="2" fill="#35443B" stroke="#A99B79" strokeWidth="1.5" />
                  <text x="165" y="42" fill="#E7E4D6" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">FastAPI Core</text>
                  <text x="165" y="58" fill="#A4A58F" fontSize="8" fontFamily="monospace" textAnchor="middle">Pydantic Validate</text>

                  {/* Branch to Celery/Redis */}
                  <path d="M 165 75 L 165 115 L 125 115" stroke="#A99B79" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
                  <rect x="30" y="100" width="95" height="46" rx="2" fill="#252B27" stroke="#A99B79" strokeWidth="1.5" />
                  <text x="77" y="120" fill="#E7E4D6" fontSize="9" fontFamily="monospace" textAnchor="middle">Redis / Celery</text>
                  <text x="77" y="134" fill="#A4A58F" fontSize="8" fontFamily="monospace" textAnchor="middle">Async Workers</text>

                  {/* Arrow to PostgreSQL */}
                  <line x1="210" y1="47" x2="250" y2="47" stroke="#A99B79" strokeWidth="1.5" />
                  <rect x="250" y="20" width="95" height="110" rx="2" fill="#252B27" stroke="#743A36" strokeWidth="2" />
                  <text x="297" y="45" fill="#E7E4D6" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">PostgreSQL</text>
                  <text x="297" y="62" fill="#A4A58F" fontSize="8" fontFamily="monospace" textAnchor="middle">ACID WAL</text>
                  <line x1="260" y1="75" x2="335" y2="75" stroke="#35443B" strokeWidth="1" />
                  <text x="297" y="92" fill="#A99B79" fontSize="8" fontFamily="monospace" textAnchor="middle">Row Locking</text>
                  <text x="297" y="108" fill="#A4A58F" fontSize="8" fontFamily="monospace" textAnchor="middle">Idempotent Keys</text>
                </svg>
              )}

              {activeTab === 'cloud' && (
                <svg className="h-full w-full" viewBox="0 0 360 180" fill="none">
                  {/* GitHub Repo */}
                  <rect x="15" y="30" width="75" height="34" rx="2" fill="#252B27" stroke="#A99B79" strokeWidth="1.5" />
                  <text x="52" y="51" fill="#E7E4D6" fontSize="9" fontFamily="monospace" textAnchor="middle">GitHub CI/CD</text>

                  <line x1="90" y1="47" x2="125" y2="47" stroke="#A99B79" strokeWidth="1.5" />

                  {/* Docker Build */}
                  <rect x="125" y="25" width="85" height="44" rx="2" fill="#35443B" stroke="#A99B79" strokeWidth="1.5" />
                  <text x="167" y="45" fill="#E7E4D6" fontSize="9" fontFamily="monospace" textAnchor="middle">Docker Image</text>
                  <text x="167" y="58" fill="#A4A58F" fontSize="8" fontFamily="monospace" textAnchor="middle">Multi-stage</text>

                  <line x1="210" y1="47" x2="245" y2="47" stroke="#A99B79" strokeWidth="1.5" />

                  {/* AWS Cloud Box */}
                  <rect x="245" y="15" width="100" height="135" rx="2" fill="#252B27" stroke="#743A36" strokeWidth="2" />
                  <text x="295" y="38" fill="#A99B79" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">AWS Cloud</text>
                  <line x1="255" y1="50" x2="335" y2="50" stroke="#35443B" strokeWidth="1" />
                  <rect x="255" y="60" width="80" height="25" fill="#35443B" />
                  <text x="295" y="76" fill="#E7E4D6" fontSize="8" fontFamily="monospace" textAnchor="middle">EC2 / Containers</text>
                  <rect x="255" y="92" width="80" height="25" fill="#1A1F1C" stroke="#A99B79" strokeWidth="1" />
                  <text x="295" y="108" fill="#E7E4D6" fontSize="8" fontFamily="monospace" textAnchor="middle">RDS PostgreSQL</text>
                  <text x="295" y="135" fill="#A4A58F" fontSize="7" fontFamily="monospace" textAnchor="middle">CloudWatch Observability</text>
                </svg>
              )}

              {activeTab === 'strategy' && (
                <svg className="h-full w-full" viewBox="0 0 360 180" fill="none">
                  {/* Step 1 */}
                  <rect x="15" y="30" width="70" height="50" rx="2" fill="#252B27" stroke="#A99B79" strokeWidth="1.5" />
                  <text x="50" y="50" fill="#A99B79" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">01. DECOMPOSE</text>
                  <text x="50" y="65" fill="#A4A58F" fontSize="8" fontFamily="monospace" textAnchor="middle">Domain Rules</text>

                  <line x1="85" y1="55" x2="105" y2="55" stroke="#A99B79" strokeWidth="1.5" />

                  {/* Step 2 */}
                  <rect x="105" y="30" width="70" height="50" rx="2" fill="#35443B" stroke="#A99B79" strokeWidth="1.5" />
                  <text x="140" y="50" fill="#E7E4D6" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">02. CONTRACT</text>
                  <text x="140" y="65" fill="#A4A58F" fontSize="8" fontFamily="monospace" textAnchor="middle">APIs & Schemas</text>

                  <line x1="175" y1="55" x2="195" y2="55" stroke="#A99B79" strokeWidth="1.5" />

                  {/* Step 3 */}
                  <rect x="195" y="30" width="70" height="50" rx="2" fill="#252B27" stroke="#743A36" strokeWidth="1.5" />
                  <text x="230" y="50" fill="#E7E4D6" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">03. ISOLATE</text>
                  <text x="230" y="65" fill="#A4A58F" fontSize="8" fontFamily="monospace" textAnchor="middle">Failure Paths</text>

                  <line x1="265" y1="55" x2="285" y2="55" stroke="#A99B79" strokeWidth="1.5" />

                  {/* Step 4 */}
                  <rect x="285" y="30" width="65" height="50" rx="2" fill="#743A36" stroke="#A99B79" strokeWidth="1.5" />
                  <text x="317" y="50" fill="#E7E4D6" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">04. DELIVER</text>
                  <text x="317" y="65" fill="#E7E4D6" fontSize="8" fontFamily="monospace" textAnchor="middle">Observe & Log</text>

                  <path d="M 50 80 L 50 120 L 317 120 L 317 80" stroke="#A99B79" strokeWidth="1.2" strokeDasharray="4 2" fill="none" />
                  <text x="183" y="135" fill="#A99B79" fontSize="8" fontFamily="monospace" textAnchor="middle">Continuous Feedback & Architectural Decision Records</text>
                </svg>
              )}
            </div>

            {/* Blueprint Annotations List */}
            <div className="space-y-2 border-t border-brass/20 pt-4">
              <span className="font-mono text-[9px] uppercase tracking-widest text-brass">
                ENGINEERING SPECIFICATIONS
              </span>
              <ul className="space-y-1.5 font-mono text-xs text-sage">
                {current.blueprintAnnotations.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brass font-bold">[{idx + 1}]</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industrial Field Inspector Plate featuring User-Added Peaky Blinders Image */}
            <div className="border border-brass/30 bg-charcoal p-3 flex items-center gap-3.5 shadow-md pt-3">
              <div className="relative h-14 w-12 shrink-0 overflow-hidden border border-brass/40 bg-charcoal-deep">
                <img
                  src="/images/peaky-character-1.jpg"
                  alt="Small Heath Field Inspector"
                  className="h-full w-full object-cover filter contrast-125 sepia-[0.2]"
                />
              </div>
              <div className="space-y-0.5">
                <span className="font-mono text-[8px] uppercase tracking-widest text-brass">
                  SMALL HEATH IRONWORKS · DIV. 1919
                </span>
                <p className="font-condensed text-xs font-bold uppercase text-ivory">
                  ENGINEERING RIGOR & ZERO DEFECT TOLERANCE
                </p>
                <p className="font-mono text-[8px] text-sage">
                  Every service contract verified under full simulated load.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Capabilities & Tool Stack (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-l-2 border-oxblood pl-4">
              <p className="font-mono text-xs text-brass uppercase tracking-widest">
                ARCHITECTURAL ETHOS
              </p>
              <p className="mt-1 font-serif italic text-base sm:text-lg text-ivory">
                {current.leadQuote}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {current.capabilities.map((cap) => (
                <div
                  key={cap.name}
                  className="border border-brass/30 bg-charcoal p-5 ledger-card flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-brass" />
                      <h4 className="font-condensed text-base font-bold uppercase tracking-wider text-ivory">
                        {cap.name}
                      </h4>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-sage">
                      {cap.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-brass/15">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-brass mb-1.5">
                      INSTRUMENTS & STACK
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cap.tools.map((tool) => (
                        <span
                          key={tool}
                          className="border border-brass/25 bg-charcoal-deep px-2 py-0.5 font-mono text-[10px] text-ivory/80"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Industrial Stamp Notice */}
            <div className="border border-brass/25 bg-forest/20 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs text-sage">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-brass shrink-0" />
                <span>
                  All capabilities supported by production deliverables or rigorous open prototypes.
                </span>
              </div>
              <a
                href="#ledger"
                className="text-brass uppercase font-bold underline hover:text-ivory transition-colors whitespace-nowrap"
              >
                Inspect Matching Case Files →
              </a>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
