import { IUseFetch } from "./useFetch";
import useFetch from "./useFetch";
import { useState } from "react";

interface IUsePaginatedFetch extends IUseFetch {
  limit: number;
}
const getUrlPaginationBasedTransformer = (
  endpoint: string,
  limit: number,
  page: number
) => {
  return `${endpoint}?_limit=${limit}&_page=${page}`;
};

const usePaginatedApi = ({
  limit,
  endpoint,
  queryKey,
  ...rest
}: IUsePaginatedFetch) => {
  const [page, setPage] = useState<number>(1);

  const next = () => setPage(page + 1);
  const prev = () => page > 1 && setPage(page - 1);

  const paginatedUrl = getUrlPaginationBasedTransformer(endpoint, limit, page);

  const query = useFetch({
    endpoint: paginatedUrl,
    queryKey: `${queryKey}`,
    queryKeyIdentifier: String(page),
    ...rest,
  });

  return { next, prev, limit, page, query };
};

export default usePaginatedApi;
