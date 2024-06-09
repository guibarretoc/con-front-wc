import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const signUpEmployee = async(data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup_employee`, data)
    return JSON.stringify(response.status);
  } catch (error) {
    console.log(error);
  }
}

export default signUpEmployee;