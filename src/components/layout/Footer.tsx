import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, Github, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-primary-800 dark:text-white">
              <BarChart2 className="h-8 w-8 text-accent-500" />
              <span className="text-xl font-bold">OilPulse</span>
            </Link>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              Advanced crude oil price prediction and market analysis platform powered by data science.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://github.com/R-Madhuram/DartmouthCapstone_CrudeOilPricePrediction" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              Explore
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/predictions" className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
                  Predictions
                </Link>
              </li>
              <li>
                <Link to="/analysis" className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
                  Analysis
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
                  Research Papers
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
                  Market Data
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
                  Data Attribution
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-sm text-center text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} OilPulse. All rights reserved. Data provided for informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};