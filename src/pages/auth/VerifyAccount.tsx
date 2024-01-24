import { motion } from "framer-motion";
const VerifyAccount = () => {
  return (
    <div
      className="w-full h-screen flex items-center z-[30] justify-center absolute"
      style={{ backdropFilter: "blur(6px)" }}
    >
      <motion.form
        // onSubmit={handle}
        animate={{
          scale: 1.1,
          transition: {
            duration: 0.4,
          },
        }}
        initial={{ scale: 0 }}
        className="w-[50%] max-md:w-[80%] relative flex items-center flex-col bg-white h-[300px] rounded-md  text-black"
      >
        <div className="w-[100px] h-[100px] mt-3 rounded-full border-[2px] border-black flex items-center justify-center">
          Flexi-Cart
        </div>
        <div className="my-4 text-[14px] text-center max-sm:text-[12px] w-[95%]">
          Upon successful submission of your login credentials, we initiate the
          process of email verification to enhance the security of your
          SwiftCart account. As part of this security measure, a verification
          link has been sent to the email address associated with your account.
        </div>
      </motion.form>
    </div>
  );
};

export default VerifyAccount;
