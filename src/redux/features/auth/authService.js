import axios from "axios";

const BASE_URL = "api/users/";

// Register User
const register = async (userData) => {
  const res = await axios.post(`${BASE_URL}auth/register`, userData);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

const login = async (userData) => {
  const res = await axios.post(`${BASE_URL}auth/login`, userData);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};
const logout = async () => {
  localStorage.removeItem("user");
};
const authService = {
  register,
  login,
  logout,
};

export default authService;
