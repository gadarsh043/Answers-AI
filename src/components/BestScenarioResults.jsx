import { useState } from 'react';
import './scss/BestScenarioResults.scss';

function BestScenarioResults() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="best-scenario">
      <div className="scenario-header">
        <div className="star-icon">⭐</div>
        <h2>Best Scenario Results</h2>
        <button 
          className={`collapse-btn ${isCollapsed ? 'collapsed' : ''}`}
          onClick={toggleCollapse}
          title={isCollapsed ? 'Expand' : 'Collapse'}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </button>
      </div>

      <div className={`scenario-cards ${isCollapsed ? 'hidden' : ''}`}>
        <div className="scenario-card">
          <div className="card-content">
            The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.
          </div>
          <div className="card-menu">⋯</div>
        </div>

        <div className="scenario-card">
          <div className="card-content">
            The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles.
          </div>
          <div className="card-menu">⋯</div>
        </div>
      </div>
    </div>
  );
}

export default BestScenarioResults; 