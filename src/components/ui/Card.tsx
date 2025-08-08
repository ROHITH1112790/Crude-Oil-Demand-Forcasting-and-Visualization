import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title?: string;
  subtitle?: string;
  className?: string;
  headerActions?: React.ReactNode;
  children: React.ReactNode;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  className = '',
  headerActions,
  children,
  hoverable = false,
}) => {
  const cardVariants = {
    hover: {
      y: -4,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div 
      className={`bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden shadow-subtle ${hoverable ? 'cursor-pointer' : ''} ${className}`}
      variants={hoverable ? cardVariants : undefined}
      whileHover={hoverable ? 'hover' : undefined}
    >
      {(title || headerActions) && (
        <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div>
            {title && <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>}
            {subtitle && <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>}
          </div>
          {headerActions && <div>{headerActions}</div>}
        </div>
      )}
      <div className="p-5">{children}</div>
    </motion.div>
  );
};