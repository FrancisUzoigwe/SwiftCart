import { Outlet } from "react-router-dom";
import ButtomHeader from "../common/ButtomHeader";
import Headers from "../common/Headers";
import MobileSider from "../common/MobileSider";

const Layout = () => {
  return (
    <>
      <div className="w-full bg-green-400 h-[200vh]">
        <Headers />
        <div className="flex">
          <Outlet />
          <div className="fixed right-0 top-0 hidden max-md:flex">
            <MobileSider />
          </div>
        </div>
        <div className="fixed bottom-0 w-full  items-center justify-center bg-green-300 h-[50px] hidden max-md:flex">
          <ButtomHeader />
        </div>
      </div>
    </>
  );
};

export default Layout;
