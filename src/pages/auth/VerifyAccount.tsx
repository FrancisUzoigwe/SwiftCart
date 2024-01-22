import { IoCloseSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { changeVerified } from "../../global/GlobalState";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const VerifyAccount = () => {
  const dispatch = useDispatch();
  const [eye, setEye] = useState<boolean>(false);
  const onEye = () => {
    setEye(!eye);
  };

  const Schema = yup.object({
    token: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ resolver: yupResolver(Schema) });

  const handle = handleSubmit(async (data) => {
    console.log(data);
  });
  return (
    <div
      className="w-full h-screen flex items-center z-[30] justify-center absolute"
      style={{ backdropFilter: "blur(6px)" }}
    >
      <motion.form
        onSubmit={handle}
        animate={{
          scale: 1.1,
          transition: {
            duration: 0.4,
          },
        }}
        initial={{ scale: 0 }}
        className="w-[50%] max-md:w-[80%] relative flex items-center flex-col bg-white h-[300px] rounded-md  text-black"
      >
        <div className="absolute right-3 top-3">
          <IoCloseSharp
            className="text-2xl hover:cursor-pointer hover:scale-[1.3] transition-all duration-300"
            onClick={() => {
              dispatch(changeVerified());
            }}
          />
        </div>
        <div className="uppercase font-bold mt-7 text-xl max-sm:text-base">Verify account</div>
        <div className="w-[90%] max-sm:w-[80%]  max-sm:h-[35px] my-3 h-[45px] rounded-md">
          <label
            htmlFor="Token"
            className="relative w-full h-full block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="text"
              id="Token"
              {...register("token")}
              className="peer pl-3 w-full h-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Token"
            />

            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Verification Token
            </span>
          </label>
          {errors?.token?.message && (
            <div className="flex justify-end text-[12px] font-bold text-red-500">
              Enter Token
            </div>
          )}
        </div>
        <div className="w-[90%] max-sm:w-[80%]  max-sm:h-[35px] relative h-[45px] mt-4">
          <div
            className="absolute z-[20] right-3 top-3 max-sm:top-2"
            onClick={() => {
              onEye();
            }}
          >
            {!eye ? (
              <FaEye className="text-2xl max-sm:text-xl  hover:cursor-pointer hover:scale-[1.2] transition-all duration-300  " />
            ) : (
              <FaEyeSlash className="text-2xl max-sm:text-xl  hover:cursor-pointer hover:scale-[1.2] transition-all duration-300 " />
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
          {errors?.token?.message && (
            <div className="flex justify-end text-[12px] font-bold text-red-500">
              Enter password
            </div>
          )}
        </div>
        <div className="my-4 text-[14px] text-center max-sm:text-[12px] w-[95%]">
          Check your email for a verification token sent to your email 😊😊😊
        </div>
        <div className="">
          <button
            type="submit"
            className="px-3 py-2 rounded-md bg-black text-white text-[14px] max-sm:text-[12px]"
          >
            Validate
          </button>
        </div>
      </motion.form>
    </div> 
  );
};

export default VerifyAccount;
