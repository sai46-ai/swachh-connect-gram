import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../services/authService';
import { getAllReports, updateReportStatus } from '../services/reportService';
import { useTranslation } from '../hooks/useTranslation';
import { 
  FaClock, FaSpinner, FaCheckCircle, FaSignOutAlt, FaBell, 
  FaChartBar, FaUsers, FaFilter, FaSearch, FaMapMarkerAlt,
  FaExclamationTriangle, FaExclamationCircle, FaTasks,
  FaCheckDouble, FaCalendarAlt, FaImage, FaTimes, FaEdit,
  FaHome, FaList, FaChartLine
} from 'react-icons/fa';
import './AdminDashboard.css';

function AdminDashboard() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const currentUser = getCurrentUser();
  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [newComplaintAlert, setNewComplaintAlert] = useState(false);
  const [activeView, setActiveView] = useState('overview');
  
  // Filter states
  const [filters, setFilters] = useState({
    status: '',
    category: '',
    priority: '',
    searchTerm: ''
  });

  useEffect(() => {
    if (!currentUser || currentUser.role !== 'admin') {
      alert(t('admin.accessDenied'));
      navigate('/');
      return;
    }

    fetchReports();
    const interval = setInterval(() => fetchReports(true), 30000);
    return () => clearInterval(interval);
  }, [currentUser, navigate]);

  useEffect(() => {
    applyFilters();
  }, [reports, filters]);

  const applyFilters = () => {
    let filtered = [...reports];

    if (filters.status) {
      filtered = filtered.filter(r => r.status === filters.status);
    }
    if (filters.category) {
      filtered = filtered.filter(r => r.category === filters.category);
    }
    if (filters.priority) {
      filtered = filtered.filter(r => r.priority === filters.priority);
    }
    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      filtered = filtered.filter(r => 
        r.title?.toLowerCase().includes(term) ||
        r.description?.toLowerCase().includes(term) ||
        r.reportedBy?.name?.toLowerCase().includes(term) ||
        r.location?.address?.toLowerCase().includes(term)
      );
    }

    setFilteredReports(filtered);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
  };

  const clearFilters = () => {
    setFilters({ status: '', category: '', priority: '', searchTerm: '' });
  };

  const fetchReports = async (checkNew = false) => {
    try {
      setLoading(true);
      const response = await getAllReports();
      const reportsData = response.data || response;
      const allReports = Array.isArray(reportsData) ? reportsData : [];
      
      if (checkNew && allReports.length > reports.length) {
        setNewComplaintAlert(true);
        setTimeout(() => setNewComplaintAlert(false), 5000);
      }
      
      setReports(allReports);
    } catch (error) {
      console.error('Error fetching reports:', error);
      setReports([]);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (reportId, newStatus) => {
    try {
      setUpdating(true);
      await updateReportStatus(reportId, { status: newStatus });
      await fetchReports();
      alert('Status updated successfully!');
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status');
    } finally {
      setUpdating(false);
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

  const getCategoryLabel = (category) => {
    const labels = {
      'overflowing_drain': 'Dirty Water Overflowing',
      'garbage_pile': 'Garbage Not Collected',
      'stagnant_water': 'Standing Water (Mosquitoes)',
      'blocked_sewer': 'Toilet/Drain Blocked',
      'open_defecation': 'Open Toilet Area',
      'other': 'Other Problem'
    };
    return labels[category] || category;
  };

  const summary = {
    total: reports.length,
    pending: reports.filter(r => r.status === 'pending').length,
    inProgress: reports.filter(r => r.status === 'in_progress').length,
    resolved: reports.filter(r => r.status === 'resolved').length,
    high: reports.filter(r => r.priority === 'high' || r.priority === 'critical').length,
    recent: reports.filter(r => {
      const today = new Date();
      const reportDate = new Date(r.createdAt);
      const diffTime = Math.abs(today - reportDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= 7;
    }).length
  };

  const analyticsData = {
    byCategory: {},
    byPriority: {},
    byStatus: {}
  };

  reports.forEach(r => {
    analyticsData.byCategory[r.category] = (analyticsData.byCategory[r.category] || 0) + 1;
    analyticsData.byPriority[r.priority] = (analyticsData.byPriority[r.priority] || 0) + 1;
    analyticsData.byStatus[r.status] = (analyticsData.byStatus[r.status] || 0) + 1;
  });

  if (loading && reports.length === 0) {
    return (
      <div className="admin-dashboard">
        <div className="loading">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard-new">
      {/* Header */}
      <div className="dashboard-header-new">
        <div className="header-left">
          <h1>{t('admin.title')}</h1>
          <p>{t('admin.welcome')}, {currentUser?.name}</p>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> {t('navbar.logout')}
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="dashboard-nav">
        <button 
          className={activeView === 'overview' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setActiveView('overview')}
        >
          <FaHome /> {t('admin.overview')}
        </button>
        <button 
          className={activeView === 'complaints' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setActiveView('complaints')}
        >
          <FaList /> {t('admin.allComplaints')}
        </button>
        <button 
          className={activeView === 'analytics' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setActiveView('analytics')}
        >
          <FaChartLine /> {t('admin.analytics')}
        </button>
      </div>

      {/* New Complaint Alert */}
      {newComplaintAlert && (
        <div className="alert-banner">
          <FaBell /> {t('admin.newComplaint')}
        </div>
      )}

      {/* Overview Section */}
      {activeView === 'overview' && (
        <div className="overview-section">
          {/* Statistics Cards */}
          <div className="stats-grid">
            <div className="stat-card total">
              <div className="stat-icon"><FaTasks /></div>
              <div className="stat-content">
                <h3>{summary.total}</h3>
                <p>{t('admin.totalComplaints')}</p>
              </div>
            </div>
            <div className="stat-card pending">
              <div className="stat-icon"><FaClock /></div>
              <div className="stat-content">
                <h3>{summary.pending}</h3>
                <p>{t('admin.pending')}</p>
              </div>
            </div>
            <div className="stat-card progress">
              <div className="stat-icon"><FaSpinner /></div>
              <div className="stat-content">
                <h3>{summary.inProgress}</h3>
                <p>{t('admin.inProgress')}</p>
              </div>
            </div>
            <div className="stat-card resolved">
              <div className="stat-icon"><FaCheckCircle /></div>
              <div className="stat-content">
                <h3>{summary.resolved}</h3>
                <p>{t('admin.resolved')}</p>
              </div>
            </div>
            <div className="stat-card high-priority">
              <div className="stat-icon"><FaExclamationTriangle /></div>
              <div className="stat-content">
                <h3>{summary.high}</h3>
                <p>{t('admin.highPriority')}</p>
              </div>
            </div>
            <div className="stat-card recent">
              <div className="stat-icon"><FaCalendarAlt /></div>
              <div className="stat-content">
                <h3>{summary.recent}</h3>
                <p>{t('admin.lastSevenDays')}</p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="recent-activity">
            <h2>{t('admin.recentComplaints')}</h2>
            <div className="activity-list">
              {reports.slice(0, 5).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((report) => (
                <div key={report._id} className="activity-item">
                  <div className="activity-details">
                    <h4>{report.title}</h4>
                    <p>{report.reportedBy?.name} • {new Date(report.createdAt).toLocaleDateString()}</p>
                  </div>
                  <span 
                    className="activity-status"
                    style={{ backgroundColor: getStatusColor(report.status) }}
                  >
                    {report.status.replace('_', ' ').toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* All Complaints Section */}
      {activeView === 'complaints' && (
        <div className="complaints-section-new">
          {/* Filters */}
          <div className="filters-bar">
            <div className="search-box">
              <FaSearch />
              <input 
                type="text"
                placeholder={t('admin.searchPlaceholder')}
                value={filters.searchTerm}
                onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
              />
            </div>

            <select 
              value={filters.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
            >
              <option value="">{t('admin.allStatus')}</option>
              <option value="pending">{t('admin.pending')}</option>
              <option value="in_progress">{t('admin.inProgress')}</option>
              <option value="resolved">{t('admin.resolved')}</option>
            </select>

            <select 
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
            >
              <option value="">{t('admin.allCategories')}</option>
              <option value="overflowing_drain">{t('report.categories.overflowing_drain')}</option>
              <option value="garbage_pile">{t('report.categories.garbage_pile')}</option>
              <option value="stagnant_water">{t('report.categories.stagnant_water')}</option>
              <option value="blocked_sewer">{t('report.categories.blocked_sewer')}</option>
              <option value="open_defecation">{t('report.categories.open_defecation')}</option>
              <option value="other">{t('report.categories.other')}</option>
            </select>

            <select 
              value={filters.priority}
              onChange={(e) => handleFilterChange('priority', e.target.value)}
            >
              <option value="">{t('admin.allPriorities')}</option>
              <option value="low">{t('report.priorities.low')}</option>
              <option value="medium">{t('report.priorities.medium')}</option>
              <option value="high">{t('report.priorities.high')}</option>
              <option value="critical">{t('report.priorities.critical')}</option>
            </select>

            {(filters.status || filters.category || filters.priority || filters.searchTerm) && (
              <button className="clear-filters-btn" onClick={clearFilters}>
                <FaTimes /> {t('admin.clear')}
              </button>
            )}
          </div>

          {/* Results Count */}
          <div className="results-info">
            <p>{t('admin.showing')} {filteredReports.length} {t('admin.of')} {reports.length} {t('admin.complaints')}</p>
          </div>

          {/* Complaints Table */}
          <div className="complaints-table">
            {filteredReports.length === 0 ? (
              <div className="no-results">{t('admin.noComplaints')}</div>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>{t('admin.id')}</th>
                    <th>{t('admin.title')}</th>
                    <th>{t('admin.category')}</th>
                    <th>{t('admin.priority')}</th>
                    <th>{t('admin.status')}</th>
                    <th>{t('admin.reporter')}</th>
                    <th>{t('admin.date')}</th>
                    <th>{t('admin.actions')}</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredReports.map((report) => (
                    <tr key={report._id}>
                      <td>#{report._id.slice(-6)}</td>
                      <td className="title-cell">{report.title}</td>
                      <td>{getCategoryLabel(report.category)}</td>
                      <td>
                        <span className={`priority-badge ${report.priority}`}>
                          {report.priority}
                        </span>
                      </td>
                      <td>
                        <select
                          className="status-dropdown"
                          value={report.status}
                          onChange={(e) => handleStatusUpdate(report._id, e.target.value)}
                          disabled={updating}
                          style={{ backgroundColor: getStatusColor(report.status) }}
                        >
                          <option value="pending">{t('admin.pending')}</option>
                          <option value="in_progress">{t('admin.inProgress')}</option>
                          <option value="resolved">{t('admin.resolved')}</option>
                        </select>
                      </td>
                      <td>{report.reportedBy?.name}</td>
                      <td>{new Date(report.createdAt).toLocaleDateString()}</td>
                      <td>
                        <button 
                          className="view-detail-btn"
                          onClick={() => setSelectedReport(report)}
                        >
                          {t('admin.viewDetails')}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}

      {/* Analytics Section */}
      {activeView === 'analytics' && (
        <div className="analytics-section">
          <h2>{t('admin.complaintsAnalytics')}</h2>
          
          <div className="analytics-grid">
            {/* By Category */}
            <div className="analytics-card">
              <h3>{t('admin.byCategory')}</h3>
              <div className="chart-container">
                {Object.entries(analyticsData.byCategory).map(([category, count]) => (
                  <div key={category} className="chart-bar">
                    <div className="bar-label">{getCategoryLabel(category)}</div>
                    <div className="bar-wrapper">
                      <div 
                        className="bar-fill"
                        style={{ 
                          width: `${(count / reports.length) * 100}%`,
                          backgroundColor: '#4CAF50'
                        }}
                      />
                      <span className="bar-value">{count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* By Priority */}
            <div className="analytics-card">
              <h3>{t('admin.byPriority')}</h3>
              <div className="chart-container">
                {Object.entries(analyticsData.byPriority).map(([priority, count]) => (
                  <div key={priority} className="chart-bar">
                    <div className="bar-label">{priority}</div>
                    <div className="bar-wrapper">
                      <div 
                        className="bar-fill"
                        style={{ 
                          width: `${(count / reports.length) * 100}%`,
                          backgroundColor: priority === 'high' || priority === 'critical' ? '#F44336' : '#FFC107'
                        }}
                      />
                      <span className="bar-value">{count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* By Status */}
            <div className="analytics-card">
              <h3>{t('admin.byStatus')}</h3>
              <div className="chart-container">
                {Object.entries(analyticsData.byStatus).map(([status, count]) => (
                  <div key={status} className="chart-bar">
                    <div className="bar-label">{status.replace('_', ' ')}</div>
                    <div className="bar-wrapper">
                      <div 
                        className="bar-fill"
                        style={{ 
                          width: `${(count / reports.length) * 100}%`,
                          backgroundColor: getStatusColor(status)
                        }}
                      />
                      <span className="bar-value">{count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="summary-stats">
            <div className="summary-item">
              <h4>{t('admin.resolutionRate')}</h4>
              <p className="big-number">{reports.length > 0 ? Math.round((summary.resolved / summary.total) * 100) : 0}%</p>
            </div>
            <div className="summary-item">
              <h4>{t('admin.avgResponseTime')}</h4>
              <p className="big-number">2-3 {t('admin.days')}</p>
            </div>
            <div className="summary-item">
              <h4>{t('admin.activeComplaints')}</h4>
              <p className="big-number">{summary.pending + summary.inProgress}</p>
            </div>
          </div>
        </div>
      )}

      {/* Complaint Detail Modal */}
      {selectedReport && (
        <div className="modal-overlay" onClick={() => setSelectedReport(null)}>
          <div className="modal-content-large" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedReport(null)}>
              <FaTimes />
            </button>
            
            <h2>{t('admin.complaintDetails')}</h2>
            
            <div className="detail-grid">
              <div className="detail-section">
                <h3>{t('admin.basicInfo')}</h3>
                <div className="detail-row">
                  <strong>{t('admin.id')}:</strong>
                  <span>#{selectedReport._id.slice(-6)}</span>
                </div>
                <div className="detail-row">
                  <strong>{t('admin.title')}:</strong>
                  <span>{selectedReport.title}</span>
                </div>
                <div className="detail-row">
                  <strong>{t('admin.category')}:</strong>
                  <span>{getCategoryLabel(selectedReport.category)}</span>
                </div>
                <div className="detail-row">
                  <strong>{t('admin.priority')}:</strong>
                  <span className={`priority-badge ${selectedReport.priority}`}>
                    {selectedReport.priority}
                  </span>
                </div>
                <div className="detail-row">
                  <strong>{t('admin.status')}:</strong>
                  <span 
                    className="status-badge-large"
                    style={{ backgroundColor: getStatusColor(selectedReport.status) }}
                  >
                    {selectedReport.status.replace('_', ' ').toUpperCase()}
                  </span>
                </div>
                <div className="detail-row">
                  <strong>{t('admin.submitted')}:</strong>
                  <span>{new Date(selectedReport.createdAt).toLocaleString()}</span>
                </div>
              </div>

              <div className="detail-section">
                <h3>{t('admin.reporterInfo')}</h3>
                <div className="detail-row">
                  <strong>{t('admin.name')}:</strong>
                  <span>{selectedReport.reportedBy?.name}</span>
                </div>
                <div className="detail-row">
                  <strong>{t('admin.contact')}:</strong>
                  <span>{selectedReport.reportedBy?.contact}</span>
                </div>
              </div>

              <div className="detail-section">
                <h3>{t('admin.location')}</h3>
                <div className="detail-row">
                  <strong><FaMapMarkerAlt /> {t('admin.address')}:</strong>
                  <span>{selectedReport.location?.address}</span>
                </div>
                <div className="detail-row">
                  <strong>{t('admin.coordinates')}:</strong>
                  <span>
                    {t('report.lat')} {selectedReport.location?.coordinates?.latitude?.toFixed(6)}, 
                    {t('report.lng')} {selectedReport.location?.coordinates?.longitude?.toFixed(6)}
                  </span>
                </div>
              </div>

              {selectedReport.images && selectedReport.images.length > 0 && (
                <div className="detail-section full-width">
                  <h3><FaImage /> {t('admin.images')}</h3>
                  <div className="image-gallery">
                    {selectedReport.images.map((img, idx) => (
                      <img 
                        key={idx}
                        src={`http://localhost:5000${img}`}
                        alt={`${t('admin.complaint')} ${idx + 1}`}
                        className="complaint-image"
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="detail-section full-width">
                <h3>{t('admin.updateStatus')}</h3>
                <select
                  className="status-update-select"
                  value={selectedReport.status}
                  onChange={(e) => {
                    handleStatusUpdate(selectedReport._id, e.target.value);
                    setSelectedReport(null);
                  }}
                  disabled={updating}
                >
                  <option value="pending">{t('admin.pending')}</option>
                  <option value="in_progress">{t('admin.inProgress')}</option>
                  <option value="resolved">{t('admin.resolved')}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
