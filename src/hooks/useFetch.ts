import { useQuery } from "react-query";
import { AxiosMethods } from "constants/Axios";
import { request } from "util/axios";

export interface IUseFetch {
  // to be improved later using ts generics
  endpoint: string;
  queryKey: string;
  queryKeyIdentifier?: string;
  onSuccess?: Function;
  onError?: Function;
  select?: Function;
  initialDataSetter?: any;
  enabled?: boolean;
  staleTime?: number;
  refetchInterval?: number;
  keepPreviousData?: boolean;
}

const handleAxiosRequests = (endpoint: string) => {
  return request({ endpoint, method: AxiosMethods.GET });
};

const useFetch = ({
  endpoint,
  queryKey,
  queryKeyIdentifier,
  onSuccess,
  onError,
  select,
  enabled,
  staleTime,
  refetchInterval,
  initialDataSetter,
  keepPreviousData,
}: IUseFetch) => {
  return useQuery(
    `${queryKey}-${queryKeyIdentifier}`,
    () => handleAxiosRequests(endpoint),
    {
      //  refteching when a component is dismounted then mounted again
      refetchOnMount: true,

      onSuccess: (data: unknown) => onSuccess && onSuccess(data), // callback if an query succeeds

      // any query will be re-tried 3 times before throwing an error
      onError: (err: unknown) => onError && onError(err), // callback if an error occurs

      enabled, // run query directly on component mount or not

      staleTime: staleTime ? staleTime * 1000 : 0, // time in which data is cached internal before attempt to refetch NOTE: only pass number of seconds as in 1, 2 or 3 it will be automatically multiplied with number of milliseconds in a second

      // is a callback thats deals with refactoring data format to align with front end convention
      select: (data: any) => data.data || select,

      refetchInterval: refetchInterval ? refetchInterval * 1000 : 0, // number of seconds in which query should refetch after eg: 1seconds means that query will automatically fetch items every 1 seconds until its disabled byt setting it back to 0 seconds

      // to be done sepearately in local context based page/component hooks
      initialData: initialDataSetter || undefined,
      // used to set inital data for a query to avoid having load state and deliver better UX, example loading card details, could display header and fetch rest in background to avoid ...loading

      keepPreviousData, // used to enhance ux while loading next page
    }
  );
};

export default useFetch;
