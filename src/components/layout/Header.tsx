import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, BarChart2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  
  // Change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Predictions', path: '/predictions' },
    { name: 'Analysis', path: '/analysis' },
    { name: 'About', path: '/about' },
  ];
  
  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white/95 dark:bg-primary-950/95 backdrop-blur-md shadow-sm' 
      : 'bg-transparent'
  }`;
  
  const mobileMenuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0 }
  };

  return (
    <header className={headerClasses}>
      <div className="container-custom py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-primary-800 dark:text-white"
          >
            <BarChart2 className="h-8 w-8 text-accent-500" />
            <span className="text-xl font-bold">OilPulse</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-200'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-primary-900/30'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Theme toggle and mobile menu button */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              icon={theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            />
            
            <button
              className="p-2 rounded-md text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-primary-900/30 md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-white dark:bg-primary-950 pt-20"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="container-custom py-5 flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-5 py-4 rounded-md text-lg font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-200'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-primary-900/30'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};