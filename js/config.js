// ─────────────────────────────────────────────────────────────────────────────
//  PORTFOLIO CONFIG — only edit this file to update site content
// ─────────────────────────────────────────────────────────────────────────────

const CONFIG = {

  // ── Resume PDF (drop the file in the portfolio folder) ────────────────────
  resumeFile: 'resume.pdf',

  // ── Contact links ─────────────────────────────────────────────────────────
  contact: [
    { icon: '✉',  label: 'Email',    href: 'mailto:Shubhaggarwal.2003@gmail.com',                     external: false },
    { icon: 'in', label: 'LinkedIn', href: 'https://in.linkedin.com/in/shubh-aggarwal-cs-enthusiast', external: true  },
    { icon: 'gh', label: 'GitHub',   href: 'https://github.com/shubh-zs',                              external: true  },
  ],

  // ── About stats ───────────────────────────────────────────────────────────
  stats: [
    { num: '5+',    label: 'Major Projects Shipped'          },
    { num: '4',     label: 'Languages'                       },
    { num: '1000+', label: 'Defects Caught Before Production' },
    { num: '1',     label: 'Org-wide Bot Deployed'           },
  ],

  // ── Tech stack ────────────────────────────────────────────────────────────
  skills: [
    {
      heading: 'Languages',
      tags: ['TypeScript', 'JavaScript', 'Python', 'Java'],
    },
    {
      heading: 'Frameworks',
      tags: ['Playwright', 'Django', 'Streamlit'],
    },
    {
      heading: 'AI / ML',
      tags: ['RAG Systems', 'ChromaDB', 'AWS Bedrock', 'text-embedding-ada-002'],
    },
    {
      heading: 'Testing & Security',
      tags: ['Sanity & Regression', 'SQL Injection', 'XSS Testing', 'Edge Case Validation'],
    },
    {
      heading: 'Data & Databases',
      tags: ['SQL', 'MongoDB', 'API Pipeline Validation', 'Data Integrity'],
    },
    {
      heading: 'DevOps & Infra',
      tags: ['Kubernetes', 'Webhook Architecture', 'HTTP APIs', 'Async Workflows'],
    },
  ],

  // ── Projects ──────────────────────────────────────────────────────────────
  projects: [
    {
      tag:      'AI Systems',
      title:    'RAG Data Retrieval System',
      featured: true,
      desc:     `Built a Retrieval-Augmented Generation system over unstructured CSV and Excel enterprise
                 datasets. Engineered custom parsing logic for inconsistent schemas, implemented
                 embeddings via <em>text-embedding-ada-002</em>, and stored vectors in ChromaDB for
                 intelligent querying at scale.`,
      tech: ['Python', 'ChromaDB', 'AWS Bedrock', 'RAG', 'Embeddings'],
    },
    {
      tag:      'Org Impact',
      title:    'SPOC Bot — Org-wide Deployment',
      featured: true,
      desc:     `Developed a Single Point of Contact bot deployed across the entire Innovaccer organization.
                 Aggregates data from multiple structured and user-generated sources, significantly
                 reducing manual effort in identifying correct contacts org-wide.`,
      tech: ['Python', 'VEXT API', 'Webhooks', 'HTTP APIs'],
    },
    {
      tag:      'Automation Architecture',
      title:    'Playwright Framework Migration',
      featured: false,
      desc:     `Led complete migration from a legacy Java-based framework to Playwright + TypeScript.
                 Designed reusable, modular automation architecture covering Admin modules: User, Role,
                 DAP, Auth Policy, Login Config, and Groups.`,
      tech: ['TypeScript', 'Playwright', 'Java'],
    },
    {
      tag:      'Backend Engineering',
      title:    'Django Backend Migration',
      featured: false,
      desc:     `Migrated an AI conversation system from a Streamlit prototype to a production-ready
                 Django backend — improving scalability, maintainability, and creating a proper API
                 surface for downstream consumers.`,
      tech: ['Django', 'Python', 'Streamlit'],
    },
    {
      tag:      'Integration',
      title:    'Chatbot Integration',
      featured: false,
      desc:     `Integrated a production chatbot via webhook-based architecture using HTTP APIs and
                 async workflows with long polling. Managed authentication via API keys and tokens
                 across multi-service pipelines.`,
      tech: ['VEXT API', 'HTTP APIs', 'Async / Long Poll'],
    },
    {
      tag:      'Security Testing',
      title:    'Security Validation Suite',
      featured: false,
      desc:     `Built a specialized security-focused test suite covering SQL injection, XSS, and
                 command injection scenarios. Identified complex system inconsistencies and validated
                 edge cases across enterprise-grade modules.`,
      tech: ['Security Testing', 'SQL Injection', 'XSS', 'Command Injection'],
    },
  ],

};
