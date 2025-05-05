import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Section, Container, Grid } from '../../components/layout';
import { Button } from '../../components/common';
import { useEffect } from 'react';

const CorporationServices = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('corporation.services')} - {t('corporation.title')}</title>
        <meta name="description" content="Discover comprehensive services across our divisions, from scientific equipment and education to sustainable agriculture and livestock breeding." />
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
              {t('corporation.services')}
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
              Comprehensive solutions through our specialized divisions
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
            <span className="text-gray-700 dark:text-gray-300">{t('corporation.services')}</span>
          </nav>
        </Container>
      </div>

      {/* Service Introduction */}
      <Section background="white" padding="xl">
        <Container maxWidth="screen-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-brand-navy dark:text-brand-orange mb-6">Our Comprehensive Services</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Broadway Corporation offers a diverse range of services through our specialized divisions, addressing challenges in science, education, agriculture, and community development. Our integrated approach allows us to provide comprehensive solutions tailored to meet specific needs.
            </p>
          </motion.div>

          {/* Enterprise Division Services */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10 flex items-center"
            >
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl mr-4">E</div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy dark:text-brand-orange">
                Broadway Enterprise Services
              </h2>
            </motion.div>

            <Grid cols={1} mdCols={2} gap="lg">
              {/* Scientific Equipment */}
              <ServiceCard
                title={t('enterprise.services.scientific.title')}
                description={t('enterprise.services.scientific.description')}
                items={[
                  t('enterprise.services.scientific.item1'),
                  t('enterprise.services.scientific.item2'),
                  t('enterprise.services.scientific.item3')
                ]}
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                }
                color="bg-blue-600 dark:bg-blue-700"
                delay={0.1}
              />

              {/* Education & Tutoring */}
              <ServiceCard
                title={t('enterprise.services.education.title')}
                description={t('enterprise.services.education.description')}
                items={[
                  t('enterprise.services.education.item1'),
                  t('enterprise.services.education.item2'),
                  t('enterprise.services.education.item3')
                ]}
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                }
                color="bg-blue-600 dark:bg-blue-700"
                delay={0.2}
              />

              {/* Laboratory Construction */}
              <ServiceCard
                title={t('enterprise.services.laboratory.title')}
                description={t('enterprise.services.laboratory.description')}
                items={[
                  t('enterprise.services.laboratory.item1'),
                  t('enterprise.services.laboratory.item2'),
                  t('enterprise.services.laboratory.item3')
                ]}
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                }
                color="bg-blue-600 dark:bg-blue-700"
                delay={0.3}
              />

              {/* Community Development */}
              <ServiceCard
                title={t('enterprise.services.community.title')}
                description={t('enterprise.services.community.description')}
                items={[
                  t('enterprise.services.community.item1'),
                  t('enterprise.services.community.item2'),
                  t('enterprise.services.community.item3')
                ]}
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                }
                color="bg-blue-600 dark:bg-blue-700"
                delay={0.4}
              />
            </Grid>

            {/* Enterprise CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center mt-10"
            >
              <Button href={`/${language}/enterprise`} variant="primary" size="lg">
                {t('divisions.enterprise.button')}
              </Button>
            </motion.div>
          </div>

          {/* Farmhouse Division Services */}
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10 flex items-center"
            >
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl mr-4">F</div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy dark:text-brand-orange">
                Broadway Farmhouse Services
              </h2>
            </motion.div>

            <Grid cols={1} mdCols={2} gap="lg">
              {/* Sustainable Agriculture */}
              <ServiceCard
                title="Sustainable Agriculture"
                description="We implement environmentally friendly farming practices that maximize productivity while preserving natural resources and ecosystem health."
                items={[
                  "Organic farming methods",
                  "Crop rotation and diversification",
                  "Soil health management"
                ]}
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                color="bg-green-600 dark:bg-green-700"
                delay={0.1}
              />

              {/* Livestock Breeding */}
              <ServiceCard
                title="Livestock Breeding"
                description="Our animal husbandry programs focus on developing healthy, high-yield livestock breeds adapted to local conditions."
                items={[
                  "Selective breeding programs",
                  "Animal health management",
                  "Nutrition optimization"
                ]}
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                }
                color="bg-green-600 dark:bg-green-700"
                delay={0.2}
              />

              {/* Aquaculture */}
              <ServiceCard
                title="Aquaculture Systems"
                description="We design and implement sustainable fish farming systems that provide protein-rich food sources and economic opportunities."
                items={[
                  "Pond design and management",
                  "Fish species selection",
                  "Water quality monitoring"
                ]}
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                }
                color="bg-green-600 dark:bg-green-700"
                delay={0.3}
              />

              {/* Agricultural Training */}
              <ServiceCard
                title="Agricultural Training"
                description="We provide comprehensive training programs to empower local farmers with the knowledge and skills needed for sustainable farming."
                items={[
                  "Hands-on skills development",
                  "Modern farming techniques",
                  "Business management for farmers"
                ]}
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                }
                color="bg-green-600 dark:bg-green-700"
                delay={0.4}
              />
            </Grid>

            {/* Farmhouse CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center mt-10"
            >
              <Button href={`/${language}/farmhouse`} variant="primary" size="lg">
                {t('divisions.farmhouse.button')}
              </Button>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Service Process Section */}
      <Section background="light" padding="lg">
        <Container maxWidth="screen-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-brand-navy dark:text-brand-orange mb-4">
              Our Service Process
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              At Broadway Corporation, we follow a systematic approach to ensure effective service delivery that meets the specific needs of our clients and communities.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 transform -translate-x-1/2 z-0" />

              {/* Step 1: Assessment */}
              <ProcessStep
                number={1}
                title="Assessment & Consultation"
                description="We begin by understanding the specific needs, challenges, and goals through in-depth consultations and on-site assessments."
                isLeft={true}
                delay={0.1}
              />

              {/* Step 2: Planning */}
              <ProcessStep
                number={2}
                title="Custom Solution Design"
                description="Our team develops tailored solutions drawing on expertise from across our divisions to create comprehensive approaches."
                isLeft={false}
                delay={0.2}
              />

              {/* Step 3: Implementation */}
              <ProcessStep
                number={3}
                title="Implementation"
                description="We execute the planned solutions with careful attention to quality, efficiency, and alignment with local contexts."
                isLeft={true}
                delay={0.3}
              />

              {/* Step 4: Training */}
              <ProcessStep
                number={4}
                title="Knowledge Transfer"
                description="We provide training and education to ensure sustainable impact by empowering local stakeholders with the necessary skills and knowledge."
                isLeft={false}
                delay={0.4}
              />

              {/* Step 5: Monitoring */}
              <ProcessStep
                number={5}
                title="Monitoring & Support"
                description="We maintain ongoing evaluation and support to ensure continued success and make adjustments as needed."
                isLeft={true}
                delay={0.5}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-dark dark:from-gray-900 dark:to-gray-800 py-16 text-white">
        <Container maxWidth="screen-lg" className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90">
              Contact us today to discuss how our services can address your specific needs and contribute to sustainable development goals.
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

// Service Card Component
interface ServiceCardProps {
  title: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
  color: string;
  delay: number;
}

const ServiceCard = ({ title, description, items, icon, color, delay }: ServiceCardProps) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center text-white mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-brand-navy dark:text-brand-orange mb-3">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 mt-0.5 mr-2 text-brand-orange flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600 dark:text-gray-400">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

// Process Step Component
interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLeft: boolean;
  delay: number;
}

const ProcessStep = ({ number, title, description, isLeft, delay }: ProcessStepProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-12 relative z-10">
      <motion.div 
        className={`w-full md:w-1/2 pb-8 md:pb-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-2'}`}
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
      >
        <h3 className="text-xl font-bold text-brand-navy dark:text-brand-orange mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </motion.div>
      
      <motion.div 
        className="flex-shrink-0 z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
      >
        <div className="w-12 h-12 rounded-full bg-brand-navy dark:bg-brand-orange text-white flex items-center justify-center text-xl font-bold">
          {number}
        </div>
      </motion.div>
      
      {!isLeft && (
        <div className="hidden md:block w-1/2 order-1"></div>
      )}
    </div>
  );
};

export default CorporationServices; 