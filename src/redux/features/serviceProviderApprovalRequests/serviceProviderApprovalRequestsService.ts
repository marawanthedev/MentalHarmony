import { http } from "util/restAPI";
import assert from "util/assertion";
import { request } from "util/axios";
import { AxiosMethods } from "constants/Axios";

const BASE_URL = `/requests`;

// todo fix any prop type

const getApprovalRequests = async (data: any) => {
  const res = await request({
    endpoint: `${BASE_URL}/isApproved=${data.isApproved}`,
    method: AxiosMethods.GET,
  });

  return assert(res, res.data, "Retrieval failed", res);
};

const acceptApprovalRequest = async (id: any) => {
  const res = await request({
    endpoint: `${BASE_URL}/accept?id=${id}`,
    method: AxiosMethods.POST,
  });

  return assert(res, res.data, "Retrieval failed", res);
};

const approvalRequestsService = {
  getApprovalRequests,
  acceptApprovalRequest,
};

export default approvalRequestsService;
