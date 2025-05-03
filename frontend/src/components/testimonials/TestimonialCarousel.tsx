import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import TestimonialCard, { TestimonialProps } from './TestimonialCard';
import Button from '../common/Button';

interface TestimonialCarouselProps {
  /** Array of testimonials to display */
  testimonials: TestimonialProps[];
  /** Time in ms between auto-transitions (0 to disable) */
  autoRotateInterval?: number;
  /** Title for the testimonials section */
  title?: string;
  /** Subtitle for the testimonials section */
  subtitle?: string;
  /** CSS class for the container */
  className?: string;
}

// Animation variants
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  }),
};

/**
 * Carousel component for displaying testimonials with navigation
 */
const TestimonialCarousel = ({
  testimonials,
  autoRotateInterval = 8000,
  title,
  subtitle,
  className = '',
}: TestimonialCarouselProps) => {
  const [[currentIndex, direction], setCurrentState] = useState([0, 0]);
  
  // Handle auto-rotation
  useEffect(() => {
    if (!autoRotateInterval) return;
    
    const timer = setTimeout(() => {
      nextSlide();
    }, autoRotateInterval);
    
    return () => clearTimeout(timer);
  }, [currentIndex, autoRotateInterval]);
  
  // Calculate the current testimonial
  const currentTestimonial = testimonials[currentIndex];
  
  // Navigation functions
  const nextSlide = () => {
    setCurrentState(([current, _]) => [
      (current + 1) % testimonials.length,
      1,
    ]);
  };
  
  const prevSlide = () => {
    setCurrentState(([current, _]) => [
      (current - 1 + testimonials.length) % testimonials.length,
      -1,
    ]);
  };
  
  const goToSlide = (index: number) => {
    setCurrentState(([current, _]) => [
      index,
      index > current ? 1 : -1,
    ]);
  };
  
  if (testimonials.length === 0) {
    return null;
  }
  
  return (
    <div className={`${className}`}>
      {/* Optional title and subtitle */}
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">{title}</h2>}
          {subtitle && <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
        </div>
      )}
      
      {/* Carousel */}
      <div className="relative max-w-4xl mx-auto">
        {/* Testimonial content with animation */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="min-h-[240px] md:min-h-[220px]"
            >
              <TestimonialCard {...currentTestimonial} />
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Navigation controls */}
        {testimonials.length > 1 && (
          <>
            {/* Previous/Next Buttons */}
            <div className="flex justify-between mt-8">
              <Button 
                onClick={prevSlide}
                variant="tertiary"
                size="sm"
                aria-label="Previous testimonial"
                startIcon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                }
              >
                Previous
              </Button>
              
              <Button 
                onClick={nextSlide}
                variant="tertiary"
                size="sm"
                aria-label="Next testimonial"
                endIcon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                }
              >
                Next
              </Button>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-brand-navy scale-125' : 'bg-gray-300'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                  aria-current={index === currentIndex ? 'true' : 'false'}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TestimonialCarousel; 