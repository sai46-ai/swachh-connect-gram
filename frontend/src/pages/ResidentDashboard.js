import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../services/authService';
import { getAllReports } from '../services/reportService';
import { useTranslation } from '../hooks/useTranslation';
import { FaPlus, FaClock, FaSpinner, FaCheckCircle, FaSignOutAlt, FaBell, FaHandsWash } from 'react-icons/fa';
import './ResidentDashboard.css';

function ResidentDashboard() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [currentUser, setCurrentUser] = useState(null);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedReport, setSelectedReport] = useState(null);

  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      navigate('/login');
      return;
    }
    if (user.role !== 'resident') {
      navigate('/');
      return;
    }
    setCurrentUser(user);
    fetchReports();

    // Poll for updates every 30 seconds
    const interval = setInterval(fetchReports, 30000);
    return () => clearInterval(interval);
  }, [navigate]);

  const fetchReports = async () => {
    try {
      setLoading(true);
      const response = await getAllReports();
      const reportsData = response.data || response;
      const allReports = Array.isArray(reportsData) ? reportsData : [];
      
      // Filter to show only current user's reports
      const user = getCurrentUser();
      const userReports = allReports.filter(report => report.userId === user._id);
      setReports(userReports);
    } catch (error) {
      console.error('Error fetching reports:', error);
      setReports([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: '#FFA726',
      in_progress: '#42A5F5',
      resolved: '#66BB6A'
    };
    return colors[status] || '#9E9E9E';
  };

  const getStatusIcon = (status) => {
    const icons = {
      pending: <FaClock />,
      in_progress: <FaSpinner />,
      resolved: <FaCheckCircle />
    };
    return icons[status] || <FaClock />;
  };

  // Calculate tracking counts
  const trackingCounts = {
    pending: reports.filter(r => r.status === 'pending').length,
    inProgress: reports.filter(r => r.status === 'in_progress').length,
    resolved: reports.filter(r => r.status === 'resolved').length
  };

  if (loading) {
    return (
      <div className="resident-dashboard">
        <div className="loading">{t('resident.loading')}</div>
      </div>
    );
  }

  return (
    <div className="resident-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-content">
          <h1>{t('resident.title')}</h1>
          <p>{t('resident.welcome')}, {currentUser?.name}</p>
        </div>
        <div className="header-actions">
          <button className="post-btn" onClick={() => navigate('/report')}>
            <FaPlus /> {t('resident.postComplaint')}
          </button>
          <button className="awareness-btn" onClick={() => navigate('/hygiene-awareness')}>
            <FaHandsWash /> {t('resident.hygieneAwareness')}
          </button>
          <button className="logout-btn" onClick={handleLogout}>
            <FaSignOutAlt /> {t('navbar.logout')}
          </button>
        </div>
      </div>

      {/* Complaint Tracking Summary */}
      <div className="tracking-section">
        <h2>{t('resident.complaintTracking')}</h2>
        <div className="tracking-cards">
          <div className="track-card pending">
            <FaClock className="track-icon" />
            <div className="track-info">
              <h3>{trackingCounts.pending}</h3>
              <p>{t('resident.pending')}</p>
            </div>
          </div>
          <div className="track-card in-progress">
            <FaSpinner className="track-icon" />
            <div className="track-info">
              <h3>{trackingCounts.inProgress}</h3>
              <p>{t('resident.inProgress')}</p>
            </div>
          </div>
          <div className="track-card resolved">
            <FaCheckCircle className="track-icon" />
            <div className="track-info">
              <h3>{trackingCounts.resolved}</h3>
              <p>{t('resident.resolved')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* My Complaints */}
      <div className="complaints-section">
        <h2>{t('resident.myComplaints')} ({reports.length})</h2>
        
        {reports.length === 0 ? (
          <div className="no-complaints">
            <p>{t('resident.noComplaints')}</p>
            <button className="post-btn" onClick={() => navigate('/report')}>
              <FaPlus /> {t('resident.postFirst')}
            </button>
          </div>
        ) : (
          <div className="complaints-list">
            {reports.map((report) => (
              <div key={report._id} className="complaint-card">
                <div className="complaint-header">
                  <h3>{report.title}</h3>
                  <span 
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(report.status) }}
                  >
                    {getStatusIcon(report.status)}
                    {report.status.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
                
                <div className="complaint-body">
                  <p><strong>{t('resident.category')}:</strong> {report.category.replace('_', ' ')}</p>
                  <p><strong>{t('resident.priority')}:</strong> {report.priority}</p>
                  <p><strong>{t('resident.location')}:</strong> {report.location.address}</p>
                  <p><strong>{t('resident.description')}:</strong> {report.description}</p>
                  <p><strong>{t('resident.submitted')}:</strong> {new Date(report.createdAt).toLocaleDateString()}</p>
                  
                  {report.images && report.images.length > 0 && (
                    <div className="complaint-images">
                      {report.images.map((img, idx) => (
                        <img 
                          key={idx} 
                          src={`http://localhost:5000${img}`} 
                          alt="Complaint" 
                          onClick={() => window.open(`http://localhost:5000${img}`, '_blank')}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <button 
                  className="view-details-btn"
                  onClick={() => setSelectedReport(report)}
                >
                  View Full Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Notifications Alert */}
      <div className="notifications-alert">
        <FaBell /> You will be notified when your complaint status changes
      </div>

      {/* Modal for Full Details */}
      {selectedReport && (
        <div className="modal-overlay" onClick={() => setSelectedReport(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedReport(null)}>×</button>
            
            <h2>{selectedReport.title}</h2>
            
            <div className="modal-status">
              <span 
                className="status-badge large"
                style={{ backgroundColor: getStatusColor(selectedReport.status) }}
              >
                {getStatusIcon(selectedReport.status)}
                {selectedReport.status.replace('_', ' ').toUpperCase()}
              </span>
            </div>

            <div className="modal-details">
              <div className="detail-row">
                <strong>Category:</strong>
                <span>{selectedReport.category.replace('_', ' ')}</span>
              </div>
              <div className="detail-row">
                <strong>Priority:</strong>
                <span>{selectedReport.priority}</span>
              </div>
              <div className="detail-row">
                <strong>Location:</strong>
                <span>{selectedReport.location.address}</span>
              </div>
              <div className="detail-row">
                <strong>Coordinates:</strong>
                <span>
                  {selectedReport.location.coordinates.latitude}, 
                  {selectedReport.location.coordinates.longitude}
                </span>
              </div>
              <div className="detail-row">
                <strong>Submitted:</strong>
                <span>{new Date(selectedReport.createdAt).toLocaleString()}</span>
              </div>
              <div className="detail-row full-width">
                <strong>Description:</strong>
                <p>{selectedReport.description}</p>
              </div>
              
              {selectedReport.images && selectedReport.images.length > 0 && (
                <div className="detail-row full-width">
                  <strong>Images:</strong>
                  <div className="modal-images">
                    {selectedReport.images.map((img, idx) => (
                      <img 
                        key={idx} 
                        src={`http://localhost:5000${img}`} 
                        alt="Complaint" 
                        onClick={() => window.open(`http://localhost:5000${img}`, '_blank')}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResidentDashboard;
