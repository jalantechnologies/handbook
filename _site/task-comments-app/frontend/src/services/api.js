import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for debugging
api.interceptors.request.use(
  (config) => {
    console.log('API Request:', config.method?.toUpperCase(), config.url, config.data);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    console.log('API Response:', response.status, response.data);
    return response;
  },
  (error) => {
    console.error('API Response Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const commentAPI = {
  // Get all comments for a task
  getComments: (taskId) => api.get(`/tasks/${taskId}/comments`),
  
  // Create a new comment
  createComment: (taskId, commentData) => 
    api.post(`/tasks/${taskId}/comments`, commentData),
  
  // Get a single comment
  getComment: (commentId) => api.get(`/comments/${commentId}`),
  
  // Update a comment
  updateComment: (commentId, commentData) => 
    api.put(`/comments/${commentId}`, commentData),
  
  // Delete a comment
  deleteComment: (commentId) => api.delete(`/comments/${commentId}`),
};

// Mock task API (since we don't have tasks in backend yet)
export const taskAPI = {
  getTasks: () => Promise.resolve({
    data: {
      success: true,
      data: [
        { id: 1, title: 'Setup Project Structure', status: 'completed', description: 'Create the basic folder structure and files' },
        { id: 2, title: 'Implement Backend APIs', status: 'in-progress', description: 'Build CRUD APIs for comments' },
        { id: 3, title: 'Build Frontend Interface', status: 'pending', description: 'Create React components for task management' },
        { id: 4, title: 'Add Authentication', status: 'pending', description: 'Implement user authentication system' },
        { id: 5, title: 'Deploy Application', status: 'pending', description: 'Deploy to production environment' }
      ]
    }
  }),
  
  getTask: (taskId) => {
    const tasks = [
      { id: 1, title: 'Setup Project Structure', status: 'completed', description: 'Create the basic folder structure and files' },
      { id: 2, title: 'Implement Backend APIs', status: 'in-progress', description: 'Build CRUD APIs for comments' },
      { id: 3, title: 'Build Frontend Interface', status: 'pending', description: 'Create React components for task management' },
      { id: 4, title: 'Add Authentication', status: 'pending', description: 'Implement user authentication system' },
      { id: 5, title: 'Deploy Application', status: 'pending', description: 'Deploy to production environment' }
    ];
    const task = tasks.find(t => t.id === parseInt(taskId));
    return Promise.resolve({
      data: { success: true, data: task }
    });
  }
};

export default api;