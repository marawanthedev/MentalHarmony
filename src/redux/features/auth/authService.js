import assert from "../../../util/assertion";

import { http } from "../../../util/restAPI";

const BASE_URL = "http://localhost:5000/api/users/";

// Register User
const register = async (userData) => {
  console.log(userData);
  const res = http.post(`${BASE_URL}auth/register`, userData);

  return assert(res, res.data, "Registration has failed", res);
};

const login = async (userData) => {
  const res = await http.post(`${BASE_URL}auth/login`, userData);

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
