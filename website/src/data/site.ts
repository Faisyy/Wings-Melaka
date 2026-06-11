// Single source of truth for Wings Melaka site content.
// Real content extracted from the live site (see Wings-Melaka/WEBSITE_CONTENT.md).

export const org = {
  name: 'Wings Melaka',
  tagline: 'Reaching · Empowering · Transforming',
  mission:
    'Making a difference in the lives of people with special needs and their families by providing learning opportunities that will enable them to achieve their full potential.',
  address: '440C Jalan Tengkera, 75200 Melaka, Malaysia',
  phone: '+606-2862926',
  phoneHref: 'tel:+6062862926',
  email: 'contact@wingsmelaka.org.my',
  manager: 'Ms Loreen Lim',
  verse: '"They will soar on wings like eagles" — Isaiah 40:31',
  values: ['Compassion', 'Acceptance', 'Integrity', 'Hope'],
  foundedYear: 1997,
  social: {
    instagram: '#',
    facebook: '#',
  },
}

export type NavItem = {
  label: string
  to: string
  children?: { label: string; to: string }[]
}

export const nav: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'How It All Started', to: '/about#history' },
      { label: 'Mission, Vision & Values', to: '/about#mission' },
      { label: 'Our Name', to: '/about#name' },
      { label: 'Board & Staff', to: '/about#board' },
      { label: 'Testimonials', to: '/about#testimonials' },
    ],
  },
  {
    label: 'Services',
    to: '/services',
    children: [
      { label: 'Early Intervention (EIP)', to: '/services#eip' },
      { label: 'School-Age Programme (SAP)', to: '/services#sap' },
      { label: 'Young Adults (YAP)', to: '/services#yap' },
      { label: 'Toy & Resource Library', to: '/services#library' },
      { label: 'Counselling / Family Therapy', to: '/services#counselling' },
      { label: 'Parent Support', to: '/services#parent-support' },
    ],
  },
  { label: 'News & Events', to: '/news' },
  {
    label: 'Get Involved',
    to: '/get-involved',
    children: [
      { label: 'Donate', to: '/get-involved#donate' },
      { label: 'Sponsor a Child', to: '/get-involved#sponsor' },
      { label: 'Be a Volunteer', to: '/get-involved#volunteer' },
    ],
  },
  { label: 'Contact', to: '/contact' },
]

export type Programme = {
  slug: string
  name: string
  short: string
  age: string
  icon: string
  tone: string // tailwind bg tint class for the icon chip
  blurb: string
  closed?: boolean
}

export const programmes: Programme[] = [
  {
    slug: 'eip',
    name: 'Early Intervention Programme',
    short: 'EIP',
    age: 'Ages 0–6',
    icon: '🧸',
    tone: 'bg-sky-100',
    blurb:
      'A friendly, safe and stimulating environment where parents and children learn together, guided by individualised education plans.',
  },
  {
    slug: 'sap',
    name: 'School-Age Programme',
    short: 'SAP',
    age: 'Ages 5–12',
    icon: '📚',
    tone: 'bg-amber-100',
    blurb:
      'School-readiness classes preparing children for formal schooling, building on the foundations of early intervention.',
  },
  {
    slug: 'yap',
    name: 'Young Adults Programme',
    short: 'YAP',
    age: 'Ages 18–25',
    icon: '🌱',
    tone: 'bg-green-100',
    blurb:
      'Life and employment skills helping young adults move toward independent, supported living.',
    closed: true,
  },
  {
    slug: 'library',
    name: 'Toy & Resource Library',
    short: 'Library',
    age: 'Since 1998',
    icon: '🧩',
    tone: 'bg-purple-100',
    blurb:
      'Toys on loan to all children with learning differences — whether enrolled, graduated, or awaiting placement.',
  },
  {
    slug: 'counselling',
    name: 'Counselling / Family Therapy',
    short: 'Counselling',
    age: 'Since 2008',
    icon: '💬',
    tone: 'bg-pink-100',
    blurb:
      'A space for parents and family members to talk things through with a counsellor and find support.',
  },
  {
    slug: 'parent-support',
    name: 'Parent Support',
    short: 'Parent Support',
    age: 'Since 1999',
    icon: '🤝',
    tone: 'bg-teal-100',
    blurb:
      'Support groups and coffee sessions that build friendship, knowledge, and encouragement among parents.',
  },
]
