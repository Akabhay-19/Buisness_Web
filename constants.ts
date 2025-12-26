import { EventItem, CommitteeMember } from './types';

export const FEST_NAME = "INNOVISION 2025";
export const FEST_DATE = "March 15-17, 2025";
export const FEST_DESCRIPTION = "The premier university summit exploring the convergence of Data Analytics and Business Strategy. Where big data meets the boardroom.";

export const EVENTS: EventItem[] = [
  {
    id: '1',
    title: 'Market Mayhem',
    category: 'Finance',
    description: 'Algorithmic trading simulation. Utilize real-time market data APIs to build portfolios that outperform the index.',
    date: 'March 15, 2025',
    time: '10:00 AM - 4:00 PM',
    venue: 'Trading Floor / Auditorium',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=800&auto=format&fit=crop', // Candlestick chart
    prizePool: '$2,000'
  },
  {
    id: '2',
    title: 'Data Pitch',
    category: 'Entrepreneurship',
    description: 'Back your startup idea with hard numbers. Pitch to VC analysts who care about your CAC, LTV, and growth metrics.',
    date: 'March 16, 2025',
    time: '11:00 AM - 3:00 PM',
    venue: 'Innovation Hub',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', // Data dashboard on laptop
    prizePool: '$5,000'
  },
  {
    id: '3',
    title: 'Metric Master',
    category: 'Marketing',
    description: 'Dive into Google Analytics and social insights. Create the most efficient campaign with the highest ROI.',
    date: 'March 16, 2025',
    time: '2:00 PM - 5:00 PM',
    venue: 'Lecture Hall B',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop', // Analytics on screen
    prizePool: '$1,500'
  },
  {
    id: '4',
    title: 'Crisis Analytics',
    category: 'HR',
    description: 'Use people analytics to solve organizational crises. Interpret employee data to make tough leadership decisions.',
    date: 'March 17, 2025',
    time: '10:00 AM - 1:00 PM',
    venue: 'Conference Room 1',
    image: 'https://images.unsplash.com/photo-1553877615-30c73e63cf4d?q=80&w=800&auto=format&fit=crop', // Developers/Analysts working
    prizePool: '$1,800'
  },
  {
    id: '5',
    title: 'Strategy Summit',
    category: 'Strategy',
    description: 'Big Data case studies. Analyze terabytes of consumer behavior data to formulate the winning corporate strategy.',
    date: 'March 17, 2025',
    time: '1:00 PM - 5:00 PM',
    venue: 'Executive Lounge',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop', // Writing on glass
    prizePool: '$3,000'
  }
];

export const COMMITTEE: CommitteeMember[] = [
  {
    id: '1',
    name: 'Alexandra Chen',
    role: 'President',
    image: 'https://picsum.photos/seed/alexandra/400/400'
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Head of Analytics',
    image: 'https://picsum.photos/seed/marcus/400/400'
  },
  {
    id: '3',
    name: 'Priya Patel',
    role: 'Tech Lead',
    image: 'https://picsum.photos/seed/priya/400/400'
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Operations',
    image: 'https://picsum.photos/seed/david/400/400'
  }
];