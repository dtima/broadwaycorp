import Layout from '../../components/layout/Layout';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';

// Import extracted components
import HeroSection from '../../components/home/HeroSection';
import SectorSlider from '../../components/home/SectorSlider';
import DivisionCard from '../../components/home/DivisionCard';
import IconCard from '../../components/common/IconCard';
import AnimateOnScroll from '../../components/animation/AnimateOnScroll';

// Import animation utilities
import { useAnimatedCounter } from '../../lib/animations/hooks';
import { fadeInUp, staggerContainer, fadeIn } from '../../lib/animations/variants';

// Scroll-triggered animation component - will eventually be removed when all references are updated
const AnimateOnScrollLegacy = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const HomePage = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  
  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sector slides data
  const sectorSlides = [
    {
      id: 'enterprise',
      title: t('divisions.enterprise.title'),
      subtitle: t('divisions.enterprise.description'),
      icon: (
        <svg className="w-10 h-10 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      ),
      bgClass: 'from-blue-600 to-brand-navy'
    },
    {
      id: 'farmhouse',
      title: t('divisions.farmhouse.title'),
      subtitle: t('divisions.farmhouse.description'),
      icon: (
        <svg className="w-10 h-10 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
        </svg>
      ),
      bgClass: 'from-yellow-600 to-brand-orange'
    },
    {
      id: 'corporation',
      title: t('corporation.title'),
      subtitle: t('corporation.heroTagline'),
      icon: (
        <svg className="w-10 h-10 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
        </svg>
      ),
      bgClass: 'from-teal-600 to-green-700'
    }
  ];
  
  // Statistics counters
  const projectsCount = useAnimatedCounter(150);
  const yearsCount = useAnimatedCounter(12);
  const partnersCount = useAnimatedCounter(45);
  const countriesCount = useAnimatedCounter(10);
  
  // Parallax background effect
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // Partner logo data
  const partnerLogos = [
    { id: 1, name: 'Partner 1', logoPlaceholder: 'P1' },
    { id: 2, name: 'Partner 2', logoPlaceholder: 'P2' },
    { id: 3, name: 'Partner 3', logoPlaceholder: 'P3' },
    { id: 4, name: 'Partner 4', logoPlaceholder: 'P4' },
    { id: 5, name: 'Partner 5', logoPlaceholder: 'P5' },
    { id: 6, name: 'Partner 6', logoPlaceholder: 'P6' },
    { id: 7, name: 'Partner 7', logoPlaceholder: 'P7' },
    { id: 8, name: 'Partner 8', logoPlaceholder: 'P8' },
    { id: 9, name: 'Partner 9', logoPlaceholder: 'P9' },
    { id: 10, name: 'Partner 10', logoPlaceholder: 'P10' },
  ];

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      quote: "Broadway Corporation has been instrumental in transforming our logistics operations. Their innovative approach and dedication to excellence have significantly improved our efficiency.",
      author: "Maria Johnson",
      position: "Operations Director, Global Logistics Inc.",
      avatarPlaceholder: "MJ"
    },
    {
      id: 2,
      quote: "Working with Broadway on our construction project was a game-changer. Their attention to detail and commitment to sustainability aligned perfectly with our vision.",
      author: "David Chen",
      position: "Project Manager, Modern Builders Ltd.",
      avatarPlaceholder: "DC"
    },
    {
      id: 3,
      quote: "The real estate development expertise that Broadway brings to the table is unmatched. They helped us navigate complex challenges with ease and professionalism.",
      author: "Sarah Williams",
      position: "CEO, Urban Development Partners",
      avatarPlaceholder: "SW"
    }
  ];

  // Testimonial state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto rotate testimonials
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearTimeout(timer);
  }, [currentTestimonial, testimonials.length]);
  
  useEffect(() => {
    // Trigger animations when component mounts
    setIsVisible(true);
  }, []);
  
  return (
    <Layout 
      title={`Broadway Corporation - ${t('hero.subtitle')}`}
      description={t('hero.subtitle')}
    >
      {/* Hero Section */}
      <HeroSection
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        ctaText={t('hero.cta')}
        ctaLink="/about"
        backgroundImage="/assets/images/hero-background.jpg"
        decorationElement={
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full h-full bg-brand-navy-dark rounded-lg p-4">
              <SectorSlider slides={sectorSlides} />
            </div>
          </motion.div>
        }
      />
      
      {/* Divisions Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">{t('divisions.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('divisions.subtitle')}</p>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DivisionCard
              divisionId="corporation"
              title={t('corporation.title')}
              description={t('corporation.description')}
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              }
              color="bg-brand-navy"
            />
            
            <DivisionCard
              divisionId="enterprise"
              title={t('divisions.enterprise.title')}
              description={t('divisions.enterprise.description')}
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              }
              color="bg-blue-600"
            />
            
            <DivisionCard
              divisionId="farmhouse"
              title={t('divisions.farmhouse.title')}
              description={t('divisions.farmhouse.description')}
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              }
              color="bg-brand-orange"
            />
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-brand-navy text-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('stats.title')}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('stats.subtitle')}</p>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimateOnScroll>
              <div className="p-6 bg-white bg-opacity-10 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-2">{projectsCount}+</div>
                <div className="text-lg">{t('stats.projects')}</div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll>
              <div className="p-6 bg-white bg-opacity-10 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-2">{yearsCount}</div>
                <div className="text-lg">{t('stats.years')}</div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll>
              <div className="p-6 bg-white bg-opacity-10 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-2">{partnersCount}+</div>
                <div className="text-lg">{t('stats.partners')}</div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll>
              <div className="p-6 bg-white bg-opacity-10 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-2">{countriesCount}</div>
                <div className="text-lg">{t('stats.countries')}</div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">{t('testimonials.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('testimonials.subtitle')}</p>
          </AnimateOnScroll>
          
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                index === currentTestimonial && (
                  <motion.div
                    key={testimonial.id}
                    className="bg-white p-8 rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="w-16 h-16 rounded-full bg-brand-navy text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                        {testimonial.avatarPlaceholder}
                      </div>
                      <div>
                        <blockquote className="text-lg md:text-xl text-gray-700 italic mb-4">"{testimonial.quote}"</blockquote>
                        <div className="font-medium text-brand-navy">{testimonial.author}</div>
                        <div className="text-sm text-gray-500">{testimonial.position}</div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial ? 'bg-brand-navy scale-125' : 'bg-gray-300'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">{t('partners.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('partners.subtitle')}</p>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {partnerLogos.map((partner, index) => (
              <AnimateOnScroll key={partner.id} className="flex items-center justify-center">
                <div className="w-full h-24 bg-gray-100 rounded-lg flex items-center justify-center text-2xl font-bold text-gray-400">
                  {partner.logoPlaceholder}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to={`/${language}/partners`}
              className="inline-block bg-transparent border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
            >
              {t('partners.viewAll')}
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-navy to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('cta.title')}</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">{t('cta.description')}</p>
            <Link 
              to={`/${language}/contact`}
              className="inline-block bg-brand-orange hover:bg-orange-600 text-white py-3 px-8 rounded-md font-medium text-lg transition-colors duration-200"
            >
              {t('cta.button')}
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage; 