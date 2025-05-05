import React from 'react';

interface GridItemProps {
  children: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
  smColSpan?: number;
  mdColSpan?: number;
  lgColSpan?: number;
  xlColSpan?: number;
  className?: string;
}

/**
 * Grid item component for use within Grid layouts
 */
const GridItem: React.FC<GridItemProps> = ({
  children,
  colSpan,
  rowSpan,
  smColSpan,
  mdColSpan,
  lgColSpan,
  xlColSpan,
  className = ''
}) => {
  // Generate column span classes
  const colSpanClass = colSpan ? `col-span-${colSpan}` : '';
  const smColSpanClass = smColSpan ? `sm:col-span-${smColSpan}` : '';
  const mdColSpanClass = mdColSpan ? `md:col-span-${mdColSpan}` : '';
  const lgColSpanClass = lgColSpan ? `lg:col-span-${lgColSpan}` : '';
  const xlColSpanClass = xlColSpan ? `xl:col-span-${xlColSpan}` : '';
  
  // Generate row span classes
  const rowSpanClass = rowSpan ? `row-span-${rowSpan}` : '';
  
  return (
    <div className={`${colSpanClass} ${smColSpanClass} ${mdColSpanClass} ${lgColSpanClass} ${xlColSpanClass} ${rowSpanClass} ${className}`}>
      {children}
    </div>
  );
};

export default GridItem; 