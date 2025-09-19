import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import ScrollReveal from '../utils/ScrollReveal';

// Custom Homes projects (first carousel)
const customHomesProjects = [
  {
    id: 14,
    title: "Residential Plumbing Project",
    description: "Professional plumbing installation showcasing quality workmanship.",
    image: "/assets/project pictures/102.jpg"
  },
  {
    id: 15,
    title: "Custom Home Plumbing",
    description: "Complete plumbing system installation for custom residential project.",
    image: "/assets/project pictures/24.jpg"
  },
  {
    id: 17,
    title: "Residential Service",
    description: "Quality residential plumbing service and installation.",
    image: "/assets/project pictures/IMG_1630 (1).jpg"
  },
  {
    id: 18,
    title: "Plumbing System Work",
    description: "Comprehensive plumbing system installation and service.",
    image: "/assets/project pictures/IMG_2310.jpg"
  },
  {
    id: 19,
    title: "Professional Installation",
    description: "Expert plumbing installation with attention to detail.",
    image: "/assets/project pictures/IMG_7689 (1).jpg"
  },
  {
    id: 20,
    title: "Quality Plumbing Work",
    description: "High-quality plumbing installation and craftsmanship.",
    image: "/assets/project pictures/IMG_7705 (1).jpg"
  },
  {
    id: 16,
    title: "Plumbing Installation",
    description: "Professional plumbing installation with modern fixtures.",
    image: "/assets/project pictures/IMG_1301.jpg"
  }
];

// New Construction Homes projects (second carousel)
const newConstructionProjects = [
  {
    id: 5,
    title: "Completed Home Project",
    description: "Finished residential plumbing installation showcasing quality craftsmanship.",
    image: "/assets/project pictures/postHouse1.jpg"
  },
  {
    id: 6,
    title: "Custom Home Completion",
    description: "Final result of comprehensive plumbing system installation in custom home.",
    image: "/assets/project pictures/postHouse2.jpg"
  },
  {
    id: 7,
    title: "Pre-Construction Planning",
    description: "Initial phase of residential plumbing project showing site preparation.",
    image: "/assets/project pictures/preHouse1.jpg"
  },
  {
    id: 8,
    title: "Foundation Plumbing",
    description: "Underground plumbing installation during early construction phase.",
    image: "/assets/project pictures/preHouse2.jpg"
  },
  {
    id: 9,
    title: "Modern Bathroom Installation",
    description: "Professional bathroom plumbing installation with modern fixtures and finishes.",
    image: "/assets/project pictures/bathroom1.jpg"
  },
  {
    id: 10,
    title: "Luxury Bathroom Renovation",
    description: "Complete bathroom renovation featuring high-end plumbing fixtures and custom installation.",
    image: "/assets/project pictures/bathroom2.jpg"
  },
  {
    id: 11,
    title: "New Construction Framing",
    description: "Rough-in plumbing installation during new home construction framing phase.",
    image: "/assets/project pictures/houseFrame1.jpg"
  },
  {
    id: 12,
    title: "Kitchen Plumbing Installation",
    description: "Professional kitchen plumbing installation with modern appliance connections.",
    image: "/assets/project pictures/kitchen1.jpg"
  },
  {
    id: 13,
    title: "Plumbing System Layout",
    description: "Detailed plumbing system layout and installation for residential construction.",
    image: "/assets/project pictures/layout2.jpg"
  }
];

