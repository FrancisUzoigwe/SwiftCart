import { IoChevronBackCircle } from "react-icons/io5";

const MainScreen = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[95%] h-auto grid gap-2 grid-cols-4 mt-1 max-xl:grid-cols-3 max-md:grid-cols-2">
        <div className="xl:col-span-3 max-xl:col-span-2 rounded-lg row-span-2 h-[420px] border flex justify-between items-center relative">
          <div className="w-full h-full absolute flex items-center ">
            <div className="absolute left-2 text-4xl text-white  hover:scale-125 transition-all duration-300 hover:cursor-pointer max-md:text-3xl">
              <IoChevronBackCircle />
            </div>
            <div className="absolute right-2 rotate-180 text-4xl text-white  hover:scale-125 transition-all duration-300 hover:cursor-pointer max-md:text-3xl">
              <IoChevronBackCircle />
            </div>
          </div>
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
