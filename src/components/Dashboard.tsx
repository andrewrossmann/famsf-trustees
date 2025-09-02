import React from 'react';
import { motion } from 'framer-motion';
import { Announcements } from './Announcements';
import { Events } from './Events';
import { QuickLinks } from './QuickLinks';
import { TrusteeSpotlight } from './TrusteeSpotlight';
import { mockAnnouncements, mockEvents, mockQuickLinks, mockTrustees } from '../data/mockData';

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, Trustees
          </h1>
          <p className="text-gray-600">
            Here's what's happening at the Fine Arts Museums of San Francisco
          </p>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Announcements and Events */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Announcements announcements={mockAnnouncements} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Events events={mockEvents} />
            </motion.div>
          </div>

          {/* Right Column - Quick Links and Trustee Spotlight */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <QuickLinks quickLinks={mockQuickLinks} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <TrusteeSpotlight trustees={mockTrustees} />
            </motion.div>
          </div>
        </div>

        {/* Bottom Section - Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="btn-primary text-sm py-3 px-4">
                Schedule Committee Meeting
              </button>
              <button className="btn-secondary text-sm py-3 px-4">
                Upload Document
              </button>
              <button className="bg-accent-600 hover:bg-accent-700 text-white font-medium py-3 px-4 rounded-2xl transition-all duration-200 hover:shadow-medium text-sm">
                Create Poll
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
