import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const putTicketStatus = async (ticketId, newStatus) => {
  try {
    const token = sessionStorage.getItem("token");
    const response = await axios.put(`${API_BASE_URL}/ticket/${ticketId}`, {status: newStatus}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error updating ticket status', error);
    return null;
  }
};

export default putTicketStatus;
