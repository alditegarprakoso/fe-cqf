import api from '../api/api';

interface groupData {
  name: string;
  status: string;
  logo?: File | string | null;
}

export const getGroup = async (page = 1, perPage = 5, search = '') => {
  const response = await api.get('/groups', {
    params: { page, per_page: perPage, search },
  });
  return response;
};

export const getGroupById = async (id: number | string) => {
  const response = await api.get(`/groups/${id}`);
  return response;
};

export const insertGroup = async (data: groupData) => {
  const formData = new FormData();

  formData.append('name', data.name);
  formData.append('status', data.status);
  if (data.logo) {
    formData.append('logo', data.logo);
  }

  try {
    const response = await api.post('/groups', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.error('Error inserting group:', error);
    throw error;
  }
};

export const updateGroup = async (id: number, data: groupData) => {
  const formData = new FormData();

  formData.append('name', data.name);
  formData.append('status', data.status);
  if (data.logo) {
    formData.append('logo', data.logo);
  }

  try {
    const response = await api.post(`/groups/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.error('Error updating group:', error);
    throw error;
  }
};

export const deleteGroup = async (id: number) => {
  const response = await api.delete(`/groups/${id}`);
  return response;
};
