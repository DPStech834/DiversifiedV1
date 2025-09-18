import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface LogoProps {
  variant?: 'navbar' | 'footer';
}

const Logo: React.FC<LogoProps> = ({ variant = 'navbar' }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const logoSrc = variant === 'navbar' 
    ? '/assets/Diversified_Logo_WhiteText_Sharp.png'
    : '/assets/-Diversified Logo.png';

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      // If not on home page, navigate to home
      navigate('/');
    } else {
      // If on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <a href="/" onClick={handleLogoClick} className="flex items-center cursor-pointer">
      <img 
        src={logoSrc}
        alt="Diversified Plumbing Services" 
        className="h-12 md:h-14"
      />
    </a>
  );
};

export default Logo;