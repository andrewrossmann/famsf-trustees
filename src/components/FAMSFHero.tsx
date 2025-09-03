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
          backgroundImage: `url('${process.env.PUBLIC_URL}/assets/A363698_V3_crop.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Logo in Upper Left Corner - Mobile Optimized */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
        <img 
          src={`${process.env.PUBLIC_URL}/assets/logo_lightgray.png`}
          alt="FAMSF Logo" 
          className="w-12 h-12 md:w-24 md:h-24 lg:w-28 lg:h-28 opacity-90 hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* Content - Mobile Optimized */}
      <div className="relative z-10 flex items-start md:items-start justify-center min-h-screen pt-4 md:pt-8">
        <div className="container mx-auto px-4 md:px-6 text-center text-white">
          {/* Main Heading - Mobile Optimized */}
          <motion.h1 
            className="f-heading-8-serif mb-4 md:mb-6 text-white text-4xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Trustees Portal
          </motion.h1>

          {/* Spacing Rows - Mobile Optimized */}
          <div className="h-4 md:h-16 lg:h-24"></div>
          <div className="h-4 md:h-16 lg:h-24"></div>
          {/* Additional spacing rows for 2 inches lower positioning */}
          <div className="h-8 md:h-16 lg:h-24"></div>
          <div className="h-8 md:h-16 lg:h-24"></div>

          {/* Quick Access Grid - Mobile Optimized */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto mb-8 md:mb-12 px-2 md:px-0"
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
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 md:p-6 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-white/30 transition-colors">
                  <Landmark className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="f-body-1 text-white mb-2 text-sm md:text-base">Dashboard</h3>
                <p className="f-body-1 text-white/70 text-xs md:text-sm">Overview & quick access</p>
              </div>
            </motion.div>

            {/* Calendar */}
            <motion.div 
              className="group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 md:p-6 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-white/30 transition-colors">
                  <Calendar className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="f-body-1 text-white mb-2 text-sm md:text-base">Calendar</h3>
                <p className="f-body-1 text-white/70 text-xs md:text-sm">Events & meetings</p>
              </div>
            </motion.div>

            {/* Documents */}
            <motion.div 
              className="group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 md:p-6 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-white/30 transition-colors">
                  <FileText className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="f-body-1 text-white mb-2 text-sm md:text-base">Documents</h3>
                <p className="f-body-1 text-white/70 text-xs md:text-sm">Board packets & reports</p>
              </div>
            </motion.div>

            {/* Directory */}
            <motion.div 
              className="group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 md:p-6 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-white/30 transition-colors">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="f-body-1 text-white mb-2 text-sm md:text-base">Directory</h3>
                <p className="f-body-1 text-white/70 text-xs md:text-sm">Trustee profiles</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Call to Action - Mobile Optimized */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className="bg-white text-black f-ui-3 px-6 md:px-8 py-3 md:py-4 rounded-2xl hover:bg-white/90 transition-colors flex items-center gap-2 text-sm md:text-base">
              Enter Portal
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button className="border-2 border-white/30 text-white f-ui-3 px-6 md:px-8 py-3 md:py-4 rounded-2xl hover:bg-white/10 transition-colors text-sm md:text-base">
              Learn More
            </button>
          </motion.div>

          {/* Footer Note - Mobile Optimized */}
          <motion.div 
            className="mt-8 md:mt-16 text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p className="f-body-1 text-sm md:text-base">Accessible exclusively to FAMSF Trustees</p>
          </motion.div>

          {/* Additional Footer Text - Mobile Optimized */}
          <motion.div 
            className="mt-8 md:mt-16 text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <p className="f-body-1 mb-2 text-sm md:text-base">Fine Arts Museums of San Francisco</p>
            <p className="f-body-1 text-xs md:text-sm">Strengthening communication, collaboration, and engagement among our distinguished board members</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
