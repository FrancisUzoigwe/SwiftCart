// import { IoChevronBackCircle } from "react-icons/io5";

import Slick from "./Slick";

const MainScreen = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[95%] h-auto grid gap-2 grid-cols-4 mt-1 max-xl:grid-cols-3 max-md:grid-cols-2">
        <div className="xl:col-span-3 max-xl:col-span-2 rounded-lg row-span-2 h-[410px] border flex justify-between items-center relative over">
         <Slick/>
        </div>
        <div className="border h-[200px] rounded-lg"></div>
        <div className="border h-[200px] rounded-lg"></div>
        <div className="border h-[200px] rounded-lg"></div>
        <div className="border h-[200px] rounded-lg"></div>
        <div className="border h-[200px] rounded-lg"></div>
        <div className="border h-[200px] rounded-lg"></div>
        <div className="border h-[200px] rounded-lg"></div>
        <div className="border h-[200px] rounded-lg"></div>
        <div className="border h-[200px] rounded-lg"></div>
        <div className="border h-[200px] rounded-lg"></div>
      </div>
    </div>
  );
};

export default MainScreen;
