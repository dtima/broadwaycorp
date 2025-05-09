import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Section, Container, Grid } from '../../components/layout';
import { Button, Image } from '../../components/common';
import { Breadcrumb, SubNavigation } from '../../components/navigation';
import { useEffect } from 'react';
import { convertToNavItems } from '../../utils/navigation';

const CorporationTeam = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Setup breadcrumb items
  const breadcrumbItems = [
    { label: t('navigation.home'), path: `/${language}` },
    { label: t('navigation.corporation'), path: `/${language}/corporation` },
    { label: t('navigation.aboutSubmenu.leadership'), current: true }
  ];

  // Setup legacy sub-navigation items
  const legacySubNavItems = [
    { 
      label: t('navigation.about'), 
      path: `/${language}/corporation/about`
    },
    { 
      label: t('navigation.aboutSubmenu.ceoMessage'), 
      path: `/${language}/corporation/about/ceo-message`
    },
    { 
      label: t('navigation.aboutSubmenu.leadership'), 
      path: `/${language}/corporation/team`,
      current: true
    }
  ];
  
  // Convert to compatible NavItem format
  const subNavItems = convertToNavItems(legacySubNavItems);
  // Set active ID based on current page
  const activeId = `/${language}/corporation/team`.replace(/\//g, '-').replace(/^-/, '');

  return (
    <>
      <Helmet>
        <title>{t('navigation.aboutSubmenu.leadership')} - {t('corporation.title')}</title>
        <meta name="description" content={t('leadership.metaDescription')} />
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
              {t('leadership.title')}
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
              {t('leadership.heroTagline')}
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <Container maxWidth="screen-lg" className="py-3">
          <Breadcrumb items={breadcrumbItems} />
        </Container>
      </div>

      {/* Sub Navigation */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-20 z-10">
        <Container maxWidth="screen-lg">
          <SubNavigation items={subNavItems} activeId={activeId} />
        </Container>
      </div>

      {/* Team Introduction */}
      <Section background="white" padding="xl">
        <Container maxWidth="screen-lg">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('leadership.introduction')}
              </p>
            </motion.div>
          </div>

          {/* Leadership Profiles */}
          <Grid cols={1} mdCols={2} lgCols={3} gap="lg" className="mb-16">
            {/* Chairman */}
            <TeamMember
              name={t('leadership.team.chairman.name')}
              title={t('leadership.team.chairman.title')}
              bio={t('leadership.team.chairman.bio')}
              imageUrl="/assets/images/team-chairman.jpg"
              fallbackText="Chairman"
              delay={0.1}
            />

            {/* Vice Chair */}
            <TeamMember
              name={t('leadership.team.viceChair.name')}
              title={t('leadership.team.viceChair.title')}
              bio={t('leadership.team.viceChair.bio')}
              imageUrl="/assets/images/team-vice-chair.jpg"
              fallbackText="Vice Chair"
              delay={0.2}
            />

            {/* CEO */}
            <TeamMember
              name={t('leadership.team.ceo.name')}
              title={t('leadership.team.ceo.title')}
              bio={t('leadership.team.ceo.bio')}
              imageUrl="/assets/images/team-ceo.jpg"
              fallbackText="CEO"
              delay={0.3}
              featured
            />

            {/* Project Manager */}
            <TeamMember
              name={t('leadership.team.projectManager.name')}
              title={t('leadership.team.projectManager.title')}
              bio={t('leadership.team.projectManager.bio')}
              imageUrl="/assets/images/team-project-manager.jpg"
              fallbackText="Project Manager"
              delay={0.4}
            />

            {/* Finance Adviser */}
            <TeamMember
              name={t('leadership.team.financeAdviser.name')}
              title={t('leadership.team.financeAdviser.title')}
              bio={t('leadership.team.financeAdviser.bio')}
              imageUrl="/assets/images/team-finance-adviser.jpg"
              fallbackText="Finance Adviser"
              delay={0.5}
            />
          </Grid>
        </Container>
      </Section>

      {/* Leadership Values */}
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
              {t('leadership.values.title')}
            </h2>
          </motion.div>

          <Grid cols={1} mdCols={3} gap="lg">
            {/* Integrity */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 text-center border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-brand-navy/10 dark:bg-brand-navy/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-navy dark:text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy dark:text-brand-orange mb-3">
                {t('leadership.values.integrity.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('leadership.values.integrity.description')}
              </p>
            </motion.div>

            {/* Innovation */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 text-center border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-brand-navy/10 dark:bg-brand-navy/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-navy dark:text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy dark:text-brand-orange mb-3">
                {t('leadership.values.innovation.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('leadership.values.innovation.description')}
              </p>
            </motion.div>

            {/* Collaboration */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 text-center border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-brand-navy/10 dark:bg-brand-navy/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-navy dark:text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy dark:text-brand-orange mb-3">
                {t('leadership.values.collaboration.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('leadership.values.collaboration.description')}
              </p>
            </motion.div>
          </Grid>
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
            <h2 className="text-3xl font-bold mb-4">{t('leadership.cta.title')}</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90">{t('leadership.cta.description')}</p>
            <Button 
              href={`/${language}/corporation/contact`} 
              variant="secondary"
              size="lg"
            >
              {t('leadership.cta.button')}
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

// Team Member Component
interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  fallbackText: string;
  delay: number;
  featured?: boolean;
}

const TeamMember = ({ name, title, bio, imageUrl, fallbackText, delay, featured = false }: TeamMemberProps) => {
  const fallbackSrc = `https://placehold.co/800x600/003366/ffffff?text=${fallbackText}`;
  
  return (
    <motion.div 
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 h-full flex flex-col ${featured ? 'md:col-span-3 lg:col-span-1 ring-2 ring-brand-orange ring-offset-2 dark:ring-offset-gray-900' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-700 relative">
        <Image 
          src={imageUrl} 
          alt={name}
          fallbackSrc={fallbackSrc}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-brand-navy dark:text-brand-orange mb-1">{name}</h3>
        <p className="text-sm text-brand-orange dark:text-brand-orange/80 font-medium mb-4">{title}</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">{bio}</p>
      </div>
    </motion.div>
  );
};

export default CorporationTeam; 