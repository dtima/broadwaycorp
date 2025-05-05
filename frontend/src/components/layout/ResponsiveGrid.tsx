import React from 'react';

interface ResponsiveGridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  smCols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  mdCols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  lgCols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  xlCols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

/**
 * Responsive grid layout with configurable columns and spacing
 */
const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  cols = 1,
  smCols,
  mdCols,
  lgCols,
  xlCols,
  gap = 'md',
  className = '',
}) => {
  // Generate columns classes
  const colsClass = `grid-cols-${cols}`;
  const smColsClass = smCols ? `sm:grid-cols-${smCols}` : '';
  const mdColsClass = mdCols ? `md:grid-cols-${mdCols}` : '';
  const lgColsClass = lgCols ? `lg:grid-cols-${lgCols}` : '';
  const xlColsClass = xlCols ? `xl:grid-cols-${xlCols}` : '';

  // Generate gap classes
  const gapClass = {
    'none': 'gap-0',
    'xs': 'gap-2',
    'sm': 'gap-4',
    'md': 'gap-6',
    'lg': 'gap-8',
    'xl': 'gap-10'
  }[gap];

  return (
    <div 
      className={`grid ${colsClass} ${smColsClass} ${mdColsClass} ${lgColsClass} ${xlColsClass} ${gapClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default ResponsiveGrid; 