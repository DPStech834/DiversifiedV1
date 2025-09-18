import React, { useState, useEffect } from 'react';
import { WrenchIcon, ShieldCheck, Clock, Users, Wallet, PenTool as Tool } from 'lucide-react';
import ScrollReveal from '../utils/ScrollReveal';
import ContactModal from './ContactModal';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  const highlights = [
    "Expert Plumbing",
    "Quality Service",
    "Fair Pricing"
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % highlights.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-32 md:pt-36 md:pb-48">
      <div className="container-custom relative z-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <ScrollReveal>
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-['Dancing_Script'] leading-tight">
                <span className="text-white">Built on Trust. Backed by Experience.</span>{' '}
                <span className="text-primary-500">Committed to You.</span>
              </h1>
              
              <div className="h-12 my-4 overflow-hidden relative flex justify-center md:justify-start">
                {highlights.map((text, index) => (
                  <p 
                    key={index}
                    className={`text-lg sm:text-xl md:text-2xl transition-all duration-500 transform ${
                      currentText === index 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-10 opacity-0 absolute'
                    }`}
                  >
                    <span className="font-medium text-primary-500">{text}</span>
                  </p>
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
                Family-owned plumbing experts serving Dallas/Fort Worth since 2007. We deliver quality craftsmanship and reliable residential solutions tailored to your needs.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
                <a href="#request" className="btn btn-primary shadow-lg shadow-primary-900/20">
                  Request Service
                </a>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="btn btn-secondary"
                >
                  Call Now
                </button>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="metallic-card p-4 sm:p-6 md:p-6 lg:p-8 rounded-xl mt-6 sm:mt-8 md:mt-0 backdrop-blur-sm bg-dark-900/30">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 font-heading">Why Choose Us?</h3>
              <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                We build relationships, not just transactions. Trusted by DFW homeowners, contractors, and builders with fair pricing and reliable service.
              </p>
              <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                Decades of experience in precision installations and service calls. From dream homes to commercial upgrades, we deliver exceptional results with integrity and care.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-primary-600 rounded-lg p-2 sm:p-3">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 font-heading">Relationship Focused</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Building lasting partnerships through exceptional service.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-primary-600 rounded-lg p-2 sm:p-3">
                    <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 font-heading">Fair & Transparent</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Upfront pricing with no hidden fees.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-primary-600 rounded-lg p-2 sm:p-3">
                    <Tool className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 font-heading">Expert Craftsmanship</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Decades of experience delivering precision and quality.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;