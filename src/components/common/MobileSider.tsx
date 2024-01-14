import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const MobileSider = () => {
  const toggled = useSelector((state: any) => state.toggle);

  const variants = {
    open: { width: 200 },
    closed: { width: 0, x: 0 },
  };

  return (
    <motion.div
      className="h-full bg-purple-600"
      initial={false}
      animate={toggled ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div>Hello</div>
    </motion.div>
  );
};

export default MobileSider;
