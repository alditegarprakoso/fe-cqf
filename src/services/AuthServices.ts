import api from '../api/api';

export const login = async (email: string, password: string) => {
  const response = await api.post('/login', { email, password });
  return response;
};

export const logout = async () => {
  const response = await api.post('/logout');
  return response;
};
