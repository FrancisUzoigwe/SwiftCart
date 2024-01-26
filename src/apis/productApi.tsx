import axios from "axios";

const url: string = "https://swift-cart-be.onrender.com/api";
export const viewAllProducts = async () => {
  try {
    return await axios.get(`${url}/view-all-products`).then((res) => {
      return res?.data.data;
    });
  } catch (error: any) {
    console.log(error?.message);
  }
};

export const viewOneProduct = async (productID: any) => {
  try {
    return await axios
      .get(`${url}/${productID}/view-one-product`)
      .then((res) => {
        return res?.data?.data
      });
  } catch (error: any) {
    console.log(error?.message);
  }
};
