import useSWR from "swr";
import { viewAllProducts } from "../apis/productApi";

const useProductHook = () => {
  const { data, error, isLoading } = useSWR(
    "/api/view-all-products",
    viewAllProducts
  );
  return { data, error, isLoading };
};

export default useProductHook;








