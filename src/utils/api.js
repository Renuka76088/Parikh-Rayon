import axios from 'axios';

export const API_BASE_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:2000/api'
  : 'https://api.parekhchamber.com/api';

export const IMAGE_BASE_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:2000'
  : 'https://api.parekhchamber.com';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const tradeEnquiryApi = {
  submit: (formData) => api.post('/trade-enquiry', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
};

export const quotationApi = {
  submit: (formData) => api.post('/quotation', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  getAll: (siteId) => api.get(`/equotations?siteId=${siteId}`),
};

export const equotationHeaderApi = {
  get: (siteId) => api.get(`/equotation-header/${siteId}`),
};

export const auctionApi = {
  submit: (formData) => api.post('/auction', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  getAll: (siteId) => api.get(`/eauctions?siteId=${siteId}`),
};

export const eauctionHeaderApi = {
  get: (siteId) => api.get(`/eauction-header/${siteId}`),
};

export const appointmentApi = {
  submit: (formData) => api.post('/appointment', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
};

export const productApi = {
  getAll: (siteId) => api.get(`/product?siteId=${siteId}`),
};

export const blogApi = {
  getAll: (siteId) => api.get(`/blogs?siteId=${siteId}`),
  getById: (id) => api.get(`/blogs/${id}`),
};

export const blogHeaderApi = {
  get: (siteId) => api.get(`/blog-header/${siteId}`),
};

export const tenderApi = {
  getAll: (siteId) => api.get(`/tenders?siteId=${siteId}`),
};

export const tenderHeaderApi = {

  get: (siteId) => api.get(`/tender-header/${siteId}`),
};

export const circularApi = {
  getAll: (siteId) => api.get(`/circulars?siteId=${siteId}`),
};

export const circularHeaderApi = {
  get: (siteId) => api.get(`/circular-header/${siteId}`),
};



export const careerApi = {
  getAll: (siteId) => api.get(`/careers?siteId=${siteId}`),
};

export const careerHeaderApi = {
  get: (siteId) => api.get(`/career-header/${siteId}`),
};

export const mediaEventApi = {
  getAll: (siteId) => api.get(`/media-events?siteId=${siteId}`),
};

export const managementApi = {
  getContent: (siteId) => api.get(`/management/content?siteId=${siteId}`),
  getMembers: (siteId) => api.get(`/management/members?siteId=${siteId}`),
};

export default api;
