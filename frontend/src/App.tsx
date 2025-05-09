import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from './components/layout/PublicLayout';
import { useLanguage } from './hooks/useLanguage';
import CorporationLayout from './components/layout/CorporationLayout';
import EnterpriseLayout from './components/layout/EnterpriseLayout';
import FarmhouseLayout from './components/layout/FarmhouseLayout';
import LandingPortal from './pages/portal/LandingPortal';
import Loading from './components/common/Loading';
import ServerErrorPage from './pages/common/ServerErrorPage';
import NotFoundPage from './pages/common/NotFoundPage';
import ForbiddenPage from './pages/common/ForbiddenPage';

// Division Home Pages
const CorporationHome = lazy(() => import('./pages/corporation/CorporationHome'));
const EnterpriseHome = lazy(() => import('./pages/enterprise/EnterpriseHome'));
const FarmhouseHome = lazy(() => import('./pages/farmhouse/FarmhouseHome'));

// Corporation Pages
const CorporationAbout = lazy(() => import('./pages/corporation/CorporationAbout'));
const CorporationCEOMessage = lazy(() => import('./pages/corporation/CorporationCEOMessage'));
const CorporationTeam = lazy(() => import('./pages/corporation/CorporationTeam'));
const CorporationServices = lazy(() => import('./pages/corporation/CorporationServices'));
const CorporationInitiatives = lazy(() => import('./pages/corporation/CorporationInitiatives'));

// Enterprise Pages
const EnterpriseAbout = lazy(() => import('./pages/enterprise/EnterpriseAbout'));
const EnterpriseServices = lazy(() => import('./pages/enterprise/EnterpriseServices'));
const EnterpriseImpact = lazy(() => import('./pages/enterprise/EnterpriseImpact'));

// Farmhouse Pages
const FarmhouseAbout = lazy(() => import('./pages/farmhouse/FarmhouseAbout'));
const FarmhouseServices = lazy(() => import('./pages/farmhouse/FarmhouseServices'));
const FarmhouseProjects = lazy(() => import('./pages/farmhouse/FarmhouseProjects'));

// Public Pages
// const HomePage = lazy(() => import('./pages/public/HomePage'));
const AboutPage = lazy(() => import('./pages/public/AboutPage'));
const PartnersPage = lazy(() => import('./pages/public/PartnersPage'));
const ContactPage = lazy(() => import('./pages/public/ContactPage'));
const PrivacyPage = lazy(() => import('./pages/public/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/public/TermsPage'));

// Legacy for backward compatibility
const LegacyHomePage = lazy(() => import('./pages/public/HomePage'));

function App() {
  const { language } = useLanguage();

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Root redirect to current language */}
        <Route path="/" element={<Navigate to={`/${language}`} replace />} />

        {/* Landing Portal as the main language-prefixed entry point */}
        <Route path="/:lang" element={<LandingPortal />} />

        {/* Corporation Division Routes */}
        <Route path="/:lang/corporation" element={<CorporationLayout />}>
          <Route index element={<CorporationHome />} />

          {/* Corporation specific routes */}
          <Route path="about" element={<CorporationAbout />} />
          <Route path="about/ceo-message" element={<CorporationCEOMessage />} />
          <Route path="team" element={<CorporationTeam />} />
          <Route path="services" element={<CorporationServices />} />
          <Route path="initiatives" element={<CorporationInitiatives />} />
          <Route path="contact" element={<ContactPage division="corporation" />} />
        </Route>

        {/* Enterprise Division Routes */}
        <Route path="/:lang/enterprise" element={<EnterpriseLayout />}>
          <Route index element={<EnterpriseHome />} />

          {/* Add Enterprise specific routes here */}
          <Route path="about" element={<EnterpriseAbout />} />
          <Route path="services" element={<EnterpriseServices />} />
          <Route path="impact" element={<EnterpriseImpact />} />
          <Route path="contact" element={<ContactPage division="enterprise" />} />
        </Route>

        {/* Farmhouse Division Routes */}
        <Route path="/:lang/farmhouse" element={<FarmhouseLayout />}>
          <Route index element={<FarmhouseHome />} />

          {/* Add Farmhouse specific routes here */}
          <Route path="about" element={<FarmhouseAbout />} />
          <Route path="services" element={<FarmhouseServices />} />
          <Route path="projects" element={<FarmhouseProjects />} />
          <Route path="contact" element={<ContactPage division="farmhouse" />} />
        </Route>

        {/* Shared Privacy and Terms Pages */}
        <Route path="/:lang/privacy" element={<PrivacyPage />} />
        <Route path="/:lang/terms" element={<TermsPage />} />

        {/* Legacy Routes (for backward compatibility) */}
        <Route path="/:lang/home" element={<PublicLayout><LegacyHomePage /></PublicLayout>} />
        <Route path="/:lang/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
        <Route path="/:lang/partners" element={<PublicLayout><PartnersPage /></PublicLayout>} />
        <Route path="/:lang/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />

        {/* Error Routes */}
        <Route path="/:lang/error" element={<ServerErrorPage />} />
        <Route path="/:lang/forbidden" element={<ForbiddenPage />} />
        <Route path="/:lang/*" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to={`/${language}/not-found`} replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