// Combine both rows of projects
const allProjects = [...customHomesProjects, ...newConstructionProjects];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [isTransitioning1, setIsTransitioning1] = useState(false);
  const [isTransitioning2, setIsTransitioning2] = useState(false);
  const itemsPerView = 4; // Number of items visible at once
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Create duplicated arrays for infinite scroll for each carousel
  const duplicatedProjects1 = [...customHomesProjects, ...customHomesProjects, ...customHomesProjects];
  const duplicatedProjects2 = [...newConstructionProjects, ...newConstructionProjects, ...newConstructionProjects];
  const totalItems1 = duplicatedProjects1.length;
  const totalItems2 = duplicatedProjects2.length;
  const startIndex1 = customHomesProjects.length; // Start in the middle set
  const startIndex2 = newConstructionProjects.length; // Start in the middle set

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? allProjects.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === allProjects.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  // Carousel 1 functions
  const scrollLeft1 = () => {
    if (isTransitioning1) return;
    
    setIsTransitioning1(true);
    setCurrentIndex1(prev => prev - 1);
    
    setTimeout(() => {
      setIsTransitioning1(false);
    }, 300);
  };

  const scrollRight1 = () => {
    if (isTransitioning1) return;
    
    setIsTransitioning1(true);
    setCurrentIndex1(prev => prev + 1);
    
    setTimeout(() => {
      setIsTransitioning1(false);
    }, 300);
  };

  // Carousel 2 functions
  const scrollLeft2 = () => {
    if (isTransitioning2) return;
    
    setIsTransitioning2(true);
    setCurrentIndex2(prev => prev - 1);
    
    setTimeout(() => {
      setIsTransitioning2(false);
    }, 300);
  };

  const scrollRight2 = () => {
    if (isTransitioning2) return;
    
    setIsTransitioning2(true);
    setCurrentIndex2(prev => prev + 1);
    
    setTimeout(() => {
      setIsTransitioning2(false);
    }, 300);
  };

  // Handle infinite scroll reset for carousel 1
  React.useEffect(() => {
    if (!isTransitioning1 && currentIndex1 !== startIndex1) {
      // Only reset if we've moved significantly from center
      const distanceFromCenter = Math.abs(currentIndex1 - startIndex1);
      if (distanceFromCenter >= customHomesProjects.length) {
        // Instantly jump to equivalent position in center set without transition
        const newIndex = ((currentIndex1 - startIndex1) % customHomesProjects.length) + startIndex1;
        if (newIndex >= 0) {
          setCurrentIndex1(newIndex);
        }
      }
    }
  }, [currentIndex1, isTransitioning1, startIndex1]);

  // Handle infinite scroll reset for carousel 2
  React.useEffect(() => {
    if (!isTransitioning2 && currentIndex2 !== startIndex2) {
      // Only reset if we've moved significantly from center
      const distanceFromCenter = Math.abs(currentIndex2 - startIndex2);
      if (distanceFromCenter >= newConstructionProjects.length) {
        // Instantly jump to equivalent position in center set without transition
        const newIndex = ((currentIndex2 - startIndex2) % newConstructionProjects.length) + startIndex2;
        if (newIndex >= 0) {
          setCurrentIndex2(newIndex);
        }
      }
    }
  }, [currentIndex2, isTransitioning2, startIndex2]);

  // Initialize to middle set for both carousels
  React.useEffect(() => {
    setCurrentIndex1(startIndex1);
    setCurrentIndex2(startIndex2);
  }, []);

  const getVisibleProjects1 = () => {
    const visibleProjects = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex1 + i) % totalItems1;
      visibleProjects.push({
        ...duplicatedProjects1[index],
        originalIndex: index % customHomesProjects.length
      });
    }
    return visibleProjects;
  };

  const getVisibleProjects2 = () => {
    const visibleProjects = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex2 + i) % totalItems2;
      visibleProjects.push({
        ...duplicatedProjects2[index],
        originalIndex: (index % newConstructionProjects.length) + customHomesProjects.length
      });
    }
    return visibleProjects;
  };

  return (
    <div className="min-h-screen bg-dark-900 pt-28 pb-20 relative">
      {/* Fixed Spline Animation Background */}
      <div className="spline-container">
        <Spline 
          scene="https://prod.spline.design/KYxzAkTaWg8B1cuK/scene.splinecode"
        />
      </div>
      
      {/* Content Overlay */}
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl mb-3 font-['Dancing_Script']">
              <span className="text-white">Project </span>
              <span className="text-primary-500">Gallery</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Take a look at some of our recent work across residential and commercial properties.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="space-y-12">
            {/* First Carousel */}
            <div className="relative">
              <h3 className="text-2xl font-semibold mb-6 font-heading text-center">
                <span className="text-white">Custom </span>
                <span className="text-primary-500">Homes</span>
              </h3>
              
              {/* Navigation Buttons */}
              <button
                onClick={scrollLeft1}
                disabled={isTransitioning1}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-dark-800/90 hover:bg-dark-700 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 ${
                  isTransitioning1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                style={{ marginLeft: '-20px' }}
              >
                <ArrowLeft className="w-6 h-6" />
              </button>

              <button
                onClick={scrollRight1}
                disabled={isTransitioning1}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-dark-800/90 hover:bg-dark-700 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 ${
                  isTransitioning1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                style={{ marginRight: '-20px' }}
              >
                <ArrowRight className="w-6 h-6" />
              </button>

              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div 
                  className={`flex gap-4 ${isTransitioning1 ? 'transition-transform duration-500 ease-in-out' : ''}`}
                  style={{ transform: `translateX(-${currentIndex1 * (100 / itemsPerView)}%)` }}
                >
                  {duplicatedProjects1.map((project, index) => (
                    <div 
                      key={`${project.id}-${index}`}
                      className="flex-shrink-0"
                      style={{ width: `calc(${100 / itemsPerView}% - 12px)` }}
                    >
                      <div 
                        className="group cursor-pointer overflow-hidden rounded-lg bg-dark-800/80 backdrop-blur-sm hover:bg-dark-700/80 transition-all duration-300 transform hover:scale-105 h-full"
                        onClick={() => openLightbox(index % customHomesProjects.length)}
                      >
                        <div className="relative aspect-square overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-white font-semibold font-heading text-sm leading-tight">{project.title}</h3>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-4 space-x-2">
                {customHomesProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex1(startIndex1 + index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      Math.floor((currentIndex1 - startIndex1 + customHomesProjects.length) % customHomesProjects.length) === index ? 'bg-primary-500' : 'bg-dark-600 hover:bg-dark-500'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Second Carousel */}
            <div className="relative">
              <h3 className="text-2xl font-semibold mb-6 font-heading text-center">
                <span className="text-white">New Construction </span>
                <span className="text-primary-500">Homes</span>
              </h3>
              
              {/* Navigation Buttons */}
              <button
                onClick={scrollLeft2}
                disabled={isTransitioning2}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-dark-800/90 hover:bg-dark-700 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 ${
                  isTransitioning2 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                style={{ marginLeft: '-20px' }}
              >
                <ArrowLeft className="w-6 h-6" />
              </button>

              <button
                onClick={scrollRight2}
                disabled={isTransitioning2}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-dark-800/90 hover:bg-dark-700 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 ${
                  isTransitioning2 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                style={{ marginRight: '-20px' }}
              >
                <ArrowRight className="w-6 h-6" />
              </button>

              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div 
                  className={`flex gap-4 ${isTransitioning2 ? 'transition-transform duration-500 ease-in-out' : ''}`}
                  style={{ transform: `translateX(-${currentIndex2 * (100 / itemsPerView)}%)` }}
                >
                  {duplicatedProjects2.map((project, index) => (
                    <div 
                      key={`${project.id}-${index}`}
                      className="flex-shrink-0"
                      style={{ width: `calc(${100 / itemsPerView}% - 12px)` }}
                    >
                      <div 
                        className="group cursor-pointer overflow-hidden rounded-lg bg-dark-800/80 backdrop-blur-sm hover:bg-dark-700/80 transition-all duration-300 transform hover:scale-105 h-full"
                        onClick={() => openLightbox((index % newConstructionProjects.length) + customHomesProjects.length)}
                      >
                        <div className="relative aspect-square overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-white font-semibold font-heading text-sm leading-tight">{project.title}</h3>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-4 space-x-2">
                {newConstructionProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex2(startIndex2 + index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      Math.floor((currentIndex2 - startIndex2 + newConstructionProjects.length) % newConstructionProjects.length) === index ? 'bg-primary-500' : 'bg-dark-600 hover:bg-dark-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
      
      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full w-full">
            {/* Navigation Buttons */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative bg-dark-900 rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <img 
                src={allProjects[selectedImage].image} 
                alt={allProjects[selectedImage].title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl text-white font-semibold font-heading mb-2">
                  {allProjects[selectedImage].title}
                </h3>
                <p className="text-gray-300">
                  {allProjects[selectedImage].description}
                </p>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {selectedImage + 1} / {allProjects.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;