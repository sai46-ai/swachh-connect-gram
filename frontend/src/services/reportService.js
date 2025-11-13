import api from './api';

// Create a new report
export const createReport = async (formData) => {
  const response = await api.post('/reports', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// Get all reports
export const getAllReports = async (filters = {}) => {
  const response = await api.get('/reports', { params: filters });
  return response.data;
};

// Get report by ID
export const getReportById = async (id) => {
  const response = await api.get(`/reports/${id}`);
  return response.data;
};

// Update report status
export const updateReportStatus = async (id, updateData) => {
  const response = await api.put(`/reports/${id}`, updateData);
  return response.data;
};

// Delete report
export const deleteReport = async (id) => {
  const response = await api.delete(`/reports/${id}`);
  return response.data;
};

// Get report statistics
export const getReportStats = async () => {
  const response = await api.get('/reports/stats');
  return response.data;
};

// Get nearby reports
export const getNearbyReports = async (latitude, longitude, maxDistance = 5000) => {
  const response = await api.get('/reports/nearby', {
    params: { latitude, longitude, maxDistance }
  });
  return response.data;
};
