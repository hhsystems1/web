import type { Fusion44xDestination } from '@/lib/fusion44xLinks';

export type Fusion44xLandingSlug =
  | 'chlorine-free-pool'
  | 'financing'
  | 'consultation'
  | 'youtube-vsl';

export interface Fusion44xLandingFaq {
  question: string;
  answer: string;
}

export interface Fusion44xLandingTestimonial {
  quote: string;
  name: string;
  detail: string;
  badge?: string;
}

export interface Fusion44xLandingCampaign {
  slug: Fusion44xLandingSlug;
  seoTitle: string;
  seoDescription: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSubheadline: string;
  primaryCtaLabel: string;
  primaryCtaTarget: Fusion44xDestination;
  secondaryCtaLabel: string;
  secondaryCtaTarget: Fusion44xDestination;
  heroStats: Array<{ value: string; label: string }>;
  trustBar: string[];
  vslEyebrow: string;
  vslTitle: string;
  vslDescription: string;
  vslBullets: string[];
  problemTitle: string;
  problemIntro: string;
  problemItems: string[];
  solutionTitle: string;
  solutionIntro: string;
  solutionItems: string[];
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefits: Array<{ title: string; description: string }>;
  technologyTitle: string;
  technologySubtitle: string;
  technologyCards: Array<{ title: string; description: string; highlight: string }>;
  comparisonTitle: string;
  comparisonSubtitle: string;
  comparisonRows: Array<{ label: string; traditional: string; fusion44x: string }>;
  financingTitle: string;
  financingSubtitle: string;
  financingBadge: string;
  financingBullets: string[];
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  testimonials: Fusion44xLandingTestimonial[];
  faqTitle: string;
  faqSubtitle: string;
  faqs: Fusion44xLandingFaq[];
  finalTitle: string;
  finalSubtitle: string;
  finalPrimaryCtaLabel: string;
  finalPrimaryCtaTarget: Fusion44xDestination;
  finalSecondaryCtaLabel: string;
  finalSecondaryCtaTarget: Fusion44xDestination;
}

const sharedBenefits = [
  {
    title: 'Cleaner-feeling water',
    description: 'Built to help customers experience a smoother, more premium-feeling pool without the routine chlorine-first mindset.',
  },
  {
    title: 'Reduced chemical dependence',
    description: 'Positioned for owners who want to reduce traditional pool chemical reliance where the system is a fit.',
  },
  {
    title: 'Premium ownership experience',
    description: 'A more intentional buying and support flow for customers who want a higher-end water technology product.',
  },
  {
    title: 'Simple next step',
    description: 'The landing pages move visitors toward checkout or a specialist conversation without extra friction.',
  },
  {
    title: 'Ad-ready and mobile-first',
    description: 'Built for paid traffic, fast scans, and a strong conversion path on smaller screens.',
  },
  {
    title: 'Reusable launch system',
    description: 'The same section architecture can power future Fusion44x campaign pages later.',
  },
];

const sharedFaqs = [
  {
    question: 'What is Fusion44x designed to do?',
    answer:
      'Fusion44x is positioned as a premium chlorine-free or chemical-reducing pool sanitation and water technology experience. The pages help visitors see whether it fits their pool and how to continue.',
  },
  {
    question: 'How do I buy or finance it?',
    answer:
      'The landing pages send visitors to the current live Fusion44x checkout flow so payment can happen there until the full site migration is complete.',
  },
  {
    question: 'Can I talk to someone before purchasing?',
    answer:
      'Yes. Each landing page routes qualified visitors to a water specialist consultation path so they can confirm fit before they buy.',
  },
  {
    question: 'Do these pages replace the main site right away?',
    answer:
      'No. They are built inside the existing website repo now so they can later become part of the migrated main site without rework.',
  },
];

const sharedTestimonials = [
  {
    quote:
      'The experience feels much more premium than a standard pool product page. The next step is obvious and easy to follow.',
    name: 'Customer quote placeholder',
    detail: 'Swap in approved owner feedback when available.',
    badge: 'Placeholder',
  },
  {
    quote:
      'The water-system positioning is clear, calm, and much easier to understand than a typical chemical-heavy sales page.',
    name: 'Customer quote placeholder',
    detail: 'Swap in approved owner feedback when available.',
    badge: 'Placeholder',
  },
  {
    quote:
      'The consultation path makes it simple to see whether the system fits the pool before anyone makes a purchase decision.',
    name: 'Customer quote placeholder',
    detail: 'Swap in approved owner feedback when available.',
    badge: 'Placeholder',
  },
];

