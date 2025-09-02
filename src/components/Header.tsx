import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bell, 
  Search, 
  User, 
  Settings, 
  LogOut,
  Menu,
  X 
} from 'lucide-react';
import { useState } from 'react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="bg-white shadow-soft border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">FAMSF Trustees</h1>
              <p className="text-xs text-gray-500">Board Portal</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Dashboard
            </a>
            <a href="/announcements" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Announcements
            </a>
            <a href="/calendar" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Calendar
            </a>
            <a href="/documents" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Documents
            </a>
            <a href="/directory" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Directory
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200">
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile Menu */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-xl transition-all duration-200"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              </button>

              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-medium border border-gray-200 py-2 z-50"
                >
                  <a href="/profile" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </a>
                  <a href="/settings" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </a>
                  <hr className="my-2" />
                  <button className="flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors w-full text-left">
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </motion.div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 py-4"
          >
            <div className="space-y-2">
              <a href="/" className="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-xl transition-colors">
                Dashboard
              </a>
              <a href="/announcements" className="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-xl transition-colors">
                Announcements
              </a>
              <a href="/calendar" className="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-xl transition-colors">
                Calendar
              </a>
              <a href="/documents" className="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-xl transition-colors">
                Documents
              </a>
              <a href="/directory" className="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-xl transition-colors">
                Directory
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
};
