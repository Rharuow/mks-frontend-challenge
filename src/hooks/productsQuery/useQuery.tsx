import { listProducts } from "@/service/resources/products";
import { useQuery } from "@tanstack/react-query";

export const useListProducts = () =>
  useQuery({
    queryKey: ["list-products"],
    queryFn: () => listProducts(),
    retry: false,
    refetchOnMount: true,
  });
