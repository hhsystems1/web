export interface AssistantOffer {
  slug: 'hermes' | 'openclaw' | 'agent-zero';
  name: string;
  tagline: string;
  summary: string;
  bestFor: string[];
  setupFee: string;
  monthlyUpkeep: string;
  setupIncludes: string[];
  monthlyIncludes: string[];
  useCases: string[];
  deliverables: string[];
}

export const assistants: AssistantOffer[] = [
  {
    slug: 'hermes',
    name: 'Hermes Agent',
    tagline: 'Operations copilot for follow-through and documentation discipline',
    summary:
      'Hermes is built for owners who need clean execution: lead tracking, follow-up cadence, SOP-driven tasks, and reliable reporting without losing context.',
    bestFor: [
      'Owner-operators juggling sales + delivery',
      'Teams that need one source of truth for tasks and handoffs',
      'Businesses that want structured follow-up on inbound and outbound leads',
    ],
    setupFee: '$1,500 one-time setup',
    monthlyUpkeep: '$297/month upkeep',
    setupIncludes: [
      'VPS provisioning + hardened runtime setup',
      'Hermes installation and workspace bootstrapping',
      'Pre-installed core skills pack (lead handling, outreach workflow, ops checklists)',
      'Business-specific prompt and process calibration',
      'Initial dashboard + pipeline sheet wiring',
    ],
    monthlyIncludes: [
      'Runtime monitoring and maintenance',
      'Skill updates and prompt tuning',
      'Weekly performance checkpoint + recommendations',
      'Backup verification and rollback safety checks',
    ],
    useCases: [
      'Track every outreach attempt and enforce next-step dates',
      'Generate call summaries and handoff notes after each sales conversation',
      'Create repeatable owner-ready reports without manual stitching',
    ],
    deliverables: [
      'Production VPS assistant instance',
      'Admin access handoff docs',
      'Operational runbook + escalation path',
    ],
  },
  {
    slug: 'openclaw',
    name: 'OpenClaw Agent',
    tagline: 'Automation and integration specialist for repeatable workflows',
    summary:
      'OpenClaw is best when your business needs repeatable automations, integrations, and process execution between tools.',
    bestFor: [
      'Service businesses with repetitive lead intake/admin steps',
      'Companies that need integrated workflow automation',
      'Teams that want controlled, auditable automations',
    ],
    setupFee: '$1,800 one-time setup',
    monthlyUpkeep: '$347/month upkeep',
    setupIncludes: [
      'VPS deployment and OpenClaw runtime setup',
      'Tool connection mapping and credentials hardening',
      'Pre-installed automation skill pack',
      '2-3 core workflow automations configured end-to-end',
      'Fail-safe controls and approval gates',
    ],
    monthlyIncludes: [
      'Workflow monitoring and break/fix support',
      'Automation tuning for higher conversion and less manual work',
      'Integration updates as APIs/tools change',
      'Monthly automation ROI review',
    ],
    useCases: [
      'Automatically capture leads into your tracking system with owner alerts',
      'Trigger follow-up sequences after missed calls or form submissions',
      'Keep scheduling, communication, and task tools synchronized',
    ],
    deliverables: [
      'Live automation assistant on VPS',
      'Workflow map with owners and triggers',
      'Change log and maintenance cadence',
    ],
  },
  {
    slug: 'agent-zero',
    name: 'Agent Zero',
    tagline: 'Conversational personal assistant for quick execution and daily support',
    summary:
      'Agent Zero is the front-line personal assistant experience: rapid help for daily tasks, messaging support, and lightweight business ops guidance.',
    bestFor: [
      'Founders who need rapid response support during the day',
      'Teams needing quick drafting and message support',
      'Businesses wanting a practical assistant before deep automation',
    ],
    setupFee: '$1,200 one-time setup',
    monthlyUpkeep: '$247/month upkeep',
    setupIncludes: [
      'VPS setup and Agent Zero runtime deployment',
      'Personal assistant command profile and guardrails',
      'Pre-installed quick-action skills (messaging, scheduling prep, summaries)',
      'Channel setup for owner access',
      'Initial operating playbook',
    ],
    monthlyIncludes: [
      'Uptime checks and runtime updates',
      'Prompt/skill optimization based on real usage',
      'Priority support for assistant behavior tuning',
      'Monthly usage insights summary',
    ],
    useCases: [
      'Draft owner-ready outreach messages in minutes',
      'Turn voice/text updates into action lists and next steps',
      'Support day-to-day follow-up so opportunities do not stall',
    ],
    deliverables: [
      'Personal assistant instance running on VPS',
      'User quick-start guide',
      'Escalation and maintenance contacts',
    ],
  },
];

export const smbUseCaseResearch = {
  sourceSummary:
    'Derived from the current Berthoud + Loveland high-confidence no-website lead list: 47 businesses (34 Loveland, 13 Berthoud). Category mix is strongest in food, shops, landscape, and roofing.',
  categoryCounts: [
    { category: 'Food', count: 21, priority: 'High' },
    { category: 'Shops/Retail', count: 14, priority: 'High' },
    { category: 'Landscape/Outdoor Services', count: 11, priority: 'High' },
    { category: 'Roofing', count: 3, priority: 'Medium' },
  ],
  bestUseCasesByCategory: [
    {
      category: 'Food',
      useCases: [
        'Automated response for menu/hour/location questions',
        'Simple online ordering or inquiry routing',
        'Review-request follow-ups after customer visits',
      ],
    },
    {
      category: 'Shops/Retail',
      useCases: [
        'Inventory/availability inquiry capture',
        'Store-hours and service FAQ assistant',
        'Promotion and event reminder workflows',
      ],
    },
    {
      category: 'Landscape/Outdoor Services',
      useCases: [
        'Quote request intake with service-area qualification',
        'Automated estimate scheduling and reminders',
        'Seasonal campaign follow-up sequences',
      ],
    },
    {
      category: 'Roofing',
      useCases: [
        'Storm-season lead intake and urgency triage',
        'Inspection booking and follow-up automation',
        'Insurance-document checklist guidance',
      ],
    },
  ],
};

export function getAssistantBySlug(slug: string): AssistantOffer | undefined {
  return assistants.find((assistant) => assistant.slug === slug);
}
