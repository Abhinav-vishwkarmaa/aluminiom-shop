import React from 'react';
import HeroHighlight from '../sections/HeroHighlight';
import ServicesGrid from '../sections/ServicesGrid';
import WhyChooseUs from '../sections/WhyChooseUs';
import CTASection from '../sections/CTASection';

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <HeroHighlight />
      <ServicesGrid />
      <WhyChooseUs />
      <CTASection />
    </div>
  );
};

export default Home;