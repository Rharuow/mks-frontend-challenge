import { ProductParams, listProducts } from "@/service/resources/products";
import { useQuery } from "@tanstack/react-query";

const DEFAULTORDERBY = "DESC";
const DEFAULTPAGE = 1;
const DEFAULTROWS = 5;
const DEFAULTSORTBY = "id";

export const useListProducts = (params?: ProductParams) => {
  return useQuery({
    queryKey: ["list-products"],
    queryFn: () =>
      listProducts({
        orderBy: params?.orderBy || DEFAULTORDERBY,
        page: params?.page || DEFAULTPAGE,
        rows: params?.rows || DEFAULTROWS,
        sortBy: params?.sortBy || DEFAULTSORTBY,
      }),
    retry: false,
    refetchOnMount: true,
  });
};
