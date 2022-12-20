import { http } from "util/restAPI";

const BASE_URL = `/api/users/`;

// todo fix prop typing
// Register User
const register = async (userData: any) => {
  const res = await http.post(`${BASE_URL}auth/register`, userData);

  if (res.data) {
    if (
      res.data.type !== "serviceprovider" ||
      (res.data.type === "serviceprovider" && res.data.approval_status)
    ) {
      localStorage.setItem("user", JSON.stringify(res.data));
      return { user: res.data };
    }
    return { message: "Your signup is under review" };
  }
};

const login = async (userData: any) => {
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
