import { http } from "util/restAPI";
import assert from "util/assertion";
import { request } from "./../../../util/axios";
import { AxiosMethods } from "constants/Axios";

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/api/users`;

// todo figure out prop types
const getUsersByType = async (type: any) => {
  const res = await request({
    endpoint: `/api/users/filte2r?type=${type}`,
    method: AxiosMethods.GET,
  });

  return assert(res, res.data, "Retrieval failed", res);
};

const getUser = async () => {
  const res = await http.get(`${BASE_URL}/getUser`);
  return assert(res, res.data, "Retrieval failed", res);
};

const updateUser = async (data: any) => {
  const res = await http.put(`${BASE_URL}/update`, data);
  return assert(res, res.data, "User update has failed", res);
};

const deleteUser = async (id: any) => {
  const res = await http.delete(`${BASE_URL}/deleteUser?id=${id}`);
  return assert(res, res.data, "Removal failed", res);
};
const userService = {
  getUsersByType,
  getUser,
  updateUser,
  deleteUser,
};

export default userService;
