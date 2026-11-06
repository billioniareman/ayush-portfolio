---
title: "Why Good Architecture Begins With Better Questions"
slug: "architecture-begins-with-better-questions"
headline: "WHY GOOD ARCHITECTURE BEGINS WITH BETTER QUESTIONS"
subhead: "How identifying unstated constraints prevents catastrophic rewrites down the line."
date: "1919-11-01"
displayDate: "FIELD NOTE 03 · NOV 1919"
category: "System Design · Strategy"
readTime: "4 MIN READ"
status: "EDITORIAL DISPATCH"
featured: false
excerpt: "Junior engineers ask how to build a feature. Senior engineers ask why the feature exists, what invariants must never be violated, and what happens when the network fails."
tags: ["System Design", "Engineering Leadership", "Strategy"]
author: "Ayush Patidar"
---

The greatest mistake in software architecture is solving the wrong problem with high technical sophistication. Before designing database schemas, choosing queue brokers, or provisioning Kubernetes clusters, you must interrogate the system's unstated constraints.

### The Five Invariant Inquiries

1. **What is the failure tolerance?** If this service experiences a 500 error, does an external customer lose money, does an internal team get an email alert, or does an automated retry quietly resolve it?
2. **What is the read-to-write ratio?** A system with 99.9% read traffic requires caching, read replicas, and denormalization. A system with 90% write traffic requires batch ingestion, write-ahead logs, and buffered queues.
3. **What is the cost of stale data?** Does the user need sub-second consistency (like a ledger balance), or is eventual consistency (like analytics views) acceptable?
4. **Who owns the schema contract?** When backend services evolve, how are mobile and web clients protected against breaking contract changes?
5. **How will this system be debugged under crisis?** If an anomaly occurs at midnight, does the team have structured correlation IDs tracing the request from gateway to worker?

Architectural discipline is the art of eliminating ambiguity before committing bytes to disk.

