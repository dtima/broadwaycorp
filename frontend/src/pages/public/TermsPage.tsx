import { useTranslation } from 'react-i18next';
import PublicLayout from '../../components/layout/PublicLayout';

const TermsPage = () => {
  const { t } = useTranslation();

  return (
    <PublicLayout title={t('terms.pageTitle')} description={t('terms.metaDescription')}>
      <div className="container-custom py-12">
        <h1 className="text-3xl font-bold text-brand-navy mb-8">
          {t('terms.title')}
        </h1>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            {t('terms.lastUpdated', { date: 'January 1, 2024' })}
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
            {t('terms.introduction.title')}
          </h2>
          <p className="mb-4">
            {t('terms.introduction.text')}
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
            {t('terms.acceptance.title')}
          </h2>
          <p className="mb-4">
            {t('terms.acceptance.text')}
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
            {t('terms.services.title')}
          </h2>
          <p className="mb-4">
            {t('terms.services.text')}
          </p>
          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>{t('terms.services.item1')}</li>
            <li>{t('terms.services.item2')}</li>
            <li>{t('terms.services.item3')}</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
            {t('terms.intellectualProperty.title')}
          </h2>
          <p className="mb-4">
            {t('terms.intellectualProperty.text')}
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
            {t('terms.userConduct.title')}
          </h2>
          <p className="mb-4">
            {t('terms.userConduct.text')}
          </p>
          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>{t('terms.userConduct.item1')}</li>
            <li>{t('terms.userConduct.item2')}</li>
            <li>{t('terms.userConduct.item3')}</li>
            <li>{t('terms.userConduct.item4')}</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
            {t('terms.thirdPartyLinks.title')}
          </h2>
          <p className="mb-4">
            {t('terms.thirdPartyLinks.text')}
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
            {t('terms.disclaimer.title')}
          </h2>
          <p className="mb-4">
            {t('terms.disclaimer.text')}
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
            {t('terms.limitation.title')}
          </h2>
          <p className="mb-4">
            {t('terms.limitation.text')}
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
            {t('terms.indemnification.title')}
          </h2>
          <p className="mb-4">
            {t('terms.indemnification.text')}
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
            {t('terms.changes.title')}
          </h2>
          <p className="mb-4">
            {t('terms.changes.text')}
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
            {t('terms.contact.title')}
          </h2>
          <p className="mb-4">
            {t('terms.contact.text')}{' '}
            <a href="mailto:legal@broadwaycorp.com" className="text-brand-orange hover:underline">
              legal@broadwaycorp.com
            </a>.
          </p>
        </div>
      </div>
    </PublicLayout>
  );
};

export default TermsPage; 