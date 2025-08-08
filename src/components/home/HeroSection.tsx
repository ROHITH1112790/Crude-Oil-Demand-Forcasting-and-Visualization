import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, BarChart2, Database, Eye } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex flex-col space-y-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-100 text-accent-800 dark:bg-accent-900/50 dark:text-accent-300">
                <TrendingUp size={14} className="mr-1" />
                Advanced Price Prediction Analytics
              </span>
            </motion.div>
            
            <motion.h1 
              variants={item}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight"
            >
              Make informed decisions with our 
              <span className="text-accent-500"> crude oil </span>
              predictions
            </motion.h1>
            
            <motion.p 
              variants={item}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl"
            >
              Leverage advanced machine learning algorithms to predict crude oil price movements with precision, giving you the competitive edge in the market.
            </motion.p>
            
            <motion.div 
              variants={item}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
            >
              <Button 
                variant="primary" 
                size="lg"
                icon={<BarChart2 size={18} />}
              >
                <Link to="/dashboard">View Dashboard</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                icon={<Eye size={18} />}
              >
                <Link to="/predictions">Explore Predictions</Link>
              </Button>
            </motion.div>
            
            <motion.div
              variants={item} 
              className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8 text-sm"
            >
              <div className="flex items-center space-x-2">
                <span className="flex-shrink-0 h-5 w-5 bg-success-100 rounded-full flex items-center justify-center dark:bg-success-900/30">
                  <span className="h-2 w-2 bg-success-500 rounded-full"></span>
                </span>
                <span className="text-slate-700 dark:text-slate-300">95% Prediction Accuracy</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="flex-shrink-0 h-5 w-5 bg-primary-100 rounded-full flex items-center justify-center dark:bg-primary-900/30">
                  <span className="h-2 w-2 bg-primary-500 rounded-full"></span>
                </span>
                <span className="text-slate-700 dark:text-slate-300">Real-time Updates</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="flex-shrink-0 h-5 w-5 bg-accent-100 rounded-full flex items-center justify-center dark:bg-accent-900/30">
                  <span className="h-2 w-2 bg-accent-500 rounded-full"></span>
                </span>
                <span className="text-slate-700 dark:text-slate-300">Advanced Analytics</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative z-10 bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
              <div className="h-8 bg-slate-100 dark:bg-slate-800 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-danger-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-warning-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                </div>
              </div>
              <img 
                src="https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Oil price dashboard" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};