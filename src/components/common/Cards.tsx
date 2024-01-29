import { FaStar } from "react-icons/fa";
import React from "react";

interface iProps {
  props?: any;
}

const Cards: React.FC<iProps> = () => {
  return (
    <>
      <div>
        <div className="h-[310px] rounded-xl hover:cursor-pointer hover:shadow-lg bg-white border flex flex-col items-center group hover:opacity-100 transition-opacity">
          <div className="w-full flex flex-col items-center">
            <div className="w-[95%] bg-black mt-1 h-[160px] rounded-tr-lg rounded-tl-lg text-white">
              <img
                // src={props?.image}
                className="object-cover h-full w-full "
              />
            </div>
            <div className="w-[95%] mt-2 ">Book</div>
            <div className="w-[95%] font-bold text-[red]">
              ₦ {""} 2000
              {/* {props?.price.toFixed(2)} */}
            </div>
            {/* <div className="w-[95%] line-through text-[gray] text-[13px] font-bold">
                ₦ {discount}
              </div> */}
            <div className="w-[95%] flex items-center">
              <FaStar className="text-[orange]" />
              <FaStar className="text-[orange]" />
              <FaStar className="text-[orange]" />
              <div className="text-[11px] font-bold">(345)</div>
            </div>
            <div className="w-full flex items-center justify-center  font-bold">
              <button className="py-[10px] px-4 rounded-md my-3 bg-[#ffb121] text-[13px] opacity-0 group-hover:opacity-100 transition-opacity uppercase">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
