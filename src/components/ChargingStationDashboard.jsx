import { useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import Header from './Header';
import PageHeader from './PageHeader';
import BestScenarioResults from './BestScenarioResults';
import GraphSection from './GraphSection';
import KPISection from './KPISection';
import EditVariablesPanel from './EditVariablesPanel';
import './scss/ChargingStationDashboard.scss';

function ChargingStationDashboard({ user, onLogout }) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <div className="dashboard">
      <Sidebar user={user} onLogout={onLogout} />
      
      <div className="main-content">
        <Header />
        
        <div className="content-container">
          <PageHeader onEditVariables={() => setIsPanelOpen(true)} />

          <BestScenarioResults />

          <div className="dashboard-grid">
            <div style={{gap: '2rem', display: 'flex', flexDirection: 'column'}}>
              <h2>Graphs</h2>
              <div className="graph-section">
                <GraphSection />
              </div>
            </div>
            <div className="kpi-section">
              <KPISection onEditVariables={() => setIsPanelOpen(true)} />
            </div>
          </div>
        </div>
      </div>

      <EditVariablesPanel 
        isOpen={isPanelOpen} 
        onClose={() => setIsPanelOpen(false)} 
      />
    </div>
  );
}

ChargingStationDashboard.propTypes = {
  user: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default ChargingStationDashboard; 