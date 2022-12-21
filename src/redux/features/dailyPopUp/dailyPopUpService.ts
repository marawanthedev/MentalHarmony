import assert from "util/assertion";
import { request } from "util/axios";
import { AxiosMethods } from "constants/Axios";
import { IArticleAttachment } from "constants/IArticleAttachment";

// const BASE_URL = `${process.env.REACT_APP_BASE_URL}`;

const addArticleAttachment: Function = async (data: IArticleAttachment) => {
  const res = await request({
    endpoint: `/dailyPopUp/attachArticle`,
    method: AxiosMethods.POST,
    data,
  });
  return assert(res, res.data, "Article Attachment has failed");
};
const getArticles: Function = async () => {
  const res = await request({
    endpoint: `/dailyPopUp/articles`,
    method: AxiosMethods.GET,
  });
  return assert(res, res.data, "Articles retrieval has failed");
};

const submitFeeling: Function = async (feeling: string) => {
  console.log(feeling);
  const res = await request({
    endpoint: `/feeling`,
    method: AxiosMethods.POST,
    data: feeling,
  });
  return assert(res, res.data, "Feeling submission has failed");
};

const dailyPopUpService = {
  addArticleAttachment,
  getArticles,
  submitFeeling,
};

export default dailyPopUpService;
