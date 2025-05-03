import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/animations/variants';

interface IconCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

/**
 * Reusable card component with icon, title and description
 * Used for features, services and other similar content
 */
const IconCard = ({ 
  icon, 
  title, 
  description, 
  delay = 0,
  className = ""
}: IconCardProps) => {
  return (
    <motion.div
      className={`bg-white rounded-lg shadow-md p-6 ${className}`}
      variants={fadeInUp}
      custom={delay}
      transition={{ delay }}
    >
      <div className="mb-4 text-brand-orange">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-brand-navy">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

export default IconCard; 