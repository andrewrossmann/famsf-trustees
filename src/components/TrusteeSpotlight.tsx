import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trustee } from '../types';
import { Users, Mail, Award, ChevronLeft, ChevronRight } from 'lucide-react';

interface TrusteeSpotlightProps {
  trustees: Trustee[];
}

export const TrusteeSpotlight: React.FC<TrusteeSpotlightProps> = ({ trustees }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trustees.length);
    }, 8000); // Rotate every 8 seconds

    return () => clearInterval(interval);
  }, [trustees.length]);

  const nextTrustee = () => {
    setCurrentIndex((prev) => (prev + 1) % trustees.length);
  };

  const prevTrustee = () => {
    setCurrentIndex((prev) => (prev - 1 + trustees.length) % trustees.length);
  };

  const currentTrustee = trustees[currentIndex];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Users className="w-6 h-6 text-warm-600" />
        <h2 className="text-xl font-semibold text-gray-900">Trustee Spotlight</h2>
      </div>
      
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="card"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-warm-400 to-warm-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                  {currentTrustee.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {currentTrustee.name}
                </h3>
                <p className="text-warm-600 font-medium text-sm mb-3">
                  {currentTrustee.title}
                </p>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {currentTrustee.bio}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-warm-500" />
                    <span className="text-xs text-gray-600">
                      Committees: {currentTrustee.committees.join(', ')}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-warm-500" />
                    <span className="text-xs text-gray-600">
                      {currentTrustee.email}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation arrows */}
        <button
          onClick={prevTrustee}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full shadow-soft flex items-center justify-center transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        </button>
        
        <button
          onClick={nextTrustee}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full shadow-soft flex items-center justify-center transition-all duration-200 hover:scale-110"
        >
          <ChevronRight className="w-4 h-4 text-gray-600" />
        </button>
        
        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {trustees.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-warm-500 w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
