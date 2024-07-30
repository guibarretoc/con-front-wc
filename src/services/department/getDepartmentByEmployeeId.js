import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getDepartmentByEmployeeId = async(id) => {
  try {
    const token = sessionStorage.getItem("token");
    const response = await axios.get(`${API_BASE_URL}/employee/${id}/department`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default getDepartmentByEmployeeId;