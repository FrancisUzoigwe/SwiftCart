import { useState } from "react";
import { IoMdCart } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { changedToggle, toggled } from "../../global/GlobalState";
import { Link } from "react-router-dom";
const Headers = () => {
  const [close, setClose] = useState<boolean>(false);
  const onClose = () => {
    setClose(!close);
  };

  const dispatch = useDispatch();

  const cart = useSelector((state: any) => state.cart);
  return (
    <header className="w-full  h-[60px] flex justify-center items-center">
      <div className="w-full z-[300] h-[60px] flex justify-center items-center top-0 fixed bg-white">
        <div className="w-[95%] flex justify-between items-center">
        <Link to="/auth">
        <div className="font-bold hover:cursor-pointer max-lg:mr-5">
            SwiftCart
          </div>
        </Link>
          <div className="w-[90%] h-[60px] flex justify-between items-center ">
            <div className="flex w-[45%] max-md:w-[60%] justify-between items-center">
              <div className="w-full h-[40px] flex items-center justify-center ">
                <input
                  type="text"
                  className="w-full h-full border pl-3 rounded-md outline-none"
                  placeholder="Search Categories "
                />
              </div>
            </div>
            <div className="flex items-center">
             <Link to="/auth/checkout">
             <div className="relative hover:scale-110 hover:cursor-pointer transition-all duration-300">
                <div className="text-[10px] w-[15px] h-[15px] text-white top-0 bg-red-600  absolute rounded-full flex items-center justify-center">
                  {cart.length === 0 ? "" : cart?.length}
                </div>
                <IoMdCart className="text-3xl  " />
              </div>
             </Link>
              <div className="ml-6  ">
                <div
                  className=""
                  onClick={() => {
                    onClose();
                  }}
                >
                  {!close ? (
                    <IoMdMenu
                      className=" text-3xl hover:cursor-pointer transition-all duration-300 hover:scale-110"
                      onClick={() => {
                        dispatch(toggled());
                      }}
                    />
                  ) : (
                    <IoCloseSharp
                      className="text-3xl hover:cursor-pointer transition-all duration-300 hover:scale-110"
                      onClick={() => {
                        dispatch(changedToggle());
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
