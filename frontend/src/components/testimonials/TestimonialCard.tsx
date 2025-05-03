import { motion } from 'framer-motion';
import Card from '../common/Card';
import { fadeInUp } from '../../lib/animations/variants';

export interface TestimonialProps {
  /** The testimonial quote text */
  quote: string;
  /** Name of the person giving the testimonial */
  author: string;
  /** Company or position of the person */
  position?: string;
  /** Avatar URL or initials for placeholder */
  avatar?: string;
  /** Whether the avatar is a placeholder (initials) or an image */
  isPlaceholder?: boolean;
  /** Optional company logo URL */
  companyLogo?: string;
  /** CSS class name for the container */
  className?: string;
}

/**
 * Component for displaying a testimonial with quote, author, and avatar
 */
const TestimonialCard = ({
  quote,
  author,
  position,
  avatar,
  isPlaceholder = false,
  companyLogo,
  className = '',
}: TestimonialProps) => {
  // Generate initials for avatar placeholder if needed
  const initials = isPlaceholder && !avatar
    ? author
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .substring(0, 2)
    : avatar;
  
  return (
    <motion.div
      className={className}
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      <Card className="h-full">
        <div className="flex flex-col h-full">
          {/* Quote */}
          <blockquote className="text-lg text-gray-700 italic mb-6 flex-grow">
            "{quote}"
          </blockquote>
          
          {/* Author information */}
          <div className="flex items-center">
            {/* Avatar (placeholder or image) */}
            {initials && (
              isPlaceholder ? (
                <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center text-xl font-bold flex-shrink-0 mr-4">
                  {initials}
                </div>
              ) : (
                <img
                  src={avatar}
                  alt={`${author} avatar`}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0 mr-4"
                />
              )
            )}
            
            <div className="flex-grow">
              <div className="font-medium text-brand-navy">{author}</div>
              {position && (
                <div className="text-sm text-gray-500">{position}</div>
              )}
            </div>
            
            {/* Company logo if provided */}
            {companyLogo && (
              <img
                src={companyLogo}
                alt={`${author}'s company`}
                className="h-8 ml-auto"
              />
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard; 