import React from 'react';
import WorkGallery from '../sections/WorkGallery';
import ProcessSection from '../sections/ProcessSection';

const Work: React.FC = () => {
  return (
    <div className="space-y-8">
      <WorkGallery />
      <ProcessSection />
    </div>
  );
};

export default Work;