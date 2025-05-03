import { useTranslation } from 'react-i18next';
import PublicLayout from '../../components/layout/PublicLayout';

const PrivacyPage = () => {
  const { t } = useTranslation();

  return (
    <PublicLayout title={t('privacy.pageTitle')} description={t('privacy.metaDescription')}>
      <div className="container-custom py-12">
        <h1 className="text-3xl font-bold text-brand-navy mb-8">
          {t('privacy.title')}
        </h1>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            {t('privacy.lastUpdated', { date: 'January 1, 2024' })}
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
            {t('privacy.introduction.title')}
          </h2>
          <p className="mb-4">
            {t('privacy.introduction.text')}
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
            {t('privacy.informationCollected.title')}
          </h2>
          <p className="mb-4">
            {t('privacy.informationCollected.text')}
          </p>
          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>{t('privacy.informationCollected.item1')}</li>
            <li>{t('privacy.informationCollected.item2')}</li>
            <li>{t('privacy.informationCollected.item3')}</li>
            <li>{t('privacy.informationCollected.item4')}</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
            {t('privacy.useOfInformation.title')}
          </h2>
          <p className="mb-4">
            {t('privacy.useOfInformation.text')}
          </p>
          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>{t('privacy.useOfInformation.item1')}</li>
            <li>{t('privacy.useOfInformation.item2')}</li>
            <li>{t('privacy.useOfInformation.item3')}</li>
            <li>{t('privacy.useOfInformation.item4')}</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
            {t('privacy.cookies.title')}
          </h2>
          <p className="mb-4">
            {t('privacy.cookies.text')}
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
            {t('privacy.thirdPartyServices.title')}
          </h2>
          <p className="mb-4">
            {t('privacy.thirdPartyServices.text')}
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
            {t('privacy.security.title')}
          </h2>
          <p className="mb-4">
            {t('privacy.security.text')}
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
            {t('privacy.changes.title')}
          </h2>
          <p className="mb-4">
            {t('privacy.changes.text')}
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
            {t('privacy.contact.title')}
          </h2>
          <p className="mb-4">
            {t('privacy.contact.text')}{' '}
            <a href="mailto:privacy@broadwaycorp.com" className="text-brand-orange hover:underline">
              privacy@broadwaycorp.com
            </a>.
          </p>
        </div>
      </div>
    </PublicLayout>
  );
};

export default PrivacyPage; 