export const fusion44xLandingCampaigns: Record<Fusion44xLandingSlug, Fusion44xLandingCampaign> = {
  'chlorine-free-pool': {
    slug: 'chlorine-free-pool',
    seoTitle: 'Chlorine-Free Pool Experience',
    seoDescription:
      'Premium Fusion44x landing page for chlorine-free and chemical-reducing pool buyers. Send paid traffic to checkout or a water specialist consultation.',
    heroEyebrow: 'Fusion44x chlorine-free pool experience',
    heroHeadline: 'Stop Swimming in Chemicals. Start Swimming in Pure Hydrogen.',
    heroSubheadline:
      'Fusion44x is positioned for pool owners who want a cleaner-feeling water experience and a more premium path away from traditional chemical dependence.',
    primaryCtaLabel: 'Buy Now / Finance from $75/mo',
    primaryCtaTarget: 'checkout',
    secondaryCtaLabel: 'Speak with a Water Specialist',
    secondaryCtaTarget: 'consultation',
    heroStats: [
      { value: 'Premium', label: 'dark SaaS-style presentation' },
      { value: 'Mobile-first', label: 'built for paid traffic' },
      { value: 'Fast path', label: 'checkout or consultation' },
    ],
    trustBar: ['Chlorine-free positioning', 'Chemical-reducing language', 'Current live site checkout', 'Consultation-ready'],
    vslEyebrow: 'VSL overview',
    vslTitle: 'See the water-technology story before you decide.',
    vslDescription:
      'Use this section for the paid-ad walkthrough. It should explain the product, show the visual system, and move visitors toward the next step without clutter.',
    vslBullets: [
      'What the system is designed to change',
      'How the ownership experience feels different',
      'When to choose checkout versus a consultation',
    ],
    problemTitle: 'Why buyers start looking for something better',
    problemIntro:
      'Many pool owners are simply tired of the cycle of strong smells, chemical management, and inconsistent water feel.',
    problemItems: [
      'Routine chemical dependence becomes part of the experience',
      'The water can feel harsher than customers want',
      'Buyers struggle to compare premium alternatives quickly',
      'Most pool pages do not show the ownership path clearly',
    ],
    solutionTitle: 'What Fusion44x changes',
    solutionIntro:
      'This landing page turns the pitch into a clear conversion path: understand the fit, review the options, and move forward only if the system matches the pool.',
    solutionItems: [
      'A premium water-technology framing instead of commodity language',
      'Cleaner-feeling pool water positioning with simpler buyer education',
      'A straightforward consult-or-buy next step for ad traffic',
      'Reusable sections that can support future campaign variations',
    ],
    benefitsTitle: 'Benefits that matter to premium pool buyers',
    benefitsSubtitle:
      'Keep the language measured, attractive, and conversion-friendly while still supporting the chlorine-free campaign angle.',
    benefits: sharedBenefits,
    technologyTitle: 'How the technology story should feel',
    technologySubtitle:
      'Use this section to explain the water path, the ownership workflow, and the premium experience without overcomplicating the pitch.',
    technologyCards: [
      {
        title: 'Water experience',
        description: 'Frame the product around cleaner-feeling water and a more controlled ownership experience.',
        highlight: 'Customer-facing value',
      },
      {
        title: 'Sanitation story',
        description: 'Keep the copy focused on chlorine-free or chemical-reducing positioning and avoid unsupported absolute claims.',
        highlight: 'Careful messaging',
      },
      {
        title: 'Fit review',
        description: 'Let visitors decide whether their pool size and goals make the system a good candidate.',
        highlight: 'Consultation-ready',
      },
    ],
    comparisonTitle: 'Compare the usual approach with the Fusion44x experience',
    comparisonSubtitle:
      'This keeps the page honest while showing why premium buyers would care about the upgrade.',
    comparisonRows: [
      {
        label: 'Pool water feel',
        traditional: 'Often tied to routine chlorine-first management',
        fusion44x: 'Designed to support a cleaner-feeling, more premium experience',
      },
      {
        label: 'Chemical dependence',
        traditional: 'Frequent ongoing chemical adjustments',
        fusion44x: 'Positioned to reduce traditional chemical dependence where appropriate',
      },
      {
        label: 'Buying journey',
        traditional: 'Unclear next step and scattered product information',
        fusion44x: 'Simple route to checkout or a water specialist',
      },
      {
        label: 'Visual presentation',
        traditional: 'Commodity-style product page',
        fusion44x: 'Cinematic, premium, and ad-ready',
      },
    ],
    financingTitle: 'Make the upgrade feel reachable',
    financingSubtitle:
      'Use this section to reinforce the monthly-payment story and keep the price conversation simple.',
    financingBadge: 'Finance from $75/mo',
    financingBullets: [
      'Designed for premium buyers who want a payment path',
      'Keep the current live checkout/payment flow in place for now',
      'Use specialist guidance when the pool needs a fit check first',
    ],
    testimonialsTitle: 'Owner feedback placeholder',
    testimonialsSubtitle:
      'Replace these cards with approved customer quotes or case studies when they are available.',
    testimonials: sharedTestimonials,
    faqTitle: 'Frequently asked questions',
    faqSubtitle: 'These answer the main objections without overpromising.',
    faqs: sharedFaqs,
    finalTitle: 'Ready to see if Fusion44x fits your pool?',
    finalSubtitle:
      'Move qualified traffic to the current live checkout or let a specialist confirm the right path first.',
    finalPrimaryCtaLabel: 'Buy Now / Finance from $75/mo',
    finalPrimaryCtaTarget: 'checkout',
    finalSecondaryCtaLabel: 'Speak with a Water Specialist',
    finalSecondaryCtaTarget: 'consultation',
  },
  financing: {
    slug: 'financing',
    seoTitle: 'Fusion44x Financing',
    seoDescription:
      'Premium financing landing page for Fusion44x. Present monthly payment options and move visitors into the current live checkout or specialist consultation.',
    heroEyebrow: 'Flexible ownership path',
    heroHeadline: 'Bring Premium Pool Water Home Without the Upfront Hit.',
    heroSubheadline:
      'Show visitors how the Fusion44x experience can be financed so the decision feels easier, calmer, and more premium from the first ad click.',
    primaryCtaLabel: 'See Payment Options',
    primaryCtaTarget: 'checkout',
    secondaryCtaLabel: 'Speak with a Water Specialist',
    secondaryCtaTarget: 'consultation',
    heroStats: [
      { value: 'From $75/mo', label: 'finance-friendly framing' },
      { value: 'Clear', label: 'payment-forward message' },
      { value: 'Ad-ready', label: 'strong conversion path' },
    ],
    trustBar: ['Monthly payment story', 'Premium buyer journey', 'Checkout preserved', 'Responsive layout'],
    vslEyebrow: 'Why financing matters',
    vslTitle: 'Let the payment story remove friction.',
    vslDescription:
      'This page should make the cost conversation feel manageable by pairing monthly language with a clear specialist path.',
    vslBullets: [
      'Show the financing angle early in the ad journey',
      'Keep the checkout handoff obvious and simple',
      'Offer consultation support for custom pool situations',
    ],
    problemTitle: 'What stops buyers from moving forward',
    problemIntro:
      'Even when the technology makes sense, premium pool buyers can hesitate if the purchase feels too abrupt or hard to compare.',
    problemItems: [
      'They do not know how to think about the cost',
      'The payment path is not visible enough',
      'The page does not reassure them that support is available',
      'The offer feels too technical or too abrupt',
    ],
    solutionTitle: 'How the financing page removes friction',
    solutionIntro:
      'This page keeps the premium tone, adds payment clarity, and points the customer to the live checkout or a specialist when they need help.',
    solutionItems: [
      'Lead with monthly payment language',
      'Use a calm, premium presentation instead of pressure',
      'Keep the live checkout link ready for conversion',
      'Route uncertain buyers to a consultation path',
    ],
    benefitsTitle: 'Why the payment angle works',
    benefitsSubtitle:
      'The point is not to overpromise, but to make the upgrade feel understandable and accessible.',
    benefits: sharedBenefits,
    technologyTitle: 'Technical story, framed for buyers',
    technologySubtitle:
      'Show enough product detail to build confidence while still keeping the page focused on conversion.',
    technologyCards: [
      {
        title: 'Monthly framing',
        description: 'Lead with the payment path so the buyer can quickly compare the offer to other premium upgrades.',
        highlight: 'Conversion focus',
      },
      {
        title: 'Fit guidance',
        description: 'Invite buyers to confirm pool compatibility before they commit.',
        highlight: 'Specialist support',
      },
      {
        title: 'Payment handoff',
        description: 'Keep the outbound CTA pointed at the current live site until the migration is complete.',
        highlight: 'Temporary checkout flow',
      },
    ],
    comparisonTitle: 'Compare the payment experience',
    comparisonSubtitle:
      'Show why a premium financing path feels better than a generic sales page.',
    comparisonRows: [
      {
        label: 'Price visibility',
        traditional: 'Hidden until late in the conversation',
        fusion44x: 'Presented early with a clear monthly frame',
      },
      {
        label: 'Buyer confidence',
        traditional: 'Too much guesswork',
        fusion44x: 'A consultation path if they want confirmation',
      },
      {
        label: 'Payment flow',
        traditional: 'Disconnected from the offer',
        fusion44x: 'Connected to the current live checkout experience',
      },
      {
        label: 'Campaign fit',
        traditional: 'Generic pool marketing',
        fusion44x: 'Built for premium paid-ad traffic',
      },
    ],
    financingTitle: 'Monthly options should feel premium, not complicated.',
    financingSubtitle:
      'Use the page to make the upgrade feel accessible while preserving the current live payment flow.',
    financingBadge: 'Financing focus',
    financingBullets: [
      'Use price framing that supports paid-ad conversion',
      'Keep the live checkout flow in place for now',
      'Offer a specialist call for unusual pool layouts or concerns',
    ],
    testimonialsTitle: 'Payment clarity placeholder',
    testimonialsSubtitle:
      'Replace these with approved finance or customer feedback once available.',
    testimonials: sharedTestimonials,
    faqTitle: 'Common financing questions',
    faqSubtitle: 'Answer objections before they leave the page.',
    faqs: sharedFaqs,
    finalTitle: 'Use the payment path that feels right for your pool.',
    finalSubtitle:
      'Visitors can continue to the current live checkout or talk to a specialist first if they want confirmation.',
    finalPrimaryCtaLabel: 'See Payment Options',
    finalPrimaryCtaTarget: 'checkout',
    finalSecondaryCtaLabel: 'Speak with a Water Specialist',
    finalSecondaryCtaTarget: 'consultation',
  },
  consultation: {
    slug: 'consultation',
    seoTitle: 'Fusion44x Consultation',
    seoDescription:
      'Specialist consultation landing page for Fusion44x. Guide visitors to a fit check, answer questions, and preserve the current live checkout handoff.',
    heroEyebrow: 'Water specialist consult',
    heroHeadline: 'See If Fusion44x Fits Your Pool.',
    heroSubheadline:
      'Help visitors understand whether the system matches their pool size, goals, and expectations before they buy.',
    primaryCtaLabel: 'Speak With a Specialist',
    primaryCtaTarget: 'consultation',
    secondaryCtaLabel: 'Review Financing',
    secondaryCtaTarget: 'checkout',
    heroStats: [
      { value: 'Fit-first', label: 'clarify the right path' },
      { value: 'Low friction', label: 'easy next step' },
      { value: 'Premium', label: 'high-end presentation' },
    ],
    trustBar: ['Fit review', 'Human support', 'Clear payment path', 'Premium page feel'],
    vslEyebrow: 'Before you book',
    vslTitle: 'Give buyers confidence before the call.',
    vslDescription:
      'A consultation page works best when the buyer already understands the basics and only needs help confirming the fit.',
    vslBullets: [
      'Explain the pool-fit conversation',
      'Set expectations for the next call',
      'Keep the payment path available if they are ready',
    ],
    problemTitle: 'Why buyers hesitate',
    problemIntro:
      'People often want a premium pool system but do not know if they are the right candidate or what the next step should be.',
    problemItems: [
      'They want someone to confirm the fit',
      'They do not want to waste time on a bad match',
      'They need a calmer explanation before buying',
      'They prefer a human conversation when the pool is unique',
    ],
    solutionTitle: 'How the consultation page helps',
    solutionIntro:
      'This page should feel like a premium pre-sale conversation: concise, helpful, and designed to move the right lead forward.',
    solutionItems: [
      'Use the specialist call as the main CTA',
      'Offer financing as a backup path if they are ready to move',
      'Keep the language confident but measured',
      'Make the call feel like a fit check, not a sales trap',
    ],
    benefitsTitle: 'Benefits of starting with a specialist',
    benefitsSubtitle:
      'A consultation path can reduce friction for higher-ticket purchases and unique pool setups.',
    benefits: sharedBenefits,
    technologyTitle: 'What the specialist will help review',
    technologySubtitle:
      'Use this section to make the conversation feel concrete, not vague.',
    technologyCards: [
      {
        title: 'Pool fit',
        description: 'Confirm whether the system matches the pool size and setup.',
        highlight: 'First decision',
      },
      {
        title: 'Ownership goals',
        description: 'Talk through the buyer’s preferred water experience and expectations.',
        highlight: 'Buyer context',
      },
      {
        title: 'Next step',
        description: 'Move toward checkout only after the fit question feels answered.',
        highlight: 'Conversion path',
      },
    ],
    comparisonTitle: 'Why consult before buying?',
    comparisonSubtitle:
      'This comparison helps buyers understand when a specialist conversation is the better move.',
    comparisonRows: [
      {
        label: 'Decision clarity',
        traditional: 'Buy first, ask questions later',
        fusion44x: 'Confirm fit before payment',
      },
      {
        label: 'Buyer confidence',
        traditional: 'More uncertainty',
        fusion44x: 'Higher confidence through a specialist review',
      },
      {
        label: 'Offer framing',
        traditional: 'Generic product pitch',
        fusion44x: 'Premium consult-first flow',
      },
      {
        label: 'Conversion path',
        traditional: 'Single rigid path',
        fusion44x: 'Consultation or checkout depending on need',
      },
    ],
    financingTitle: 'If the fit looks good, the payment path is still simple.',
    financingSubtitle:
      'A specialist conversation should not block the sale; it should make the sale more confident.',
    financingBadge: 'Consultation-first',
    financingBullets: [
      'Use the consultation as the primary action',
      'Keep checkout available for ready buyers',
      'Confirm fit before asking for commitment',
    ],
    testimonialsTitle: 'Consultation proof placeholder',
    testimonialsSubtitle:
      'Replace these with approved customer feedback after the first campaign runs.',
    testimonials: sharedTestimonials,
    faqTitle: 'Consultation questions',
    faqSubtitle: 'Use these to reduce hesitation and improve lead quality.',
    faqs: sharedFaqs,
    finalTitle: 'Talk to a specialist and confirm the fit.',
    finalSubtitle:
      'Qualified visitors can book a consultation now or continue to checkout if they are ready.',
    finalPrimaryCtaLabel: 'Speak With a Specialist',
    finalPrimaryCtaTarget: 'consultation',
    finalSecondaryCtaLabel: 'Review Financing',
    finalSecondaryCtaTarget: 'checkout',
  },
  'youtube-vsl': {
    slug: 'youtube-vsl',
    seoTitle: 'Fusion44x Video Sales Letter',
    seoDescription:
      'Premium VSL landing page for Fusion44x. Present the technology story with a high-end video-style layout and clear CTA paths.',
    heroEyebrow: 'YouTube VSL campaign',
    heroHeadline: 'Watch the Fusion44x Walkthrough Before You Decide.',
    heroSubheadline:
      'This page is built to pair a premium walkthrough video with a clear next step so ad traffic can convert without friction.',
    primaryCtaLabel: 'See If It Fits Your Pool',
    primaryCtaTarget: 'consultation',
    secondaryCtaLabel: 'Buy Now / Finance from $75/mo',
    secondaryCtaTarget: 'checkout',
    heroStats: [
      { value: 'Video-first', label: 'built for VSL traffic' },
      { value: 'Premium', label: 'cinematic presentation' },
      { value: 'Clear CTA', label: 'watch then act' },
    ],
    trustBar: ['VSL-ready layout', 'Premium visual system', 'Conversion-focused copy', 'Mobile-friendly'],
    vslEyebrow: 'Watch the walkthrough',
    vslTitle: 'Use the video to explain the system fast.',
    vslDescription:
      'This section is the core of the page. It should load fast, look premium, and make the technology story feel understandable.',
    vslBullets: [
      'Show the product story in under two minutes',
      'Keep the CTA close to the video',
      'Let the rest of the page handle objections and fit questions',
    ],
    problemTitle: 'Why VSL traffic still needs a strong page',
    problemIntro:
      'A great video introduces the idea, but the landing page still has to answer questions and make the next step obvious.',
    problemItems: [
      'Video viewers still want proof and clarity',
      'The page must carry the conversion flow',
      'Buyers need a path after the walkthrough',
      'Premium presentation should continue below the fold',
    ],
    solutionTitle: 'How the VSL page closes the loop',
    solutionIntro:
      'The video grabs attention, and the page below it gives buyers a polished path into consultation or checkout.',
    solutionItems: [
      'Place the VSL at the center of the page',
      'Keep supporting sections focused and concise',
      'Repeat the CTA after objections have been handled',
      'Keep the current live payment flow available',
    ],
    benefitsTitle: 'Why video-first pages convert',
    benefitsSubtitle:
      'A good VSL page feels like a guided experience, not a generic sales page.',
    benefits: sharedBenefits,
    technologyTitle: 'The visual story behind the system',
    technologySubtitle:
      'Use the placeholder media area to swap in the final video, product render, or motion asset later.',
    technologyCards: [
      {
        title: 'Video slot',
        description: 'Swap in the final YouTube embed or hosted walkthrough when it is ready.',
        highlight: 'Placeholder media',
      },
      {
        title: 'Premium motion',
        description: 'Use subtle glow, glass, and animated borders to keep the page feeling high-end.',
        highlight: 'Visual polish',
      },
      {
        title: 'Conversion path',
        description: 'Keep the CTA close to the VSL so ad traffic never loses momentum.',
        highlight: 'Direct response',
      },
    ],
    comparisonTitle: 'Why the VSL page is different',
    comparisonSubtitle:
      'The comparison is about the experience, not a hard technical claim.',
    comparisonRows: [
      {
        label: 'Attention flow',
        traditional: 'A static brochure-like page',
        fusion44x: 'A cinematic, video-led sales flow',
      },
      {
        label: 'Next step',
        traditional: 'Buried or unclear',
        fusion44x: 'Clear consultation or checkout CTA',
      },
      {
        label: 'Visual quality',
        traditional: 'Generic marketing layout',
        fusion44x: 'Premium dark SaaS-style finish',
      },
      {
        label: 'Ad traffic fit',
        traditional: 'Easy to bounce from',
        fusion44x: 'Built to keep the viewer moving',
      },
    ],
    financingTitle: 'After the video, keep the purchase path simple.',
    financingSubtitle:
      'The VSL should create interest; the CTA should make the next step obvious.',
    financingBadge: 'Video campaign',
    financingBullets: [
      'Use the VSL to educate quickly',
      'Offer consultation for fit questions',
      'Keep checkout available for ready buyers',
    ],
    testimonialsTitle: 'VSL proof placeholder',
    testimonialsSubtitle:
      'Replace with real reviews or case studies once they are approved for the campaign.',
    testimonials: sharedTestimonials,
    faqTitle: 'Video sales letter questions',
    faqSubtitle: 'Keep the answers short and useful.',
    faqs: sharedFaqs,
    finalTitle: 'Watch the walkthrough, then take the next step.',
    finalSubtitle:
      'The video can start the conversation, but the CTA should always stay close.',
    finalPrimaryCtaLabel: 'See If It Fits Your Pool',
    finalPrimaryCtaTarget: 'consultation',
    finalSecondaryCtaLabel: 'Buy Now / Finance from $75/mo',
    finalSecondaryCtaTarget: 'checkout',
  },
};

