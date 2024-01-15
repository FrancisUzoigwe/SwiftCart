import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const ButtomHeader = () => {
  return (
    <div className="w-full h-[50px] flex justify-center items-center">
      <div className="h-full  w-[95%] flex justify-between items-center">
        <Link to="/auth">
          <div className="flex flex-col items-center">
            <div>
              <FaHome className="text-2xl" />
            </div>
            <div className="uppercase text-[12px] font-bold">Home</div>
          </div>
        </Link>
        <Link to="/auth/category">
          <div className="flex flex-col items-center">
            <div>
              <BiCategory className="text-2xl" />
            </div>
            <div className="uppercase text-[12px] font-bold">Category</div>
          </div>
        </Link>
        <div className="flex flex-col items-center">
          <div>
            <MdManageAccounts className="text-3xl" />
          </div>
          <div className="uppercase text-[12px] font-bold">Account</div>
        </div>
        <Link to="/auth/help">
          <div className="flex flex-col items-center">
            <div>
              <IoMdHelpCircleOutline className="text-2xl" />
            </div>
            <div className="uppercase text-[12px] font-bold">Help</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ButtomHeader;
