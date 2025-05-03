import { ReactNode } from 'react';

export type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type GridGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface GridProps {
  /** Grid items */
  children: ReactNode;
  /** Number of columns on mobile (default: 1) */
  cols?: GridCols;
  /** Number of columns on small screens (sm) */
  smCols?: GridCols;
  /** Number of columns on medium screens (md) */
  mdCols?: GridCols;
  /** Number of columns on large screens (lg) */
  lgCols?: GridCols;
  /** Number of columns on extra large screens (xl) */
  xlCols?: GridCols;
  /** Gap between grid items */
  gap?: GridGap;
  /** Additional CSS classes */
  className?: string;
}

/**
 * A responsive grid layout component based on CSS Grid
 */
const Grid = ({
  children,
  cols = 1,
  smCols,
  mdCols,
  lgCols,
  xlCols,
  gap = 'md',
  className = '',
}: GridProps) => {
  // Map number of columns to grid-template-columns classes
  const colsMap: Record<GridCols, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    7: 'grid-cols-7',
    8: 'grid-cols-8',
    9: 'grid-cols-9',
    10: 'grid-cols-10',
    11: 'grid-cols-11',
    12: 'grid-cols-12',
  };

  // Map responsive column values
  const smColsClass = smCols ? `sm:${colsMap[smCols]}` : '';
  const mdColsClass = mdCols ? `md:${colsMap[mdCols]}` : '';
  const lgColsClass = lgCols ? `lg:${colsMap[lgCols]}` : '';
  const xlColsClass = xlCols ? `xl:${colsMap[xlCols]}` : '';

  // Map gap sizes to gap classes
  const gapClasses = {
    none: 'gap-0',
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  }[gap];

  // Combine all classes
  const gridClasses = [
    'grid',
    colsMap[cols],
    smColsClass,
    mdColsClass,
    lgColsClass,
    xlColsClass,
    gapClasses,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={gridClasses}>{children}</div>;
};

/**
 * Grid item component that can span multiple columns
 */
export interface GridItemProps {
  /** Grid item content */
  children: ReactNode;
  /** Number of columns to span */
  span?: number;
  /** Number of columns to span on small screens */
  smSpan?: number;
  /** Number of columns to span on medium screens */
  mdSpan?: number;
  /** Number of columns to span on large screens */
  lgSpan?: number;
  /** Number of columns to span on extra large screens */
  xlSpan?: number;
  /** Additional CSS classes */
  className?: string;
}

export const GridItem = ({
  children,
  span,
  smSpan,
  mdSpan,
  lgSpan,
  xlSpan,
  className = '',
}: GridItemProps) => {
  // Generate span classes if provided
  const spanClass = span ? `col-span-${span}` : '';
  const smSpanClass = smSpan ? `sm:col-span-${smSpan}` : '';
  const mdSpanClass = mdSpan ? `md:col-span-${mdSpan}` : '';
  const lgSpanClass = lgSpan ? `lg:col-span-${lgSpan}` : '';
  const xlSpanClass = xlSpan ? `xl:col-span-${xlSpan}` : '';

  // Combine all classes
  const itemClasses = [
    spanClass,
    smSpanClass,
    mdSpanClass,
    lgSpanClass,
    xlSpanClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={itemClasses}>{children}</div>;
};

export default Grid; 