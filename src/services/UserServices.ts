import api from '../api/api';

export const getUser = async (page = 1, perPage = 5, search = '') => {
  const response = await api.get('/users', {
    params: { page, per_page: perPage, search },
  });
  return response;
};

interface insertData {
  name: string;
  email: string;
  password: string;
  position: string;
  status: string;
  photo?: File | string | null;
}

export const insertUser = async (data: insertData) => {
  const formData = new FormData();

  // Object.keys(data).forEach(([key, value]) => {
  //   formData.append(key, value);
  // });

  formData.append('name', data.name);
  formData.append('email', data.email);
  formData.append('password', data.password);
  formData.append('position', data.position);
  formData.append('status', data.status);
  if (data.photo) {
    formData.append('photo', data.photo);
  }

  try {
    const response = await api.post('/users', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.error('Error inserting user:', error);
    throw error;
  }
};

export const deleteUser = async (id: number) => {
  const response = await api.delete(`/users/${id}`);
  return response;
};
