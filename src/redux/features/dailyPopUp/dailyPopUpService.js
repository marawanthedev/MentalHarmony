import { http } from "../../../util/restAPI";
import assert from "../../../util/assertion";

const BASE_URL = "http://localhost:3000";

const addArticleAttachment = async (data) => {
  const res = await http.post(`${BASE_URL}/dailyPopUp/attachArticle`, data);
  return assert(res, res.data, "Article Attachment has failed", res);
};
const getArticles = async () => {
  const res = await http.get(`${BASE_URL}/dailyPopUp/articles`);
  return assert(res, res.data, "Articles retrieval has failed", res);
};

const submitFeeling = async (feeling) => {
  const res = await http.post(`${BASE_URL}/feeling`, feeling);
  return assert(res, res.data, "Feeling submission has failed", res);
};

const dailyPopUpService = {
  addArticleAttachment,
  getArticles,
  submitFeeling,
};

export default dailyPopUpService;
