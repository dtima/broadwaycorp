import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  color?: 'green' | 'blue' | 'amber' | 'purple' | 'orange' | 'gray';
  items?: string[];
  className?: string;
  delay?: number;
  iconBackground?: boolean;
};

const FeatureCard = ({
  title,
  description,
  icon,
  color = 'green',
  items = [],
  className = '',
  delay = 0,
  iconBackground = true
}: FeatureCardProps) => {
  // Color configuration for different parts
  const colorClasses = {
    green: {
      background: 'bg-green-100',
      text: 'text-green-600',
      borderHover: 'hover:border-green-200',
      itemIcon: 'text-green-600'
    },
    blue: {
      background: 'bg-blue-100',
      text: 'text-blue-600',
      borderHover: 'hover:border-blue-200',
      itemIcon: 'text-blue-600'
    },
    amber: {
      background: 'bg-amber-100',
      text: 'text-amber-600',
      borderHover: 'hover:border-amber-200',
      itemIcon: 'text-amber-600'
    },
    purple: {
      background: 'bg-purple-100',
      text: 'text-purple-600',
      borderHover: 'hover:border-purple-200',
      itemIcon: 'text-purple-600'
    },
    orange: {
      background: 'bg-orange-100',
      text: 'text-orange-600', 
      borderHover: 'hover:border-orange-200',
      itemIcon: 'text-orange-600'
    },
    gray: {
      background: 'bg-gray-100',
      text: 'text-gray-600',
      borderHover: 'hover:border-gray-200', 
      itemIcon: 'text-gray-600'
    }
  };
  
  return (
    <motion.div 
      className={`bg-white p-6 rounded-lg shadow-md border border-gray-100 ${colorClasses[color].borderHover} transition-all ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {icon && (
        <div className={`${iconBackground ? colorClasses[color].background : ''} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
          <div className={colorClasses[color].text}>
            {icon}
          </div>
        </div>
      )}
      
      <h3 className="text-xl font-bold text-brand-navy mb-3" aria-label={title}>
        {title}
      </h3>
      
      <p className="text-gray-700 mb-4">
        {description}
      </p>
      
      {items.length > 0 && (
        <ul className="space-y-2" aria-label={`${title} features`}>
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <svg 
                className={`w-5 h-5 ${colorClasses[color].itemIcon} mt-1 mr-2 flex-shrink-0`} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
                aria-hidden="true"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default FeatureCard; 