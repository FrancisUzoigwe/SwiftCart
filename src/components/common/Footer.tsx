import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className=" bg-[#414141] flex  justify-center my-4">
        <div className="w-[95%] text-white max-lg:flex-col flex justify-between h-auto mt-10">
          <div className="font-bold">Swiftcart</div>
          <div className="max-lg:mt-3">
            <div>New to SwiftCart? </div>
            <div className="text-[11px] py-2">
              Suscribe to our newsletter to get updates on our latest offers!
            </div>
            <div className="w-full flex mb-5">
              <div className="relative flex ">
                <input
                  type="text"
                  className="py-3 px-5 relative max-lg:w-full rounded-md outline-blue-600 text-black pl-9"
                />
                <div className="absolute left-1 top-[20%]">
                  <MdEmail className="text-[blue] text-2xl bg-white" />
                </div>
              </div>
              <button className="py-3 px-5 border rounded-md ml-3 uppercase text-[13px]">
                Male
              </button>
              <button className="py-3 px-5 border rounded-md ml-3 uppercase text-[13px]">
                Female
              </button>
            </div>
          </div>
          <div>
            <div className="uppercase max-lg:mt-3">
              Download swiftcart app for free!
            </div>
            <div className="text-[11px] my-[2px]">
              Get access to exclusive offers!
            </div>
            <div className="text-[14px] my-3 hover:cursor-pointer hover:text-[#7e7e7e] transition-all duration-300 uppercase">
              Help
            </div>
            <div className="text-[14px] my-3 hover:cursor-pointer hover:text-[#7e7e7e] transition-all duration-300 uppercase">
              FAQs
            </div>
            <div className="text-[14px] my-3 hover:cursor-pointer hover:text-[#7e7e7e] transition-all duration-300 uppercase">
              About SwiftCart
            </div>
            <div className="text-[14px] my-3 hover:cursor-pointer hover:text-[#7e7e7e] transition-all duration-300 uppercase">
              Contact us
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
