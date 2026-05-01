export interface AgentSkill {
  slug: string;
  name: string;
  category: 'Voice + Orders' | 'Operations' | 'Content' | 'Lead Handling' | 'Systems';
  summary: string;
  bestFor: string[];
  includedIn: string[];
  price: string;
  checkoutLabel: string;
}

export interface SkillPack {
  slug: string;
  name: string;
  price: string;
  summary: string;
  skills: string[];
  bestFor: string;
  checkoutLabel: string;
}

export const agentSkills: AgentSkill[] = [
  {
    slug: 'voice-order-intake',
    name: 'Voice Order + Call Intake Skill',
    category: 'Voice + Orders',
    summary: 'Helps a VPS assistant capture calls, order details, booking requests, customer questions, and owner-ready summaries.',
    bestFor: ['restaurants and food businesses', 'shops taking availability calls', 'contractors booking estimates', 'busy front desks'],
    includedIn: ['Voice Ordering Pack'],
    price: '$497 setup add-on',
    checkoutLabel: 'Buy voice intake skill',
  },
  {
    slug: 'social-media-post-assistant',
    name: 'Social Media Post Assistant Skill',
    category: 'Content',
    summary: 'Drafts posts, captions, promos, event reminders, and weekly content ideas from approved business context.',
    bestFor: ['local Facebook posts', 'Google Business updates', 'seasonal promos', 'owner voice-note drafts'],
    includedIn: ['Content Pack'],
    price: '$297 setup add-on',
    checkoutLabel: 'Buy content skill',
  },
  {
    slug: 'employee-task-assistant',
    name: 'Employee Task + Daily Update Skill',
    category: 'Operations',
    summary: 'Turns employee updates into task lists, reminders, owner summaries, and follow-through checks so work stays visible.',
    bestFor: ['crew updates', 'admin task tracking', 'daily owner reports', 'employee reminders'],
    includedIn: ['Operator Pack'],
    price: '$397 setup add-on',
    checkoutLabel: 'Buy task skill',
  },
  {
    slug: 'lead-intake-router',
    name: 'Lead Intake Router',
    category: 'Lead Handling',
    summary: 'Turns new inquiries into structured lead records, priority tags, and owner-ready next steps.',
    bestFor: ['missed calls', 'website forms', 'DM inquiries', 'quote requests'],
    includedIn: ['Starter Skills Pack', 'Sales Follow-Up Pack'],
    price: '$297 setup add-on',
    checkoutLabel: 'Buy lead skill',
  },
  {
    slug: 'follow-up-cadence',
    name: 'Follow-Up Cadence Builder',
    category: 'Lead Handling',
    summary: 'Drafts and tracks a clear follow-up sequence so good leads do not disappear after the first touch.',
    bestFor: ['local service businesses', 'solar reviews', 'website consultations'],
    includedIn: ['Sales Follow-Up Pack', 'Operator Pack'],
    price: '$297 setup add-on',
    checkoutLabel: 'Buy follow-up skill',
  },
  {
    slug: 'secure-runtime-checks',
    name: 'Secure Runtime Checks',
    category: 'Systems',
    summary: 'Adds recurring checks for VPS uptime, backups, updates, access notes, and escalation paths.',
    bestFor: ['customer VPS deployments', 'assistant upkeep', 'backup checks', 'maintenance reports'],
    includedIn: ['Starter Skills Pack', 'Operator Pack'],
    price: '$197 setup add-on',
    checkoutLabel: 'Buy runtime skill',
  },
];

export const skillPacks: SkillPack[] = [
  {
    slug: 'starter-skills-pack',
    name: 'Starter Skills Pack',
    price: 'Included with assistant setup',
    summary: 'Core skills every VPS assistant needs before it touches business work.',
    skills: ['Lead Intake Router', 'Employee Task + Daily Update Skill', 'Secure Runtime Checks'],
    bestFor: 'First-time AI assistant deployments that need safe, useful defaults.',
    checkoutLabel: 'Add starter pack',
  },
  {
    slug: 'voice-ordering-pack',
    name: 'Voice Ordering Pack',
    price: '$797 setup add-on',
    summary: 'Call, order, booking, and customer-question workflows for busy local businesses.',
    skills: ['Voice Order + Call Intake Skill', 'Lead Intake Router', 'Follow-Up Cadence Builder'],
    bestFor: 'Restaurants, shops, and service businesses that need better intake coverage.',
    checkoutLabel: 'Buy voice pack',
  },
  {
    slug: 'operator-pack',
    name: 'Operator Pack',
    price: '$697 setup add-on',
    summary: 'Skills for employee task tracking, reminders, owner reports, and daily follow-through.',
    skills: ['Employee Task + Daily Update Skill', 'Follow-Up Cadence Builder', 'Secure Runtime Checks'],
    bestFor: 'Owners who want an assistant keeping the day organized without hiding decisions.',
    checkoutLabel: 'Buy operator pack',
  },
  {
    slug: 'content-pack',
    name: 'Content Pack',
    price: '$497 setup add-on',
    summary: 'Skills for drafting social posts, promos, updates, and campaign ideas from approved context.',
    skills: ['Social Media Post Assistant Skill', 'Lead Intake Router'],
    bestFor: 'Teams that need consistent posts, service copy, and campaign drafts.',
    checkoutLabel: 'Buy content pack',
  },
];

export const checkoutItems = [
  ...skillPacks.map((pack) => ({
    slug: pack.slug,
    name: pack.name,
    price: pack.price,
    type: 'Skill pack',
    summary: pack.summary,
    checkoutLabel: pack.checkoutLabel,
  })),
  ...agentSkills.map((skill) => ({
    slug: skill.slug,
    name: skill.name,
    price: skill.price,
    type: 'Individual skill',
    summary: skill.summary,
    checkoutLabel: skill.checkoutLabel,
  })),
];

export function getCheckoutItem(slug: string | undefined) {
  return checkoutItems.find((item) => item.slug === slug);
}
