import { Outlet } from "react-router-dom";
import ButtomHeader from "../common/ButtomHeader";
import Headers from "../common/Headers";
import MobileSider from "../common/MobileSider";

const Layout = () => {
  return (
    <>
      <div className="w-full bg-[#fefe] min-h-[100vh]">
        <Headers />
        <div className="flex">
          <Outlet />
          <div className="fixed right-0 top-[60px] z-[300]  h-full ">
            <MobileSider />
          </div>
        </div>
        <div className="fixed bottom-0 w-full  items-center justify-center bg-green-300  hidden max-md:flex">
          <ButtomHeader />
        </div>
      </div>
    </>
  );
};

export default Layout;
