import api from '../api/api';

export const getHomepage = async () => {
  const response = await api.get('/homepage');
  return response;
};
