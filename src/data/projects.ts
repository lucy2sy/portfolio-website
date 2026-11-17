export type Tone = 'blue' | 'oxblood' | 'cocoa' | 'ink';

export const projects: {
  id: string;
  title: string;
  lines: string[];
  cta: string;
  href: string;
  placeholder: string;
  image: string;
  alt: string;
  tone: Tone;
}[] = [
  {
    id: 'roomie-receipts',
    title: 'Roomie Receipts',
    lines: ['Cent-accurate splits', 'Data locked without logins', 'Lighthouse 88 → 100'],
    cta: 'Read the case study ↗',
    href: '/work/roomie-receipts',
    placeholder: '[Roomie Receipts v2]',
    image: '/images/roomie/v2_screenshot1.png',
    alt: 'Roomie Receipts v2 landing page',
    tone: 'oxblood',
  },
  {
    id: 'pathfinder',
    title: 'UofT Pathfinder',
    lines: ['Node-based course tree', 'Six course states', 'In progress, team lead'],
    cta: 'See the process ↗',
    href: '/work#pathfinder',
    placeholder: '[Pathfinder course tree]',
    image: '/images/pathfinder.png',
    alt: 'UofT Pathfinder course tree prototype',
    tone: 'cocoa',
  },
  {
    id: 'akcse',
    title: 'AKCSE UofT Site',
    lines: ['Next.js + Tailwind', 'Events auto-synced from Google Calendar'],
    cta: 'Visit the site ↗',
    href: 'https://akcseuoft.ca',
    placeholder: '[AKCSE site]',
    image: '/images/akcse.png',
    alt: 'AKCSE UofT website homepage',
    tone: 'ink',
  },
];

export const project = (id: string) => projects.find((p) => p.id === id)!;
