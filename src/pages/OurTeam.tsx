import React, { useState, useEffect } from 'react';
import ScrollReveal from '../utils/ScrollReveal';
import { User } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import ContactModal from '../components/ContactModal';

const teamMembers = [
  {
    name: "Chris Cyphers",
    role: "Responsible Master Plumber",
    description: "As the Vice President and Responsible Master Plumber at Diversified Plumbing Services, Chris brings 40 years of dedicated experience to both residential and commercial projects. His profound expertise and leadership drive our commitment to quality craftsmanship and ensure every project reflects the superior standards our clients expect and deserve.",
    description: "VP and Responsible Master Plumber with 40 years of experience in residential and commercial projects. Chris's expertise and leadership drive our commitment to quality craftsmanship and superior standards.",
    photo: "/assets/chrispic.jpeg"
  },
  {
    name: "Ashley Collins",
    role: "Business & Relations Director",
    description: "As Business & Relations Director, Ashley bridges the gap between our office, field crews, and builder partners, fostering strong relationships and ensuring smooth project delivery. She expertly manages the entire project lifecycle – from initial contracts and scheduling to invoicing, material coordination, and daily communication – ensuring each detail is meticulously handled and each project, whether production or custom home build, progresses efficiently to a successful completion.",
    description: "Business & Relations Director bridging office, field crews, and builder partners. Ashley manages the complete project lifecycle from contracts to completion, ensuring every detail is handled meticulously.",
    photo: "/assets/ashleypfp.JPG"
  },
  {
    name: "Shawn Pruitt",
    role: "Operations Manager",
    description: "As Operations Manager, Shawn draws upon over 25 years of plumbing and project management experience to guide Diversified Plumbing Services. A certified Master Plumber, Shawn's leadership is evident in his hands-on approach to every aspect of the business – from designing plumbing layouts and coordinating crews to meticulously overseeing site inspections and ensuring safety compliance. His focus on building strong relationships with clients and partners, coupled with his problem-solving skills and commitment to operational excellence, drives Diversified Plumbing's reputation for quality and reliability.",
    description: "Operations Manager with 25+ years of plumbing and project management experience. Certified Master Plumber Shawn leads with a hands-on approach from design to safety compliance, building strong relationships and driving our reputation for quality.",
    photo: "/assets/ShawnPruitt.JPG"
  }
];

const OurTeam: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-20 min-h-screen relative bg-black">
      {/* Team Page Spline Animation */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          pointerEvents: 'auto',
          transform: 'scale(1.5) translateX(-15%)',
          transformOrigin: 'center center'
        }}
      >
        <Spline 
          className="w-full h-full"
          scene="https://prod.spline.design/q6VN8QVRtNIytGvt/scene.splinecode"
        />
      </div>

      <div 
        className="container-custom relative z-20"
        style={{ pointerEvents: 'none' }}
      >
        <ScrollReveal>
          <div style={{ pointerEvents: 'auto' }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 font-['Dancing_Script'] text-center">
              <span className="text-white">Meet Our </span>
              <span className="text-primary-500">Team</span>
            </h1>
            
            <p className="text-gray-300 text-base sm:text-lg text-center max-w-3xl mx-auto mb-8 sm:mb-16 px-4 sm:px-0">
              Our success is built on team dedication and expertise. Each member brings unique skills to deliver exceptional service.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {teamMembers.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 100}>
                  <div className="metallic-card group overflow-hidden backdrop-blur-sm bg-black/30 sm:col-span-1 lg:col-span-1">
                    <div className="relative bg-dark-800/50 flex items-center justify-center p-6 sm:p-8 h-56 sm:h-64">
                      {member.photo ? (
                        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-primary-500/30">
                          <img 
                            src={member.photo} 
                            alt={member.name}
                            className={`w-full h-full object-cover ${
                              member.name === 'Chris Cyphers' || member.name === 'Ashley Collins' 
                                ? 'filter brightness-110 contrast-110 saturate-110 blur-0' :
                              member.name === 'Shawn Pruitt'
                                ? 'filter brightness-110 contrast-110 saturate-110 blur-0'
                                : ''
                            }`}
                            style={{ 
                              objectPosition: member.name === 'Shawn Pruitt' ? 'center 30%' : 
                                            member.name === 'Chris Cyphers' ? 'center 10%' : 
                                            member.name === 'Ashley Collins' ? 'right center' : 'center 20%'
                            }}
                          />
                        </div>
                      ) : (
                        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-primary-500/30 bg-dark-700 flex items-center justify-center">
                          <User className="w-24 h-24 text-gray-600" />
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 font-heading">{member.name}</h3>
                      <p className="text-primary-500 font-medium mb-3 sm:mb-4 text-sm sm:text-base">{member.role}</p>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{member.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            <ScrollReveal delay={400}>
              <div className="text-center mt-12 sm:mt-16">
                <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 px-4 sm:px-0">
                  Ready to work with our expert team? Contact us today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <button 
                    onClick={() => setIsContactModalOpen(true)}
                    className="btn btn-primary"
                  >
                    Call Now
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default OurTeam;