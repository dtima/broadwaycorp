import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// Import team member images
import tebohImage from '../../assets/images/team/2.jpg';
import nancyImage from '../../assets/images/team/4.jpg';
import jerryImage from '../../assets/images/team/1.jpeg';
import emiliaImage from '../../assets/images/team/3.jpg';
import njintiImage from '../../assets/images/team/5.jpg';

const EnterpriseAbout = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  // Define team members
  const teamMembers = [
    {
      id: 1,
      name: "Teboh Gustave Ngu",
      title: t('leadership.team.ceo.title'),
      bio: t('leadership.team.ceo.bio'),
      image: tebohImage
    },
    {
      id: 2,
      name: "Nancy Makeoh Mafor",
      title: t('leadership.team.projectManager.title'),
      bio: t('leadership.team.projectManager.bio'),
      image: nancyImage
    },
    {
      id: 3,
      name: "Jerry",
      title: "Operations Manager",
      bio: "Jerry oversees the day-to-day operations of Broadway Enterprise, ensuring efficient processes and high-quality service delivery.",
      image: jerryImage
    },
    {
      id: 4,
      name: "Emilia",
      title: "Education Specialist",
      bio: "Emilia leads our educational programs and curriculum development, bringing extensive experience in STEM education to our team.",
      image: emiliaImage
    },
    {
      id: 5,
      name: "Njinti",
      title: "Laboratory Coordinator",
      bio: "Njinti coordinates our laboratory construction projects, ensuring they meet the highest standards of quality and safety.",
      image: njintiImage
    }
  ];

  return (
    <div>
      <Helmet>
        <title>{t('enterprise.pageTitle')} - {t('about.title')}</title>
        <meta name="description" content={t('enterprise.metaDescription')} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 0h40v40H0z" fill="none" />
                <path d="M0 0h10v10H0z" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('about.title')}
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-brand-orange mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 96 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            <motion.p 
              className="text-xl mb-8 text-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t('about.subtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Enterprise Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-brand-navy mb-6">{t('enterprise.aboutTitle')}</h2>
              <p className="text-gray-700 mb-4">{t('enterprise.introText1')}</p>
              <p className="text-gray-700">{t('enterprise.introText2')}</p>
            </motion.div>
            
            <motion.div
              className="bg-gray-100 p-8 rounded-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-brand-navy mb-4">{t('enterprise.missionTitle')}</h3>
              <p className="text-gray-700 mb-6 italic border-l-4 border-brand-orange pl-4 py-2">
                "{t('enterprise.missionStatement')}"
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.h2 
            className="text-3xl font-bold text-center text-brand-navy mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('about.valuesTitle')}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{t('leadership.values.innovation.title')}</h3>
              <p className="text-gray-600 text-center">{t('leadership.values.innovation.description')}</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{t('leadership.values.integrity.title')}</h3>
              <p className="text-gray-600 text-center">{t('leadership.values.integrity.description')}</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{t('leadership.values.collaboration.title')}</h3>
              <p className="text-gray-600 text-center">{t('leadership.values.collaboration.description')}</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{t('about.value3').split(':')[0]}</h3>
              <p className="text-gray-600 text-center">{t('about.value3').split(':')[1]}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.h2 
            className="text-3xl font-bold text-center text-brand-navy mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('leadership.title')}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member Cards */}
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="h-80 overflow-hidden bg-gray-100">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.title}`}
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-brand-navy mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.title}</p>
                  <p className="text-gray-700">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">{t('leadership.cta.title')}</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">{t('leadership.cta.description')}</p>
            <Link to={`/${language}/enterprise/contact`} className="btn bg-white text-blue-600 hover:bg-white/90">
              {t('leadership.cta.button')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseAbout; 