import { useMutation } from "react-query";
import { AxiosMethods } from "constants/Axios";
import { request } from "util/axios";

interface useCustomMutation {
  endpoint: string;
  mutationKey: string;
  type: string;
}

// todo
// to refactor delete to another hook

const handleMutationAxiosRequest = (
  endpoint: string,
  data: any,
  type: string
) => {
  switch (type) {
    case "post" || "POST":
      return request({ endpoint, method: AxiosMethods.POST });
      break;
    case "put" || "PUT":
      return request({ endpoint, method: AxiosMethods.PUT });
      break;
    case "patch" || "PATCH":
      return request({ endpoint, method: AxiosMethods.PATCH });
    case "delete" || "DELETE":
      return request({ endpoint, method: AxiosMethods.DELETE });
  }
  return request({ endpoint, method: AxiosMethods.POST });
};

const useCustomMutation = ({
  endpoint,
  mutationKey,
  type,
}: useCustomMutation) => {
  return useMutation({
    mutationKey,
    mutationFn: (data: any) => handleMutationAxiosRequest(endpoint, data, type),
  });
};

export default useCustomMutation;
