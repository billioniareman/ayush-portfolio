export type Project = {
  slug: string; name: string; category: string; tagline: string; overview: string;
  contribution: string[]; stack: string[]; featured: boolean; status: string;
  challenge: string; approach: string[]; outcomes: string[]; disclaimer: string;
};

export const projects: Project[] = [
  {
    slug: 'alopay', name: 'ALOpay', category: 'Fintech · Backend · Cloud',
    tagline: 'Engineering the foundations of a wallet-first financial product.',
    overview: 'A fintech product concept built around customer, agent, and merchant experiences, with a database-backed wallet as the initial source of truth.',
    contribution: ['Backend engineering with Python and FastAPI', 'Wallet and payment workflow design', 'KYC status workflows and notification fixes', 'Cloud infrastructure and deployment planning'],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Redis', 'AWS', 'Kubernetes', 'Terraform'],
    featured: true, status: 'Professional project · Details selectively generalized',
    challenge: 'Financial workflows need clear transaction states, reliable persistence, and traceable operations. A wallet-first model also requires careful handling of concurrent balance changes.',
    approach: ['Model financial operations around explicit transaction records and auditable state transitions.', 'Keep validation and business rules in backend services rather than relying on client behavior.', 'Plan asynchronous side effects around durable events and operational observability.', 'Treat infrastructure, secrets, and environment separation as part of product reliability.'],
    outcomes: ['Contributed to backend workflows and operational fixes.', 'Worked through architecture and infrastructure decisions for a cloud-hosted product.'],
    disclaimer: 'This case study is intentionally high-level. It does not disclose confidential implementation details, customer data, or proprietary metrics.'
  },
  {
    slug: 'datahire', name: 'DataHire', category: 'AI · NLP · SaaS',
    tagline: 'Turning unstructured resumes into useful hiring intelligence.',
    overview: 'An AI-assisted hiring platform concept involving resume ingestion, parsing, candidate-job matching, resume optimization, and asynchronous processing.',
    contribution: ['Resume parsing service exploration and implementation', 'Candidate-job matching logic and taxonomy design', 'Backend APIs and PostgreSQL data modeling', 'Background processing and billing-related workflows'],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'PyMuPDF', 'Redis', 'Celery', 'LLMs'],
    featured: true, status: 'Professional project · Details selectively generalized',
    challenge: 'Resume data is inconsistent and unstructured. Matching candidates to jobs requires more than keyword overlap: data extraction, normalization, scoring, and explainability all matter.',
    approach: ['Extract structured information from uploaded documents.', 'Normalize skills and aliases against a consistent taxonomy.', 'Combine skill, experience, education, and certification signals in a transparent scoring model.', 'Use asynchronous workers for long-running document and optimization tasks.'],
    outcomes: ['Developed and iterated on resume-processing and optimization workflows.', 'Worked on matching, background jobs, large-file handling, notifications, and billing features.'],
    disclaimer: 'Project details are summarized at a high level. Any numerical performance or business impact should be added only after verification.'
  },
  {
    slug: 'simba-analytics', name: 'Simba Analytics', category: 'Analytics · Backend · Data',
    tagline: 'Making operational sales data useful for business decisions.',
    overview: 'A business analytics platform focused on sales reporting, market-share calculations, category normalization, and dashboard services.',
    contribution: ['Backend service development in TypeScript', 'Market-share and dashboard business logic', 'Data normalization and aggregation rules', 'Debugging and improving reporting behavior'],
    stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'REST APIs', 'Data modeling'],
    featured: true, status: 'Professional project · Details selectively generalized',
    challenge: 'Business reporting depends on consistent definitions. Different product categories and sales units can produce misleading summaries when normalization rules are inconsistent.',
    approach: ['Centralize category normalization so downstream services share consistent values.', 'Make quantity calculations explicit for different product types.', 'Separate data retrieval, business rules, and response shaping.', 'Validate summary calculations against representative source records.'],
    outcomes: ['Contributed to market-share, stock, and dashboard service logic.', 'Worked through data-quality and business-rule edge cases.'],
    disclaimer: 'The case study omits client-confidential data, internal dashboards, and proprietary business definitions.'
  },
  {
    slug: 'inknechoes', name: 'InknEchoes', category: 'Full-stack · Product Engineering',
    tagline: 'A home for writers to create, organize, and publish their work.',
    overview: 'A writing and publishing platform designed around authors, poetry, books, chapters, drafts, profiles, discovery, and search.',
    contribution: ['Product and feature planning', 'Backend architecture and API development', 'Content and multi-chapter book data modeling', 'Frontend experience planning'],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'REST APIs'],
    featured: true, status: 'Independent product project',
    challenge: 'Writing platforms need to support both lightweight posts and long-form works without making the authoring experience cumbersome.',
    approach: ['Separate books, chapters, and individual pieces while preserving author ownership.', 'Support draft and published states as explicit content lifecycle states.', 'Design discovery and search around author and content metadata.', 'Keep the writing workflow simple while leaving room for future collaboration features.'],
    outcomes: ['Defined the core content model and publishing workflows.', 'Established a full-stack foundation for a writer-focused product.'],
    disclaimer: 'This is an independent product initiative. Features should be represented as shipped only when they are implemented and available.'
  },

  {
    slug: 'shule-direct', name: 'Shule Direct', category: 'EdTech · Applied AI · Backend',
    tagline: 'Bringing AI-powered learning workflows into a multi-tenant education platform.',
    overview: 'An AI-powered multi-tenant educational platform with backend services, role-based access control, and AWS Bedrock-powered learning features.',
    contribution: ['Backend services and REST API architecture', 'Role-based access control for tenant and user workflows', 'AWS Bedrock model integration', 'AI-powered quiz generation, explanations, and conversational tutoring'],
    stack: ['Python', 'FastAPI', 'AWS Bedrock', 'LLMs', 'REST APIs'],
    featured: true, status: 'Professional project · Details selectively generalized',
    challenge: 'Educational AI features need to fit into existing user and tenant workflows while keeping access controls reliable and model interactions responsive.',
    approach: ['Develop backend APIs and granular role-based access controls.', 'Integrate AWS Bedrock models into quiz generation and contextual explanation workflows.', 'Connect conversational tutoring capabilities with existing platform services.', 'Optimize model invocation and backend request paths for responsive interactions.'],
    outcomes: ['Contributed to production deployment of AI capabilities.', 'The resume describes sub-second response throughput across active user sessions; this is a resume-reported result, not an independently audited benchmark.'],
    disclaimer: 'This case study summarizes work described in the supplied resume. Client-specific details and implementation internals are intentionally omitted.'
  },
];
