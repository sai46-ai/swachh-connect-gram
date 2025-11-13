import api from './api';

// Get all awareness content
export const getAllAwareness = async (filters = {}) => {
  const response = await api.get('/awareness', { params: filters });
  return response.data;
};

// Get awareness by ID
export const getAwarenessById = async (id) => {
  const response = await api.get(`/awareness/${id}`);
  return response.data;
};

// Create awareness content
export const createAwareness = async (data) => {
  const response = await api.post('/awareness', data);
  return response.data;
};

// Update awareness content
export const updateAwareness = async (id, data) => {
  const response = await api.put(`/awareness/${id}`, data);
  return response.data;
};

// Delete awareness content
export const deleteAwareness = async (id) => {
  const response = await api.delete(`/awareness/${id}`);
  return response.data;
};

// Like awareness content
export const likeAwareness = async (id) => {
  const response = await api.post(`/awareness/${id}/like`);
  return response.data;
};
