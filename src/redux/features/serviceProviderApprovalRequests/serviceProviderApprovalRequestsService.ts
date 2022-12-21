import assert from "util/assertion";
import { request } from "util/axios";
import { AxiosMethods } from "constants/Axios";

const BASE_URL = `/requests`;

// todo fix any prop type

const getApprovalRequests:Function = async (isApproved:boolean) => {
  const res = await request({
    endpoint: `${BASE_URL}/isApproved=${isApproved}`,
    method: AxiosMethods.GET,
  });

  return assert(res, res.data, "Retrieval failed");
};

const acceptApprovalRequest:Function = async (id: string) => {
  const res = await request({
    endpoint: `${BASE_URL}/accept?id=${id}`,
    method: AxiosMethods.POST,
  });

  return assert(res, res.data, "Retrieval failed");
};

const approvalRequestsService = {
  getApprovalRequests,
  acceptApprovalRequest,
};

export default approvalRequestsService;
