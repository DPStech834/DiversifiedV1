import React from 'react';
import { ArrowRight, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../utils/ScrollReveal';

const featuredProjects = [
  {
    id: 1,
    title: "Modern Bathroom Installation",
    category: "Repair/Replacement",
    description: "Professional bathroom plumbing installation with modern fixtures and finishes.",
    image: "/assets/project pictures/bathroom1.jpg"
  },
  {
    id: 2,
    title: "Custom Home Completion",
    category: "New Construction/Custom Homes", 
    description: "Final result of comprehensive plumbing system installation in custom home.",
    image: "/assets/project pictures/postHouse2.jpg",
    imagePosition: "object-center"
  },
  {
    id: 3,
    title: "Kitchen Plumbing Installation",
    category: "Repair/Replacement",
    description: "Professional kitchen plumbing installation with modern appliance connections.",
    image: "/assets/project pictures/kitchen1.jpg"
  }
];

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);

  const handleViewGallery = () => {
    navigate('/gallery');
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? featuredProjects.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === featuredProjects.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <>
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container-custom relative z-20">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 font-['Dancing_Script']">
                <span className="text-white">Featured </span>
                <span className="text-primary-500">Projects</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
                Take a look at some of our recent work showcasing quality craftsmanship and attention to detail.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 100}>
                <div 
                  className="group cursor-pointer overflow-hidden rounded-lg bg-dark-800 hover:bg-dark-700 transition-all duration-300 transform hover:scale-105 h-full"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${project.imagePosition || 'object-center'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                      <span className="inline-block px-2 py-1 bg-primary-600 text-white text-xs sm:text-sm font-medium rounded mb-1 sm:mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-white font-semibold font-heading text-xs sm:text-sm leading-tight mb-1 sm:mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-xs hidden sm:block">{project.description}</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="text-center">
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base px-4 sm:px-0">
                Want to see more of our work? Check out our complete project gallery.
              </p>
              <button 
                onClick={handleViewGallery}
                className="btn btn-primary inline-flex items-center gap-2 shadow-lg shadow-primary-900/20"
              >
                View Full Gallery
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full w-full">
            {/* Close Button */}
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
                src={featuredProjects[selectedImage].image} 
                alt={featuredProjects[selectedImage].title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded mb-2">
                  {featuredProjects[selectedImage].category}
                </span>
                <h3 className="text-2xl text-white font-semibold font-heading mb-2">
                  {featuredProjects[selectedImage].title}
                </h3>
                <p className="text-gray-300">
                  {featuredProjects[selectedImage].description}
                </p>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {selectedImage + 1} / {featuredProjects.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;