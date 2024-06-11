import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getCustomerByTicketId = async (ticketId) => {
  try {
    const token = sessionStorage.getItem("token");
    const response = await axios.get(`${API_BASE_URL}/ticket/${ticketId}/customer`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching customer by ticket ID', error);
    return null;
  }
};

export default getCustomerByTicketId;
