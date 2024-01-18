import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { changedToggle, toggled } from "../../global/GlobalState";
const FirstHeader = () => {
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
            <div className="flex items-center">
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

export default FirstHeader;
