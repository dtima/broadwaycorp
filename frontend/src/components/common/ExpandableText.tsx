import React, { useState } from 'react';

interface ExpandableTextProps {
  text: string;
  maxLines?: number;
  expandLabel?: string;
  collapseLabel?: string;
  className?: string;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({
  text,
  maxLines = 3,
  expandLabel = "Read more",
  collapseLabel = "Show less",
  className = ''
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={className}>
      <p 
        className={`${isExpanded ? '' : `line-clamp-${maxLines}`}`}
      >
        {text}
      </p>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-green-700 mt-2 text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 rounded"
      >
        {isExpanded ? collapseLabel : expandLabel}
      </button>
    </div>
  );
};

export default ExpandableText; 