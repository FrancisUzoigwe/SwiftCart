import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { logOut } from "../../global/GlobalState";

const MobileSider = () => {
  const dispatch = useDispatch();
  const toggled = useSelector((state: any) => state.toggle);

  const variants = {
    open: { width: 200 },
    closed: { width: 0, x: 0 },
  };

  return (
    <motion.div
      className="h-full bg-gray-400 rounded-tl-md shadow-md border-none"
      initial={false}
      animate={toggled ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Hello
      </div>
    </motion.div>
  );
};

export default MobileSider;
