import api from '../api/api';

export const getHomepage = async (
  categoryDonationId: string = '',
  categoryKajianId: string = '',
) => {
  const params = {
    category_donation_id: categoryDonationId,
    category_kajian_id: categoryKajianId,
  };
  const response = await api.get('/homepage', { params });
  return response;
};
