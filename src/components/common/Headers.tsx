import { IoMdCart } from "react-icons/io";

const Headers = () => {
  return (
    <header className="w-full h-[60px] flex justify-center items-center">
      <div className="w-full h-[60px] flex justify-center items-center fixed bg-white">
        <div className="w-[95%] flex justify-between items-center">
          <div className="font-bold hover:cursor-pointer">SwiftCart</div>
          <div className="w-[90%] h-[60px] flex justify-between items-center">
            <div className="flex w-[55%] justify-between items-center">
              <div className="w-full h-[40px] flex items-center justify-center ">
                <input
                  type="text"
                  className="w-[65%] h-full border pl-3 rounded-md outline-none"
                  placeholder="Search Categories "
                />
                <button className="ml-4 px-4 py-2 rounded-md border font-bold">
                  Search Here
                </button>
              </div>
            </div>
            <div className="flex w-[27%] justify-between items-center">
              <div className="flex items-center">
                <div className="mr-3 flex items-center justify-center  w-[50px] h-[50px] rounded-full border">
                  img
                </div>
                <div className="font-bold">Kossy Uzoigwe</div>
              </div>
              <div className="relative hover:scale-110 hover:cursor-pointer transition-all duration-300">
                <div className="text-[10px] bg-red-600 w-[15px] h-[15px] text-white top-0  absolute rounded-full flex items-center justify-center">
                  1
                </div>
                <IoMdCart className="text-3xl  " />
              </div>
            </div>
            <div className="hidden max-md:flex">Menu</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
