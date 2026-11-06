export type Project = {
  slug: string;
  name: string;
  caseNumber: string;
  category: string;
  tagline: string;
  overview: string;
  contribution: string[];
  stack: string[];
  featured: boolean;
  status: string;
  stamp: string;
  challenge: string;
  approach: string[];
  outcomes: string[];
  disclaimer: string;
  architectureNodes?: string[];
};

export const projects: Project[] = [
  {
    slug: 'alopay',
    name: 'ALOpay',
    caseNumber: '001',
    category: 'Fintech · Wallet Infrastructure · Cloud',
    tagline: 'Engineering the ledger foundations of a wallet-first financial product.',
    overview: 'A fintech product concept built around customer, agent, and merchant experiences, with an immutable database-backed wallet as the initial source of truth.',
    contribution: [
      'Backend engineering with Python and FastAPI',
      'Wallet and payment workflow design with balance integrity locks',
      'KYC status state machines and asynchronous notification triggers',
      'Cloud infrastructure, containerization, and deployment planning on AWS'
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Redis', 'AWS', 'Kubernetes', 'Terraform'],
    featured: true,
    status: 'Professional initiative · Details selectively generalized',
    stamp: 'CLASSIFIED',
    challenge: 'Financial workflows demand deterministic transaction states, zero balance drift, and traceable operations. A wallet-first model requires careful handling of concurrent balance modifications and idempotent processing.',
    approach: [
      'Model financial operations around explicit double-entry transaction records and auditable state transitions.',
      'Enforce strict backend validation and atomic row locking rather than trusting client state.',
      'Plan asynchronous side effects around durable events and operational observability in Redis queues.',
      'Treat infrastructure, secrets rotation, and environment separation as paramount reliability requirements.'
    ],
    outcomes: [
      'Engineered resilient backend transaction state flows and payment lifecycle services.',
      'Contributed architectural decisions for cloud-hosted containerized deployment.'
    ],
    disclaimer: 'This case study is intentionally high-level. It does not disclose confidential implementation details, customer data, or proprietary metrics.',
    architectureNodes: ['Client / Merchant UI', 'FastAPI Gateway', 'Idempotency Layer', 'Atomic Wallet Service', 'PostgreSQL Ledger', 'Redis Task Queue']
  },
  {
    slug: 'datahire',
    name: 'DataHire',
    caseNumber: '002',
    category: 'AI · Resume Intelligence · NLP · SaaS',
    tagline: 'Transforming unstructured resumes into verified, actionable hiring intelligence.',
    overview: 'An AI-assisted hiring platform concept incorporating resume ingestion, OCR parsing, candidate-job matching, semantic scoring, and asynchronous document optimization.',
    contribution: [
      'Resume parsing service architecture and implementation',
      'Candidate-job matching logic, embedding generation, and skill taxonomy design',
      'Backend APIs and PostgreSQL data modeling with pgvector similarity indexing',
      'Background processing workers for compute-heavy document processing and billing flows'
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'PyMuPDF', 'Redis', 'Celery', 'LLMs'],
    featured: true,
    status: 'Professional initiative · Details selectively generalized',
    stamp: 'CONFIDENTIAL',
    challenge: 'Resume data is notoriously inconsistent, noisy, and unstructured. High-fidelity candidate matching requires more than naive keyword search: robust extraction, normalization against standardized skill taxonomies, and explainable scoring are essential.',
    approach: [
      'Extract structured information and entity blocks from uploaded documents using multi-pass OCR/NLP.',
      'Normalize candidate skills, titles, and aliases against a unified canonical taxonomy.',
      'Combine dense vector embeddings with structured signals (experience years, role seniority) in a transparent composite score.',
      'Offload token-heavy LLM reasoning and document rewrites to asynchronous Celery workers backed by Redis.'
    ],
    outcomes: [
      'Developed and iterated on high-throughput resume parsing and candidate matching pipelines.',
      'Established durable background worker architecture handling batch processing without blocking HTTP threads.'
    ],
    disclaimer: 'Project details are summarized at an architectural level. Any numerical performance or business impact figures are resume-reported disclosures.',
    architectureNodes: ['Document Ingestion', 'PyMuPDF / OCR Parser', 'Taxonomy Normalizer', 'pgvector Index', 'Celery Async Workers', 'Scoring Engine']
  },
  {
    slug: 'simba-analytics',
    name: 'Simba Analytics',
    caseNumber: '003',
    category: 'Analytics · Backend Services · Data Modeling',
    tagline: 'Translating noisy operational sales data into reliable business intelligence.',
    overview: 'A business analytics platform centered on sales performance reporting, category normalization, market-share calculations, and responsive reporting APIs.',
    contribution: [
      'Backend service development in TypeScript and Node.js',
      'Market-share and dashboard business logic implementation',
      'Data normalization rules and aggregation pipelines',
      'Debugging edge cases in sales reporting and inventory metrics'
    ],
    stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'REST APIs', 'Data modeling'],
    featured: true,
    status: 'Professional initiative · Details selectively generalized',
    stamp: 'ARCHIVE RECORD',
    challenge: 'Commercial decision-making falls apart when definitions drift. Different client subsidiaries, product hierarchies, and unit conversions produce misleading reports unless normalization rules are strictly centralized.',
    approach: [
      'Centralize category and unit normalization into authoritative backend transformation rules.',
      'Explicitly model quantity and revenue calculations across disparate product tiers.',
      'Decouple raw ingestion retrieval from aggregation pipelines and frontend shape formatting.',
      'Validate analytical aggregations against representative ground-truth audit records.'
    ],
    outcomes: [
      'Delivered performant backend services for market share and dashboard calculations.',
      'Resolved reporting discrepancies across inconsistent operational datasets.'
    ],
    disclaimer: 'The case study intentionally omits proprietary client data, private dashboards, and confidential financial schemas.',
    architectureNodes: ['Operational Ingestion', 'Data Normalization Layer', 'Aggregation Service', 'Analytical Cache', 'Dashboard REST API']
  },
  {
    slug: 'inknechoes',
    name: 'InknEchoes',
    caseNumber: '004',
    category: 'Full-stack · Product Engineering · Publishing',
    tagline: 'An authentic digital atelier for writers to craft, structure, and publish literature.',
    overview: 'A publishing platform designed around authors, poetry, multi-chapter books, draft revision histories, literary profiles, discovery, and search.',
    contribution: [
      'Product architecture and feature lifecycle planning',
      'Backend API architecture and relational data modeling with FastAPI and PostgreSQL',
      'Hierarchical content modeling supporting books, chapters, drafts, and independent poems',
      'Frontend reading and drafting experience design'
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'REST APIs'],
    featured: true,
    status: 'Independent product initiative',
    stamp: 'ORIGINAL WORK',
    challenge: 'Writing platforms struggle to balance friction-free lightweight drafting for poetry with the strict structural integrity required for multi-chapter long-form manuscripts.',
    approach: [
      'Decouple books, chapters, and standalone manuscripts while retaining unified author provenance.',
      'Implement explicit draft-to-published state machines with revision rollback capability.',
      'Structure discovery, tagging, and search around rich author and literary metadata.',
      'Design clean, uncluttered reading typography that respects the written word.'
    ],
    outcomes: [
      'Engineered the end-to-end content schema and publishing workflow from scratch.',
      'Established a full-stack foundation for an independent author-centric platform.'
    ],
    disclaimer: 'This is an independent product initiative. Features are documented based on their actual implementation status.',
    architectureNodes: ['Editor Studio', 'State Machine (Draft/Live)', 'FastAPI Backend', 'PostgreSQL Relational Core', 'Discovery & Search Engine']
  },
  {
    slug: 'shule-direct',
    name: 'Shule Direct',
    caseNumber: '005',
    category: 'EdTech · Applied AI · Enterprise Backend',
    tagline: 'Integrating conversational AI and adaptive assessment into a multi-tenant learning ecosystem.',
    overview: 'An AI-powered multi-tenant educational platform with backend microservices, granular role-based access control, and AWS Bedrock-powered learning assistants.',
    contribution: [
      'Backend services and REST API architecture in Python & FastAPI',
      'Multi-tenant role-based access control (RBAC) ensuring tenant isolation',
      'AWS Bedrock foundation model orchestration for adaptive quiz generation and contextual hints',
      'Integration of conversational tutoring capabilities with existing institutional services'
    ],
    stack: ['Python', 'FastAPI', 'AWS Bedrock', 'LLMs', 'REST APIs', 'PostgreSQL'],
    featured: true,
    status: 'Professional project · Details selectively generalized',
    stamp: 'ENTERPRISE AI',
    challenge: 'Embedding generative AI into established institutional curricula requires strict tenant data isolation, low-latency model inference, and dependable prompt guardrails preventing hallucinated syllabus content.',
    approach: [
      'Design multi-tenant API middleware enforcing institutional boundary isolation at the database layer.',
      'Integrate AWS Bedrock models with structured syllabus context for deterministic question generation.',
      'Implement prompt-engineering guardrails and fallback strategies for tutoring sessions.',
      'Stream model responses through optimized backend paths to keep student interactions responsive.'
    ],
    outcomes: [
      'Deployed enterprise AI capabilities serving active academic user sessions.',
      'Resume reports sub-second response throughput across active sessions (resume-reported disclosure).'
    ],
    disclaimer: 'This case study summarizes work described in the professional resume. Client-specific credentials and proprietary curricula are omitted.',
    architectureNodes: ['Tenant Web App', 'RBAC Middleware', 'FastAPI Orchestrator', 'AWS Bedrock LLMs', 'Curriculum Knowledge Base', 'Student State Store']
  },
];
