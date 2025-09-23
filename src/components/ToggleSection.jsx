import { useState } from 'react';
import './ToggleSection.css';

function ToggleSection({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="toggle-section">
      <button 
        className={`toggle-header ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="toggle-title">{title}</h2>
        <div className={`toggle-icon ${isOpen ? 'open' : ''}`}>
          <div className="toggle-icon-line horizontal"></div>
          <div className="toggle-icon-line vertical"></div>
        </div>
      </button>
      
      <div className={`toggle-content ${isOpen ? 'open' : ''}`}>
        <div className="toggle-content-inner">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ToggleSection;
