import PropTypes from 'prop-types';
import './scss/PageHeader.scss';

function PageHeader({ onEditVariables }) {
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleExport = () => {
    const data = {
      timestamp: new Date().toISOString(),
      kpis: {
        infrastructureUnits: 421.07,
        chargingGrowth: 33.07,
        localizationChange: 21.9,
        fleetGrowth: 7.03
      },
      chartData: [
        { month: 'Apr', value: 40000, percentage: 15.2 },
        { month: 'May', value: 23000, percentage: 8.7 },
        { month: 'Jun', value: 50000, percentage: 18.9 },
        { month: 'Jul', value: 45000, percentage: 17.1 },
        { month: 'Aug', value: 89600, percentage: 33.9 },
        { month: 'Sep', value: 62000, percentage: 23.5 },
        { month: 'Oct', value: 35000, percentage: 13.3 }
      ]
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'charging-station-data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="page-header">
      <div className="page-title">
        <div className="charging-icon">⚡</div>
        <h1>Charging Station</h1>
      </div>
      
      <div className="page-actions">
        <button 
          className="action-btn refresh-btn" 
          onClick={handleRefresh}
          title="Refresh"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
          </svg>
        </button>
        
        <button 
          className="action-btn edit-variables-btn" 
          onClick={onEditVariables}
          title="Edit Variables"
        >
          Edit Variables
        </button>
        
        <button 
          className="action-btn export-btn" 
          onClick={handleExport}
          title="Export Data"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

PageHeader.propTypes = {
  onEditVariables: PropTypes.func.isRequired,
};

export default PageHeader; 