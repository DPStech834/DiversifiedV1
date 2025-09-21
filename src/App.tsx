import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PlumbingTips from './components/PlumbingTips';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import RequestForm from './components/RequestForm';
import Footer from './components/Footer';
import OurStory from './pages/OurStory';
import OurTeam from './pages/OurTeam';
import Careers from './pages/Careers';
import OurGuarantee from './pages/OurGuarantee';
import Gallery from './pages/Gallery';
import Partners from './pages/Partners';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);

  const handleServiceClick = (serviceId: number) => {
    setSelectedServiceId(serviceId);
  };

  return (
    <Router>
      <div className="bg-dark-900 text-gray-100 min-h-screen relative">
        {/* Fixed Spline Animation Background */}
        <div className="spline-container">
          <Spline 
            scene="https://prod.spline.design/KYxzAkTaWg8B1cuK/scene.splinecode"
          />
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/our-guarantee" element={<OurGuarantee />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/builder-partnerships" element={<Navigate to="/partners" replace />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/" element={
              <main>
                <Hero />
                <Services selectedServiceId={selectedServiceId} onServiceModalClose={() => setSelectedServiceId(null)} />
                <PlumbingTips />
                <Projects />
                <Testimonials />
                <RequestForm />
              </main>
            } />
          </Routes>
          <Footer onServiceClick={handleServiceClick} />
        </div>
      </div>
    </Router>
  );
}

export default App;