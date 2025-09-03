import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Calendar, FileText } from 'lucide-react';
import { Landmark } from 'lucide-react';

export const FAMSFHero: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/A363698_V3_crop.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 text-center text-white">
          {/* Main Heading */}
          <motion.h1 
            className="f-heading-8-serif mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Trustees Portal
          </motion.h1>

          {/* Spacing Rows */}
          <div className="h-8 md:h-16 lg:h-24"></div>
          <div className="h-8 md:h-16 lg:h-24"></div>

          {/* Quick Access Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Dashboard */}
            <motion.div 
              className="group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <Landmark className="w-8 h-8 text-white" />
              </div>
              <h3 className="f-body-1 text-white mb-2">Dashboard</h3>
              <p className="f-body-1 text-white/70">Overview & quick access</p>
            </div>
            </motion.div>

            {/* Calendar */}
            <motion.div 
              className="group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="f-body-1 text-white mb-2">Calendar</h3>
              <p className="f-body-1 text-white/70">Events & meetings</p>
            </div>
            </motion.div>

            {/* Documents */}
            <motion.div 
              className="group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="f-body-1 text-white mb-2">Documents</h3>
              <p className="f-body-1 text-white/70">Board packets & reports</p>
            </div>
            </motion.div>

            {/* Directory */}
            <motion.div 
              className="group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="f-body-1 text-white mb-2">Directory</h3>
              <p className="f-body-1 text-white/70">Trustee profiles</p>
            </div>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className="bg-white text-black f-ui-3 px-8 py-4 rounded-2xl hover:bg-white/90 transition-colors flex items-center gap-2">
              Enter Portal
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white/30 text-white f-ui-3 px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </motion.div>

          {/* Footer Note */}
          <motion.div 
            className="mt-16 text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p className="f-body-1">Accessible exclusively to FAMSF Trustees</p>
          </motion.div>

          {/* Additional Footer Text */}
          <motion.div 
            className="mt-16 text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <p className="f-body-1 mb-2">Fine Arts Museums of San Francisco</p>
            <p className="f-body-1">Strengthening communication, collaboration, and engagement among our distinguished board members</p>
          </motion.div>
        </div>
      </div>


    </div>
  );
};
