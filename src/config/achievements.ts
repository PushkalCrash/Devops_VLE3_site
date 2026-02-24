export type Achievement = {
  title: string;
  description?: string;
  icon: 'award' | 'music' | 'mic' | 'radio';
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: '50+ Live Performances',
    description: 'Performed across festivals, venues, and private events.',
    icon: 'mic',
  },
  {
    title: '10k+ Streams',
    description: 'Over 10,000 streams across all the platforms.',
    icon: 'radio',
  },
  {
    title: '100+ Songs learnt',
    description: 'Solos, Rhythms, Vocals and More.',
    icon: 'music',
  },
  {
    title: '15+ Awards',
    description: 'Multiple awards for performances, songs, and honours.',
    icon: 'award',
  },
];
