import { http } from "../../../util/restAPI";
import assert from "../../../util/assertion";

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/requests`;

// todo fix any prop type

const getApprovalRequests = async (data: any) => {
  const res = await http.get(`${BASE_URL}?isApproved=${data.isApproved}`);
  return assert(res, res.data, "Retrieval failed", res);
};

const acceptApprovalRequest = async (id: any) => {
  const res = await http.post(`${BASE_URL}/accept?id=${id}`);
  return assert(res, res.data, "Retrieval failed", res);
};

const approvalRequestsService = {
  getApprovalRequests,
  acceptApprovalRequest,
};

export default approvalRequestsService;
