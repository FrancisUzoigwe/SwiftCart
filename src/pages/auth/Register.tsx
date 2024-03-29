import better from "../../assets/better1.jpg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import VerifyAccount from "./VerifyAccount";
import { verified } from "../../global/GlobalState";
import { Link } from "react-router-dom";
import { registerApi } from "../../apis/authApi";
import Loading from "../../components/common/Loading";
import EmailPage from "./EmailPage";
import Swal from "sweetalert2";

const Register = () => {
  const email = useSelector((state: any) => state.verified);
  const dispatch = useDispatch();
  const verify = useSelector((state: any) => state.verify);

  const Schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
    name: yup.string().required(),
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ resolver: yupResolver(Schema) });
  const [loading, setLoading] = useState<boolean>(false);

  const handle = handleSubmit(async (data) => {
    setLoading(true);
    const { email, password, name } = data;
    registerApi({ email, password, name }).then((res) => {
      // console.log("This is res: ", data);
      if (res?.message === "Success") {
        Swal.fire({
          icon: "success",
          title: "Account Created successfully",
          text: "Your account has been created successfully, proceed to email for verification link",
        }).then(() => {
          dispatch(verified());
        });
      }
      setLoading(false);
    });
  });

  const [eye, setEye] = useState<boolean>(false);
  const onEye = () => {
    setEye(!eye);
  };

  return (
    <>
      {email && <EmailPage />}
      {verify && <VerifyAccount />}

      <div className="w-full h-screen  flex items-center justify-center">
        <div className="w-full h-screen flex justify-between items-center">
          <div
            className="w-[50%]  h-full max-md:hidden"
            style={{
              backgroundImage: `url(${better})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="w-[50%] max-md:w-[100%] h-full flex flex-col items-center bg-[#313030]">
            <div className="my-4" />
            <div className="w-[100px] h-[100px] rounded-full border border-[white] flex justify-center items-center font-bold text-white">
              SwiftCart
            </div>

            <div className="my-4" />
            <div className=" uppercase text-white my-2">
              Create a SwiftCart account
            </div>
            <form
              onSubmit={handle}
              className="w-[90%] h-[350px] bg-white rounded-md flex flex-col items-center"
            >
              <div className="w-[90%] h-[45px] mt-7">
                <label
                  htmlFor="Username"
                  className="relative h-full block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                  <input
                    type="text"
                    id="Username"
                    {...register("email")}
                    className="peer pl-3 h-full w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder="Username"
                  />

                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Email
                  </span>
                </label>
                {errors?.email?.message && (
                  <div className="flex justify-end w-full text-[14px] font-bold text-red-400 ">
                    Provide email address
                  </div>
                )}
              </div>
              <div className="w-[90%] h-[45px] mt-7">
                <label
                  htmlFor="Name"
                  className="relative h-full block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                  <input
                    type="text"
                    id="Name"
                    {...register("name")}
                    className="peer pl-3 h-full w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder="Name"
                  />

                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Name
                  </span>
                </label>
                {errors?.name?.message && (
                  <div className="flex justify-end w-full text-[14px] font-bold text-red-400 ">
                    Provide a name
                  </div>
                )}
              </div>
              <div className="w-[90%] relative h-[45px] mt-7">
                <div
                  className="absolute z-[20] right-3 top-3"
                  onClick={() => {
                    onEye();
                  }}
                >
                  {!eye ? (
                    <FaEye className="text-2xl hover:cursor-pointer hover:scale-[1.2] transition-all duration-300  " />
                  ) : (
                    <FaEyeSlash className="text-2xl hover:cursor-pointer hover:scale-[1.2] transition-all duration-300  " />
                  )}
                </div>
                <label
                  htmlFor="Password"
                  className="relative h-full block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                  <input
                    type={`${eye ? "text" : "password"}`}
                    id="Password"
                    {...register("password")}
                    className="peer pl-3 w-full  h-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder="Username"
                  />

                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Password
                  </span>
                </label>
                {errors?.password?.message && (
                  <div className="flex justify-end w-full text-[14px] font-bold text-red-400 ">
                    Create password
                  </div>
                )}
              </div>
              <div className="flex w-[90%] text-[14px] mt-6 justify-between">
                <div>
                  Already have an account?{" "}
                  <Link to="/signin">
                    <span className="text-red-400 ml-1 hover:cursor-pointer">
                      Signin
                    </span>
                  </Link>
                </div>
                {/* <div
                  className="font-bold hover:cursor-pointer"
                  onClick={() => {
                    dispatch(verified());
                  }}
                >
                  Verify Account
                </div> */}
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="px-5 relative py-2 rounded-md bg-black text-white"
                >
                  {loading ? (
                    <div className="flex items-center">
                      <Loading /> <div className="ml-1">Creating Account</div>
                    </div>
                  ) : (
                    "Create Account"
                  )}
                  {/* {loading ? (
                    <div className="flex ">
                      <Loading /> <div className="ml-2">Creating Account</div>
                    </div>
                  ) : (
                    <div>Create Account</div>
                  )} */}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
