import api from '../api/api';

interface dataCategory {
  name: string;
  description?: string;
  icon: string;
  status: string;
}

export const getCategory = async (page = 1, perPage = 5, search = '') => {
  const response = await api.get('/donation-categories', {
    params: { page, per_page: perPage, search },
  });
  return response;
};

export const getCategoryById = async (id: number | string) => {
  const response = await api.get(`/donation-categories/${id}`);
  return response;
};

export const insertCategory = async (data: dataCategory) => {
  const response = await api.post('/donation-categories', data);
  return response;
};

export const updateCategory = async (id: number, data: dataCategory) => {
  const response = await api.put(`/donation-categories/${id}`, data);
  return response;
};

export const deleteCategory = async (id: number) => {
  const response = await api.delete(`/donation-categories/${id}`);
  return response;
};
