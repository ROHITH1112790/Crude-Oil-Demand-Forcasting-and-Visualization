import React from 'react';
import { ArrowRight, BarChart2, Database, LineChart, AlertTriangle } from 'lucide-react';
import { HeroSection } from '../components/home/HeroSection';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { PageTransition } from '../components/layout/PageTransition';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  // Features section items
  const features = [
    {
      icon: <BarChart2 className="w-8 h-8 text-primary-600" />,
      title: 'Interactive Dashboard',
      description: 'Real-time dashboard with customizable views of crude oil prices, trends, and key market indicators.',
    },
    {
      icon: <LineChart className="w-8 h-8 text-primary-600" />,
      title: 'Price Predictions',
      description: 'Advanced machine learning algorithms provide accurate short and long-term price forecasts with confidence intervals.',
    },
    {
      icon: <Database className="w-8 h-8 text-primary-600" />,
      title: 'Historical Analysis',
      description: 'Comprehensive historical data analysis with visualization tools to identify patterns and trends.',
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-primary-600" />,
      title: 'Market Alerts',
      description: 'Customizable alerts for price movements, market events, and prediction deviations.',
    },
  ];
  
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <PageTransition>
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Features Section */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Advanced Features for Precision Forecasting
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Our platform combines cutting-edge technology with expert market knowledge to deliver accurate oil price predictions and comprehensive market analysis.
              </p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card hoverable className="h-full">
                    <div className="flex flex-col items-start">
                      <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-4">
                        {feature.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                How Our Prediction System Works
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Our system uses multiple data sources and advanced algorithms to predict crude oil prices with high accuracy.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-accent-300 dark:bg-accent-700" style={{ transform: 'translateX(-50%)' }}></div>
              
              <motion.div 
                className="space-y-12 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {[
                  {
                    title: 'Data Collection',
                    description: 'We aggregate data from multiple sources including market prices, production reports, inventory levels, geopolitical events, and economic indicators.',
                    align: 'right',
                  },
                  {
                    title: 'Preprocessing & Feature Engineering',
                    description: 'Raw data is cleaned, normalized, and transformed into meaningful features that capture market dynamics and relationships.',
                    align: 'left',
                  },
                  {
                    title: 'Model Training & Validation',
                    description: 'Multiple machine learning models are trained on historical data and validated using rigorous backtesting protocols.',
                    align: 'right',
                  },
                  {
                    title: 'Prediction Generation',
                    description: 'The system generates price predictions with confidence intervals, providing both point estimates and ranges of likely outcomes.',
                    align: 'left',
                  },
                ].map((step, index) => (
                  <motion.div 
                    key={index} 
                    className={`flex ${step.align === 'left' ? 'flex-row' : 'flex-row-reverse'} items-center`}
                    variants={itemVariants}
                  >
                    <div className={`w-1/2 ${step.align === 'left' ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                        {index + 1}. {step.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {step.description}
                      </p>
                    </div>
                    <div className="relative">
                      <div className="h-12 w-12 rounded-full bg-accent-500 flex items-center justify-center text-white font-bold z-20 relative">
                        {index + 1}
                      </div>
                    </div>
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-primary-900 dark:bg-primary-950 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-500 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Make Data-Driven Decisions?
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Start using our advanced crude oil price prediction platform today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  variant="accent" 
                  size="lg"
                  icon={<BarChart2 size={18} />}
                >
                  <Link to="/dashboard">Explore Dashboard</Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary-700 text-white hover:bg-primary-800"
                  icon={<ArrowRight size={18} />}
                >
                  <Link to="/predictions">View Predictions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default HomePage;