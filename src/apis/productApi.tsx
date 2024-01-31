import axios from "axios";

// const url: string = "http://localhost:2345/api";
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
        return res?.data?.data;
      });
  } catch (error: any) {
    console.log(error?.message);
  }
};

export const createProduct = async (data: any) => {
  const config: any = {
    "content-type": "multi-part/formdata",
  };
  try {
    return await axios
      .post(`${url}/create-product`, data, config)
      .then((res) => {
        return res.data?.data;
      });
  } catch (error: any) {
    console.log(error);
  }
};
