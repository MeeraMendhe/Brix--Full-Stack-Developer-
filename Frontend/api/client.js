// const BASE = 'http://localhost:3001/api';
const BASE= 'https://brix-full-stack-developer-backend-vsf9.onrender.com/api'

async function req(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

export const api = {
  getManagers: () => req('/managers'),
  getTechnicians: () => req('/technicians'),
  getTechnicianJobs: (id) => req(`/technicians/${id}/jobs`),

  getQuotes: (status) => req(`/quotes${status ? `?status=${status}` : ''}`),

  getJobs: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return req(`/jobs${qs ? `?${qs}` : ''}`);
  },
  createJob: (body) => req('/jobs', { method: 'POST', body: JSON.stringify(body) }),
  completeJob: (id) => req(`/jobs/${id}/complete`, { method: 'PATCH' }),

  getNotifications: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return req(`/notifications${qs ? `?${qs}` : ''}`);
  },
  markNotificationRead: (id) => req(`/notifications/${id}/read`, { method: 'PATCH' }),
};