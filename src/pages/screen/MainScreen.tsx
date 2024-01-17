import Slick from "./Slick";
import store from "../../assets/5k_store.png";
import clear from "../../assets/clear.png";
import Cards from "../../components/common/Cards";
import { MdArrowRightAlt } from "react-icons/md";
const MainScreen = () => {
  return (
    <div className="w-full h-full flex flex-col items-center ">
      <div className="w-[95%] h-auto grid gap-2 grid-cols-4 mt-1 max-xl:grid-cols-3 max-md:grid-cols-2">
        <div className="xl:col-span-3 max-xl:col-span-2 rounded-lg row-span-2 h-[410px] border flex justify-between items-center relative over">
          <Slick />
        </div>
        <div className="border h-[200px] rounded-lg">
          <div
            className="w-full h-full rounded-lg"
            style={{
              background: `url(${store})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "right",
            }}
          ></div>
        </div>
        <div className="border h-[200px] rounded-lg">
          <div
            className="w-full h-full rounded-lg"
            style={{
              background: `url(${clear})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "right",
            }}
          ></div>
        </div>
      </div>
      <div className="w-full h-auto flex justify-center mt-3">
        <div className="w-[95%] h-auto ">
          <div className="w-full flex justify-between">
            <div className=" font-bold  my-1 text-[18px]">
              Top Selling Items
            </div>
          </div>
          <div className="grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 gap-4 my-1">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
      <div className="mt-2 w-full h-auto flex justify-center">
        <div className="w-[95%] grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 gap-2">
          <div className="h-[250px] hover:shadow-md hover:cursor-pointer bg-[gray] rounded-lg"></div>
          <div className="h-[250px] hover:shadow-md hover:cursor-pointer bg-[gray] rounded-lg"></div>
          <div className="h-[250px] hover:shadow-md hover:cursor-pointer bg-[gray] rounded-lg"></div>
          <div className="h-[250px] hover:shadow-md hover:cursor-pointer bg-[gray] rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
