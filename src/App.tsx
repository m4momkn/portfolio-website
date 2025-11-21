
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
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import CaseStudyPage from './pages/CaseStudyPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="bg-background min-h-screen text-text font-sans selection:bg-accent/30">
        <Navbar />
        <main>
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
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
