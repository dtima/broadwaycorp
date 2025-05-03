import { useTranslation } from 'react-i18next';
import Layout from '../../components/layout/Layout';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';

const LeadershipPage = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  // This would come from a CMS or API in a real application
  const leadershipTeam = [
    {
      id: 1,
      name: t('leadership.team.chairman.name'),
      title: t('leadership.team.chairman.title'),
      photo: '/leadership/chairman.jpg',
      bio: t('leadership.team.chairman.bio'),
    },
    {
      id: 2,
      name: t('leadership.team.viceChair.name'),
      title: t('leadership.team.viceChair.title'),
      photo: '/leadership/vice-chairlady.jpg',
      bio: t('leadership.team.viceChair.bio'),
    },
    {
      id: 3,
      name: t('leadership.team.ceo.name'),
      title: t('leadership.team.ceo.title'),
      photo: '/leadership/ceo.jpg',
      bio: t('leadership.team.ceo.bio'),
    },
    {
      id: 4,
      name: t('leadership.team.projectManager.name'),
      title: t('leadership.team.projectManager.title'),
      photo: '/leadership/project-manager.jpg',
      bio: t('leadership.team.projectManager.bio'),
    },
    {
      id: 5,
      name: t('leadership.team.financeAdviser.name'),
      title: t('leadership.team.financeAdviser.title'),
      photo: '/leadership/finance-adviser.jpg',
      bio: t('leadership.team.financeAdviser.bio'),
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>{t('navigation.aboutSubmenu.leadership')} | Broadway Corporation</title>
        <meta name="description" content={t('leadership.metaDescription')} />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-brand-navy py-12 md:py-20">
        <div className="container-custom">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
              {t('navigation.aboutSubmenu.leadership')}
            </h1>
            <div className="w-20 h-1 bg-brand-orange mb-6"></div>
            <p className="text-white/90 text-center max-w-2xl text-lg">
              {t('leadership.heroTagline')}
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-brand-gray-light py-3">
        <div className="container-custom">
          <nav className="flex text-sm">
            <Link to={`/${language}`} className="text-brand-navy hover:text-brand-orange transition-colors">
              {t('navigation.home')}
            </Link>
            <span className="mx-2 text-brand-gray">/</span>
            <Link to={`/${language}/about`} className="text-brand-navy hover:text-brand-orange transition-colors">
              {t('navigation.about')}
            </Link>
            <span className="mx-2 text-brand-gray">/</span>
            <span className="text-brand-gray-dark">{t('navigation.aboutSubmenu.leadership')}</span>
          </nav>
        </div>
      </div>

      {/* Leadership Team Content */}
      <div className="container-custom py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">{t('leadership.title') || 'Meet Our Leadership Team'}</h2>
            <p className="text-lg text-brand-gray-dark max-w-3xl mx-auto">
              {t('leadership.introduction')}
            </p>
          </div>

          {/* Leadership Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {leadershipTeam.map((leader) => (
              <div key={leader.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <div className="aspect-[3/2] bg-brand-gray-light relative">
                  <img
                    src={leader.photo}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/400x300?text=${encodeURIComponent(leader.name.split(' ')[0][0] + leader.name.split(' ')[1][0])}`;
                    }}
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-brand-navy mb-1">{leader.name}</h3>
                  <p className="text-brand-orange font-medium mb-4">{leader.title}</p>
                  <p className="text-brand-gray-dark">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Team Values */}
          <div className="bg-brand-gray-light p-6 md:p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-brand-navy mb-6 text-center">{t('leadership.values.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center mb-4 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{t('leadership.values.integrity.title')}</h3>
                <p className="text-brand-gray-dark">{t('leadership.values.integrity.description')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center mb-4 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{t('leadership.values.innovation.title')}</h3>
                <p className="text-brand-gray-dark">{t('leadership.values.innovation.description')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center mb-4 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{t('leadership.values.collaboration.title')}</h3>
                <p className="text-brand-gray-dark">{t('leadership.values.collaboration.description')}</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row items-center justify-between bg-brand-navy p-6 md:p-8 rounded-lg text-white">
            <div>
              <h3 className="text-xl font-bold mb-2">{t('leadership.cta.title')}</h3>
              <p className="text-white/80">{t('leadership.cta.description')}</p>
            </div>
            <Link 
              to={`/${language}/contact`}
              className="mt-4 sm:mt-0 px-6 py-3 bg-brand-orange text-white rounded hover:bg-opacity-90 transition-all font-medium inline-flex items-center"
            >
              {t('leadership.cta.button')}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LeadershipPage; 