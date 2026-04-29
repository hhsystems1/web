export interface AgentSkill {
  slug: string;
  name: string;
  category: 'Lead Handling' | 'Operations' | 'Sales Support' | 'Content' | 'Systems';
  summary: string;
  bestFor: string[];
  includedIn: string[];
}

export interface SkillPack {
  name: string;
  price: string;
  summary: string;
  skills: string[];
  bestFor: string;
}

export const agentSkills: AgentSkill[] = [
  {
    slug: 'lead-intake-router',
    name: 'Lead Intake Router',
    category: 'Lead Handling',
    summary: 'Turns new inquiries into structured lead records, priority tags, and owner-ready next steps.',
    bestFor: ['missed calls', 'website forms', 'DM inquiries', 'quote requests'],
    includedIn: ['Starter Skills Pack', 'Sales Follow-Up Pack'],
  },
  {
    slug: 'follow-up-cadence',
    name: 'Follow-Up Cadence Builder',
    category: 'Sales Support',
    summary: 'Drafts and tracks a clear follow-up sequence so good leads do not disappear after the first touch.',
    bestFor: ['local service businesses', 'solar reviews', 'website consultations'],
    includedIn: ['Sales Follow-Up Pack', 'Operator Pack'],
  },
  {
    slug: 'meeting-briefs',
    name: 'Meeting Briefs + Recaps',
    category: 'Operations',
    summary: 'Creates pre-call briefs, decision summaries, action items, and clean handoffs after meetings.',
    bestFor: ['owner calls', 'sales meetings', 'project reviews'],
    includedIn: ['Starter Skills Pack', 'Operator Pack'],
  },
  {
    slug: 'sop-task-runner',
    name: 'SOP Task Runner',
    category: 'Operations',
    summary: 'Helps the agent follow documented steps, produce artifacts, and flag approval points before risky actions.',
    bestFor: ['repeatable admin work', 'checklists', 'handoffs', 'quality control'],
    includedIn: ['Operator Pack'],
  },
  {
    slug: 'content-draft-engine',
    name: 'Content Draft Engine',
    category: 'Content',
    summary: 'Drafts educational posts, captions, landing page sections, and campaign ideas from approved business context.',
    bestFor: ['local marketing', 'founder posts', 'service pages'],
    includedIn: ['Content Pack', 'Operator Pack'],
  },
  {
    slug: 'secure-runtime-checks',
    name: 'Secure Runtime Checks',
    category: 'Systems',
    summary: 'Adds recurring checks for VPS uptime, backups, updates, access notes, and escalation paths.',
    bestFor: ['Hermes', 'OpenClaw', 'Agent Zero', 'customer VPS deployments'],
    includedIn: ['Starter Skills Pack', 'Operator Pack'],
  },
];

export const skillPacks: SkillPack[] = [
  {
    name: 'Starter Skills Pack',
    price: 'Included with assistant setup',
    summary: 'Core skills every VPS assistant needs before it touches business work.',
    skills: ['Lead Intake Router', 'Meeting Briefs + Recaps', 'Secure Runtime Checks'],
    bestFor: 'First-time AI assistant deployments that need safe, useful defaults.',
  },
  {
    name: 'Sales Follow-Up Pack',
    price: 'Add-on pricing scoped by workflow',
    summary: 'Skills for lead response, follow-up drafting, reminders, and sales handoff clarity.',
    skills: ['Lead Intake Router', 'Follow-Up Cadence Builder', 'Meeting Briefs + Recaps'],
    bestFor: 'Service businesses that lose opportunities when follow-up gets busy.',
  },
  {
    name: 'Operator Pack',
    price: 'Add-on pricing scoped by workflow',
    summary: 'Skills for SOP-driven execution, task tracking, reports, and owner-ready decisions.',
    skills: ['SOP Task Runner', 'Follow-Up Cadence Builder', 'Secure Runtime Checks'],
    bestFor: 'Owners who want an agent to keep work moving without hiding decisions.',
  },
  {
    name: 'Content Pack',
    price: 'Add-on pricing scoped by workflow',
    summary: 'Skills for drafting marketing content from approved company context and offer language.',
    skills: ['Content Draft Engine', 'Meeting Briefs + Recaps'],
    bestFor: 'Teams that need consistent posts, service copy, and campaign drafts.',
  },
];
