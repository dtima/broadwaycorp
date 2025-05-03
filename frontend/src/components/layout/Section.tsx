import { ReactNode } from 'react';
import Container from './Container';

export type SectionSize = 'sm' | 'md' | 'lg' | 'xl';
export type SectionBackground = 'white' | 'light' | 'navy' | 'orange' | 'gray' | 'transparent';

export interface SectionProps {
  /** Section content */
  children: ReactNode;
  /** Optional section heading */
  title?: string;
  /** Optional section subtitle */
  subtitle?: string;
  /** Container size (controls max width) */
  size?: SectionSize;
  /** Amount of padding on top and bottom */
  padding?: SectionSize;
  /** Background color of the section */
  background?: SectionBackground;
  /** Whether the title and subtitle should be centered */
  centered?: boolean;
  /** HTML id for the section (for anchor links) */
  id?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * A layout section with consistent vertical spacing
 * and optional title/subtitle
 */
const Section = ({
  children,
  title,
  subtitle,
  size = 'lg',
  padding = 'lg',
  background = 'white',
  centered = true,
  id,
  className = '',
}: SectionProps) => {
  // Container size mapping
  const containerSize = {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
  }[size] as 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

  // Padding size mapping
  const paddingSizes = {
    sm: 'py-6',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
  }[padding];

  // Background color mapping
  const backgroundClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
    navy: 'bg-brand-navy text-white',
    orange: 'bg-brand-orange text-white',
    gray: 'bg-gray-700 text-white',
    transparent: 'bg-transparent',
  }[background];

  // Combined section classes
  const sectionClasses = `${paddingSizes} ${backgroundClasses} ${className}`;

  // Title text color based on background
  const titleClasses = `text-3xl font-bold mb-4 ${
    ['navy', 'orange', 'gray'].includes(background) ? 'text-white' : 'text-brand-navy'
  }`;

  // Subtitle text color based on background
  const subtitleClasses = `text-xl mb-10 ${
    ['navy', 'orange', 'gray'].includes(background) ? 'text-gray-200' : 'text-gray-600'
  }`;

  return (
    <section id={id} className={sectionClasses}>
      <Container maxWidth={containerSize}>
        {(title || subtitle) && (
          <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            {title && <h2 className={titleClasses}>{title}</h2>}
            {subtitle && <p className={subtitleClasses}>{subtitle}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section; 