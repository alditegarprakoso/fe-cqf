import api from '../api/api';

interface donatureData {
  donation_id: string;
  donature_name: string;
  email?: string;
  phone?: string;
  total_donation: string;
  info: string;
  status: string;
  attachment: File | string | null;
}

export const getDonature = async (page = 1, perPage = 5, search = '') => {
  const response = await api.get('/donatures', {
    params: { page, per_page: perPage, search },
  });
  return response;
};

export const getDonatureById = async (id: number | string) => {
  const response = await api.get(`/donatures/${id}`);
  return response;
};

export const insertDonature = async (data: donatureData) => {
  const formData = new FormData();

  formData.append('donation_id', data.donation_id);
  formData.append('donature_name', data.donature_name);
  if (data.email) {
    formData.append('email', data.email);
  }
  if (data.phone) {
    formData.append('phone', data.phone);
  }
  formData.append('total_donation', data.total_donation);
  formData.append('info', data.info);
  formData.append('status', data.status);
  if (data.attachment) {
    formData.append('attachment', data.attachment);
  }

  try {
    const response = await api.post('/donatures', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.error('Error inserting donature:', error);
    throw error;
  }
};

export const updateDonature = async (id: number, data: donatureData) => {
  const formData = new FormData();

  formData.append('donation_id', data.donation_id);
  formData.append('donature_name', data.donature_name);
  if (data.email) {
    formData.append('email', data.email);
  }
  if (data.phone) {
    formData.append('phone', data.phone);
  }
  formData.append('total_donation', data.total_donation);
  formData.append('info', data.info);
  formData.append('status', data.status);
  if (data.attachment) {
    formData.append('attachment', data.attachment);
  }

  try {
    const response = await api.post(`/donatures/${id}`, formData, {
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

export const deleteDonature = async (id: number) => {
  const response = await api.delete(`/donatures/${id}`);
  return response;
};
