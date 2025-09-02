import { Announcement, Event, Trustee, QuickLink } from '../types';

export const mockAnnouncements: Announcement[] = [
  {
    id: '1',
    title: 'New Exhibition: "Impressionism in the Age of Industry"',
    content: 'We are excited to announce our upcoming major exhibition featuring works from the late 19th century. The exhibition will open on March 15th and run through August 30th.',
    author: 'Dr. Sarah Chen, Chief Curator',
    date: '2024-01-15',
    priority: 'high',
    category: 'museum'
  },
  {
    id: '2',
    title: 'Board Meeting - Q1 2024 Strategic Planning',
    content: 'Our quarterly board meeting will focus on strategic planning for 2024, including fundraising goals, exhibition planning, and community outreach initiatives.',
    author: 'Michael Rodriguez, Board Chair',
    date: '2024-01-12',
    priority: 'high',
    category: 'board'
  },
  {
    id: '3',
    title: 'Museum Attendance Reaches 1.2 Million Visitors',
    content: 'We are thrilled to announce that FAMSF has welcomed over 1.2 million visitors in 2023, marking a 15% increase from the previous year.',
    author: 'Jennifer Williams, Director of Communications',
    date: '2024-01-10',
    priority: 'medium',
    category: 'milestone'
  },
  {
    id: '4',
    title: 'New Conservation Lab Opening',
    content: 'The new state-of-the-art conservation laboratory will open next month, allowing us to better preserve and restore our extensive collection.',
    author: 'Dr. Robert Kim, Head of Conservation',
    date: '2024-01-08',
    priority: 'medium',
    category: 'museum'
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Board of Trustees Annual Gala',
    description: 'Join us for our annual fundraising gala featuring live music, silent auction, and special exhibition preview.',
    date: '2024-02-15',
    time: '6:00 PM',
    location: 'de Young Museum, Golden Gate Park',
    rsvpRequired: true,
    attendees: 45,
    maxAttendees: 60
  },
  {
    id: '2',
    title: 'Exhibition Opening Reception',
    description: 'Celebrate the opening of "Impressionism in the Age of Industry" with cocktails, hors d\'oeuvres, and curator-led tours.',
    date: '2024-03-15',
    time: '7:00 PM',
    location: 'Legion of Honor, Lincoln Park',
    rsvpRequired: true,
    attendees: 32,
    maxAttendees: 50
  },
  {
    id: '3',
    title: 'Committee Meeting: Collections & Acquisitions',
    description: 'Monthly meeting to review potential acquisitions and discuss collection development strategies.',
    date: '2024-01-25',
    time: '2:00 PM',
    location: 'de Young Museum, Board Room',
    rsvpRequired: false,
    attendees: 8
  },
  {
    id: '4',
    title: 'Trustee Orientation for New Members',
    description: 'Welcome session for newly appointed trustees covering museum operations, governance, and key initiatives.',
    date: '2024-01-30',
    time: '10:00 AM',
    location: 'Legion of Honor, Conference Room',
    rsvpRequired: true,
    attendees: 3,
    maxAttendees: 5
  }
];

export const mockTrustees: Trustee[] = [
  {
    id: '1',
    name: 'Michael Rodriguez',
    title: 'Board Chair',
    photo: '/api/placeholder/150/150',
    committees: ['Executive', 'Governance', 'Finance'],
    expertise: ['Strategic Planning', 'Financial Management', 'Non-profit Leadership'],
    bio: 'Michael has served on the FAMSF board for 8 years and brings over 20 years of experience in arts administration and philanthropy.',
    email: 'michael.rodriguez@famsf.org'
  },
  {
    id: '2',
    name: 'Dr. Sarah Chen',
    title: 'Vice Chair',
    photo: '/api/placeholder/150/150',
    committees: ['Collections & Acquisitions', 'Education', 'Exhibitions'],
    expertise: ['Art History', 'Museum Studies', 'Asian Art'],
    bio: 'Dr. Chen is a distinguished art historian and former museum director with expertise in Asian art and museum education.',
    email: 'sarah.chen@famsf.org'
  },
  {
    id: '3',
    name: 'Jennifer Williams',
    title: 'Secretary',
    photo: '/api/placeholder/150/150',
    committees: ['Communications', 'Development', 'Community Engagement'],
    expertise: ['Public Relations', 'Fundraising', 'Community Outreach'],
    bio: 'Jennifer leads our communications and development efforts, bringing 15 years of experience in arts marketing and fundraising.',
    email: 'jennifer.williams@famsf.org'
  },
  {
    id: '4',
    name: 'Robert Kim',
    title: 'Treasurer',
    photo: '/api/placeholder/150/150',
    committees: ['Finance', 'Audit', 'Investment'],
    expertise: ['Financial Management', 'Investment Strategy', 'Risk Management'],
    bio: 'Robert is a certified public accountant with extensive experience in non-profit financial management and investment oversight.',
    email: 'robert.kim@famsf.org'
  }
];

export const mockQuickLinks: QuickLink[] = [
  {
    id: '1',
    title: 'Calendar',
    description: 'View and manage upcoming events, meetings, and deadlines',
    icon: 'Calendar',
    href: '/calendar',
    color: 'primary'
  },
  {
    id: '2',
    title: 'Documents',
    description: 'Access board packets, reports, bylaws, and meeting minutes',
    icon: 'FileText',
    href: '/documents',
    color: 'secondary'
  },
  {
    id: '3',
    title: 'Directory',
    description: 'Browse trustee profiles, contact information, and committee assignments',
    icon: 'Users',
    href: '/directory',
    color: 'accent'
  },
  {
    id: '4',
    title: 'Committees',
    description: 'Committee information, meeting schedules, and member rosters',
    icon: 'Building2',
    href: '/committees',
    color: 'warm'
  },
  {
    id: '5',
    title: 'Extras',
    description: 'Museum dashboards, behind-the-scenes content, and exhibition previews',
    icon: 'Star',
    href: '/extras',
    color: 'primary'
  }
];
