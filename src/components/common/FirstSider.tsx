import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FirstSider = () => {
  const toggled = useSelector((state: any) => state.toggle);

  const variants = {
    open: { width: 200 },
    closed: { width: 0, x: 0 },
  };

  return (
    <motion.div
      className="h-full bg-gray-400 rounded-tl-md shadow-md border-none"
      initial={false}
      animate={toggled ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="w-full h-full fixed">
        <div className="ml-4 w-full flex">
          {toggled && (
            <div className="transition-all duration-300 w-[50%] ">
              <Link to="/register">
                <div className="my-4 hover:text-gray-700 hover:cursor-pointer transition-all duration-300 font-bold">
                  Create Account
                </div>
              </Link>
              <Link to="/signin">
                <div className="my-4 font-bold hover:text-gray-700 hover:cursor-pointer transition-all duration-300">
                  Signin Account
                </div>
              </Link>
              <div className="my-4 font-bold hover:text-gray-700 hover:cursor-pointer transition-all duration-300">
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
  );
};

export default FirstSider;
