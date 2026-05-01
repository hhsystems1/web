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
    name: 'Daily Operations Assistant',
    tagline: 'A VPS assistant that keeps employee tasks, reminders, and daily follow-through organized',
    summary:
      'Built for local businesses that need someone watching the details: daily task lists, employee handoffs, owner updates, follow-up reminders, and simple operating reports. The customer sees a practical business assistant, while HHS handles the runtime behind the scenes.',
    bestFor: [
      'Owners who need help keeping employees aligned during busy days',
      'Teams that lose tasks in texts, calls, notebooks, or scattered apps',
      'Businesses that want daily summaries without hiring another admin role',
    ],
    setupFee: '$1,500 one-time setup',
    monthlyUpkeep: '$297/month upkeep',
    setupIncludes: [
      'Secure VPS assistant deployment and access setup',
      'Employee task tracking workflow mapped to the business',
      'Daily update, reminder, and handoff templates',
      'Approval rules for sensitive actions and owner-facing reports',
      'Initial dashboard or shared tracking sheet wiring',
    ],
    monthlyIncludes: [
      'Runtime monitoring and maintenance',
      'Skill updates and behavior tuning',
      'Weekly performance checkpoint + recommendations',
      'Backup verification and rollback safety checks',
    ],
    useCases: [
      'Collect end-of-day employee updates and turn them into owner summaries',
      'Track open customer tasks, follow-ups, and next-step dates',
      'Prepare recurring checklists for crews, admins, or managers',
    ],
    deliverables: [
      'Production VPS assistant instance',
      'Daily task + employee communication workflow',
      'Admin access handoff docs and operating runbook',
    ],
  },
  {
    slug: 'openclaw',
    name: 'Voice Ordering Assistant',
    tagline: 'A call-friendly assistant for orders, bookings, requests, and customer intake',
    summary:
      'Positioned for restaurants, shops, contractors, and service businesses that need calls and messages captured cleanly. The assistant helps gather order details, booking requests, customer questions, and owner alerts so fewer opportunities get missed.',
    bestFor: [
      'Food businesses taking order or catering requests',
      'Shops and service businesses answering repeat questions all day',
      'Teams that miss details when calls, forms, and messages pile up',
    ],
    setupFee: '$1,800 one-time setup',
    monthlyUpkeep: '$347/month upkeep',
    setupIncludes: [
      'Secure VPS assistant deployment and voice/order workflow setup',
      'Call, form, and message intake mapping',
      '2-3 core customer request workflows configured end-to-end',
      'Owner alert rules, fail-safe controls, and approval gates',
      'Simple intake scripts for common customer questions',
    ],
    monthlyIncludes: [
      'Assistant workflow monitoring and break/fix support',
      'Skill tuning for better intake accuracy and fewer missed details',
      'Integration updates as tools change',
      'Monthly assistant value review',
    ],
    useCases: [
      'Capture order details and send a clean summary to staff',
      'Qualify appointment or estimate requests before owner follow-up',
      'Answer common hours, menu, availability, pricing, or service-area questions',
    ],
    deliverables: [
      'Live VPS assistant configured for customer intake',
      'Order/request workflow map with escalation rules',
      'Change log and maintenance cadence',
    ],
  },
  {
    slug: 'agent-zero',
    name: 'Social Media Assistant',
    tagline: 'A content assistant that keeps local business posts moving from approved context',
    summary:
      'Built for owners who know they should post more but do not have time to plan every caption, promotion, update, and reminder. The assistant drafts posts from approved company context so marketing stays active without sounding random.',
    bestFor: [
      'Local businesses that need steady Facebook, Instagram, or Google Business updates',
      'Owners who want promos, reminders, and seasonal posts drafted quickly',
      'Teams that need content ideas without handing over brand control',
    ],
    setupFee: '$1,200 one-time setup',
    monthlyUpkeep: '$247/month upkeep',
    setupIncludes: [
      'Secure VPS assistant deployment and owner access setup',
      'Business voice, offer, and approval profile',
      'Pre-installed content drafting skills',
      'Post idea, caption, promo, and reminder templates',
      'Initial content operating playbook',
    ],
    monthlyIncludes: [
      'Uptime checks and runtime updates',
      'Prompt/skill optimization based on real usage',
      'Priority support for assistant behavior tuning',
      'Monthly content ideas and usage insights summary',
    ],
    useCases: [
      'Draft weekly social posts from business updates and seasonal offers',
      'Turn photos, job notes, or owner voice notes into caption options',
      'Prepare promotion reminders for events, specials, or busy seasons',
    ],
    deliverables: [
      'Content assistant instance running on VPS',
      'Business voice guide and quick-start workflow',
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
        'Voice/order assistant for menu, hours, availability, and catering/order requests',
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
        'Agent-assisted estimate scheduling and reminders',
        'Seasonal campaign follow-up sequences',
      ],
    },
    {
      category: 'Roofing',
      useCases: [
        'Storm-season lead intake and urgency triage',
        'Inspection booking and follow-up workflow support',
        'Insurance-document checklist guidance',
      ],
    },
  ],
};

export function getAssistantBySlug(slug: string): AssistantOffer | undefined {
  return assistants.find((assistant) => assistant.slug === slug);
}
