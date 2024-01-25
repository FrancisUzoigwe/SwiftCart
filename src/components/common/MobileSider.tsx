import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { changedToggle, logOut } from "../../global/GlobalState";
import VerifyAccount from "../../pages/auth/VerifyAccount";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const MobileSider = () => {
  const toggled = useSelector((state: any) => state.toggle);
  const verify = useSelector((state: any) => state.verified);
  const dispatch = useDispatch();
  const variants = {
    open: { width: 200 },
    closed: { width: 0, x: 0 },
  };

  const logout = () => {
    dispatch(changedToggle());
    dispatch(logOut());
  };

  const [products, setProducts] = useState<boolean>(false);
  const onProducts = () => {
    setProducts(!products);
  };

  const navigate = useNavigate();

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
                  onClick={() => {
                    navigate("/auth/product");
                  }}
                >
                  Products
                </div>
                <div className="my-4 ">
                  <div
                    className="font-bold hover:text-gray-700 hover:cursor-pointer transition-all duration-300 flex items-center"
                    onClick={() => {
                      onProducts();
                    }}
                  >
                    Categories
                    <div className="transition-all duration-300">
                      {!products ? (
                        <MdOutlineKeyboardArrowDown className="text-xl" />
                      ) : (
                        <MdOutlineKeyboardArrowDown className="text-xl rotate-180" />
                      )}
                    </div>
                  </div>
                  <div
                    className={`flex flex-col transition-all duration-300 ${
                      products ? "block" : "hidden"
                    }`}
                  >
                    <div
                      className="my-[6px] text-sm  hover:text-gray-700 hover:cursor-pointer transition-all duration-300 font-bold"
                      onClick={() => {
                        navigate("/auth/category");
                      }}
                    >
                      Electronics
                    </div>
                    <div className="my-[6px] text-sm hover:text-gray-700 hover:cursor-pointer transition-all duration-300 font-bold">
                      Fashion
                    </div>
                    <div className="my-[6px] text-sm hover:text-gray-700 hover:cursor-pointer transition-all duration-300 font-bold">
                      Grocery
                    </div>
                    <div className="my-[6px] text-sm hover:text-gray-700 hover:cursor-pointer transition-all duration-300 font-bold">
                      Skin Care
                    </div>
                    <div className="my-[6px] text-sm hover:text-gray-700 hover:cursor-pointer transition-all duration-300 font-bold">
                      Kitchen Appliances
                    </div>
                  </div>
                </div>
                <div
                  className="my-4 font-bold hover:text-gray-700 hover:cursor-pointer transition-all duration-300"
                  // onClick={handleForgot}
                >
                  View Cart
                </div>
                <div className="my-4 font-bold hover:text-gray-700 hover:cursor-pointer transition-all duration-300">
                  Help
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
                <div
                  className="my-4 font-bold hover:text-gray-700 hover:cursor-pointer transition-all duration-300"
                  onClick={logout}
                >
                  LogOut
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MobileSider;
