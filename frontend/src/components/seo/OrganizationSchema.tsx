import React from 'react';
import { Helmet } from 'react-helmet-async';

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
}

const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({
  name = 'Broadway Corporation',
  url = 'https://broadway-corp.com',
  logo = 'https://broadway-corp.com/logo.png',
  sameAs = [],
}) => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    sameAs,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default OrganizationSchema; 