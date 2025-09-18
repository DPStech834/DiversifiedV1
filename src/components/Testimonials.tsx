import React, { useState, useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import ScrollReveal from '../utils/ScrollReveal';

const testimonials = [
  {
    id: 1,
    name: "Raymond Willburn",
    role: "VP, Purchasing | Dallas Division",
    content: "You and your team are rated as Taylor Morrisons 1st Class plumber. We wish all our trade partners could mirror your team. Thanks for your leadership and partnership. Looking forward to our future.",
    rating: 5,
    photo: "/assets/Mr.Willburn.jpg"
  },
  {
    id: 2,
    name: "Its Just Addi",
    role: "Homeowner",
    content: "We recently had a leak into our closet from our master bathroom. The staff at diversified plumbing were quick to come out and help us get it fixed. They were very professional and cleaned up after the job was complete which I very much appreciated. I would highly recommend this company to anyone looking for a reliable plumber.",
    rating: 5
  },
  {
    id: 3,
    name: "Ann Estes",
    role: "Homeowner",
    content: "Today I had Diversified replace 2 toilets and 3 bathroom sink faucets. Our builder had installed very small toilets that put my 13 year old son's knees in his chest when sitting down, it was a huge joke with how little and low these toilets were. We upgraded to ADA toilets as my mom is handicap and needed something that would work for her without having to put an attachment onto the toilet bowl. These are so tall that she has no issues getting up or sitting down now. The builder also installed terrible crystal knob faucets in our bathrooms and we now have something way more modern with a high arch allowing us to actually get our hands under the faucet to wash them without them hitting the bowl due to the low clearance of those crystal knob faucets. The plumbers called to let us know they were on the way, called again when they arrived as they knew I was working from home and did not want to ring the doorbell and interrupt a possible online meeting I might have been in. They were quick and efficient and the install went without any hiccups. I was worried the new toilets might not fit where the miniature ones were but they are perfect. Thank you for your great customer serve and replacement of our plumbing needs.",
    rating: 5
  },
  {
    id: 4,
    name: "Frank Viola",
    role: "Homeowner",
    content: "We recently had to replace a toilet and, in the process, uncovered other issues. Apparently, there was a leak that may have been there for years which eroded the area surrounding the drainpipe. We called Diversified and they came out the following morning. Danniel, the service tech was clean, professional and did an amazing job from start to finish. We are so impressed with their service, their work and attention to details. They gave us peace of mind, and I would highly recommend.",
    rating: 5
  },
  {
    id: 5,
    name: "Charles Blue",
    role: "Homeowner",
    content: "Their team was amazing from the Office(Ana or Ann didn't want to mess up too bad) to Matt and Phillip who installed the HWH. Much thanks and appreciation to everyone involved.",
    rating: 5
  },
  {
    id: 6,
    name: "Marci Crumley",
    role: "Homeowner",
    content: "Called about a gas smell in the house, before I could call back to see when the on call guy was coming he rang my doorbell. The owner, Chris, came and found and repaired my gas leak on a Friday afternoon. Explained what he found and the repair and said he would come back should anything come up. Followed up after. Amazing service!",
    rating: 5
  },
  {
    id: 7,
    name: "Bob Johnson",
    role: "Homeowner",
    content: "Diversified Plumbing is the best plumbing services company in the metroplex!! They recently installed a bathroom vanity and toilet. They were punctual, professional and flexible. This is the third time I've used Diversified in the past 3 years. They've installed a total of two hot water heaters, three toilets and a vanity. Always, provide friendly service at a reasonable price. They are my first call for our plumbing needs!!",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-20">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 font-['Dancing_Script']">
              <span className="text-white">What Our </span>
              <span className="text-primary-500">Clients</span>
              <span className="text-white"> Say</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
              Here's what our satisfied customers say about our services.
            </p>
          </div>
        </ScrollReveal>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={testimonialsRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-2 sm:px-4"
                >
                  <div className="metallic-card p-4 sm:p-6 md:p-8">
                    <div className="flex justify-between items-start mb-6">
                      <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary-500 opacity-80" />
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-4 h-4 sm:w-5 sm:h-5 ${i < testimonial.rating ? 'text-primary-500' : 'text-gray-600'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg italic leading-relaxed">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 overflow-hidden flex-shrink-0">
                        {testimonial.photo ? (
                          <img 
                            src={testimonial.photo} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover object-center"
                            style={{ objectPosition: 'center 20%' }}
                          />
                        ) : (
                          <div className="w-full h-full bg-dark-700 flex items-center justify-center">
                            <span className="font-semibold text-primary-500">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</h4>
                        <p className="text-gray-400 text-xs sm:text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-dark-700 hover:bg-primary-600 flex items-center justify-center text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-dark-700 hover:bg-primary-600 flex items-center justify-center text-white transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentIndex === index ? 'bg-primary-500' : 'bg-dark-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;