import axios from 'axios';

// getUserProfile
export const getUserProfile = () => {
  return axios.get('/api/user')
};

// createEntry
export const createEntry = (entryInfo) => {
  return axios.post('/api/entry', entryInfo);
};

// getAllEntries
// export const getAllEntries = () => {
//   return axios.get('/api/entry');
// };

// getEntryById
export const getEntryById = (entryId) => {
  return axios.get(`/api/entry/${entryId}`);
};

// updateEntry,
export const updateEntry = (entryId, entryInfo) => {
  return axios.put(`/api/entry/${entryId}`, entryInfo);
};

// deleteEntry
export const deleteEntry = (entryId) => {
  return axios.delete(`/api/entry/${entryId}`);
};

export const loginCheck = () => {
  return axios.get('/auth/status');
}

export default {
  getUserProfile,
  createEntry,
  getEntryById,
  updateEntry,
  deleteEntry,
  loginCheck
};