import React, { useState, useEffect } from 'react';
import { Building2, Users, Calendar, ArrowRight, Award, Handshake, CheckCircle, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../utils/ScrollReveal';
import ContactModal from '../components/ContactModal';
import { ShaderAnimation } from '../components/ui/shader-animation';

const BuilderPartnerships: React.FC = () => {
  const navigate = useNavigate();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePartnershipInquiry = () => {
    navigate('/partners');
  };

  return (
    <div className="pt-28 pb-20 min-h-screen relative overflow-hidden">
      {/* Shader Animation Background */}
      <div className="fixed inset-0 z-0">
        <ShaderAnimation />
        <div className="absolute inset-0 bg-dark-900/60 backdrop-blur-sm"></div>
      </div>
      
      <div className="container-custom">
        <div className="relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 font-['Dancing_Script']">
              <span className="text-white">Builder </span>
              <span className="text-primary-500">Partnerships</span>
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-primary-400 mb-3 sm:mb-4 px-4 sm:px-0">
              Trusted by Leading Builders
            </p>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto px-4 sm:px-0">
              Partner with plumbing solutions designed for efficiency. We deliver reliable, professional solutions that keep projects on schedule and within budget.
            </p>
          </div>
        </ScrollReveal>

        {/* Why Partner With Us */}
        <ScrollReveal delay={100}>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 font-heading">
              <span className="text-white">Why Partner with </span>
              <span className="text-primary-500">Diversified Plumbing?</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <ScrollReveal delay={100}>
            <div className="metallic-card p-4 sm:p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-primary-600 rounded-full p-3 sm:p-4 w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 group-hover:bg-primary-500 transition-colors">
                <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 font-heading">Proven Track Record</h3>
              <p className="text-gray-300 text-sm sm:text-base">15+ years of successful DFW builder partnerships, delivering quality results on time.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="metallic-card p-4 sm:p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-primary-600 rounded-full p-3 sm:p-4 w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 group-hover:bg-primary-500 transition-colors">
                <Building2 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 font-heading">Custom & Production Expertise</h3>
              <p className="text-gray-300 text-sm sm:text-base">Expert in custom homes and production builds, adapting to your project needs.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <div className="metallic-card p-4 sm:p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-primary-600 rounded-full p-3 sm:p-4 w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 group-hover:bg-primary-500 transition-colors">
                <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 font-heading">Reliable Scheduling</h3>
              <p className="text-gray-300 text-sm sm:text-base">Dependable timelines and proactive communication to keep builds on track.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <div className="metallic-card p-4 sm:p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-primary-600 rounded-full p-3 sm:p-4 w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 group-hover:bg-primary-500 transition-colors">
                <Users className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 font-heading">Dedicated Support</h3>
              <p className="text-gray-300 text-sm sm:text-base">Direct communication with dedicated account management for seamless collaboration.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={500}>
            <div className="metallic-card p-4 sm:p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-primary-600 rounded-full p-3 sm:p-4 w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 group-hover:bg-primary-500 transition-colors">
                <Award className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 font-heading">Licensed & Insured</h3>
              <p className="text-gray-300 text-sm sm:text-base">Licensed Master Plumber (M24068) with comprehensive insurance for your peace of mind.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={600}>
            <div className="metallic-card p-4 sm:p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-primary-600 rounded-full p-3 sm:p-4 w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 group-hover:bg-primary-500 transition-colors">
                <Handshake className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 font-heading">Competitive Pricing</h3>
              <p className="text-gray-300 text-sm sm:text-base">Fair, transparent pricing with volume discounts and flexible payment terms.</p>
            </div>
          </ScrollReveal>
        </div>

        {/* Current Builder Partners */}
        {/* Partnership Process */}
        <ScrollReveal delay={700}>
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12 font-heading text-center">
              <span className="text-white">Our Partnership </span>
              <span className="text-primary-500">Process</span>
            </h2>
            
            <div className="relative max-w-6xl mx-auto px-4 sm:px-0">
              {/* Connection Lines */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-500/30 to-transparent transform -translate-y-1/2"></div>
              <div className="hidden lg:block absolute top-1/2 left-1/3 w-0.5 h-32 bg-gradient-to-b from-primary-500/50 to-transparent transform -translate-x-1/2 -translate-y-16"></div>
              <div className="hidden lg:block absolute top-1/2 right-1/3 w-0.5 h-32 bg-gradient-to-b from-primary-500/50 to-transparent transform translate-x-1/2 -translate-y-16"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                {/* Step 1 */}
                <div className="relative group">
                  <div className="metallic-card p-6 sm:p-8 text-center hover:scale-105 transition-all duration-500 relative overflow-hidden">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Step number with glow effect */}
                    <div className="relative mb-4 sm:mb-6">
                      <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-primary-500/50 transition-all duration-500">
                        <span className="text-white font-bold text-xl sm:text-2xl">1</span>
                      </div>
                      <div className="absolute inset-0 bg-primary-500 rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 font-heading text-white group-hover:text-primary-300 transition-colors duration-300">Initial Consultation</h3>
                      <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto mb-3 sm:mb-4 rounded-full"></div>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">We discuss project needs, timelines, and partnership expectations.</p>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary-500/30 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
                </div>
                
                {/* Step 2 */}
                <div className="relative group">
                  <div className="metallic-card p-6 sm:p-8 text-center hover:scale-105 transition-all duration-500 relative overflow-hidden sm:mt-0 lg:mt-8">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Step number with glow effect */}
                    <div className="relative mb-4 sm:mb-6">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-blue-500/50 transition-all duration-500">
                        <span className="text-white font-bold text-xl sm:text-2xl">2</span>
                      </div>
                      <div className="absolute inset-0 bg-blue-500 rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 font-heading text-white group-hover:text-blue-300 transition-colors duration-300">Custom Proposal</h3>
                      <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-3 sm:mb-4 rounded-full"></div>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">We create tailored partnership proposals with pricing and service agreements.</p>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-500/30 rounded-full animate-pulse delay-500"></div>
                  <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-purple-500/30 rounded-full animate-pulse delay-1500"></div>
                </div>
                
                {/* Step 3 */}
                <div className="relative group">
                  <div className="metallic-card p-6 sm:p-8 text-center hover:scale-105 transition-all duration-500 relative overflow-hidden">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-transparent to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Step number with glow effect */}
                    <div className="relative mb-4 sm:mb-6">
                      <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-green-500/50 transition-all duration-500">
                        <span className="text-white font-bold text-xl sm:text-2xl">3</span>
                      </div>
                      <div className="absolute inset-0 bg-green-500 rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 font-heading text-white group-hover:text-green-300 transition-colors duration-300">Partnership Launch</h3>
                      <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto mb-3 sm:mb-4 rounded-full"></div>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">We begin working together with dedicated support and regular communication.</p>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500/30 rounded-full animate-pulse delay-700"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary-500/30 rounded-full animate-pulse delay-2000"></div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Partnership CTA */}
        <ScrollReveal delay={800}>
          <div className="text-center">
            <div className="metallic-card p-6 sm:p-8 max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary-600 rounded-full p-3 sm:p-4">
                  <Handshake className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-semibold font-heading mb-4">Ready to Partner with Us?</h3>
              <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                Join our network of successful builder partnerships. Ask to speak with Ashley Collins or Chris Cyphers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button 
                  onClick={handlePartnershipInquiry}
                  className="btn btn-primary inline-flex items-center gap-2 shadow-lg shadow-primary-900/20"
                >
                  Submit Partnership Inquiry
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="btn btn-secondary inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call to Discuss
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
      </div>
        </div>
    </div>
  );
};

export default BuilderPartnerships;