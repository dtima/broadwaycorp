import React from 'react';
import { Helmet } from 'react-helmet-async';

interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  lastUpdated?: string;
  imageUrl?: string;
}

const WebPageSchema: React.FC<WebPageSchemaProps> = ({
  title,
  description,
  url,
  lastUpdated = new Date().toISOString(),
  imageUrl,
}) => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    dateModified: lastUpdated,
    ...(imageUrl && { image: imageUrl }),
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default WebPageSchema; 