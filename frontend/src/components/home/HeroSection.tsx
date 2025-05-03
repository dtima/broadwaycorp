import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import { fadeInUp, staggerContainer } from '../../lib/animations/variants';
import Button from '../common/Button';
import ResponsiveImage from '../common/ResponsiveImage';

interface HeroSectionProps {
  /** Main heading for the hero section */
  title: string;
  /** Subtitle/tagline */
  subtitle: string;
  /** Call to action button text */
  ctaText: string;
  /** URL for the CTA button */
  ctaLink: string;
  /** Optional secondary CTA text */
  secondaryCtaText?: string;
  /** Optional URL for the secondary CTA */
  secondaryCtaLink?: string;
  /** Optional background image path (relative to assets/images) */
  backgroundImage?: string;
  /** Additional content to show next to the main text */
  decorationElement?: ReactNode;
  /** Optional overlay color (as tailwind class) */
  overlayColor?: string;
  /** Content alignment - defaults to left */
  alignment?: 'left' | 'center' | 'right';
}

/**
 * Hero section component for homepage and other landing pages
 */
const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage = 'hero-placeholder.svg',
  decorationElement,
  overlayColor = 'from-brand-navy-dark to-brand-navy opacity-90',
  alignment = 'left',
}: HeroSectionProps) => {
  const { language } = useLanguage();
  
  // Determine text alignment classes
  const textAlignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }[alignment];
  
  // Determine decoration element alignment
  const decorationClasses = alignment === 'center' ? 'mx-auto' : '';
  
  return (
    <div className="relative overflow-hidden bg-brand-navy text-white">
      {/* Background image with overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <ResponsiveImage
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover opacity-20"
            responsiveSizes={[1024, 1280, 1920]}
            defaultSize={1920}
            aria-hidden="true"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${overlayColor}`} />
        </div>
      )}
      
      <div className="container mx-auto px-4 py-20 sm:py-24 lg:py-32 relative z-10">
        <div className={`flex flex-col ${decorationElement ? 'lg:flex-row' : ''} items-center justify-between gap-12`}>
          <motion.div 
            className={`${decorationElement ? 'lg:w-1/2' : 'w-full'} ${textAlignmentClasses}`}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              variants={fadeInUp}
            >
              {title}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl"
              variants={fadeInUp}
            >
              {subtitle}
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={fadeInUp}
            >
              <Button
                href={ctaLink.startsWith('/') ? `/${language}${ctaLink}` : ctaLink}
                variant="secondary"
                size="lg"
              >
                {ctaText}
              </Button>
              
              {secondaryCtaText && secondaryCtaLink && (
                <Button
                  href={secondaryCtaLink.startsWith('/') ? `/${language}${secondaryCtaLink}` : secondaryCtaLink}
                  variant="outline"
                  size="lg"
                >
                  {secondaryCtaText}
                </Button>
              )}
            </motion.div>
          </motion.div>
          
          {decorationElement && (
            <div className={`lg:w-1/2 ${decorationClasses}`}>
              {decorationElement}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 