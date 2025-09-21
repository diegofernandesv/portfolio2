import React, { useState } from 'react';

interface ProcessCardProps {
  title: string;
  description: string;
  index: number;
}

export const ProcessCard: React.FC<ProcessCardProps> = ({ title, description, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className={`process-card ${isHovered ? 'process-card-hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      aria-label={`Process step ${index + 1}: ${title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setIsHovered(!isHovered);
        }
      }}
    >
      <div className="process-card-content">
        <h3 className="process-card-title">
          {title}
        </h3>
        <p className="process-card-description">
          {description}
        </p>
      </div>
    </article>
  );
};
