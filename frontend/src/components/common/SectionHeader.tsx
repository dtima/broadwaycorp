import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  darkBackground?: boolean;
  maxWidth?: string;
  children?: ReactNode;
  titleSize?: 'small' | 'medium' | 'large';
  dividerColor?: string;
  className?: string;
  id?: string;
};

const SectionHeader = ({
  title,
  subtitle,
  description,
  centered = false,
  darkBackground = false,
  maxWidth = '3xl',
  children,
  titleSize = 'medium',
  dividerColor = 'brand-orange',
  className = '',
  id,
}: SectionHeaderProps) => {
  // Tailwind classes based on props
  const containerClasses = `${centered ? 'text-center mx-auto' : ''} max-w-${maxWidth} ${className}`;
  
  const titleClasses = {
    small: 'text-2xl md:text-3xl',
    medium: 'text-3xl md:text-4xl',
    large: 'text-4xl md:text-5xl lg:text-6xl'
  };

  const textColor = darkBackground ? 'text-white' : 'text-brand-navy';
  const descriptionColor = darkBackground ? 'text-white/80' : 'text-gray-700';

  return (
    <div className={containerClasses} id={id}>
      {subtitle && (
        <motion.p 
          className={`text-sm md:text-base uppercase tracking-wider mb-2 font-medium ${darkBackground ? 'text-white/70' : 'text-brand-orange'}`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.h2 
        className={`font-bold mb-4 ${titleClasses[titleSize]} ${textColor}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        aria-label={title}
      >
        {title}
      </motion.h2>
      
      <motion.div 
        className={`w-24 h-1 bg-${dividerColor} mb-6 ${centered ? 'mx-auto' : ''}`}
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        aria-hidden="true"
      ></motion.div>
      
      {description && (
        <motion.p
          className={`text-lg mb-8 ${descriptionColor}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {description}
        </motion.p>
      )}
      
      {children}
    </div>
  );
};

export default SectionHeader; 