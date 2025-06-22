import PropTypes from 'prop-types';
import './scss/Sidebar.scss';

function Sidebar({ user, onLogout }) {
  const navItems = [
    { icon: '🏠', label: 'Home', active: true },
    { icon: '🔔', label: 'Notifications', active: false },
    { icon: '📊', label: 'Analytics', active: false },
    { icon: '☁️', label: 'Cloud Services', active: false },
    { icon: '⚙️', label: 'Settings', active: false }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="menu-icon" title="Menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <div className="sidebar-nav">
        {navItems.map((item, index) => (
          <div 
            key={index}
            className={`nav-item ${item.active ? 'active' : ''}`}
            title={item.label}
          >
            <div className="nav-icon-container">
              {item.icon === '🏠' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              )}
              {item.icon === '🔔' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                </svg>
              )}
              {item.icon === '📊' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              )}
              {item.icon === '☁️' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                </svg>
              )}
              {item.icon === '⚙️' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="sidebar-footer">
        {user && (
          <div className="user-profile" onClick={onLogout} title="Sign out">
            <img 
              src={user.photoURL || 'https://via.placeholder.com/32'} 
              alt="Profile" 
              className="profile-image"
            />
          </div>
        )}
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  user: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Sidebar; 