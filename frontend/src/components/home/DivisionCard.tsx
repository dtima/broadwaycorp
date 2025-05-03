import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { divisionCardVariants } from '../../lib/animations/variants';
import { useLanguage } from '../../hooks/useLanguage';

interface DivisionCardProps {
  divisionId: string;
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
}

/**
 * Card component to display division information on the homepage
 */
const DivisionCard = ({ divisionId, title, description, icon, color }: DivisionCardProps) => {
  const { language } = useLanguage();

  return (
    <motion.div
      className="flex-1 min-w-[250px] bg-white rounded-xl shadow-md overflow-hidden"
      variants={divisionCardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className={`p-4 ${color} text-white`}>
        <div className="flex items-center">
          {icon}
          <h3 className="text-xl font-bold ml-2">{title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-700 mb-4">{description}</p>
        <Link 
          to={`/${language}/${divisionId}`}
          className={`inline-block px-4 py-2 rounded-md ${color.replace('bg-', 'bg-opacity-90 bg-')} text-white hover:bg-opacity-100 transition-colors duration-200`}
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
};

export default DivisionCard; 