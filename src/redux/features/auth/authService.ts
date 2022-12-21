import { AxiosMethods } from "constants/Axios";
import { ILoginUser } from "constants/ILoginUser";
import { IRegisterUser } from "constants/IRegisterUser";
import { request } from "util/axios";

const BASE_URL = `/api/users`;

// todo fix prop typing
// Register User
const register:Function = async (userData: IRegisterUser) => {
  const res = await request({
    endpoint: `${BASE_URL}/auth/register`,
    method: AxiosMethods.POST,
    data: userData,
  });

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

const login:Function = async (userData: ILoginUser) => {
  // const res = await http.post(`${BASE_URL}auth/login`, userData);
  const res = await request({
    endpoint: `${BASE_URL}/auth/login`,
    method: AxiosMethods.POST,
    data: userData,
  });

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
