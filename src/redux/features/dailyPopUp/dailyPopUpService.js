import { http } from "../../../util/restAPI";
import assert from "../../../util/assertion";

const BASE_URL = "http://localhost:3000/dailyPopUp";

// const getUsersByType = async (type) => {
//   const res = await http.get(`${BASE_URL}/filter?type=${type}`);
//   return assert(res, res.data, "Retrieval failed", res);
// };

const addArticleAttachment = async (data) => {
  const res = await http.post(`${BASE_URL}/attachArticle`, data);
  return assert(res, res.data, "Article Attachment has failed", res);
};
const getArticles = async (data) => {
  const res = await http.get(`${BASE_URL}/articles`);
  return assert(res, res.data, "Articles retrieval has failed", res);
};
const dailyPopUpService = {
  addArticleAttachment,
  getArticles,
};

export default dailyPopUpService;
