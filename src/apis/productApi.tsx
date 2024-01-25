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
