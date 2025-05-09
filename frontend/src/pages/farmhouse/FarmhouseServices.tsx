import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import SubNavigation from '../../components/navigation/SubNavigation';
import ExpandableText from '../../components/common/ExpandableText';
import RelatedLinks from '../../components/navigation/RelatedLinks';
import NextPrevNavigation from '../../components/navigation/NextPrevNavigation';
import { useEffect, useRef, useState } from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeader from '../../components/common/SectionHeader';
import FeatureCard from '../../components/common/FeatureCard';

const FarmhouseServices = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('overview');
  
  // Refs for each section for intersection observer
  const overviewRef = useRef<HTMLDivElement>(null);
  const organicRef = useRef<HTMLDivElement>(null);
  const sustainableRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  // Setup intersection observer to update active section based on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (overviewRef.current) observer.observe(overviewRef.current);
    if (organicRef.current) observer.observe(organicRef.current);
    if (sustainableRef.current) observer.observe(sustainableRef.current);
    if (communityRef.current) observer.observe(communityRef.current);
    if (educationRef.current) observer.observe(educationRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Sub-navigation items
  const subNavItems = [
    { id: 'overview', label: t('farmhouse.services.navOverview'), href: '#overview' },
    { id: 'organic', label: t('farmhouse.services.organic.title'), href: '#organic' },
    { id: 'sustainable', label: t('farmhouse.services.sustainable.title'), href: '#sustainable' },
    { id: 'community', label: t('farmhouse.services.community.title'), href: '#community' },
    { id: 'education', label: t('farmhouse.services.education.title'), href: '#education' }
  ];

  // Related links
  const organicRelatedLinks = [
    { id: 'projects', label: t('farmhouse.projectsTitle'), path: `/${language}/farmhouse/projects`, color: 'green' as const },
    { id: 'sustainable', label: t('farmhouse.services.sustainable.title'), path: '#sustainable', color: 'amber' as const }
  ];

  const sustainableRelatedLinks = [
    { id: 'organic', label: t('farmhouse.services.organic.title'), path: '#organic', color: 'green' as const },
    { id: 'community', label: t('farmhouse.services.community.title'), path: '#community', color: 'blue' as const }
  ];

  const communityRelatedLinks = [
    { id: 'education', label: t('farmhouse.services.education.title'), path: '#education', color: 'purple' as const },
    { id: 'about', label: t('navigation.about'), path: `/${language}/farmhouse/about`, color: 'green' as const }
  ];

  const educationRelatedLinks = [
    { id: 'community', label: t('farmhouse.services.community.title'), path: '#community', color: 'blue' as const },
    { id: 'contact', label: t('navigation.contact'), path: `/${language}/farmhouse/contact`, color: 'green' as const }
  ];

  // Next/Previous navigation links for pages
  const nextPrevLinks = {
    prev: {
      label: t('navigation.about'),
      path: `/${language}/farmhouse/about`,
      description: t('about.subtitle')
    },
    next: {
      label: t('farmhouse.projectsTitle'),
      path: `/${language}/farmhouse/projects`,
      description: t('farmhouse.projectsDescription')
    }
  };

  // Service section icons
  const OrganicIcon = () => (
    <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );

  const SustainableIcon = () => (
    <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const CommunityIcon = () => (
    <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );

  const EducationIcon = () => (
    <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );

  return (
    <div>
      <Helmet>
        <title>{t('farmhouse.pageTitle')} - {t('farmhouse.servicesTitle')}</title>
        <meta name="description" content={t('farmhouse.metaDescription')} />
      </Helmet>

      {/* Hero Section */}
      <PageHero
        title={t('farmhouse.servicesTitle')}
        subtitle={t('farmhouse.servicesSubtitle')}
        bgColor="bg-green-700"
      />

      {/* Sub Navigation */}
      <SubNavigation items={subNavItems} activeId={activeSection} />

      {/* Services Overview */}
      <section id="overview" ref={overviewRef} className="py-16">
        <div className="container-custom">
          <SectionHeader
            title={t('farmhouse.services.title')}
            description={t('farmhouse.servicesSubtitle')}
            centered={true}
          />
        </div>
      </section>

      {/* Organic Farming */}
      <section id="organic" ref={organicRef} className="py-16 bg-gray-50" aria-labelledby="organic-farming-title">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
            <motion.div
              className="order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 id="organic-farming-title" className="text-2xl font-bold text-brand-navy mb-4">{t('farmhouse.services.organic.title')}</h3>
              <ExpandableText
                text={t('farmhouse.services.organic.description')}
                maxLines={4}
                className="text-gray-700 mb-6"
              />
              
              <FeatureCard
                title=""
                description=""
                color="green"
                items={[
                  t('farmhouse.services.organic.item1'),
                  t('farmhouse.services.organic.item2'),
                  t('farmhouse.services.organic.item3')
                ]}
              />
              
              <RelatedLinks 
                title={t('farmhouse.services.relatedTitle')}
                links={organicRelatedLinks}
                className="mt-6"
              />
            </motion.div>
            <motion.div
              className="order-1 md:order-2 bg-green-100 rounded-lg p-6 h-64 flex items-center justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              aria-hidden="true"
            >
              <OrganicIcon />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainable Practices */}
      <section id="sustainable" ref={sustainableRef} className="py-16" aria-labelledby="sustainable-practices-title">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
            <motion.div
              className="bg-amber-100 rounded-lg p-6 h-64 flex items-center justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              aria-hidden="true"
            >
              <SustainableIcon />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 id="sustainable-practices-title" className="text-2xl font-bold text-brand-navy mb-4">{t('farmhouse.services.sustainable.title')}</h3>
              <ExpandableText
                text={t('farmhouse.services.sustainable.description')}
                maxLines={4}
                className="text-gray-700 mb-6"
              />
              
              <FeatureCard
                title=""
                description=""
                color="amber"
                items={[
                  t('farmhouse.services.sustainable.item1'),
                  t('farmhouse.services.sustainable.item2'),
                  t('farmhouse.services.sustainable.item3')
                ]}
              />
              
              <RelatedLinks 
                title={t('farmhouse.services.relatedTitle')}
                links={sustainableRelatedLinks}
                className="mt-6"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Programs */}
      <section id="community" ref={communityRef} className="py-16 bg-gray-50" aria-labelledby="community-programs-title">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
            <motion.div
              className="order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 id="community-programs-title" className="text-2xl font-bold text-brand-navy mb-4">{t('farmhouse.services.community.title')}</h3>
              <ExpandableText
                text={t('farmhouse.services.community.description')}
                maxLines={4}
                className="text-gray-700 mb-6"
              />
              
              <FeatureCard
                title=""
                description=""
                color="blue"
                items={[
                  t('farmhouse.services.community.item1'),
                  t('farmhouse.services.community.item2'),
                  t('farmhouse.services.community.item3')
                ]}
              />
              
              <RelatedLinks 
                title={t('farmhouse.services.relatedTitle')}
                links={communityRelatedLinks}
                className="mt-6"
              />
            </motion.div>
            <motion.div
              className="order-1 md:order-2 bg-blue-100 rounded-lg p-6 h-64 flex items-center justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              aria-hidden="true"
            >
              <CommunityIcon />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Programs */}
      <section id="education" ref={educationRef} className="py-16" aria-labelledby="education-programs-title">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
            <motion.div
              className="bg-purple-100 rounded-lg p-6 h-64 flex items-center justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              aria-hidden="true"
            >
              <EducationIcon />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 id="education-programs-title" className="text-2xl font-bold text-brand-navy mb-4">{t('farmhouse.services.education.title')}</h3>
              <ExpandableText
                text={t('farmhouse.services.education.description')}
                maxLines={4}
                className="text-gray-700 mb-6"
              />
              
              <FeatureCard
                title=""
                description=""
                color="purple"
                items={[
                  t('farmhouse.services.education.item1'),
                  t('farmhouse.services.education.item2'),
                  t('farmhouse.services.education.item3')
                ]}
              />
              
              <RelatedLinks 
                title={t('farmhouse.services.relatedTitle')}
                links={educationRelatedLinks}
                className="mt-6"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next/Prev Navigation */}
      <NextPrevNavigation links={nextPrevLinks} />
    </div>
  );
};

export default FarmhouseServices; 