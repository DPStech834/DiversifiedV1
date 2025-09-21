import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-900/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/our-story" className="text-gray-200 hover:text-primary-500 transition-colors font-medium">
            Our Story
          </Link>
          <Link to="/our-team" className="text-gray-200 hover:text-primary-500 transition-colors font-medium">
            Our Team
          </Link>
          <Link to="/our-guarantee" className="text-gray-200 hover:text-primary-500 transition-colors font-medium">
            Our Guarantee
          </Link>
          <button 
            onClick={() => scrollToSection('services')} 
            className="text-gray-200 hover:text-primary-500 transition-colors font-medium"
          >
            Services
          </button>
          <Link 
            to="/partners"
          </Link>
          <button 
            onClick={() => navigate('/gallery')}
            className="text-gray-200 hover:text-primary-500 transition-colors font-medium"
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')} 
            className="text-gray-200 hover:text-primary-500 transition-colors font-medium"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('request')} 
            className="btn btn-primary"
          >
            Request Service
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <a 
            href="tel:+18174392488" 
            className="mr-4 bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 transition-colors"
            aria-label="Call us"
          >
            <Phone size={20} />
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-200 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden bg-dark-800 shadow-lg transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        } absolute top-full left-0 w-full`}
      >
        <div className="container-custom py-4 space-y-3">
          <Link 
            to="/our-story" 
            className="block py-2 text-gray-200 hover:text-primary-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Story
          </Link>
          <Link 
            to="/our-team" 
            className="block py-2 text-gray-200 hover:text-primary-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Team
          </Link>
          <Link 
            to="/our-guarantee" 
            className="block py-2 text-gray-200 hover:text-primary-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Guarantee
          </Link>
          <button 
            onClick={() => scrollToSection('services')}
            className="block w-full text-left py-2 text-gray-200 hover:text-primary-500 transition-colors"
          >
            Services
          </button>
          <Link 
            to="/partners" 
            className="block py-2 text-gray-200 hover:text-primary-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Builder Partnerships
          </Link>
          <button 
            onClick={() => { navigate('/gallery'); setIsMenuOpen(false); }}
            className="block w-full text-left py-2 text-gray-200 hover:text-primary-500 transition-colors"
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="block w-full text-left py-2 text-gray-200 hover:text-primary-500 transition-colors"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('request')}
            className="block w-full py-2 text-white bg-primary-600 hover:bg-primary-700 px-4 rounded transition-colors"
          >
            Request Service
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;