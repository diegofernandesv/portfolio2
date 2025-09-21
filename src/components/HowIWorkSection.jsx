import React from 'react';
import { SectionHeader } from './SectionHeader';
import { ProcessCard } from './ProcessCard';
import './HowIWorkSection.css';
import AnimatedContent from './AnimatedContent.jsx';


const workProcesses = [
  {
    title: "Research",
    description: "Understanding the problem, users, and goals through market analysis and user insights."
  },
  {
    title: "Wireframes",
    description: "Translating ideas into structured layouts that define hierarchy and flow."
  },
  {
    title: "Prototyping",
    description: "Creating interactive mockups to visualize the experience before building."
  },
  {
    title: "Testing",
    description: "Validating designs with users to uncover improvements and ensure usability."
  },
  {
    title: "Development",
    description: "Turning designs into functional, responsive, and scalable digital solutions."
  }
];

export const HowIWorkSection = () => {
  return (
    <AnimatedContent>
    <section className="how-i-work-section" aria-labelledby="how-i-work-title">
      <SectionHeader
        title="How I work"
        description="I work with a user-centered approach, combining research, design, testing, and development to create digital experiences that are both functional and engaging."
      />
    <AnimatedContent>
      <div className="process-cards-container">
        {workProcesses.map((process, index) => (
          <ProcessCard
            key={process.title}
            title={process.title}
            description={process.description}
            index={index}
          />
        ))}
      </div>
      </AnimatedContent>
    </section>
    </AnimatedContent>
    
  );
};
