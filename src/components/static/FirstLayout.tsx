import { Outlet } from "react-router-dom";
import FirstHeader from "../common/FirstHeader";
import Footer from "../common/Footer";

const FirstLayout = () => {
  return (
    <div>
      <FirstHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default FirstLayout;
