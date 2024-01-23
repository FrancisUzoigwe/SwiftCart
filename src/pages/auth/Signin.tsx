import better from "../../assets/wahala3.jpg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signinApi, verifyApi } from "../../apis/authApi";
import { useDispatch } from "react-redux";
import { mainUser } from "../../global/GlobalState";
import Loading from "../../components/common/Loading";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ resolver: yupResolver(Schema) });

  const [loading, setLoading] = useState<boolean>(false);

  const handle = handleSubmit(async (data: any) => {
    setLoading(true);
    const { email, password } = data;
    signinApi({ email, password }).then((res) => {
      if (res) {
        navigate("/auth");
        const decode: any = jwtDecode(res);
        dispatch(mainUser(res));
        console.log("This is : ", typeof decode.id);
        setLoading(false);
      }
    });
  });

  const { token } = useParams();

  useEffect(() => {
    if (token) {
      verifyApi(token);
    }
  });

  const [eye, setEye] = useState<boolean>(false);
  const onEye = () => {
    setEye(!eye);
  };

  return (
    <>
      {loading && <Loading />}
      <div className="w-full h-screen  flex items-center justify-center">
        <div className="w-full h-screen flex justify-between items-center">
          <div className="w-[50%] max-md:w-[100%] h-full flex flex-col items-center bg-[#313030]">
            <div className="my-4" />
            <div className="w-[100px] h-[100px] rounded-full border border-[white] flex justify-center items-center font-bold text-white">
              SwiftCart
            </div>

            <div className="my-4" />
            <div className=" uppercase text-white my-2">
              Login your SwiftCart account
            </div>
            <form
              onSubmit={handle}
              className="w-[90%] h-[260px] bg-white rounded-md flex flex-col items-center"
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
              <div className="flex w-[90%] text-[14px] mt-3 justify-between">
                <div>
                  Don't have an account?{" "}
                  <Link to="/register">
                    <span className="text-red-400 ml-1 hover:cursor-pointer">
                      Signup
                    </span>
                  </Link>
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="px-5 py-2 rounded-md bg-black text-white"
                >
                  {loading ? (
                    <div className="flex ">
                      <Loading /> <div className="ml-2">Signin Account</div>
                    </div>
                  ) : (
                    <div>Signin</div>
                  )}
                </button>
              </div>
            </form>
          </div>
          <div
            className="w-[50%]  h-full max-md:hidden"
            style={{
              backgroundImage: `url(${better})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Signin;
