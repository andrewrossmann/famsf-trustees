import React from 'react';
import { motion } from 'framer-motion';
import { Announcement } from '../types';
import { AlertCircle, MessageSquare, Trophy, Building2 } from 'lucide-react';

interface AnnouncementsProps {
  announcements: Announcement[];
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'text-red-600 bg-red-100 border-red-200';
    case 'medium':
      return 'text-yellow-600 bg-yellow-100 border-yellow-200';
    case 'low':
      return 'text-green-600 bg-green-100 border-green-200';
    default:
      return 'text-gray-600 bg-gray-100 border-gray-200';
  }
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'board':
      return <Building2 className="w-4 h-4" />;
    case 'museum':
      return <MessageSquare className="w-4 h-4" />;
    case 'milestone':
      return <Trophy className="w-4 h-4" />;
    default:
      return <MessageSquare className="w-4 h-4" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'board':
      return 'bg-primary-100 text-primary-700 border-primary-200';
    case 'museum':
      return 'bg-secondary-100 text-secondary-700 border-secondary-200';
    case 'milestone':
      return 'bg-accent-100 text-accent-700 border-accent-200';
    default:
      return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

export const Announcements: React.FC<AnnouncementsProps> = ({ announcements }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <AlertCircle className="w-6 h-6 text-primary-600" />
        <h2 className="text-xl font-semibold text-gray-900">Announcements</h2>
      </div>
      
      <div className="space-y-3">
        {announcements.map((announcement, index) => (
          <motion.div
            key={announcement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card hover:shadow-medium transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                {getCategoryIcon(announcement.category)}
                <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getCategoryColor(announcement.category)}`}>
                  {announcement.category.charAt(0).toUpperCase() + announcement.category.slice(1)}
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(announcement.priority)}`}>
                  {announcement.priority.charAt(0).toUpperCase() + announcement.priority.slice(1)}
                </span>
              </div>
              <span className="text-sm text-gray-500">{new Date(announcement.date).toLocaleDateString()}</span>
            </div>
            
            <h3 className="font-semibold text-gray-900 mb-2">{announcement.title}</h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-3">{announcement.content}</p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">By {announcement.author}</span>
              <button className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors">
                Read more
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
