import React from 'react';
import { motion } from 'framer-motion';
import { QuickLink } from '../types';
import { 
  Calendar, 
  FileText, 
  Users, 
  Building2, 
  Star,
  ChevronRight 
} from 'lucide-react';

interface QuickLinksProps {
  quickLinks: QuickLink[];
}

const iconMap: { [key: string]: React.ReactNode } = {
  Calendar: <Calendar className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Star: <Star className="w-6 h-6" />
};

const getColorClasses = (color: string) => {
  switch (color) {
    case 'primary':
      return 'bg-primary-50 border-primary-200 text-primary-700 hover:bg-primary-100';
    case 'secondary':
      return 'bg-secondary-50 border-secondary-200 text-secondary-700 hover:bg-secondary-100';
    case 'accent':
      return 'bg-accent-50 border-accent-200 text-accent-700 hover:bg-accent-100';
    case 'warm':
      return 'bg-warm-50 border-warm-200 text-warm-700 hover:bg-warm-100';
    default:
      return 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100';
  }
};

export const QuickLinks: React.FC<QuickLinksProps> = ({ quickLinks }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900">Quick Access</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quickLinks.map((link, index) => (
          <motion.div
            key={link.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button className={`w-full p-4 rounded-2xl border-2 transition-all duration-200 group ${getColorClasses(link.color)}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/50 group-hover:bg-white/70 transition-colors">
                    {iconMap[link.icon]}
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-sm">{link.title}</h3>
                    <p className="text-xs opacity-80 mt-1">{link.description}</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
