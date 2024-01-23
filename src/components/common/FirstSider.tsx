import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { changedToggle, verified } from "../../global/GlobalState";
import VerifyAccount from "../../pages/auth/VerifyAccount";
const FirstSider = () => {
  const toggled = useSelector((state: any) => state.toggle);
  const verify = useSelector((state: any) => state.verified);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const variants = {
    open: { width: 200 },
    closed: { width: 0, x: 0 },
  };

  const handleCreate = () => {
    dispatch(changedToggle());
    navigate("/register");
  };

  const handleSignin = () => {
    dispatch(changedToggle());
    navigate("/signin");
  };

  const handleForgot = () => {
    dispatch(verified());
    dispatch(changedToggle());
    navigate("/register");
  };

  return (
    <>
      {verify && <VerifyAccount />}
      <motion.div
        className="h-full relative bg-gray-400 rounded-tl-md shadow-md border-none"
        initial={false}
        animate={toggled ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="w-full h-full fixed">
          <div className="ml-4 w-full flex">
            {toggled && (
              <div className="transition-all duration-300 w-[50%] ">
                <div
                  className="my-4 hover:text-gray-700 hover:cursor-pointer transition-all duration-300 font-bold"
                  onClick={handleCreate}
                >
                  Create Account
                </div>
                <div
                  className="my-4 font-bold hover:text-gray-700 hover:cursor-pointer transition-all duration-300"
                  onClick={handleSignin}
                >
                  Signin Account
                </div>
                <div
                  className="my-4 font-bold hover:text-gray-700 hover:cursor-pointer transition-all duration-300"
                  onClick={handleForgot}
                >
                  Forgot Password
                </div>
                <div className="my-4 font-bold hover:text-gray-700 hover:cursor-pointer transition-all duration-300">
                  Help
                </div>
                <div className="my-4 font-bold hover:text-gray-700 hover:cursor-pointer transition-all duration-300">
                  Support
                </div>
                <div className="my-4 font-bold hover:text-gray-700 hover:cursor-pointer transition-all duration-300">
                  About Flexi-Cart
                </div>
                <div className="my-4 font-bold hover:text-gray-700 hover:cursor-pointer transition-all duration-300">
                  FAQ's
                </div>
                <div className="my-4 font-bold hover:text-gray-700 hover:cursor-pointer transition-all duration-300">
                  FaceBook
                </div>
                <div className="my-4 font-bold hover:text-gray-700 hover:cursor-pointer transition-all duration-300">
                  Twitter
                </div>
                <div className="my-4 font-bold hover:text-gray-700 hover:cursor-pointer transition-all duration-300">
                  Instagram
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FirstSider;
