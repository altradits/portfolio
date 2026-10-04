import { WorkflowStep, PricingPackage } from './types';

export const workflowData: WorkflowStep[] = [
  {
    id: 'compose',
    stepNumber: '01',
    title: 'Capture the Moment',
    description: 'Write one core message or upload a photo. Forget platform formatting rules. Share your authentic thought directly.',
    iconName: 'PenTool',
    highlights: [
      'Unified smart composer',
      'Drag-and-drop media uploads',
      'Drafts sync across devices',
      'Distraction-free writing mode'
    ]
  },
  {
    id: 'tailor',
    stepNumber: '02',
    title: 'Precision Tailoring',
    description: 'Altradits automatically adapts your post for every platform. Professional for LinkedIn, punchy for Twitter, visual for Instagram.',
    iconName: 'Wand2',
    highlights: [
      'Platform character limit tuning',
      'Automatic formatting for LinkedIn',
      'Smart hashtag suggestions',
      'Image optimization and framing'
    ]
  },
  {
    id: 'schedule',
    stepNumber: '03',
    title: 'Set It and Forget It',
    description: 'Schedule your tailored posts across all accounts with one click. Visual calendar keeps your strategy synchronized.',
    iconName: 'CalendarClock',
    highlights: [
      'Visual calendar timeline',
      'Timezone-aware scheduling',
      'Dynamic queue management',
      'Instant publishing triggers'
    ]
  },
  {
    id: 'live',
    stepNumber: '04',
    title: 'Live Life Beyond the Desk',
    description: 'Close your laptop. Altradits publishes on time while you concentrate on building products and enjoying your life.',
    iconName: 'Coffee',
    highlights: [
      'Automated multi-rail distribution',
      'Unified analytics overview',
      'Audience reach tracking',
      'Weekly performance summary'
    ]
  }
];

export const pricingData: PricingPackage[] = [
  {
    id: 'creator',
    name: 'Creator',
    price: '$19',
    interval: '/month',
    description: 'For individuals building their personal brand across networks.',
    features: [
      '1 Workspace',
      'Up to 5 Social Profiles',
      'Unlimited Scheduled Posts',
      'Smart AI Tailoring',
      'Basic Analytics'
    ]
  },
  {
    id: 'pro',
    name: 'Professional',
    price: '$49',
    interval: '/month',
    description: 'For dedicated creators and founders who need precision and scale.',
    isPopular: true,
    features: [
      '3 Workspaces',
      'Up to 15 Social Profiles',
      'Unlimited Scheduled Posts',
      'Advanced Multimodal Vision AI',
      'Deep Analytics and Reports',
      'Priority Support'
    ]
  },
  {
    id: 'agency',
    name: 'Agency',
    price: '$129',
    interval: '/month',
    description: 'For teams managing multiple brands and client accounts.',
    features: [
      'Unlimited Workspaces',
      'Unlimited Social Profiles',
      'Team Collaboration (5 seats)',
      'Approval Workflows',
      'White-label Reports',
      'Dedicated Success Manager'
    ]
  }
];
