import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import FAQ from "./pages/FAQ";
import TestimonialsPage from "./pages/Testimonials";
import Integrations from "./pages/Integrations";
import ComingSoon from "./pages/ComingSoon";
import CaseStudy from "./pages/CaseStudy";
import WebDevelopment from "./pages/services/WebDevelopment";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import UIUXDesign from "./pages/services/UIUXDesign";
import DesignServices from "./pages/services/DesignServices";
import DevelopmentServices from "./pages/services/DevelopmentServices";
import InfrastructureServices from "./pages/services/InfrastructureServices";
import GrowthServices from "./pages/services/GrowthServices";
import ECommerceRedesign from "./pages/portfolio/ECommerceRedesign";
import FinTechApp from "./pages/portfolio/FinTechApp";
import SaaSDashboard from "./pages/portfolio/SaaSDashboard";
import HealthcarePlatform from "./pages/case-study/HealthcarePlatform";
import EdTechSolution from "./pages/case-study/EdTechSolution";
import RealEstateApp from "./pages/case-study/RealEstateApp";

const queryClient = new QueryClient();

// Component to handle scroll-to-top on route changes
const ScrollToTopHandler = () => {
  useScrollToTop();
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTopHandler />
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
            <Route path="/services/design" element={<DesignServices />} />
            <Route path="/services/development" element={<DevelopmentServices />} />
            <Route path="/services/infrastructure" element={<InfrastructureServices />} />
            <Route path="/services/growth" element={<GrowthServices />} />
            <Route path="/portfolio/ecommerce-redesign" element={<ECommerceRedesign />} />
            <Route path="/portfolio/fintech-app" element={<FinTechApp />} />
            <Route path="/portfolio/saas-dashboard" element={<SaaSDashboard />} />
            <Route path="/case-study/healthcare-platform" element={<HealthcarePlatform />} />
            <Route path="/case-study/edtech-solution" element={<EdTechSolution />} />
            <Route path="/case-study/real-estate-app" element={<RealEstateApp />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/case-study/:slug" element={<CaseStudy />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
