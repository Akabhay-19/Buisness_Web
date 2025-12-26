export interface EventItem {
  id: string;
  title: string;
  category: 'Finance' | 'Marketing' | 'HR' | 'Strategy' | 'Entrepreneurship';
  description: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  prizePool: string;
}

export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}