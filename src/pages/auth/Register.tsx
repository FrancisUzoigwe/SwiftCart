import { useEffect, useRef, useState } from "react";
import better from "../../assets/better1.jpg";

const Register = () => {
  const [focused, setFocused] = useState<boolean>(false);
  const [hasContent, setHasContent] = useState<boolean>(false);
  const myRef = useRef<HTMLInputElement>(null);
  const [focused2, setFocused2] = useState<boolean>(false);
  const [hasContent2, setHasContent2] = useState<boolean>(false);
  const myRef2 = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleChange = () => {
    setHasContent(!!myRef?.current?.value);
  };

  useEffect(() => {
    setHasContent(!!myRef?.current?.value);
  }, []);
  const handleFocus2 = () => {
    setFocused2(true);
  };

  const handleBlur2 = () => {
    setFocused2(false);
  };

  const handleChange2 = () => {
    setHasContent2(!!myRef2?.current?.value);
  };

  useEffect(() => {
    setHasContent2(!!myRef2?.current?.value);
  }, []);
  return (
    <div className="w-full h-screen flex items-center justify-center">
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
          <form className="w-[80%] h-[300px] bg-white rounded-md flex flex-col items-center">
            <div className="w-[80%] mt-7">
              <div
                className={`relative w-full h-auto border transition-all duration-300 rounded-md ${
                  focused || hasContent ? "border-blue-500" : "border-black"
                }`}
              >
                <input
                  onFocus={handleFocus}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  ref={myRef}
                  type="text"
                  className={`w-full h-[40px]  outline-none rounded-md pl-3`}
                />
                <label
                  className={`absolute left-3 transition-all duration-300 ${
                    focused || hasContent
                      ? "-top-3 px-[6px] bg-white "
                      : "top-[8px]"
                  }`}
                >
                  Email
                </label>
              </div>
              <div className="flex justify-end w-full text-[14px] font-bold text-red-400 ">
                Provide email address
              </div>
            </div>
            <div className="w-[80%] mt-4">
              <div
                className={`relative w-full h-auto border transition-all duration-300 rounded-md ${
                  focused2 || hasContent2 ? "border-blue-500" : "border-black"
                }`}
              >
                <input
                  onFocus={handleFocus2}
                  onChange={handleChange2}
                  onBlur={handleBlur2}
                  ref={myRef2}
                  type="text"
                  className={`w-full h-[40px]  outline-none rounded-md pl-3`}
                />
                <label
                  className={`absolute left-3 transition-all duration-300 ${
                    focused2 || hasContent2
                      ? "-top-3 px-[6px] bg-white "
                      : "top-[8px]"
                  }`}
                >
                  Password
                </label>
              </div>
              <div className="flex justify-end w-full text-[14px] font-bold text-red-400 ">
                Create a password
              </div>
            </div>
            <div className="flex w-[80%] text-[14px] mt-2">
              Already have an account?{" "}
              <span className="text-red-400 ml-2 hover:cursor-pointer">
                Signin
              </span>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="px-5 py-2 rounded-md bg-black text-white"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
