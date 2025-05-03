import { useTranslation } from 'react-i18next';
import Layout from '../../components/layout/Layout';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
// import ceoHeadshot from '../../assets/images/ceo-headshot.jpg'; // This will need to be added

const CEOMessagePage = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  // Placeholder for CEO headshot
  const ceoHeadshot = "https://via.placeholder.com/300?text=CEO+Headshot";

  return (
    <Layout>
      <Helmet>
        <title>{t('navigation.aboutSubmenu.ceoMessage')} | Broadway Corporation</title>
        <meta name="description" content={t('ceoMessage.metaDescription')} />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-brand-navy py-12 md:py-20">
        <div className="container-custom">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
              {t('navigation.aboutSubmenu.ceoMessage')}
            </h1>
            <div className="w-20 h-1 bg-brand-orange mb-6"></div>
            <p className="text-white/90 text-center max-w-2xl text-lg">
              {t('ceoMessage.heroTagline')}
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
            <span className="text-brand-gray-dark">{t('navigation.aboutSubmenu.ceoMessage')}</span>
          </nav>
        </div>
      </div>

      {/* CEO Message Content */}
      <div className="container-custom py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* CEO Profile Section */}
          <div className="flex flex-col md:flex-row items-center mb-10 bg-white p-6 md:p-8 rounded-lg shadow-md">
            <div className="w-full md:w-1/3 mb-6 md:mb-0 md:pr-8">
              <div className="relative aspect-square overflow-hidden rounded-full border-4 border-brand-navy mx-auto max-w-[250px]">
                <img
                  src={ceoHeadshot}
                  alt="Ngu Teboh Gustave - CEO, Broadway Corporation"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/300?text=CEO';
                  }}
                />
              </div>
              <div className="text-center mt-4">
                <h2 className="text-xl font-bold text-brand-navy">Ngu Teboh Gustave</h2>
                <p className="text-brand-orange">CEO, Broadway Corporation</p>
              </div>
            </div>
            <div className="w-full md:w-2/3 md:border-l md:border-gray-200 md:pl-8">
              <div className="text-4xl text-brand-navy font-serif leading-tight mb-4">"</div>
              <p className="text-lg text-brand-gray-dark italic mb-4">
                {t('ceoMessage.quote')}
              </p>
              <div className="text-4xl text-brand-navy font-serif text-right leading-tight">"</div>
            </div>
          </div>

          {/* Message Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              Hello, and welcome to the Broadway Corporation family. As you navigate our website, I hope you'll sense the passion that drives us every day. We're not just a holding company; we're a collective dream in action, bringing together the ingenuity of Broadway Enterprise and the grounded dedication of Broadway Farmhouse under one powerful idea: building a more sustainable world, hand in hand.
            </p>
            
            <p>
              From our strategic hub in the United States, we provide the vision and resources to empower real change on the ground, particularly in Cameroon, where Broadway Enterprise and Broadway Farmhouse are making a tangible difference in people's lives.
            </p>

            <div className="my-8 bg-brand-gray-light p-6 rounded-lg border-l-4 border-brand-orange">
              <p className="font-medium text-brand-navy">
                Think of Broadway Enterprise as the spark of knowledge and innovation. Our teams in Cameroon are on the front lines, equipping schools and labs with the tools they need to nurture the next generation of scientists and thinkers.
              </p>
            </div>
            
            <p>
              We're not just supplying equipment; we're building the foundation for a brighter future (aligning with SDG 4: Quality Education). Beyond the classroom, their environmental research and community projects are fostering sustainable practices that uplift local communities and protect the precious environment (SDG 11: Sustainable Cities and Communities and SDG 15: Life on Land).
            </p>
            
            <p>
              Then there's Broadway Farmhouse, the heart of our commitment to nourishing communities and fostering economic growth in Cameroon. They're not just farming; they're cultivating a future where food is secure, farming practices are kind to the earth, and rural communities thrive (SDG 2: Zero Hunger and SDG 8: Decent Work and Economic Growth). Whether it's through ethical livestock breeding, innovative aquaculture, or sustainable horticulture, their work is deeply rooted in creating lasting positive impact.
            </p>

            <div className="flex flex-col md:flex-row gap-6 my-8">
              <div className="flex-1 bg-brand-navy text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-brand-orange">Broadway Enterprise</h3>
                <p>Equipping schools and labs with tools for the next generation of scientists and thinkers.</p>
                <div className="mt-4 text-sm">
                  <span className="inline-block bg-white/20 text-white rounded px-2 py-1 mr-2 mb-2">SDG 4: Quality Education</span>
                  <span className="inline-block bg-white/20 text-white rounded px-2 py-1 mr-2 mb-2">SDG 11: Sustainable Cities</span>
                </div>
              </div>
              <div className="flex-1 bg-brand-orange text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-white">Broadway Farmhouse</h3>
                <p>Cultivating a future of food security with earth-friendly farming practices.</p>
                <div className="mt-4 text-sm">
                  <span className="inline-block bg-white/20 text-white rounded px-2 py-1 mr-2 mb-2">SDG 2: Zero Hunger</span>
                  <span className="inline-block bg-white/20 text-white rounded px-2 py-1 mr-2 mb-2">SDG 8: Economic Growth</span>
                </div>
              </div>
            </div>
            
            <p>
              Looking ahead, the Broadway Scorpion Farm project perfectly embodies our interconnected approach. Imagine the potential of cutting-edge bio-research in Cameroon, driven by scientific expertise and contributing to global health solutions. This initiative, a collaboration between Broadway Enterprise and Broadway Farmhouse, aims to unlock the medicinal secrets of scorpion venom, showcasing the incredible synergy between scientific discovery and local resources (SDG 3: Good Health and Well-being).
            </p>
            
            <div className="my-8 bg-brand-gray-light p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-navy mb-3">Our Philosophy</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <h4 className="font-bold text-brand-navy mb-2">United Vision</h4>
                  <p className="text-brand-gray-dark">The belief that by connecting diverse strengths – the strategic oversight from the US and the dedicated on-the-ground operations in Cameroon – we can be a powerful force for good.</p>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-brand-navy mb-2">Diverse Strength</h4>
                  <p className="text-brand-gray-dark">The unique perspectives and expertise that each part of our organization brings to the table.</p>
                </div>
              </div>
            </div>
            
            <p>
              We believe that sustainable development isn't just a goal; it's our responsibility. We invite you to explore the work we're doing and join us in building a resilient, knowledge-driven future for Africa and beyond.
            </p>
            
            <div className="mt-8 mb-4">
              <p className="text-brand-gray-dark mb-0">Warmly,</p>
              <img 
                src="/signature.png" 
                alt="CEO Signature" 
                className="h-16 mt-2 mb-1"
                onError={(e) => {
                  // Remove if signature image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <p className="font-bold text-brand-navy">Ngu Teboh Gustave</p>
              <p className="text-brand-gray">CEO, Broadway Corporation</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between bg-brand-navy p-6 md:p-8 rounded-lg text-white">
            <div>
              <h3 className="text-xl font-bold mb-2">Ready to learn more?</h3>
              <p className="text-white/80">Discover our leadership team and their vision.</p>
            </div>
            <Link 
              to={`/${language}/about/leadership`}
              className="mt-4 sm:mt-0 px-6 py-3 bg-brand-orange text-white rounded hover:bg-opacity-90 transition-all font-medium inline-flex items-center"
            >
              Meet Our Leadership
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

export default CEOMessagePage; 