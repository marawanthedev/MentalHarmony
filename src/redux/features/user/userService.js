import { http } from "../../../util/restAPI";
import assert from "../../../util/assertion";

const BASE_URL = "http://localhost:3000/api/users";

const getUsersByType = async (type) => {
  const res = await http.get(`${BASE_URL}/filter?type=${type}`);
  return assert(res, res.data, "Retrieval failed", res);
};

const getUser = async () => {
  const res = await http.get(`${BASE_URL}/getUser`);
  return assert(res, res.data, "Retrieval failed", res);
};

const updateUser = async (data) => {
  const res = await http.put(`${BASE_URL}/update`, data);
  return assert(res, res.data, "User update has failed", res);
};

const deleteUser = async (id) => {
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
