import api from '../api/api';

export const getUser = async (page = 1, perPage = 5, search = '') => {
  const response = await api.get('/users', {
    params: { page, per_page: perPage, search },
  });
  return response;
};

export const deleteUser = async (id: number) => {
  const response = await api.delete(`/users/${id}`);
  return response;
};
