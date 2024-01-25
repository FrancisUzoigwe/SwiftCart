import axios from "axios";
import Swal from "sweetalert2";

const url: string = "https://swift-cart-be.onrender.com";
// const url: string = "http://localhost:2345";

export const registerApi = async (data: any) => {
  try {
    return await axios.post(`${url}/api/register`, data).then((res: any) => {
      if (res?.data?.message === "Success") {
        Swal.fire({
          icon: "success",
          title: "Account Created successfully",
          text: "Your account has been created successfully, proceed to email for verification link",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Unable to create account",
          text: "Account couldn't be created as a result of weak internet connection, please try again",
        });
      }
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
