import React from 'react';
import { useState } from 'react';
import { Home, Building2, Wrench, Camera, Zap, Users, ClipboardCheck, Droplets, Filter, Wrench as WrenchAlt, Search, X, Facebook as Faucet } from 'lucide-react';
import ScrollReveal from '../utils/ScrollReveal';
import ContactModal from './ContactModal';

interface ServicesProps {
  selectedServiceId?: number | null;
  onServiceModalClose?: () => void;
}

const services = [
  {
    id: 1,
    title: "New Residential Construction",
    description: "Expert custom home construction and residential builds with premium plumbing solutions tailored to your needs.",
    icon: Home,
    details: "Building a new home? We partner with homeowners and builders to design complete plumbing systems built to last. From underground to final trim, our work is clean, code-compliant, and crafted with care."
  },
  {
    id: 2,
    title: "Faucet & Sink Installation",
    description: "Professional faucet and sink installation for kitchens, bathrooms, and utility areas.",
    icon: Faucet,
    details: "Transform your kitchen or bathroom with stylish sinks and faucets. We work with trusted brands like Kohler, Moen, and Delta for long-term performance and water efficiency."
  },
  {
    id: 3,
    title: "Residential Service and Repairs",
    description: "Professional residential repairs with minimal disruption to your daily routine.",
    icon: Wrench,
    details: "Leaky faucets, strange noises, low water pressure — we've fixed it all. Our team handles small repairs to major fixes with promptness and professionalism."
  },
  {
    id: 4,
    title: "Advanced Drain Cleaning & Camera Diagnostics",
    description: "Advanced diagnostic equipment and cleaning techniques to resolve drainage issues efficiently.",
    icon: Camera,
    details: "Slow drains are early warning signs. Our video inspections and precision cleaning tools remove stubborn clogs before they become bigger issues."
  },
  {
    id: 5,
    title: "Water Heater Repair & Installation",
    description: "Expert water heater repair, replacement, and energy-efficient installations for reliable hot water.",
    icon: Zap,
    details: "Cold showers? Not on our watch. We offer reliable repairs and energy-efficient tankless water heaters to ensure your mornings start warm."
  },
  {
    id: 6,
    title: "Contractor Collaboration",
    description: "Smart, cost-effective solutions through seamless collaboration with contractors and builders.",
    icon: Users,
    details: "We work with contractors, not just for them. Our seamless communication and quality commitment make us a trusted partner from custom builds to production homes."
  },
  {
    id: 7,
    title: "System Certification & Testing",
    description: "Comprehensive code-compliant certification and testing to ensure safety and reliability.",
    icon: ClipboardCheck,
    details: "No guesswork with compliance and safety. Our certified testing ensures your system meets all standards. From pressure checks to backflow testing, we keep you ahead of inspections."
  },
  {
    id: 8,
    title: "Toilet Repair & Installation",
    description: "Complete toilet repair, replacement, and installation for reliable bathroom functionality.",
    icon: WrenchAlt,
    details: "From clogs to outdated toilets, we handle every issue with care. We offer water-saving options to reduce bills and environmental impact."
  },
];

const Services: React.FC<ServicesProps> = ({ selectedServiceId, onServiceModalClose }) => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Handle external service selection
  React.useEffect(() => {
    if (selectedServiceId) {
      const service = services.find(s => s.id === selectedServiceId);
      if (service) {
        setSelectedService(service);
      }
    }
  }, [selectedServiceId]);

  const openModal = (service: typeof services[0]) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
    if (onServiceModalClose) {
      onServiceModalClose();
    }
  };

  return (
    <>
      <section id="services" className="relative -mt-20 pt-32 pb-32">
        <div className="container-custom relative z-20">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 font-['Dancing_Script']">
                <span className="text-white">Our </span>
                <span className="text-primary-500">Specialized</span>
                <span className="text-white"> Services</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg px-4 sm:px-0">
                Our team understands the demands of both custom and production builds — and we're ready to bring that expertise to your next project.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-7xl mx-auto">
            {/* First 6 services in normal grid */}
            {services.slice(0, 6).map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 100}>
                <div className="metallic-card group h-full hover:scale-105 transition-transform duration-300 min-h-[260px] sm:min-h-[280px]">
                  <div className="p-3 sm:p-4 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="bg-dark-700 group-hover:bg-primary-600 rounded-lg p-2 mr-2 sm:mr-3 transition-colors duration-300 flex-shrink-0">
                        <service.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-200" />
                      </div>
                      <h3 className="text-sm sm:text-base font-semibold font-heading leading-tight">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 flex-grow text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{service.description}</p>
                    <div className="mt-auto">
                      <button 
                        onClick={() => openModal(service)}
                        className="inline-flex items-center text-primary-500 hover:text-primary-400 font-medium transition-colors text-xs sm:text-sm"
                      >
                        Learn More
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                          <path 
                            fillRule="evenodd" 
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          {/* Last 2 services centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto mt-4 lg:mt-6">
            {services.slice(6, 8).map((service, index) => (
              <ScrollReveal key={service.id} delay={(index + 6) * 100}>
                <div className="metallic-card group h-full hover:scale-105 transition-transform duration-300 min-h-[260px] sm:min-h-[280px]">
                  <div className="p-3 sm:p-4 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="bg-dark-700 group-hover:bg-primary-600 rounded-lg p-2 mr-2 sm:mr-3 transition-colors duration-300 flex-shrink-0">
                        <service.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-200" />
                      </div>
                      <h3 className="text-sm sm:text-base font-semibold font-heading leading-tight">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 flex-grow text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{service.description}</p>
                    <div className="mt-auto">
                      <button 
                        onClick={() => openModal(service)}
                        className="inline-flex items-center text-primary-500 hover:text-primary-400 font-medium transition-colors text-xs sm:text-sm"
                      >
                        Learn More
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                          <path 
                            fillRule="evenodd" 
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="text-center mt-12 sm:mt-16">
              <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg px-4 sm:px-0">Let's build something great. Call us today.</p>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="btn btn-primary shadow-lg shadow-primary-900/20"
              >
                Call Now
              </button>
            </div>
          </ScrollReveal>
        </div>

      </section>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-dark-800 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary-600 rounded-lg p-2">
                    <selectedService.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold font-heading text-white">{selectedService.title}</h3>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">{selectedService.details}</p>
              <div className="flex gap-4">
                <a 
                  href="#request" 
                  onClick={closeModal}
                  className="btn btn-primary"
                >
                  Request Service
                </a>
                <button 
                  onClick={() => { closeModal(); setIsContactModalOpen(true); }}
                  className="btn btn-secondary"
                >
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default Services;