import React from 'react';
import Spline from '@splinetool/react-spline';
import { AlertCircle, Phone } from 'lucide-react';
import ScrollReveal from '../utils/ScrollReveal';

const EmergencyCallout: React.FC = () => {
  return (
    <section className="py-10 md:py-16 bg-dark-900 relative overflow-hidden">
      {/* Spline Animation Background */}
      <div className="absolute inset-0 z-0" style={{ pointerEvents: 'auto' }}>
        <Spline 
          className="w-full h-full"
          scene="https://prod.spline.design/dhTyrvpNlKk36mjS/scene.splinecode"
        />
      </div>
      
      {/* Content Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/70 to-dark-900/80 z-10"
        style={{ pointerEvents: 'none' }}
      ></div>
      
      <div className="container-custom relative z-20">
        <ScrollReveal>
          <div 
            className="bg-gradient-to-r from-primary-800/90 to-primary-700/90 rounded-xl p-6 md:p-8 lg:p-10 shadow-xl backdrop-blur-sm"
            style={{ pointerEvents: 'auto' }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-white p-3 flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-heading">
                    Emergency Plumbing Service
                  </h3>
                  <p className="text-gray-100 max-w-xl">
                    Plumbing emergencies don't wait for convenient hours. Our technicians are available 24/7 for urgent plumbing situations.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+12345678900"
                  className="flex items-center justify-center gap-2 bg-white text-primary-600 hover:bg-gray-100 transition-colors rounded-md px-6 py-3 font-medium"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Emergency Line</span>
                </a>
                <a 
                  href="#request"
                  className="flex items-center justify-center gap-2 bg-dark-900 text-white hover:bg-dark-800 transition-colors rounded-md px-6 py-3 font-medium"
                >
                  Request Service
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EmergencyCallout;