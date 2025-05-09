import React from 'react';
import { Link } from 'react-router-dom';

interface RelatedLink {
  id: string;
  label: string;
  path: string;
  color?: 'green' | 'amber' | 'blue' | 'purple';
}

interface RelatedLinksProps {
  title: string;
  links: RelatedLink[];
  className?: string;
}

const RelatedLinks: React.FC<RelatedLinksProps> = ({
  title,
  links,
  className = ''
}) => {
  const getColorClasses = (color: RelatedLink['color'] = 'green') => {
    switch(color) {
      case 'amber':
        return 'bg-amber-100 text-amber-800 hover:bg-amber-200';
      case 'blue':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'purple':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
      case 'green':
      default:
        return 'bg-green-100 text-green-800 hover:bg-green-200';
    }
  };

  return (
    <div className={`mt-8 border-t pt-6 ${className}`}>
      <h4 className="font-medium text-gray-700 mb-3">{title}</h4>
      <div className="flex flex-wrap gap-3">
        {links.map((link) => (
          <Link 
            key={link.id}
            to={link.path}
            className={`inline-flex items-center px-3 py-1 rounded-md text-sm transition-colors ${getColorClasses(link.color)}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedLinks; 