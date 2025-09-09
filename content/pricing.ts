export type Plan = {
  slug: 'starter' | 'standard' | 'professional' | 'custom'
  name: string
  monthly: number | 'custom'
  setupFeeNote?: string
  blurb: string
  features: string[]
  videoPath?: string
  formEmbed?: { type: 'iframe' | 'script'; src?: string; script?: string }
}

export const plans: Plan[] = [
  {
    slug: 'starter',
    name: 'Starter',
    monthly: 97,
    setupFeeNote: 'One-time setup fee applies',
    blurb: '3 page site with a contact form to establish your online presence quickly.',
    features: [
      '3-page website',
      'Contact form integration',
      'Fast hosting included',
      'Basic SEO optimization',
      'Analytics dashboard',
      'Mobile responsive design',
      'SSL certificate',
      '30-day support',
    ],
    videoPath: '/packages/starter.mp4',
  },
  {
    slug: 'standard',
    name: 'Standard',
    monthly: 197,
    blurb: '5 page site with a calendar and appointment booking to keep your pipeline organized.',
    features: [
      '5-page website',
      'Calendar integration',
      'Appointment booking system',
      'Contact form with automation',
      'Improved SEO optimization',
      'Analytics dashboard',
      'Mobile responsive design',
      'SSL certificate',
      'Email notifications',
      '60-day support',
    ],
    videoPath: '/packages/standard.mp4',
  },
  {
    slug: 'professional',
    name: 'Professional',
    monthly: 297,
    blurb: '5 page site with calendar, a chatbot, and automations to take operations to the next level.',
    features: [
      '5-page website',
      'Calendar integration',
      'AI chatbot implementation',
      'Workflow automations',
      'Advanced SEO optimization',
      'Custom analytics dashboard',
      'Mobile responsive design',
      'SSL certificate',
      'CRM integration',
      'Email marketing setup',
      '90-day support',
    ],
    videoPath: '/packages/professional.mp4',
  },
  {
    slug: 'custom',
    name: 'Custom',
    monthly: 'custom',
    blurb: 'Fully customized builds with AI and automations. Tell us what you are aiming for, we will design the right system.',
    features: [
      'Unlimited pages',
      'Custom functionality',
      'Advanced AI integration',
      'Complex automations',
      'Enterprise-grade hosting',
      'Custom analytics',
      'API development',
      'Third-party integrations',
      'Dedicated project manager',
      'Ongoing support & maintenance',
      'Custom training sessions',
    ],
    videoPath: '/packages/custom.mp4',
  },
]
