import axios from "axios";

const url: string = "https://swift-cart-be.onrender.com";
// const url: string = "http://localhost:2345";

export const registerApi = async (data: any) => {
  try {
    return await axios.post(`${url}/api/register`, data).then((res: any) => {
      return res.data?.data;
    });
  } catch (error: any) {
    console.log(error?.message);
  }
};

export const signinApi = async (data: any) => {
  try {
    return await axios.post(`${url}/api/signin`, data).then((res) => {
      return res.data?.data;
    });
  } catch (error: any) {
    console.log(error?.message);
  }
};

export const verifyApi = async (token: string, userID: string) => {
  try {
    return await axios
      .patch(`${url}/api/${userID}/${token}/verify-account`)
      .then((res) => {
        return res.data?.data;
      });
  } catch (error: any) {
    console.log(error?.message);
  }
};
