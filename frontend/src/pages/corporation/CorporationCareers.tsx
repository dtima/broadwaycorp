import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { motion, useReducedMotion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Section, Container, Grid } from '../../components/layout';
import { Button, Image } from '../../components/common';
import { Breadcrumb, SubNavigation } from '../../components/navigation';
import { useEffect } from 'react';

const CorporationCareers = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Setup breadcrumb items
  const breadcrumbItems = [
    { label: t('navigation.home'), path: `/${language}` },
    { label: t('navigation.corporation'), path: `/${language}/corporation` },
    { label: t('navigation.careers'), current: true }
  ];

  // Mock job listings - In a real app, these would come from an API
  const jobListings = [
    {
      id: 1,
      title: 'Intern',
      department: 'Broadway Enterprise',
      location: 'Simbock, Yaounde-Cameroon',
      type: 'Internship',
      deadline: 'July 30, 2025',
      description: 'Broadway Corporation is seeking dedicated and enthusiastic interns to join our team. This is a unique opportunity to gain hands-on experience, while contributing to the growth of the company, as well as contributing generally to making a positive impact on our society.',
      responsibilities: [
        'Provide comprehensive administrative support, including managing schedules, organizing documents, and responding to inquiries',
        'Assist in the development and execution of marketing campaigns to promote our products and services',
        'Prepare marketing materials and presentations that effectively communicate our mission and offerings',
        'Support in conducting market research to identify trends and opportunities to enhance our outreach efforts',
        'Collaborate with team members to ensure efficient operations and a cohesive workplace environment',
        'Engage with clients and stakeholders to understand their needs and enhance customer satisfaction'
      ],
      requirements: [
        'Pursuing or recently completing a degree in business administration/management, marketing, communications, accountancy, science or a related field',
        'Strong organizational skills with keen attention to detail',
        'Excellent written and verbal communication skills',
        'Proficiency in Microsoft Office Suite; familiarity with digital marketing tools is a plus',
        'A passion for education and sustainability is highly valued',
        'Strong analytical and problem-solving skills',
        'Excellent communication and interpersonal abilities'
      ],
      benefits: [
        'An enriching opportunity to build your leadership and interpersonal skills',
        'Mentorship and guidance from experienced professionals in the field',
        'The chance to work on meaningful projects that contribute to the growth of the enterprise',
        'The ability to initiate projects to boost your professional growth',
        'Networking opportunities and comfortable working conditions'
      ],
      applicationEmail: 'careers@broadway-corp.com'
    },
    {
      id: 2,
      title: 'Senior Research Scientist',
      department: 'Research & Development',
      location: 'Yaoundé, Cameroon',
      type: 'Full-time',
      description: 'Join our R&D team to lead innovative research projects in sustainable agriculture and biotechnology.',
      requirements: [
        'Ph.D. in Agricultural Science, Biotechnology, or related field',
        '5+ years of research experience',
        'Strong publication record',
        'Experience with grant writing and project management'
      ]
    },
    {
      id: 3,
      title: 'Project Manager',
      department: 'Operations',
      location: 'Douala, Cameroon',
      type: 'Full-time',
      description: 'Lead and coordinate sustainable development projects across our various initiatives.',
      requirements: [
        "Bachelor's degree in Project Management or related field",
        '3+ years of project management experience',
        'PMP certification preferred',
        'Excellent communication and leadership skills'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('navigation.careers')} - {t('corporation.title')}</title>
        <meta name="description" content="Join Broadway Corporation and be part of our mission to drive sustainable development through innovation." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy to-brand-navy-dark dark:from-gray-900 dark:to-gray-800 py-16 md:py-20 text-white">
        <Container maxWidth="screen-lg">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Build Your Career With Us
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-brand-orange mx-auto mb-6"
              initial={shouldReduceMotion ? false : { opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 96 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.p 
              className="text-xl text-white/90 dark:text-white/80 mb-0"
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Join our mission to drive sustainable development through innovation
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

      {/* Why Join Us Section */}
      <Section background="white" padding="lg">
        <Container maxWidth="screen-lg">
          <Grid cols={1} mdCols={2} gap="lg" className="items-center">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-brand-navy dark:text-brand-orange mb-6">
                Why Join Broadway Corporation?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-orange flex items-center justify-center text-white mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy dark:text-brand-orange">Meaningful Impact</h3>
                    <p className="text-gray-700 dark:text-gray-300">Work on projects that make a real difference in sustainable development.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-orange flex items-center justify-center text-white mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy dark:text-brand-orange">Innovation Focus</h3>
                    <p className="text-gray-700 dark:text-gray-300">Be part of cutting-edge solutions in agriculture and sustainable technology.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-orange flex items-center justify-center text-white mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy dark:text-brand-orange">Growth Opportunities</h3>
                    <p className="text-gray-700 dark:text-gray-300">Continuous learning and career development in a dynamic environment.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/assets/images/team/career-hero.jpg"
                  alt="Team collaboration at Broadway Corporation"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </Grid>
        </Container>
      </Section>

      {/* Current Openings Section */}
      <Section background="light" padding="xl">
        <Container maxWidth="screen-lg">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-brand-navy dark:text-brand-orange mb-4">
              Current Openings
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our current job opportunities and find your perfect role in driving sustainable development.
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobListings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy dark:text-brand-orange mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                        {job.department}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                        {job.location}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                        {job.type}
                      </span>
                      {job.deadline && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange">
                          Deadline: {job.deadline}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-2">
                    {job.applicationEmail && (
                      <Button
                        href={`mailto:${job.applicationEmail}`}
                        variant="secondary"
                        className="text-sm"
                      >
                        Apply via Email
                      </Button>
                    )}
                    <Button
                      href={`/${language}/corporation/careers/${job.id}`}
                      variant="primary"
                      className="text-sm"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {job.description}
                </p>
                
                {job.responsibilities && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-brand-navy dark:text-brand-orange mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i} className="ml-4">{resp}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold text-brand-navy dark:text-brand-orange mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="ml-4">{req}</li>
                    ))}
                  </ul>
                </div>

                {job.benefits && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-brand-navy dark:text-brand-orange mb-2">What We Offer:</h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                      {job.benefits.map((benefit, i) => (
                        <li key={i} className="ml-4">{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section background="white" padding="lg">
        <Container maxWidth="screen-lg">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-brand-navy dark:text-brand-orange mb-4">
              Employee Benefits
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              We offer competitive benefits to support our team members' well-being and growth.
            </p>
          </motion.div>

          <Grid cols={1} mdCols={3} gap="lg">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Health & Wellness',
                description: 'Comprehensive medical coverage and wellness programs for you and your family.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: 'Learning & Development',
                description: 'Professional development opportunities and training programs to advance your career.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Work-Life Balance',
                description: 'Flexible work arrangements and generous paid time off to help you maintain balance.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center"
              >
                <div className="w-16 h-16 bg-brand-navy/10 dark:bg-brand-navy/20 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-navy dark:text-brand-orange">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-navy dark:text-brand-orange mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="navy" padding="lg">
        <Container maxWidth="screen-lg">
          <div className="text-center text-white">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Join our team and be part of the sustainable development revolution.
              </p>
              <Button 
                href={`/${language}/corporation/careers#openings`}
                variant="secondary"
                size="lg"
              >
                View All Positions
              </Button>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default CorporationCareers; 