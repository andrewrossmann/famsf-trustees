# FAMSF Trustees Portal

A private website for the Trustees of the Fine Arts Museums of San Francisco to strengthen communication, collaboration, and engagement among the board.

## 🚀 Features

### Core Dashboard
- **Announcements Feed** - Board updates, museum news, and milestones with priority indicators
- **Upcoming Events** - Calendar preview with RSVP functionality and attendee tracking
- **Quick Links** - Easy access to Calendar, Documents, Directory, Committees, and Extras
- **Trustee Spotlight** - Rotating showcase of board members with bios and committee info

### Planned Features (Next Steps)
- **Announcements Page** - Full board updates and museum news
- **Calendar & Events** - Full calendar with RSVP and export to Google/Outlook
- **Documents Library** - Searchable board packets, reports, bylaws
- **Trustee Directory** - Complete profiles with photos, committees, expertise
- **Committees Pages** - Member rosters, meeting schedules, documents
- **Collaboration Tools** - Polls, surveys, task tracking, idea submission
- **Extras** - Museum dashboards, behind-the-scenes content, exhibition previews
- **Account Settings** - Profile editing, notifications, 2FA security

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **TailwindCSS** for styling with custom color palette
- **Framer Motion** for smooth animations and transitions
- **Lucide React** for beautiful, consistent icons
- **Custom Components** - Modular, reusable design system

## 🎨 Design System

### Color Palette
- **Primary**: Purple tones (#a855f7, #9333ea)
- **Secondary**: Blue tones (#3b82f6, #2563eb)
- **Accent**: Green tones (#22c55e, #16a34a)
- **Warm**: Pink tones (#ec4899, #db2777)

### Design Principles
- Grid-based layout with 2xl rounded corners
- Soft shadows and subtle hover effects
- Responsive design for all devices
- Clean, elegant typography
- Consistent spacing and component patterns

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd famsf-trustees
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation and user menu
│   ├── Dashboard.tsx   # Main dashboard layout
│   ├── Announcements.tsx # Announcements feed
│   ├── Events.tsx      # Events calendar preview
│   ├── QuickLinks.tsx  # Navigation shortcuts
│   └── TrusteeSpotlight.tsx # Trustee showcase
├── data/               # Mock data and types
│   ├── mockData.ts     # Sample data for development
│   └── types/          # TypeScript type definitions
├── lib/                # Utility functions
│   └── utils.ts        # Class merging utilities
├── App.tsx             # Main application component
└── index.tsx           # Application entry point
```

## 🔧 Development

### Adding New Components
1. Create component file in `src/components/`
2. Add TypeScript interfaces in `src/types/`
3. Import and use in Dashboard or other components
4. Follow existing patterns for styling and animations

### Styling Guidelines
- Use TailwindCSS utility classes
- Follow the established color palette
- Maintain consistent spacing (gap-4, gap-8, etc.)
- Use the custom card and button classes
- Add hover effects and transitions

### Animation Guidelines
- Use Framer Motion for all animations
- Stagger animations with delays (0.1s increments)
- Keep animations subtle and professional
- Use consistent easing and duration

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (two column layout)
- **Desktop**: > 1024px (three column layout)

## 🚀 Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy the `build/` folder** to your hosting service
   - Netlify, Vercel, AWS S3, or traditional hosting
   - Ensure HTTPS is enabled for production

3. **Environment Variables** (if needed)
   - Create `.env` file for API endpoints
   - Configure authentication services

## 🔒 Security Considerations

- Implement proper authentication and authorization
- Use HTTPS in production
- Consider 2FA for trustee accounts
- Secure document uploads and storage
- Regular security audits and updates

## 📈 Future Enhancements

- **Real-time Updates** - WebSocket integration for live announcements
- **Mobile App** - React Native companion app
- **Advanced Analytics** - Trustee engagement metrics
- **Integration** - Calendar sync, document management systems
- **Accessibility** - WCAG 2.1 AA compliance

## 🤝 Contributing

1. Follow the existing code style and patterns
2. Add TypeScript types for new features
3. Test responsive design on multiple devices
4. Ensure animations are smooth and performant
5. Update documentation for new features

## 📄 License

Private project for the Fine Arts Museums of San Francisco Trustees.

---

Built with ❤️ for the FAMSF Board of Trustees
