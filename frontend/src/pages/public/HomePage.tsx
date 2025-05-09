import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, AnimatePresence, useInView } from 'framer-motion';
// Import animation utilities
import { useAnimatedCounter } from '../../lib/animations/hooks';
import { fadeInUp } from '../../lib/animations/variants';
// Import extracted components
import IconCard from '../../components/common/IconCard';

// Scroll-triggered animation component - will eventually be removed when all references are updated
const AnimateOnScrollLegacy = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <div 
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
      }}
    >
      {children}
    </div>
  );
};

const HomePage = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [, setIsVisible] = useState(false);
  
  // Slider state
  const [, setCurrentSlide] = useState(0);
  
  // Sector slides data
  const sectors = [
    // ...sector data
  ];
  
  // Stats data
  const projectsCount = useAnimatedCounter(25);
  const partnersCount = useAnimatedCounter(15);
  const countriesCount = useAnimatedCounter(10);
  
  // Partner logo data
  const partnerLogos = [
    { id: 1, name: "Partner 1", logoPlaceholder: "LOGO 1" },
    { id: 2, name: "Partner 2", logoPlaceholder: "LOGO 2" },
    { id: 3, name: "Partner 3", logoPlaceholder: "LOGO 3" },
    { id: 4, name: "Partner 4", logoPlaceholder: "LOGO 4" },
    { id: 5, name: "Partner 5", logoPlaceholder: "LOGO 5" },
  ];
  
  // Hero section parallax animation
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // ... modified JSX with minimal changes
  
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Component JSX */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {partnerLogos.map((partner) => (
          <AnimateOnScrollLegacy key={partner.id} className="flex items-center justify-center">
            <div className="w-full h-24 bg-gray-100 rounded-lg flex items-center justify-center text-2xl font-bold text-gray-400">
              {partner.logoPlaceholder}
            </div>
          </AnimateOnScrollLegacy>
        ))}
      </div>
    </div>
  );
};

export default HomePage; 