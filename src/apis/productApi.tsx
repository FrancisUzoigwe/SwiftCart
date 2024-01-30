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
        return res?.data?.data;
      });
  } catch (error: any) {
    console.log(error?.message);
  }
};

export const createProduct = async (userID: any, data: any) => {
  try {
    const config: any = {
      "content-type": "multi-part/formdata",
    };

    return await axios
      .post(`${url}/${userID}/create-product`, data, config)
      .then((res) => {
        console.log("This is response: ", res);
        return res.data?.data;
      });
  } catch (error: any) {
    console.log(error);
  }
};
