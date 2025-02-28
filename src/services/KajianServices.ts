import api from '../api/api';

interface kajianData {
  category_id: string;
  title: string;
  subtitle?: string;
  description?: string;
  datetime: string;
  is_live: string;
  url?: string;
  status: string;
  thumbnail: File | string | null;
}

export const getKajian = async (page = 1, perPage = 5, search = '') => {
  const response = await api.get('/kajian', {
    params: { page, per_page: perPage, search },
  });
  return response;
};

export const getKajianById = async (id: number | string) => {
  const response = await api.get(`/kajian/${id}`);
  return response;
};

export const insertKajian = async (data: kajianData) => {
  const formData = new FormData();

  formData.append('category_id', data.category_id);
  formData.append('title', data.title);
  if (data.subtitle) {
    formData.append('subtitle', data.subtitle);
  }
  if (data.description) {
    formData.append('description', data.description);
  }
  formData.append('datetime', data.datetime);
  formData.append('is_live', data.is_live);
  if (data.url) {
    formData.append('url', data.url);
  }
  formData.append('status', data.status);
  if (data.thumbnail) {
    formData.append('thumbnail', data.thumbnail);
  }

  try {
    const response = await api.post('/kajian', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.error('Error inserting kajian:', error);
    throw error;
  }
};

export const updateKajian = async (id: number, data: kajianData) => {
  const formData = new FormData();

  formData.append('category_id', data.category_id);
  formData.append('title', data.title);
  if (data.subtitle) {
    formData.append('subtitle', data.subtitle);
  }
  if (data.description) {
    formData.append('description', data.description);
  }
  formData.append('datetime', data.datetime);
  formData.append('is_live', data.is_live);
  if (data.url) {
    formData.append('url', data.url);
  }
  formData.append('status', data.status);
  if (data.thumbnail) {
    formData.append('thumbnail', data.thumbnail);
  }

  try {
    const response = await api.post(`/kajian/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.error('Error updating kajian:', error);
    throw error;
  }
};

export const deleteKajian = async (id: number) => {
  const response = await api.delete(`/kajian/${id}`);
  return response;
};
