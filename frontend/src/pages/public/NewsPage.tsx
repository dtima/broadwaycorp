import { useTranslation } from 'react-i18next';
import Layout from '../../components/layout/Layout';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';

const NewsPage = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  // Sample news articles data
  const newsArticles = [
    {
      id: 'article1',
      date: '2023-12-15',
      category: t('news.categories.enterprise'),
      title: t('news.articles.article1.title'),
      summary: t('news.articles.article1.summary'),
      image: 'enterprise-lab',
      link: `/${language}/news/article1`
    },
    {
      id: 'article2',
      date: '2023-11-22',
      category: t('news.categories.farmhouse'),
      title: t('news.articles.article2.title'),
      summary: t('news.articles.article2.summary'),
      image: 'farmhouse-project',
      link: `/${language}/news/article2`
    },
    {
      id: 'article3',
      date: '2023-10-10',
      category: t('news.categories.community'),
      title: t('news.articles.article3.title'),
      summary: t('news.articles.article3.summary'),
      image: 'community-event',
      link: `/${language}/news/article3`
    },
    {
      id: 'article4',
      date: '2023-09-05',
      category: t('news.categories.partnership'),
      title: t('news.articles.article4.title'),
      summary: t('news.articles.article4.summary'),
      image: 'partnership',
      link: `/${language}/news/article4`
    },
    {
      id: 'article5',
      date: '2023-08-18',
      category: t('news.categories.enterprise'),
      title: t('news.articles.article5.title'),
      summary: t('news.articles.article5.summary'),
      image: 'education',
      link: `/${language}/news/article5`
    },
    {
      id: 'article6',
      date: '2023-07-30',
      category: t('news.categories.farmhouse'),
      title: t('news.articles.article6.title'),
      summary: t('news.articles.article6.summary'),
      image: 'agriculture',
      link: `/${language}/news/article6`
    }
  ];

  // Format date for display
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', options);
  };

  // Categories for filter
  const categories = [
    { id: 'all', label: t('news.filters.all') },
    { id: 'enterprise', label: t('news.categories.enterprise') },
    { id: 'farmhouse', label: t('news.categories.farmhouse') },
    { id: 'community', label: t('news.categories.community') },
    { id: 'partnership', label: t('news.categories.partnership') }
  ];

  return (
    <Layout>
      <Helmet>
        <title>{t('news.pageTitle')} | Broadway Corporation</title>
        <meta name="description" content={t('news.metaDescription')} />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-brand-navy py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-brand-navy"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-brand-orange/10 rounded-full">
              <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('news.heroTitle')}
            </h1>
            <div className="w-24 h-1 bg-brand-orange mb-6"></div>
            <p className="text-white/90 text-lg md:text-xl mb-8">
              {t('news.heroSubtitle')}
            </p>
            <Link 
              to={`/${language}/contact`}
              className="inline-flex items-center bg-brand-orange hover:bg-brand-orange/90 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              {t('news.subscribeButton')}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
            </Link>
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
            <span className="text-brand-gray-dark">{t('navigation.news')}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-12 md:py-16">
        {/* Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4 md:mb-0">{t('news.latestUpdates')}</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button 
                  key={category.id} 
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    category.id === 'all' 
                      ? 'bg-brand-orange text-white' 
                      : 'bg-brand-gray-light text-brand-navy hover:bg-brand-orange/10'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full h-px bg-gray-200 mb-6"></div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="bg-brand-gray-light aspect-video relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-brand-orange opacity-60"></div>
                <div className="absolute top-3 left-3 bg-white text-brand-navy text-xs font-medium px-2 py-1 rounded">
                  {article.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-sm text-brand-gray-dark mb-2">{formatDate(article.date)}</div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">{article.title}</h3>
                <p className="text-brand-gray-dark mb-4 flex-1">{article.summary}</p>
                <Link to={article.link} className="text-brand-orange hover:text-brand-navy font-medium transition-colors mt-auto inline-flex items-center">
                  {t('news.readMore')}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="w-10 h-10 rounded-md border border-brand-gray flex items-center justify-center text-brand-navy hover:bg-brand-gray-light transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button className="w-10 h-10 rounded-md bg-brand-orange text-white flex items-center justify-center">1</button>
            <button className="w-10 h-10 rounded-md border border-brand-gray flex items-center justify-center text-brand-navy hover:bg-brand-gray-light transition-colors">2</button>
            <button className="w-10 h-10 rounded-md border border-brand-gray flex items-center justify-center text-brand-navy hover:bg-brand-gray-light transition-colors">3</button>
            <span className="text-brand-gray-dark">...</span>
            <button className="w-10 h-10 rounded-md border border-brand-gray flex items-center justify-center text-brand-navy hover:bg-brand-gray-light transition-colors">5</button>
            <button className="w-10 h-10 rounded-md border border-brand-gray flex items-center justify-center text-brand-navy hover:bg-brand-gray-light transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </nav>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-brand-gray-light p-8 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">{t('news.stayUpdated')}</h2>
            <p className="text-brand-gray-dark mb-6">{t('news.newsletterText')}</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder={t('news.emailPlaceholder')} 
                className="px-4 py-3 rounded-md border border-gray-300 flex-1 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange"
              />
              <button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-medium py-3 px-6 rounded-md transition-colors whitespace-nowrap">
                {t('news.subscribeButton')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage; 