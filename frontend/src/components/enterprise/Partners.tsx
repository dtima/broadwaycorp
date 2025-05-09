import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Import partner logo images
import partner1Logo from '../../assets/images/partners/1.jpeg';
import partner2Logo from '../../assets/images/partners/2.jpg';
import partner3Logo from '../../assets/images/partners/3.png';
import partner4Logo from '../../assets/images/partners/4.jpeg';
import partner5Logo from '../../assets/images/partners/5.jpg';
import partner6Logo from '../../assets/images/partners/6.jpeg';
import partner7Logo from '../../assets/images/partners/7.jpeg';

// Fallback function if images fail to load
const getPartnerFallback = (id: number, name: string) => {
  const colors = ['#304294', '#b92025', '#1b75bc', '#056839', '#0f4c81', '#003366'];
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='${encodeURIComponent(colors[id % colors.length])}' /%3E%3Ctext x='50%25' y='50%25' font-size='16' text-anchor='middle' fill='white' dominant-baseline='middle'%3E${encodeURIComponent(name)}%3C/text%3E%3C/svg%3E`;
};

const Partners = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [, setAllImagesLoaded] = useState(false);

  const partners = [
    {
      id: 1,
      name: t('enterprise.partners.schools.stjass'),
      logoPath: partner1Logo,
      alt: "St. Joseph's Secondary School logo",
      color: 'bg-indigo-900 border-yellow-400',
      textColor: 'text-yellow-400'
    },
    {
      id: 2,
      name: t('enterprise.partners.schools.mevick'),
      logoPath: partner2Logo,
      alt: "MEVICK Bilingual Grammar School logo",
      color: 'bg-red-800 border-gray-200',
      textColor: 'text-white'
    },
    {
      id: 3,
      name: t('enterprise.partners.schools.ipb'),
      logoPath: partner3Logo,
      alt: "Institut Polyvalent Bilingue logo",
      color: 'bg-blue-600 border-sky-200',
      textColor: 'text-white'
    },
    {
      id: 4,
      name: t('enterprise.partners.schools.wecare'),
      logoPath: partner4Logo,
      alt: "WECARE Academy logo",
      color: 'bg-green-900 border-yellow-400',
      textColor: 'text-yellow-400'
    },
    {
      id: 5,
      name: t('enterprise.partners.schools.ecole'),
      logoPath: partner5Logo,
      alt: "École Bilingue Albert Perière logo",
      color: 'bg-blue-800 border-white',
      textColor: 'text-white'
    },
    {
      id: 6,
      name: t('enterprise.partners.schools.elohim'),
      logoPath: partner6Logo,
      alt: "Complex Scolaire Bilingue ELOHIM logo",
      color: 'bg-blue-900 border-green-500',
      textColor: 'text-green-400'
    },
    {
      id: 7,
      name: t('enterprise.partners.schools.seventh'),
      logoPath: partner7Logo,
      alt: "Partner School logo",
      color: 'bg-purple-800 border-orange-400',
      textColor: 'text-orange-400'
    }
  ];

  useEffect(() => {
    if (imagesLoaded >= partners.length) {
      setAllImagesLoaded(true);
    }
  }, [imagesLoaded, partners.length]);

  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, partner: any) => {
    const target = e.target as HTMLImageElement;
    // If the image fails to load, use fallback
    target.src = getPartnerFallback(partner.id, partner.name);
    console.warn(`Failed to load image for ${partner.name}`);
    handleImageLoad();
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-brand-navy mb-4">
            {t('enterprise.partners.title')}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            {t('enterprise.partners.subtitle')}
          </p>
          <div className="w-16 h-1 bg-brand-orange mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-4xl mx-auto">
            {t('enterprise.partners.description')}
          </p>
        </motion.div>

        {/* Partners Logo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className={`rounded-xl shadow-lg overflow-hidden flex flex-col border-2 ${partner.color} transition-all duration-300 h-full`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.2 }
              }}
            >
              <div className="h-48 sm:h-56 md:h-64 p-6 flex items-center justify-center bg-white relative">
                <img 
                  src={partner.logoPath} 
                  alt={partner.alt}
                  className="max-w-full max-h-full object-contain transition-all duration-300 hover:scale-105"
                  onLoad={handleImageLoad}
                  onError={(e) => handleImageError(e, partner)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-30"></div>
              </div>
              <div className={`p-5 text-center ${partner.color} flex-grow`}>
                <h3 className={`text-base sm:text-lg font-bold tracking-wide ${partner.textColor} drop-shadow-sm`}>
                  {partner.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA for becoming a partner */}
        <motion.div
          className="bg-white p-8 rounded-lg border border-gray-200 shadow-md text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-brand-navy mb-4">{t('enterprise.partners.cta')}</h3>
          <Link 
            to={`/${language}/enterprise/contact`} 
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-orange text-white rounded-md hover:bg-brand-orange/90 transition-colors font-medium"
          >
            {t('enterprise.partners.ctaButton')}
            <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners; 