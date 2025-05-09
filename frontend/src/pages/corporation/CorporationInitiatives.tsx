import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Section, Container, Grid } from '../../components/layout';
import { Button } from '../../components/common';
import { useEffect } from 'react';

const CorporationInitiatives = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('initiatives.title')} - {t('corporation.title')}</title>
        <meta name="description" content={t('initiatives.metaDescription')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy to-brand-navy-dark dark:from-gray-900 dark:to-gray-800 py-16 md:py-20 text-white">
        <Container maxWidth="screen-lg">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('initiatives.heroTitle')}
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-brand-orange mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 96 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.p 
              className="text-xl text-white/90 dark:text-white/80 mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t('initiatives.heroSubtitle')}
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <Container maxWidth="screen-lg" className="py-3">
          <nav className="flex text-sm">
            <Link to={`/${language}`} className="text-gray-500 dark:text-gray-400 hover:text-brand-navy dark:hover:text-brand-orange transition-colors">
              {t('navigation.home')}
            </Link>
            <span className="mx-2 text-gray-400 dark:text-gray-500">/</span>
            <Link to={`/${language}/corporation`} className="text-gray-500 dark:text-gray-400 hover:text-brand-navy dark:hover:text-brand-orange transition-colors">
              {t('navigation.corporation')}
            </Link>
            <span className="mx-2 text-gray-400 dark:text-gray-500">/</span>
            <span className="text-gray-700 dark:text-gray-300">{t('initiatives.title')}</span>
          </nav>
        </Container>
      </div>

      {/* Introduction Section */}
      <Section background="white" padding="xl">
        <Container maxWidth="screen-lg">
          <Grid cols={1} mdCols={2} gap="lg" className="items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-brand-navy dark:text-brand-orange mb-6">{t('initiatives.visionTitle')}</h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {t('initiatives.visionText1')}
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('initiatives.visionText2')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="/assets/images/future-growth.jpg" 
                alt="Innovation and Future Growth" 
                className="w-full h-80 object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/800x640/003366/ffffff?text=Future+Vision';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="text-lg font-bold">Building a sustainable future through innovation</p>
                </div>
              </div>
            </motion.div>
          </Grid>
        </Container>
      </Section>

      {/* Initiatives Section */}
      <Section background="light" padding="lg">
        <Container maxWidth="screen-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-brand-navy dark:text-brand-orange mb-4">
              {t('initiatives.keyInitiativesTitle')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {t('initiatives.keyInitiativesDescription')}
            </p>
          </motion.div>

          {/* Agro-Tourism Initiative */}
          <div className="mb-16">
            <InitiativeCard
              title={t('initiatives.agroTourism.title')}
              description={t('initiatives.agroTourism.description')}
              features={[
                t('initiatives.agroTourism.feature1'),
                t('initiatives.agroTourism.feature2'),
                t('initiatives.agroTourism.feature3'),
                t('initiatives.agroTourism.feature4')
              ]}
              imageSrc="/assets/images/agro-tourism.jpg"
              imageAlt="Agro-Tourism Experience"
              imageFallbackText="Agro-Tourism"
              isImageRight={false}
              delay={0.1}
            />
          </div>

          {/* Bio-Research Initiative */}
          <div className="mb-16">
            <InitiativeCard
              title={t('initiatives.bioResearch.title')}
              description={t('initiatives.bioResearch.description')}
              features={[
                t('initiatives.bioResearch.feature1'),
                t('initiatives.bioResearch.feature2'),
                t('initiatives.bioResearch.feature3'),
                t('initiatives.bioResearch.feature4')
              ]}
              imageSrc="/assets/images/bio-research.jpg"
              imageAlt="Bio-Research Innovation"
              imageFallbackText="Bio-Research"
              isImageRight={true}
              delay={0.2}
            />
          </div>

          {/* Renewable Energy Initiative */}
          <div className="mb-16">
            <InitiativeCard
              title={t('initiatives.renewableEnergy.title')}
              description={t('initiatives.renewableEnergy.description')}
              features={[
                t('initiatives.renewableEnergy.feature1'),
                t('initiatives.renewableEnergy.feature2'),
                t('initiatives.renewableEnergy.feature3'),
                t('initiatives.renewableEnergy.feature4')
              ]}
              imageSrc="/assets/images/renewable-energy.jpg"
              imageAlt="Renewable Energy Solutions"
              imageFallbackText="Renewable Energy"
              isImageRight={false}
              delay={0.3}
            />
          </div>

          {/* Digital Agriculture Initiative */}
          <div>
            <InitiativeCard
              title={t('initiatives.digitalAgriculture.title')}
              description={t('initiatives.digitalAgriculture.description')}
              features={[
                t('initiatives.digitalAgriculture.feature1'),
                t('initiatives.digitalAgriculture.feature2'),
                t('initiatives.digitalAgriculture.feature3'),
                t('initiatives.digitalAgriculture.feature4')
              ]}
              imageSrc="/assets/images/digital-agriculture.jpg"
              imageAlt="Digital Agriculture Solutions"
              imageFallbackText="Digital Agriculture"
              isImageRight={true}
              delay={0.4}
            />
          </div>
        </Container>
      </Section>

      {/* Timeline Section */}
      <Section background="white" padding="xl">
        <Container maxWidth="screen-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-brand-navy dark:text-brand-orange mb-4">
              Implementation Timeline
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Our strategic roadmap outlines the phased approach to bringing these innovative initiatives to life.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-24 md:left-1/4 top-0 bottom-0 w-0.5 bg-brand-navy/20 dark:bg-brand-navy/30 z-0" />

              {/* Phase 1: Research & Planning */}
              <TimelineItem
                phase="Phase 1: 2023-2024"
                title="Research & Planning"
                description="Conducting feasibility studies, market research, and developing detailed implementation plans for our key initiatives."
                features={[
                  "Stakeholder consultations and needs assessment",
                  "Partnership development with key organizations",
                  "Resource planning and preliminary budgeting",
                  "Regulatory compliance assessment"
                ]}
                delay={0.1}
              />

              {/* Phase 2: Pilot Implementation */}
              <TimelineItem
                phase="Phase 2: 2024-2025"
                title="Pilot Implementation"
                description="Launching small-scale versions of each initiative to test concepts, gather feedback, and refine approaches."
                features={[
                  "Small-scale agro-tourism demonstration site",
                  "Initial bio-research projects with academic partners",
                  "Prototype renewable energy systems installation",
                  "Beta version of digital agriculture applications"
                ]}
                delay={0.2}
              />

              {/* Phase 3: Expansion */}
              <TimelineItem
                phase="Phase 3: 2025-2026"
                title="Expansion & Refinement"
                description="Scaling successful pilots and integrating lessons learned for full implementation of each initiative."
                features={[
                  "Full-scale agro-tourism destination development",
                  "Expanded bio-research facility with multiple research streams",
                  "Comprehensive renewable energy implementation across all operations",
                  "Public launch of digital agriculture platform with partner integration"
                ]}
                delay={0.3}
              />

              {/* Phase 4: Integration & Impact */}
              <TimelineItem
                phase="Phase 4: 2026-2027"
                title="Integration & Impact Assessment"
                description="Ensuring initiatives work seamlessly together and measuring their economic, social, and environmental impact."
                features={[
                  "Cross-initiative integration for maximum efficiency",
                  "Comprehensive impact measurement framework implementation",
                  "Knowledge sharing through case studies and publications",
                  "Community ownership and participation models"
                ]}
                delay={0.4}
                isLast={true}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Partnership CTA Section */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-dark dark:from-gray-900 dark:to-gray-800 py-16 text-white">
        <Container maxWidth="screen-lg" className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Join Us in Shaping the Future</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90">
              We're seeking forward-thinking partners who share our vision for innovative sustainable development. Connect with us to explore collaboration opportunities.
            </p>
            <Button 
              href={`/${language}/corporation/contact`} 
              variant="secondary"
              size="lg"
            >
              {t('contact.contactButton')}
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

// Initiative Card Component
interface InitiativeCardProps {
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  imageFallbackText: string;
  isImageRight: boolean;
  delay: number;
}

const InitiativeCard = ({ 
  title, 
  description, 
  features, 
  imageSrc, 
  imageAlt, 
  imageFallbackText,
  isImageRight,
  delay 
}: InitiativeCardProps) => {
  return (
    <Grid cols={1} mdCols={2} gap="lg" className="items-center">
      <motion.div
        initial={{ opacity: 0, x: isImageRight ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className={`${isImageRight ? 'md:order-1' : 'md:order-2'}`}
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 md:p-8 border border-gray-100 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-brand-navy dark:text-brand-orange mb-4">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{description}</p>
          
          <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-4">Key Components</h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-3 text-brand-orange flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: isImageRight ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.1 }}
        className={`${isImageRight ? 'md:order-2' : 'md:order-1'}`}
      >
        <div className="relative rounded-xl overflow-hidden shadow-lg h-80">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = `https://placehold.co/800x640/003366/ffffff?text=${imageFallbackText.replace(' ', '+')}`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent"></div>
        </div>
      </motion.div>
    </Grid>
  );
};

// Timeline Item Component
interface TimelineItemProps {
  phase: string;
  title: string;
  description: string;
  features: string[];
  delay: number;
  isLast?: boolean;
}

const TimelineItem = ({ phase, title, description, features, delay }: TimelineItemProps) => {
  return (
    <div className="flex mb-12">
      <motion.div 
        className="flex-shrink-0 w-24 md:w-1/4 pr-4 text-right"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
      >
        <span className="inline-block text-sm font-bold bg-brand-orange/20 dark:bg-brand-orange/30 text-brand-orange px-3 py-1 rounded-full">
          {phase}
        </span>
      </motion.div>
      
      <div className="relative">
        <motion.div 
          className="absolute left-0 top-0 w-5 h-5 rounded-full bg-brand-orange border-4 border-white dark:border-gray-800 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay }}
        />
        
        <motion.div 
          className="pl-6 pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.1 }}
        >
          <h3 className="text-xl font-bold text-brand-navy dark:text-brand-orange mb-2">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 border border-gray-100 dark:border-gray-700">
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm">
                  <svg className="w-4 h-4 mt-0.5 mr-2 text-brand-orange flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CorporationInitiatives; 