import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';

interface FooterProps {
  onServiceClick?: (serviceId: number) => void;
}

const Footer: React.FC<FooterProps> = ({ onServiceClick }) => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const services = [
    { id: 1, title: "New Residential Construction" },
    { id: 2, title: "Faucet & Sink Installation" },
    { id: 3, title: "Residential Service and Repairs" },
    { id: 4, title: "Advanced Drain Cleaning & Camera Diagnostics" },
    { id: 5, title: "Water Heater Repair & Installation" },
    { id: 6, title: "Contractor Collaboration" },
    { id: 7, title: "System Certification & Testing" },
    { id: 8, title: "Toilet Repair & Installation" }
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceClick = (serviceId: number) => {
    if (location.pathname !== '/') {
      // Navigate to home page first, then trigger service modal
      navigate('/');
      setTimeout(() => {
        if (onServiceClick) {
          onServiceClick(serviceId);
        }
      }, 100);
    } else {
      // Scroll to services section first, then open modal
      scrollToSection('services');
      setTimeout(() => {
        if (onServiceClick) {
          onServiceClick(serviceId);
        }
      }, 500);
    }
  };
  
  return (
    <footer id="contact" className="bg-dark-950 pt-16 pb-8 relative z-30">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div>
            <Logo variant="footer" />
            <p className="text-gray-400 mt-4 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              New Construction Areas: Argyle, Azle, Bedford, Blue Mound, Colleyville, Coppell, Decatur, Denton, Double Oak, Euless, Flower Mound, Fort Worth, Grapevine, Haltom City, Haslet, Irving, Justin, Keller, Lake Worth, Mansfield, Newark, North Lake, North Richland Hills, Richland Hills, Roanoke, Saginaw, Shady Shores, Southlake, Trophy Club, Watauga, Westlake, Westover Hills, Westworth Village, White Settlement, Highland Village, and all of the growing North Fort Worth/Tarrant County areas
            </p>
           <p className="text-primary-500 font-semibold text-sm sm:text-base">Responsible Master Plumber License M24068</p>
          </div>
          
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white font-heading">Services</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              {services.map((service) => (
                <li key={service.id}>
                  <button 
                    onClick={() => handleServiceClick(service.id)}
                    className="text-gray-400 hover:text-primary-500 transition-colors text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white font-heading">Company</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <Link to="/our-story" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/our-team" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/gallery')}
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white font-heading">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <li className="flex items-start text-sm sm:text-base">
                <MapPin className="w-5 h-5 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  Office: 834 Blue Mound Road West<br />
                  Haslet Texas<br />
                  <br />
                  Mailing: 3160 Rockwell Lane<br />
                  Fort Worth TX 76179
                </span>
              </li>
              <li className="flex items-start text-sm sm:text-base">
                <Phone className="w-5 h-5 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Office – (817) 439-2488</p>
                  <p className="text-gray-400">Fax – (817) 439-2489</p>
                </div>
              </li>
              <li className="flex items-start text-sm sm:text-base">
                <Mail className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                <a href="mailto:schedule@diversifiedplumbingservices.com" className="text-gray-400 hover:text-primary-500 transition-colors">
                  schedule@diversifiedplumbingservices.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Certification Badges */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 border-t border-dark-800 pt-6 sm:pt-8">
          <img 
            src="/assets/bbb logo.webp" 
            alt="BBB Accredited Business A+" 
            className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
          />
          <img 
            src="/assets/Texas-seal-Woman-2025-500x500.png" 
            alt="SBA Woman Owned Business Certification" 
            className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
          />
          <img 
            src="/assets/SBA Logo.png" 
            alt="U.S. Small Business Administration" 
            className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
          />
          <a 
            href="https://tsbpe.texas.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="/assets/texas_plumbing_board_transparent.png" 
              alt="Texas State Board of Plumbing Examiners" 
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
            />
          </a>
        </div>
        
        <div className="border-t border-dark-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
              &copy; {currentYear} Diversified Plumbing Services. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link to="/terms-of-service" className="text-gray-500 hover:text-primary-500 text-xs sm:text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy-policy" className="text-gray-500 hover:text-primary-500 text-xs sm:text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookie-policy" className="text-gray-500 hover:text-primary-500 text-xs sm:text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;