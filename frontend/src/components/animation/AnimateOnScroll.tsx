import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp } from '../../lib/animations/variants';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  variants?: any;
  amount?: number;
  once?: boolean;
}

/**
 * Component that animates its children when they enter the viewport
 */
const AnimateOnScroll = ({ 
  children, 
  className = "", 
  variants = fadeInUp,
  amount = 0.2,
  once = true
}: AnimateOnScrollProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll; 