import { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AutomationShowcase from './components/AutomationShowcase';
import ValueProposition from './components/ValueProposition';
import FeaturedAutomations from './components/FeaturedAutomations';
import ROICalculator from './components/ROICalculator';
import ProcessTimeline from './components/ProcessTimeline';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

import ScrollToTop from './components/ScrollToTop';

// Lazy load pages to improve initial load time (LCP)
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-background min-h-screen text-text font-sans selection:bg-accent/30">
        <Navbar />
        <main>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div></div>}>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <AutomationShowcase />
                  <ValueProposition />
                  <FeaturedAutomations />
                  <ROICalculator />
                  <ProcessTimeline />
                  <CTASection />
                </>
              } />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/portfolio/:id" element={<CaseStudyPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
