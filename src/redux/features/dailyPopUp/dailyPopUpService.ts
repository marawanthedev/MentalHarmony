import assert from "util/assertion";
import { request } from "util/axios";
import { AxiosMethods } from "constants/Axios";

// const BASE_URL = `${process.env.REACT_APP_BASE_URL}`;

const addArticleAttachment = async (data: any) => {
  const res = await request({
    endpoint: `/dailyPopUp/attachArticle`,
    method: AxiosMethods.POST,
  });
  return assert(res, res.data, "Article Attachment has failed", res);
};
const getArticles = async () => {
  const res = await request({
    endpoint: `/dailyPopUp/articles`,
    method: AxiosMethods.GET,
  });
  return assert(res, res.data, "Articles retrieval has failed", res);
};

const submitFeeling = async (feeling: any) => {
  const res = await request({
    endpoint: `/feeling`,
    method: AxiosMethods.POST,
    data: feeling,
  });
  return assert(res, res.data, "Feeling submission has failed", res);
};

const dailyPopUpService = {
  addArticleAttachment,
  getArticles,
  submitFeeling,
};

export default dailyPopUpService;
