import React, { useState } from 'react';
import { 
  Droplets, 
  AlertTriangle, 
  Calendar, 
  Wrench, 
  ThermometerSun,
  Info,
  ChevronDown,
  ChevronUp,
  Flame
} from 'lucide-react';
import ScrollReveal from '../utils/ScrollReveal';
import ContactModal from './ContactModal';

interface TipProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const Tip: React.FC<TipProps> = ({ icon, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="metallic-card overflow-hidden backdrop-blur-sm bg-dark-900/80">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 sm:p-6 flex items-center justify-between hover:bg-dark-800/50 transition-colors"
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="bg-dark-700 group-hover:bg-primary-600 rounded-lg p-2 sm:p-3 transition-colors duration-300 flex-shrink-0">
            {icon}
          </div>
          <h3 className="text-lg sm:text-xl font-semibold font-heading text-left">{title}</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-primary-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-primary-500 flex-shrink-0" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-4 sm:p-6 pt-0 text-gray-300 text-sm sm:text-base leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
};

const tips = [
  {
    icon: <Droplets className="w-6 h-6 text-gray-200" />,
    title: "Water Heater Maintenance",
    content: "Regular maintenance is essential for both tanked and tankless water heaters. For traditional tank water heaters, annual flushing prevents sediment buildup that reduces efficiency and shortens lifespan. Tankless units require periodic descaling to remove mineral deposits from the heat exchanger, especially in areas with hard water. Both systems benefit from professional inspection of venting, gas connections, and safety components to ensure optimal performance and safety."
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-gray-200" />,
    title: "Drain Care Guidelines",
    content: "Never pour grease, coffee grounds, or 'flushable' wipes down drains. These common items are leading causes of clogs. For grease, let it cool and dispose in the trash. Use drain strainers in sinks and clean them regularly."
  },
  {
    icon: <Info className="w-6 h-6 text-gray-200" />,
    title: "Signs of Hidden Leaks",
    content: "Watch for unexplained high water bills, musty odors, water stains on walls/ceilings, or unusually green patches in your yard. If you suspect a leak, check your water meter before and after a two-hour period of no water use. Any change indicates a leak."
  },
  {
    icon: <Wrench className="w-6 h-6 text-gray-200" />,
    title: "Emergency Water Shutoff",
    content: "Locate your main water shutoff at the street meter now, before an emergency occurs. It's typically located in your utility area, garage, or at the main water meter near the street. Mark it with a bright tag and ensure it's easily accessible. In an emergency, turn clockwise to shut off. Every household member should know its location and how to operate it."
  },
  {
    icon: <Flame className="w-6 h-6 text-gray-200" />,
    title: "Emergency Gas Shutoff",
    content: "Plumbers install gas systems from the meter to all appliances inside your home. From the meter inside, the system is the homeowner's responsibility, not the gas company's. If you smell gas, evacuate immediately, don't use electrical switches or phones inside, and call a licensed plumber from a safe location. Know that every gas appliance has its own shutoff valve, and there's a main gas shutoff valve at your meter. In an emergency, turn the main valve 90 degrees (quarter turn) using a wrench so it's perpendicular to the pipe. Only qualified professionals should turn gas back on. For any gas system issues or concerns, call a licensed plumber to investigate and fix the problem safely."
  },
  {
    icon: <ThermometerSun className="w-6 h-6 text-gray-200" />,
    title: "Seasonal Plumbing Tips",
    content: "In winter, insulate exposed pipes and disconnect garden hoses. Keep your home heated to at least 55°F, even when away. In summer, check outdoor faucets and irrigation systems for leaks. Clean gutters in spring and fall to prevent water damage."
  },
  {
    icon: <Calendar className="w-6 h-6 text-gray-200" />,
    title: "When to Call a Professional",
    content: "While minor clogs can be DIY-fixed with a plunger, call a professional for: persistent clogs, sewer line issues, water heater problems, low water pressure throughout the house, or any gas line concerns. These issues require specialized tools and expertise."
  }
];

const PlumbingTips: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  return (
    <>
      <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container-custom relative z-20">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 font-['Dancing_Script']">
              <span className="text-white">Plumbing </span>
              <span className="text-primary-500">Tips & Advice</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
              Expert guidance to help you maintain your plumbing system and prevent costly repairs. Knowledge is power when it comes to protecting your home's plumbing.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid gap-4 max-w-3xl mx-auto">
          {tips.map((tip, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Tip {...tip} />
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={400}>
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-gray-300 mb-6">
              Need professional help with your plumbing? Our expert team is ready to assist.
            </p>
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
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default PlumbingTips;