import assert from "util/assertion";
import { request } from "./../../../util/axios";
import { AxiosMethods } from "constants/Axios";

const BASE_URL = `/api/users`;

// todo figure out prop types
const getUsersByType: Function = async (type: string) => {
  const res = await request({
    endpoint: `${BASE_URL}/filter?type=${type}`,
    method: AxiosMethods.GET,
  });

  return assert(res, res.data, "Retrieval failed", res);
};

const getUser: Function = async () => {
  const res = await request({
    endpoint: `${BASE_URL}/getUser`,
    method: AxiosMethods.GET,
  });
  return assert(res, res.data, "Retrieval failed", res);
};

const updateUser: Function = async (data: any) => {
  const res = await request({
    endpoint: `${BASE_URL}/update`,
    method: AxiosMethods.PUT,
    data,
  });
  return assert(res, res.data, "User update has failed", res);
};

const deleteUser: Function = async (id: string) => {
  const res = await request({
    endpoint: `${BASE_URL}/deleteUser?id=${id}`,
    method: AxiosMethods.DELETE,
  });
  return assert(res, res.data, "Removal failed", res);
};

const userService = {
  getUsersByType,
  getUser,
  updateUser,
  deleteUser,
};

export default userService;
