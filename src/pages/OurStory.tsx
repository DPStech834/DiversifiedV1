import React, { useEffect } from 'react';
import ScrollReveal from '../utils/ScrollReveal';
import { useNavigate, useLocation } from 'react-router-dom';
import { SparklesCore } from '../components/ui/sparkles';

const OurStory: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBeginClick = () => {
    if (location.pathname !== '/') {
      navigate('/#request');
      return;
    }

    const element = document.getElementById('request');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-28 pb-20 min-h-screen relative bg-black">
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={10} /* Reduced from 100 to 10 (90% reduction) */
          className="w-full h-full"
          particleColor="#666666"
          speed={0.5}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-content">
            <h1 className="text-4xl md:text-5xl font-['Dancing_Script'] mb-8 text-center">
              <span className="text-white">Our Story Begins with </span>
              <span className="text-primary-500">Vision, Grit, and Heart</span>
            </h1>
            
            <div className="max-w-3xl mx-auto space-y-8">
              <p className="text-xl font-medium text-white">
                Established in 2007, Diversified Plumbing Services was born from a bold idea — a partnership between a determined mother, a forward-thinking daughter, and seasoned plumbing experts. Together, they blended years of experience across investment, contract management, and hands-on plumbing to create something greater than the sum of its parts: a company built on trust, skill, and an unwavering dedication to people.
              </p>
              
              <p className="text-xl font-medium text-white">
                Founder and President Kathy Caufield took a leap of faith, investing in a dream that would become a thriving, customer-first plumbing business. With the craftsmanship of Chris Cyphers, Ashley Collins, Shawn Pruitt, and the commitment of an exceptional team, Diversified Plumbing Services has grown steadily — not just through quality work, but through lasting relationships.
              </p>
              
              <p className="text-xl font-medium text-white">
                As we expand our team and our reach, we never lose sight of what matters most: you. Every customer, every contractor, every partner has played a role in shaping who we are. And we're just getting started.
              </p>
              
              <div className="pt-8">
                <h2 className="text-3xl font-bold mb-6 font-heading text-white">
                  What We Stand For
                </h2>
                
                <p className="text-xl font-medium text-white mb-6">
                  We are a tight-knit team of qualified professionals with a shared mission: to deliver high-quality plumbing services for custom and new construction homes with precision, integrity, and care. From initial planning to final installation, we manage each job with the kind of attention to detail that turns first-time clients into lifelong customers.
                </p>
                
                <p className="text-xl font-medium text-white mb-6">
                  We believe in doing right by people — offering fair pricing, clear communication, and craftsmanship that speaks for itself. For us, plumbing is more than pipes and fittings. It's about building trust, solving problems, and showing up when it matters most.
                </p>
                
                <p className="text-xl font-medium text-white">
                  At Diversified Plumbing Services, we're proud to be the team you can rely on — not just for today's job, but for everything that comes next.
                </p>
              </div>
              
              <div className="text-center pt-8">
                <p className="text-2xl font-semibold text-white mb-8">
                  Let's build something that lasts.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Begin Button Section */}
      <section className="py-16 relative z-30">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center">
              <button 
                onClick={handleBeginClick}
                className="relative inline-block px-12 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 group cursor-pointer"
              >
                <span className="relative z-10">Begin</span>
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 rounded-full bg-primary-500 opacity-0 group-hover:opacity-30 blur-lg transition-all duration-300 group-hover:blur-xl"></div>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default OurStory;