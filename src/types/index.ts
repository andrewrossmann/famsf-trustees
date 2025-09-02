export interface Announcement {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  priority: 'low' | 'medium' | 'high';
  category: 'board' | 'museum' | 'milestone';
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  rsvpRequired: boolean;
  attendees: number;
  maxAttendees?: number;
}

export interface Trustee {
  id: string;
  name: string;
  title: string;
  photo: string;
  committees: string[];
  expertise: string[];
  bio: string;
  email: string;
}

export interface QuickLink {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  color: string;
}
