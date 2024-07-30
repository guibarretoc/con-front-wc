import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const login = async(data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, data)
    const { token, userType, userId } = response.data;
    return { token, userType, userId };
  } catch (error) {
    console.log(error);
  }
}

export default login;