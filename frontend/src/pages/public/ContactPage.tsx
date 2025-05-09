import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/layout/Layout';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';

interface ContactPageProps {
  division?: 'corporation' | 'enterprise' | 'farmhouse';
}

const ContactPage: React.FC<ContactPageProps> = ({ division }) => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  // Success message state
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server here
    console.log('Form submitted:', formData);
    // Show success message and reset form
    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };
  
  // Get division-specific content
  const getDivisionTitle = () => {
    if (division === 'corporation') {
      return t('corporation.pageTitle');
    } else if (division === 'enterprise') {
      return t('enterprise.pageTitle');
    } else if (division === 'farmhouse') {
      return t('farmhouse.pageTitle');
    }
    return t('contact.pageTitle');
  };
  
  // Location data
  const locations = [
    {
      id: 'us',
      country: t('contact.locations.us.country'),
      address: '1434 Hildreth Ave',
      city: 'Columbus, OH 43203',
      country_full: 'United States',
      email: 'enquiries@broadway-corp.com',
      phone: '+1 (614) 556 1333',
      type: t('contact.locations.us.type')
    },
    {
      id: 'cameroon',
      country: t('contact.locations.cameroon.country'),
      address: 'Batibo Avenue, Damas',
      city: 'Yaoundé',
      country_full: 'Cameroon',
      email: 'cameroon@broadway-corp.com',
      phone: '+237 6 77 18 14 87',
      type: t('contact.locations.cameroon.type')
    }
  ];
  
  // Social media links
  const socialLinks = [
    { id: 'facebook', name: 'Facebook', icon: 'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z', url: 'https://facebook.com/' },
    { id: 'twitter', name: 'Twitter', icon: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z', url: 'https://twitter.com/' },
    { id: 'linkedin', name: 'LinkedIn', icon: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z', url: 'https://linkedin.com/' },
    { id: 'instagram', name: 'Instagram', icon: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25zM12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z', url: 'https://instagram.com/' }
  ];

  // Create the content for the page
  const contactContent = (
    <>
      <Helmet>
        <title>{division ? `${getDivisionTitle()} - ${t('contact.pageTitle')}` : `${t('contact.pageTitle')} | Broadway Corporation`}</title>
        <meta name="description" content={t('contact.metaDescription')} />
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-brand-gray-light py-3">
        <div className="container-custom">
          <nav className="flex text-sm">
            <Link to={`/${language}`} className="text-brand-navy hover:text-brand-orange transition-colors">
              {t('navigation.home')}
            </Link>
            <span className="mx-2 text-brand-gray">/</span>
            {division && (
              <>
                <Link to={`/${language}/${division}`} className="text-brand-navy hover:text-brand-orange transition-colors">
                  {getDivisionTitle()}
                </Link>
                <span className="mx-2 text-brand-gray">/</span>
              </>
            )}
            <span className="text-brand-gray-dark">{t('navigation.contact')}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-12 md:py-16">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
            {t('contact.introTitle')}
          </h2>
          <p className="text-lg text-brand-gray-dark">
            {t('contact.introText')}
          </p>
        </div>
        
        {/* Contact Form and Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-brand-navy mb-6">{t('contact.formTitle')}</h3>
            
            {showSuccess && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                <p>{t('contact.successMessage')}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-brand-gray-dark mb-2">
                  {t('contact.form.nameLabel')}*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-brand-gray-dark mb-2">
                  {t('contact.form.emailLabel')}*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-brand-gray-dark mb-2">
                  {t('contact.form.subjectLabel')}*
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-brand-gray-dark mb-2">
                  {t('contact.form.messageLabel')}*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                {t('contact.form.submitButton')}
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-brand-navy mb-6">{t('contact.locationsTitle')}</h3>
            
            {locations.map((location) => (
              <div key={location.id} className="bg-brand-gray-light p-6 rounded-lg mb-6">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-navy">{location.country}</h4>
                    <p className="text-sm text-brand-gray-dark">{location.type}</p>
                  </div>
                </div>
                
                <div className="ml-14 space-y-3">
                  <p className="text-brand-gray-dark">
                    {location.address}<br />
                    {location.city}
                    {location.country_full && <><br />{location.country_full}</>}
                  </p>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-brand-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <a href={`mailto:${location.email}`} className="text-brand-orange hover:underline">
                      {location.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-brand-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <span className="text-brand-gray-dark">{location.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Connect with us on social media */}
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold text-brand-navy mb-4">{t('contact.socialTitle')}</h3>
          <p className="text-brand-gray-dark mb-6">{t('contact.socialText')}</p>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <a 
                key={social.id}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-12 h-12 bg-brand-navy hover:bg-brand-orange text-white rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d={social.icon}></path>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  // Return the content wrapped in Layout only if no division is provided
  return division ? contactContent : <Layout>{contactContent}</Layout>;
};

export default ContactPage; 