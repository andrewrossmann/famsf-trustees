import React from 'react';
import { motion } from 'framer-motion';
import { Event } from '../types';
import { Calendar, Clock, MapPin, Users, CalendarCheck } from 'lucide-react';

interface EventsProps {
  events: Event[];
}

export const Events: React.FC<EventsProps> = ({ events }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-6 h-6 text-secondary-600" />
        <h2 className="text-xl font-semibold text-gray-900">Upcoming Events</h2>
      </div>
      
      <div className="space-y-3">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card hover:shadow-medium transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm font-medium rounded-full">
                  {formatDate(event.date)}
                </span>
                {event.rsvpRequired && (
                  <span className="px-2 py-1 bg-accent-100 text-accent-700 text-xs font-medium rounded-full border border-accent-200">
                    RSVP Required
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Users className="w-4 h-4" />
                <span>{event.attendees}</span>
                {event.maxAttendees && (
                  <span>/ {event.maxAttendees}</span>
                )}
              </div>
            </div>
            
            <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{event.description}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <button className="btn-secondary text-sm py-2 px-3">
                <CalendarCheck className="w-4 h-4 mr-1" />
                {event.rsvpRequired ? 'RSVP Now' : 'Add to Calendar'}
              </button>
              <button className="text-secondary-600 hover:text-secondary-700 text-sm font-medium transition-colors">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
