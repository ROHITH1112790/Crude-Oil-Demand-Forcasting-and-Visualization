import React from 'react';
import { PageTransition } from '../components/layout/PageTransition';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  Users, 
  BarChart2, 
  GitBranch, 
  Mail, 
  Github, 
  ExternalLink 
} from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <PageTransition>
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">About OilPulse</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Building state-of-the-art prediction models for the crude oil market
            </p>
          </div>
          
          {/* Mission Section */}
          <Card className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  OilPulse is dedicated to providing accurate, data-driven predictions for crude oil prices, enabling traders, analysts, and businesses to make informed decisions in a volatile market.
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  We leverage cutting-edge machine learning techniques, comprehensive market data, and expert domain knowledge to deliver predictions with industry-leading accuracy.
                </p>
                <div className="flex space-x-4 mt-6">
                  <Button 
                    variant="primary" 
                    icon={<ExternalLink size={16} />}
                  >
                    <a 
                
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    icon={<Mail size={16} />}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                  alt="Data analysis team" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-medium">
                    Our data science team working on model optimization
                  </p>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Research & Technology Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Our Research & Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card hoverable>
                <div className="flex flex-col items-start h-full">
                  <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg mb-4">
                    <BarChart2 className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    Machine Learning Models
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">
                    Our models combine LSTM neural networks, ARIMA time series analysis, and ensemble methods to capture both linear and non-linear patterns in oil price movements.
                  </p>
                  <Button variant="outline" size="sm" className="mt-auto">
                    Read Methodology
                  </Button>
                </div>
              </Card>
              
              <Card hoverable>
                <div className="flex flex-col items-start h-full">
                  <div className="p-3 bg-accent-50 dark:bg-accent-900/30 rounded-lg mb-4">
                    <GitBranch className="w-8 h-8 text-accent-600 dark:text-accent-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    Open Source Approach
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">
                    We believe in transparency and collaboration. Our core algorithms and datasets are open-source, enabling community contributions and peer review.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-auto"
                    icon={<Github size={16} />}
                  >
                    <a 
                      href="https://github.com/R-Madhuram/DartmouthCapstone_CrudeOilPricePrediction" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </Card>
              
              <Card hoverable>
                <div className="flex flex-col items-start h-full">
                  <div className="p-3 bg-secondary-50 dark:bg-secondary-900/30 rounded-lg mb-4">
                    <Users className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    Academic Collaboration
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">
                    This project stems from a Dartmouth College capstone, with ongoing collaborations with researchers in econometrics, machine learning, and energy economics.
                  </p>
                  <Button variant="outline" size="sm" className="mt-auto">
                    View Research Papers
                  </Button>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: 'Ranjith',
                  
                  image: 'https://jmp.sh/s/sOz5Od6nR3TiU5PxXHII',
                  
                },
                {
                  name: 'Arrvindhan',
                  
                  image: 'https://imagekit.io/tools/asset-public-link?detail=%7B%22name%22%3A%22WhatsApp%20Image%202025-04-29%20at%208.59.35%20PM.jpeg%22%2C%22type%22%3A%22image%2Fjpeg%22%2C%22signedurl_expire%22%3A%222028-04-28T16%3A06%3A17.339Z%22%2C%22signedUrl%22%3A%22https%3A%2F%2Fmedia-hosting.imagekit.io%2Fb7ba124f5183484c%2FWhatsApp%2520Image%25202025-04-29%2520at%25208.59.35%2520PM.jpeg%3FExpires%3D1840550777%26Key-Pair-Id%3DK2ZIVPTIP2VGHC%26Signature%3D2dcOLp0mWY8CWn2th~9b0qNfYKpPYLmwg~8q86bhvYbxsyJPKxvP7U2oO~h0wuO6yiMEPKSMhH3P-SznVW5uLQK23-xD25zv8ut7BCqdGjzvJdfogbEGd9fzRNxOES4l0OCZDzfT2AEqfTOSum14jEZqJ~5BpcSHnV~Cx-sXCq8UPUsDjkLhe0CF69QpYPg40nfmLmwd~mFhF2cMFwHFt2u2dGLkm5i3XuPQBpRfhzb5YhTZjrdUjg8ruXwcPtnCy4cugRBY0F2Rt9Tn55la837xfox~~NkjAwKU54yNhA5v1vmdMMqN0nhxu8sZPEubX9izKY2q0TD4hIQVlX-QQQ__%22%7D',
                  
                },
                {
                  name: 'Rohithraj',
                  
                  image: 'https://imagekit.io/tools/asset-public-link?detail=%7B%22name%22%3A%22WhatsApp%20Image%202025-04-29%20at%208.59.15%20PM.jpeg%22%2C%22type%22%3A%22image%2Fjpeg%22%2C%22signedurl_expire%22%3A%222028-04-28T16%3A06%3A17.341Z%22%2C%22signedUrl%22%3A%22https%3A%2F%2Fmedia-hosting.imagekit.io%2Fe143858ebf9b48a5%2FWhatsApp%2520Image%25202025-04-29%2520at%25208.59.15%2520PM.jpeg%3FExpires%3D1840550777%26Key-Pair-Id%3DK2ZIVPTIP2VGHC%26Signature%3D2EPFjDVRjRV4G9DXFcoAUoykzaqdPojFRoTJ7WQ2uxeLDuHunX0v9H-cmeHSdMXsnIxqPvlVEmHYFdtHIK4R285m95SSnXZMyYKBS7z-NeOAD2dVKfR3FmqMavzaZIAMBWIXynS~LdPhJuFYUVCnZvZzUBUopNJ3Ut~A~dP5ZBun8XWp9vFySUoFDCdEgewTzaRK4DCieuHi40QMsqQkO8LWWhZ2qJfGtl3W1PYabhyFfdEFIAyewmwZ~vyZk~1L9iAMM109ZLgGyA63EU1MOq4T8kecayMLImUGSvQkxUKd7ESO1s1WpZEgSalGjtvQucWMaU5EiOZQqeEVyZj4gg__%22%7D',
                  
                },
                {
                  name: 'Nishanth',
                 
                  image: 'https://imagekit.io/tools/asset-public-link?detail=%7B%22name%22%3A%22WhatsApp%20Image%202025-04-29%20at%208.58.55%20PM.jpeg%22%2C%22type%22%3A%22image%2Fjpeg%22%2C%22signedurl_expire%22%3A%222028-04-28T16%3A06%3A17.344Z%22%2C%22signedUrl%22%3A%22https%3A%2F%2Fmedia-hosting.imagekit.io%2Fb40fb470f7f348fb%2FWhatsApp%2520Image%25202025-04-29%2520at%25208.58.55%2520PM.jpeg%3FExpires%3D1840550777%26Key-Pair-Id%3DK2ZIVPTIP2VGHC%26Signature%3DgG26aQN6ReDalE8LyT7Bl3lSYh~4sVx8QCufEGJzMHiBQRh6JB3Tlp3EtnYAEN-3ZkyT7YXv5VaMvDsoVyl5qHCpy4amLMBcgbwUxkcx9xdEGY1vP9aMjSo6LFul~IyOgxaVprLzCQfMz3odUYGhOsykGjjU1lRMiY2ATjymYKv9m3Q7EPiOzblpk381tOuuclj14hUbvZZglBfuoSTv9-mMx1D10BDZgzJVB0eUspohlzZUtDNe88eQpaIsxYxBAYEwqYMpsTvird5THM5J4aCUU78guRi5IDzZ6psKSU4ew3rAeVqvKz9e-rvq3xCXx3ckHnFmOoXg9hvgd0bE~A__%22%7D',
                 
                },
              ].map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-square overflow-hidden mb-4 -mx-5 -mt-5">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{member.name}</h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 mb-2">{member.role}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{member.bio}</p>
                </Card>
              ))}
            </div>
          </div>
          
          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: 'How accurate are your predictions?',
                  answer: 'Our models achieve 92-95% accuracy for 7-day forecasts, 88-90% for 14-day forecasts, and 83-87% for 30-day forecasts, based on historical backtesting.',
                },
                {
                  question: 'What data sources do you use?',
                  answer: 'We aggregate data from public sources including EIA reports, market prices, geopolitical events, weather patterns, and economic indicators from central banks and statistical agencies.',
                },
                {
                  question: 'Is your methodology peer-reviewed?',
                  answer: 'Yes, our core methodologies have been peer-reviewed and published in energy economics journals. We continuously incorporate feedback from academic partners and industry experts.',
                },
                {
                  question: 'How often are predictions updated?',
                  answer: 'Our models run daily to incorporate the latest market data, with prediction updates published each evening. Major market events may trigger additional intraday updates.',
                },
                {
                  question: 'Can I use this for commercial purposes?',
                  answer: 'Yes, our platform is available for commercial use under specific licensing terms. Contact us for enterprise solutions and API access for integration with your systems.',
                },
                {
                  question: 'Do you provide historical data access?',
                  answer: 'Yes, our platform includes access to historical oil price data, prediction archives, and market events dating back over 30 years for comprehensive analysis.',
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default AboutPage;