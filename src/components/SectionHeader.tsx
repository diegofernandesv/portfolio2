import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <header className="section-header">
      <h1 id="how-i-work-title" className="section-title">
        {title}
      </h1>
      <div className="section-separator" role="separator" aria-hidden="true" />
      <p className="section-description">
        {description}
      </p>
    </header>
  );
};
