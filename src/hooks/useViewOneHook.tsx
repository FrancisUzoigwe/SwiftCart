import useSWR from "swr";
import { viewOneProduct } from "../apis/productApi";

export const useViewOneHook = (productID: any) => {
  const { data } = useSWR(`api/${productID}/view-one-product`, () =>
    viewOneProduct(productID)
  );
//   console.log(data);
  return { data };
};
