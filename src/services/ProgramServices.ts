import api from '../api/api';

interface programData {
  title: string;
  subtitle: string;
  description: string;
  status: string;
  thumbnail?: File | string | null;
}

export const getPrograms = async (page = 1, perPage = 5, search = '') => {
  const response = await api.get('/programs', {
    params: { page, per_page: perPage, search },
  });
  return response;
};

export const getProgramById = async (id: number | string) => {
  const response = await api.get(`/programs/${id}`);
  return response;
};

export const insertProgram = async (data: programData) => {
  const formData = new FormData();

  formData.append('title', data.title);
  formData.append('subtitle', data.subtitle);
  formData.append('description', data.description);
  formData.append('status', data.status);
  if (data.thumbnail) {
    formData.append('thumbnail', data.thumbnail);
  }

  try {
    const response = await api.post('/programs', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.error('Error inserting program:', error);
    throw error;
  }
};

export const updateProgram = async (id: number, data: programData) => {
  const formData = new FormData();

  formData.append('title', data.title);
  formData.append('subtitle', data.subtitle);
  formData.append('description', data.description);
  formData.append('status', data.status);
  if (data.thumbnail) {
    formData.append('thumbnail', data.thumbnail);
  }

  try {
    const response = await api.post(`/programs/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.error('Error updating program:', error);
    throw error;
  }
};

export const deleteProgram = async (id: number) => {
  const response = await api.delete(`/programs/${id}`);
  return response;
};
