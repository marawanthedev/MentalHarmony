import { http } from "../../../util/restAPI";
import assert from "../../../util/assertion";

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/requests`;

const getApprovalRequests = async (data) => {
  const res = await http.get(`${BASE_URL}?isApproved=${data.isApproved}`);
  return assert(res, res.data, "Retrieval failed", res);
};

const acceptApprovalRequest = async (id) => {
  const res = await http.post(`${BASE_URL}/accept?id=${id}`);
  return assert(res, res.data, "Retrieval failed", res);
};

const approvalRequestsService = {
  getApprovalRequests,
  acceptApprovalRequest,
};

export default approvalRequestsService;
