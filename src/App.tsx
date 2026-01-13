import { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
// import Navbar from './components/Navbar'; // Removed
// import Hero from './components/Hero'; // Removed
// import AutomationShowcase from './components/AutomationShowcase'; // Removed
// import ValueProposition from './components/ValueProposition'; // Removed
// import FeaturedAutomations from './components/FeaturedAutomations'; // Removed
// import ROICalculator from './components/ROICalculator'; // Removed
// import ProcessTimeline from './components/ProcessTimeline'; // Removed
// import CTASection from './components/CTASection'; // Removed
// import Footer from './components/Footer'; // Removed

import ScrollToTop from './components/ScrollToTop';

// Lazy load pages to improve initial load time (LCP)
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ToolsPage = lazy(() => import('./pages/ToolsPage'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} /> {/* Changed path from /portfolio to /projects */}
            <Route path="/portfolio/:id" element={<CaseStudyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Add placeholders for other routes if needed */}
            <Route path="/tools" element={<ToolsPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
