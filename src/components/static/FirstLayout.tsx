import { Outlet } from "react-router-dom";
import FirstHeader from "../common/FirstHeader";
import Footer from "../common/Footer";
import FirstSider from "../common/FirstSider";

const FirstLayout = () => {
  return (
    <>
      <div className="w-full bg-[#e0e0e0g] min-h-[100vh]">
        <FirstHeader />
        <div className="flex">
          <Outlet />
          <div className="fixed right-0 top-[60px] z-[300]  h-full ">
            <FirstSider />
          </div>
        </div>
        <div className="">
          <div className="w-full">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstLayout;
