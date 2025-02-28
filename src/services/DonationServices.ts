import api from '../api/api';

interface donationData {
  category_id: string;
  title: string;
  description?: string;
  target_amount: string;
  bank_account: string;
  due_date: string;
  status: string;
  thumbnail: File | string | null;
}

export const getDonation = async (page = 1, perPage = 5, search = '') => {
  const response = await api.get('/donations', {
    params: { page, per_page: perPage, search },
  });
  return response;
};

export const getDonationById = async (id: number | string) => {
  const response = await api.get(`/donations/${id}`);
  return response;
};

export const insertDonation = async (data: donationData) => {
  const formData = new FormData();

  formData.append('category_id', data.category_id);
  formData.append('title', data.title);
  if (data.description) {
    formData.append('description', data.description);
  }
  formData.append('target_amount', data.target_amount);
  formData.append('bank_account', data.bank_account);
  formData.append('due_date', data.due_date);
  formData.append('status', data.status);
  if (data.thumbnail) {
    formData.append('thumbnail', data.thumbnail);
  }

  try {
    const response = await api.post('/donations', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.error('Error inserting Donation:', error);
    throw error;
  }
};

export const updateDonation = async (id: number, data: donationData) => {
  const formData = new FormData();

  formData.append('category_id', data.category_id);
  formData.append('title', data.title);
  if (data.description) {
    formData.append('description', data.description);
  }
  formData.append('target_amount', data.target_amount);
  formData.append('bank_account', data.bank_account);
  formData.append('due_date', data.due_date);
  formData.append('status', data.status);
  if (data.thumbnail) {
    formData.append('thumbnail', data.thumbnail);
  }

  try {
    const response = await api.post(`/donations/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.error('Error updating Donation:', error);
    throw error;
  }
};

export const deleteDonation = async (id: number) => {
  const response = await api.delete(`/donations/${id}`);
  return response;
};
