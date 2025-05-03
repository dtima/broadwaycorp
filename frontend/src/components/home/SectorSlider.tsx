import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { fadeIn } from '../../lib/animations/variants';

export interface SectorSlide {
  id: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
  bgClass: string;
}

interface SectorSliderProps {
  slides: SectorSlide[];
  autoRotateInterval?: number;
}

/**
 * Component for displaying rotating sector slides on the homepage
 */
const SectorSlider = ({ slides, autoRotateInterval = 5000 }: SectorSliderProps) => {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto rotate slides
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, autoRotateInterval);
    
    return () => clearTimeout(timer);
  }, [currentSlide, slides.length, autoRotateInterval]);
  
  // Handle manual slide navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };
  
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };
  
  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg min-h-[300px] md:min-h-[400px]">
      {/* Slides */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={slide.id}
              className={`absolute inset-0 p-8 text-white flex flex-col justify-between bg-gradient-to-br ${slide.bgClass}`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeIn}
            >
              <div className="flex items-center mb-4">
                {slide.icon}
                <h3 className="text-xl md:text-2xl font-bold ml-2">{slide.title}</h3>
              </div>
              
              <div>
                <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
                <Link 
                  to={`/${language}/${slide.id}`} 
                  className="inline-block bg-white text-slate-800 hover:bg-opacity-90 px-6 py-2 rounded-md font-medium transition-colors duration-200 ease-in-out"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>
      
      {/* Navigation controls */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <button 
          onClick={prevSlide}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all duration-200"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all duration-200"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-4 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SectorSlider; 