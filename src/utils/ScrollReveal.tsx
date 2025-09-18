import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const current = domRef.current;
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a timeout for the delay
          setTimeout(() => {
            setIsVisible(true);
            
            // Once it's visible, we don't need to observe anymore
            if (current) observer.unobserve(current);
          }, delay);
        }
      });
    }, { threshold: 0.15 });
    
    if (current) observer.observe(current);
    
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [delay]);
  
  return (
    <div
      ref={domRef}
      className={`reveal-animation ${isVisible ? 'revealed' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;