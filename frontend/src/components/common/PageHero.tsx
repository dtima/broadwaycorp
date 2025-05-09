import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type PageHeroProps = {
  title: string;
  subtitle?: string;
  description?: string;
  bgColor?: string; 
  textColor?: string;
  descriptionColor?: string;
  buttonText?: string;
  buttonLink?: string;
  pattern?: boolean;
  illustration?: ReactNode;
  children?: ReactNode;
  className?: string;
};

const PageHero = ({
  title,
  subtitle,
  description,
  bgColor = 'bg-blue-700',
  textColor = 'text-white',
  descriptionColor = 'text-white/80',
  buttonText,
  buttonLink,
  pattern = true,
  illustration,
  children,
  className = '',
}: PageHeroProps) => {
  return (
    <section 
      className={`${bgColor} ${textColor} py-16 md:py-24 relative overflow-hidden ${className}`}
      aria-labelledby="page-hero-title"
    >
      {/* Background Pattern */}
      {pattern && (
        <div className="absolute inset-0 z-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 0h40v40H0z" fill="none" />
                <path d="M0 0h10v10H0z" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      )}

      <div className="container-custom relative z-10">
        <div className={`grid grid-cols-1 ${illustration ? 'lg:grid-cols-2 gap-8 lg:gap-12 items-center' : 'max-w-2xl'}`}>
          <div>
            <motion.h1 
              id="page-hero-title"
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h1>
            
            <motion.div 
              className="w-24 h-1 bg-brand-orange mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 96 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              aria-hidden="true"
            ></motion.div>
            
            {subtitle && (
              <motion.p 
                className={`text-xl mb-4 ${descriptionColor}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {subtitle}
              </motion.p>
            )}
            
            {description && (
              <motion.p 
                className={`text-base mb-8 ${descriptionColor}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {description}
              </motion.p>
            )}
            
            {buttonText && buttonLink && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link 
                  to={buttonLink} 
                  className="btn bg-brand-orange text-white hover:bg-brand-orange/90"
                  aria-label={buttonText}
                >
                  {buttonText}
                </Link>
              </motion.div>
            )}
            
            {children}
          </div>
          
          {illustration && (
            <motion.div
              className="hidden lg:flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {illustration}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero; 