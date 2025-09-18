import React, { useEffect } from 'react';
import ScrollReveal from '../utils/ScrollReveal';
import { Shield, Leaf, PenTool as Tool, Clock, Award, Phone } from 'lucide-react';
import ContactModal from './ContactModal';

const OurGuarantee: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-20 min-h-screen bg-dark-900">
      <div className="container-custom">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-heading text-center">
            Our <span className="text-gradient">Guarantee</span>
          </h1>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Quality Promise Section */}
            <div className="metallic-card p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-primary-500/5 group-hover:opacity-100 opacity-50 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary-600/20 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2 font-heading">Our Promise: Quality, Commitment, and Care</h2>
                    <p className="text-gray-300">At Diversified Plumbing Services, your peace of mind is our priority. Our experienced plumbers have been proudly serving the Dallas/Fort Worth Metroplex since 2007, backed by a combined professional expertise of over 50 years. We stand by our workmanship and your complete satisfaction is not just our goal—it's our promise.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Environmental Commitment Section */}
            <div className="metallic-card p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-500/5 group-hover:opacity-100 opacity-50 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-600/20 p-3 rounded-lg">
                    <Leaf className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2 font-heading">Committed to a Greener Future</h2>
                    <p className="text-gray-300">We care deeply about the environment and believe every step counts toward building a better future. That's why Diversified Plumbing Services proudly offers environmentally friendly, GREEN-certified plumbing products and solutions. Choosing us means you're choosing sustainability, responsibility, and long-term value for your home, your business, and our planet.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Warranty Section */}
            <div className="metallic-card p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-500/5 group-hover:opacity-100 opacity-50 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-600/20 p-3 rounded-lg">
                    <Tool className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2 font-heading">Warranty Services You Can Trust</h2>
                    <p className="text-gray-300">Our licensed professionals bring decades of hands-on plumbing experience directly to you. We've encountered and resolved every plumbing challenge imaginable—and we're ready to handle yours quickly, professionally, and at a fair price. When you partner with Diversified Plumbing Services, your plumbing needs are fixed right the first time.</p>
                    <p className="text-primary-500 font-semibold mt-4">Master Plumber License M24068</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Service Section */}
            <div className="metallic-card p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-purple-500/5 group-hover:opacity-100 opacity-50 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600/20 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2 font-heading">Outstanding Customer Service—Every Time</h2>
                    <p className="text-gray-300 mb-6">We believe exceptional customer service is about actions, not promises. Our team is entirely local—no outsourcing, no delays, just reliable and dedicated professionals ready to help.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-dark-800/50 p-4 rounded-lg">
                        <h3 className="font-semibold text-primary-500 mb-2">Rapid Response</h3>
                        <p className="text-gray-300">Lead time typically within 24 hours.</p>
                      </div>
                      
                      <div className="bg-dark-800/50 p-4 rounded-lg">
                        <h3 className="font-semibold text-primary-500 mb-2">Convenient Scheduling</h3>
                       <p className="text-primary-500 font-semibold mt-4">Responsible Master Plumber License M24068</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mt-6">We're here when you need us, wherever you need us.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-300 mb-6">Your trust has helped us build a reputation we're proud of, and we protect it every day with superior service and genuine care.</p>
              <p className="text-2xl font-bold text-primary-500 mb-8 font-heading">Dependable Plumbing. Exceptional Service. Guaranteed.</p>
              <p className="text-lg text-gray-300 mb-6">Let us earn your trust. Call us today.</p>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="btn btn-primary inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </button>
            </div>
          </div>
        </ScrollReveal>
        
        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
      </div>
    </div>
  );
};

export default OurGuarantee;