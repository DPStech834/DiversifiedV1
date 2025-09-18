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
    content: "Regular maintenance is essential for all water heaters. Tank units need annual flushing to prevent sediment buildup. Tankless units require descaling to remove mineral deposits. Both benefit from professional inspection of venting, gas connections, and safety components."
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-gray-200" />,
    title: "Drain Care Guidelines",
    content: "Never pour grease, coffee grounds, or 'flushable' wipes down drains. These cause most clogs. Let grease cool and trash it. Use drain strainers and clean them regularly."
  },
  {
    icon: <Info className="w-6 h-6 text-gray-200" />,
    title: "Signs of Hidden Leaks",
    content: "Watch for high water bills, musty odors, water stains, or green yard patches. To check for leaks, read your water meter before and after two hours of no water use. Any change indicates a leak."
  },
  {
    icon: <Wrench className="w-6 h-6 text-gray-200" />,
    title: "Emergency Water Shutoff",
    content: "Find your main water shutoff now, before emergencies. It's usually in your utility area, garage, or near the street meter. Mark it clearly and ensure easy access. Turn clockwise to shut off. All household members should know its location."
  },
  {
    icon: <Flame className="w-6 h-6 text-gray-200" />,
    title: "Emergency Gas Shutoff",
    content: "Gas systems from the meter inside are your responsibility. If you smell gas, evacuate immediately. Don't use switches or phones inside. Call a licensed plumber from safety. Each appliance has a shutoff valve, plus a main valve at your meter. Emergency: turn main valve 90 degrees with wrench. Only professionals should restore gas service."
  },
  {
    icon: <ThermometerSun className="w-6 h-6 text-gray-200" />,
    title: "Seasonal Plumbing Tips",
    content: "Winter: insulate pipes, disconnect hoses, keep home at 55°F minimum. Summer: check outdoor faucets and irrigation for leaks. Spring/fall: clean gutters to prevent water damage."
  },
  {
    icon: <Calendar className="w-6 h-6 text-gray-200" />,
    title: "When to Call a Professional",
    content: "DIY minor clogs with a plunger. Call professionals for: persistent clogs, sewer issues, water heater problems, house-wide low pressure, or gas line concerns. These need specialized tools and expertise."
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
              Expert guidance to maintain your plumbing and prevent costly repairs. Knowledge protects your home's plumbing.
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