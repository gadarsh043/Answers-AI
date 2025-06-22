import { useState } from 'react';
import PropTypes from 'prop-types';
import './scss/KPISection.scss';

function KPISection({ onEditVariables }) {
  const [kpiData] = useState({
    infrastructureUnits: 421.07,
    chargingGrowth: 33.07,
    localizationChange: 21.9,
    fleetGrowth: 7.03
  });

  return (
    <div className="kpi-container">
      <div className="kpi-header">
        <h2>Key Performance Indicators</h2>
        <button className="variables-btn" onClick={onEditVariables}>
          Variables +
        </button>
      </div>

      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-info">
            <div className="kpi-label">
              <span>Infrastructure Units</span>
              <span className="info-icon">ℹ️</span>
            </div>
            <div className="kpi-description">
              This describes variable two and what the shown data means.
            </div>
          </div>
          <div className="kpi-value">€{kpiData.infrastructureUnits}</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-info">
            <div className="kpi-label">
              <span>Charging Growth</span>
              <span className="info-icon">ℹ️</span>
            </div>
            <div className="kpi-description">
              This describes variable two and what the shown data means.
            </div>
          </div>
          <div className="kpi-value">{kpiData.chargingGrowth}</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-info">
            <div className="kpi-label">
              <span>Localization change</span>
              <span className="info-icon">ℹ️</span>
            </div>
            <div className="kpi-description">
              This describes variable two and what the shown data means.
            </div>
          </div>
          <div className="kpi-value">{kpiData.localizationChange}%</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-info">
            <div className="kpi-label">
              <span>Fleet growth</span>
              <span className="info-icon">ℹ️</span>
            </div>
            <div className="kpi-description">
              This describes variable two and what the shown data means.
            </div>
          </div>
          <div className="kpi-value">{kpiData.fleetGrowth}%</div>
        </div>
      </div>
    </div>
  );
}

KPISection.propTypes = {
  onEditVariables: PropTypes.func.isRequired,
};

export default KPISection; 