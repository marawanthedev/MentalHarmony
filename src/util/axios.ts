import axios, { AxiosError, AxiosResponse } from "axios";
import { AxiosMethods } from "constants/Axios";
import { toast } from "react-toastify";

const client = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

interface BaseRequestInfoProp {
  endpoint: string;
  method: AxiosMethods;
  data?: any;
}

interface BaseRequestInfo {
  url: string;
  method: AxiosMethods;
  data?: any;
}

const redirectToHomePageAfterTwoSeconds = () => {
  setTimeout(() => {
    if (window.location.href !== "/") window.location.href = "/"; // redirect to home page if it was not there
  }, 2000);
};

client.interceptors.request.use(
  (request: any) => {
    const userLocalStorageItem = localStorage.getItem("user");
    const user = userLocalStorageItem ? JSON.parse(userLocalStorageItem) : null;

    // token setting
    client.defaults.headers.common.Authorization = user;

    return request;
  },
  (error: AxiosError) => {
    console.log("request error");
    console.log(error);
  }
);

client.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      toast.error(
        "You are Un-Authorized to access this Data, will be redirect to home page"
      );
      // unauthroized
      redirectToHomePageAfterTwoSeconds();
    }

    if (error.response?.status === 404) {
      toast.error("Data was not found, will be redirect to home page");

      // not found
      //   redirectToHomePageAfterTwoSeconds();
    }

    return Promise.reject(error);
  }
);

export const request = ({ ...options }: BaseRequestInfoProp) => {
  const requestInfo: BaseRequestInfo = { ...options, url: options.endpoint };

  return client(requestInfo);
};
