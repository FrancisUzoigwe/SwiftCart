import { useState } from "react";
import { IoMdCart } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { changedToggle, toggled } from "../../global/GlobalState";
import vite from "../../../public/vite.svg";
const Headers = () => {
  const [close, setClose] = useState<boolean>(false);
  const onClose = () => {
    setClose(!close);
  };

  const dispatch = useDispatch();
  return (
    <header className="w-full  h-[60px] flex justify-center items-center">
      <div className="w-full z-[300] h-[60px] flex justify-center items-center top-0 fixed bg-white">
        <div className="w-[95%] flex justify-between items-center">
          <div className="font-bold hover:cursor-pointer max-lg:mr-5">
            SwiftCart
          </div>
          <div className="w-[90%] h-[60px] flex justify-between items-center ">
            <div className="flex w-[45%] max-md:w-[100%] justify-between items-center">
              <div className="w-full h-[40px] flex items-center justify-center ">
                <input
                  type="text"
                  className="w-full h-full border pl-3 rounded-md outline-none"
                  placeholder="Search Categories "
                />
              </div>
            </div>
            <div className="flex w-[30%] justify-between items-center">
              <div className="flex items-center max-md:hidden">
                <img
                  className="mr-3 flex items-center justify-center  w-[50px] h-[50px] rounded-full border object-cover"
                  src={vite}
                />
                <div className="font-bold">Kossy Uzoigwe</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative hover:scale-110 hover:cursor-pointer transition-all duration-300">
                <div className="text-[10px] w-[15px] h-[15px] text-white top-0 bg-red-600  absolute rounded-full flex items-center justify-center">
                  1
                </div>
                <IoMdCart className="text-3xl  " />
              </div>
              <div className="ml-6 max-md:ml-10 hidden max-md:block">
                <div
                  className=""
                  onClick={() => {
                    onClose();
                  }}
                >
                  {!close ? (
                    <IoMdMenu
                      className=" max-md:text-3xl hover:cursor-pointer transition-all duration-300 hover:scale-110"
                      onClick={() => {
                        dispatch(toggled());
                      }}
                    />
                  ) : (
                    <IoCloseSharp
                      className="max-md:text-3xl hover:cursor-pointer transition-all duration-300 hover:scale-110"
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
