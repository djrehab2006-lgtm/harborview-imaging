import React from 'react';
import HeroSection from '../components/HeroSection';
import PortfolioShowcase from '../components/PortfolioShowcase';
import ServicesSection from '../components/ServicesSection';
import BenefitsSection from '../components/BenefitsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <PortfolioShowcase />
      <ServicesSection />
      <BenefitsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}

export default HomePage;
