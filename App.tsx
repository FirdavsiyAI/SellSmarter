import React from 'react';
import Layout from './components/Layout';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import TargetAudienceSection from './components/sections/TargetAudienceSection';
import ProcessSection from './components/sections/ProcessSection';
import BenefitsSection from './components/sections/BenefitsSection';
import CtaSection from './components/sections/CtaSection';
import AboutSection from './components/sections/AboutSection';

function App() {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <TargetAudienceSection />
      <ProcessSection />
      <BenefitsSection />
      <CtaSection />
      <AboutSection />
    </Layout>
  );
}

export default App;