import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './scss/EditVariablesPanel.scss';

function EditVariablesPanel({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVariables, setSelectedVariables] = useState(['Energy Consumption']);
  const [hoveredVariable, setHoveredVariable] = useState(null);
  const [showContext, setShowContext] = useState(false);
  const [primaryExpanded, setPrimaryExpanded] = useState(false);
  const [secondaryExpanded, setSecondaryExpanded] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const variables = {
    category1: [
      { name: 'Carbon Footprint', type: 'input' },
      { name: 'Co2 Distribution', type: 'dropdown' },
      { name: 'Fleet Sizing', type: 'dropdown' }
    ],
    category2: [
      { name: 'Parking Rate', type: 'input' },
      { name: 'Border Rate', type: 'dropdown' },
      { name: 'Request Rate', type: 'dropdown' },
      { name: 'Energy Consumption', type: 'input' },
      { name: 'Peak Hours', type: 'input' },
      { name: 'Off-Peak Hours', type: 'dropdown' }
    ],
    category3: [
      { name: 'Station Capacity', type: 'input' },
      { name: 'Maintenance Cost', type: 'dropdown' },
      { name: 'Utilization Rate', type: 'dropdown' }
    ]
  };

  const handleVariableClick = (variableName) => {
    if (selectedVariables.includes(variableName)) {
      setSelectedVariables(selectedVariables.filter(v => v !== variableName));
    } else {
      // No limit - can select as many variables as desired
      setSelectedVariables([...selectedVariables, variableName]);
    }
  };

  const handleVariableHover = (e, variableName) => {
    setHoveredVariable(variableName);
    
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    // Set new timeout for 1.5 seconds for any variable
    hoverTimeoutRef.current = setTimeout(() => {
      setShowContext(true);
    }, 1500);
  };

  const handleVariableLeave = () => {
    setHoveredVariable(null);
    
    // Clear the timeout if mouse leaves before 1.5 seconds
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    
    // Hide context window after a short delay
    setTimeout(() => {
      setShowContext(false);
    }, 200);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const renderVariableChip = (variable, index) => {
    const isSelected = selectedVariables.includes(variable.name);
    
    return (
      <div
        key={index}
        className={`variable-chip ${variable.type} ${isSelected ? 'selected' : ''}`}
        onMouseEnter={(e) => handleVariableHover(e, variable.name)}
        onMouseLeave={handleVariableLeave}
        onClick={() => handleVariableClick(variable.name)}
      >
        <span>{variable.name}</span>
        <div className="chip-controls">
          <button className="chip-btn" onClick={(e) => e.stopPropagation()}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.7273 0L13.6964 2.25L11.4545 3.27273L13.6964 4.30364L14.7273 6.54545L15.75 4.30364L18 3.27273L15.75 2.25M6.54545 2.45455L4.5 6.95455L0 9L4.5 11.0455L6.54545 15.5455L8.59091 11.0455L13.0909 9L8.59091 6.95455M14.7273 11.4545L13.6964 13.6964L11.4545 14.7273L13.6964 15.75L14.7273 18L15.75 15.75L18 14.7273L15.75 13.6964" fill="#B9B9B9"/>
            </svg>
          </button>
          <button className="chip-btn" onClick={(e) => e.stopPropagation()}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={`panel-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <div className={`edit-variables-panel ${isOpen ? 'open' : ''}`}>
        <div className="panel-header">
          <h2>Edit Variables</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="panel-controls">
          <div className="search-container">
            <div className="search-input-wrapper">
              <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search variables..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
          
          <div className="control-buttons">
            <button className="control-btn autofill">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7273 0L13.6964 2.25L11.4545 3.27273L13.6964 4.30364L14.7273 6.54545L15.75 4.30364L18 3.27273L15.75 2.25M6.54545 2.45455L4.5 6.95455L0 9L4.5 11.0455L6.54545 15.5455L8.59091 11.0455L13.0909 9L8.59091 6.95455M14.7273 11.4545L13.6964 13.6964L11.4545 14.7273L13.6964 15.75L14.7273 18L15.75 15.75L18 14.7273L15.75 13.6964" fill="#B9B9B9"/>
              </svg>
              Autofill
            </button>
            <button className="control-btn rerun">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
              </svg>
              Rerun
            </button>
          </div>
        </div>

        <div className="variables-content">
          <div className="variable-categories">
            <div className="category-box">
              <div className="category-header">
                <h3>Variable category 1</h3>
              </div>
              <div className="variable-chips">
                {variables.category1
                  .filter(variable => variable.name.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((variable, index) => 
                    renderVariableChip(variable, index)
                  )}
              </div>
            </div>

            <div className="category-box">
              <div className="category-header">
                <h3>Variable Category 2</h3>
              </div>
              <div className="variable-chips">
                {variables.category2
                  .filter(variable => variable.name.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((variable, index) => 
                    renderVariableChip(variable, index)
                  )}
              </div>
            </div>

            <div className="category-box">
              <div className="category-header">
                <h3>Variable Category 3</h3>
              </div>
              <div className="variable-chips">
                {variables.category3
                  .filter(variable => variable.name.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((variable, index) => 
                    renderVariableChip(variable, index)
                  )}
              </div>
            </div>
          </div>

          {showContext && hoveredVariable && (
            <div className="variable-info">
              <h3>{hoveredVariable}</h3>
              <p>But what truly sets Switch apart is its versatility. It can be used as a scooter, a bike, or even a skateboard, making it suitable for people of all ages. Whether you are a student, a professional, or a senior citizen, Switch adapts to your needs and lifestyle.</p>
            </div>
          )}

          <div className="expandable-sections">
            <div className="expandable-section">
              <button 
                className="section-header"
                onClick={() => setPrimaryExpanded(!primaryExpanded)}
              >
                <span>Primary Variables</span>
                <span className={`arrow ${primaryExpanded ? 'expanded' : ''}`}>▼</span>
              </button>
              {primaryExpanded && (
                <div className="section-content">
                  <p>Primary variables content</p>
                </div>
              )}
            </div>

            <div className="expandable-section">
              <button 
                className="section-header"
                onClick={() => setSecondaryExpanded(!secondaryExpanded)}
              >
                <span>Secondary Variables</span>
                <span className={`arrow ${secondaryExpanded ? 'expanded' : ''}`}>▼</span>
              </button>
              {secondaryExpanded && (
                <div className="section-content">
                  <p>Secondary variables content</p>
                </div>
              )}
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

EditVariablesPanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditVariablesPanel; 