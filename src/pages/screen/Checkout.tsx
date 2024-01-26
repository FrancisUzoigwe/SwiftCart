import { BsFillTrash3Fill } from "react-icons/bs";

const FloatingCard = () => {
  return (
    <div className="w-[250px] min-h-[150px] fixed right-3 top-[230px] bg-white">
      <div className="w-[250px] min-h-[150px] shadow-md border border-[rgb(158,158,158)] rounded-md">
        <div className="uppercase ml-3 border-b-[1px] border-[#979797] w-[90%] font-bold my-2">
          Cart Summary
        </div>
        <div className="w-full h-auto items-center flex justify-center">
          <div className="w-[90%] flex items-center justify-between">
            <div className="font-bold my-1">Subtotal</div>
            <div className="font-bold">₦ {""}3645.00</div>
          </div>
        </div>
        <div className="w-full flex  justify-center">
          <button className="my-5 py-2 px-3 rounded-md bg-black text-white">Checkout {""} ₦ {""}3645.00</button>
        </div>
      </div>
    </div>
  );
};

const Checkout = () => {
  return (
    <>
      <div className="w-full min-h-[100vh] flex justify-center relative ">
        <div className="w-[95%] h-[200px] border-t-2 border-b-2 flex items-center justify-center ">
          <FloatingCard />
          <div className="w-full h-[80%] flex items-center">
            <div className="h-full rounded-md border border-black w-[200px]">Image Here</div>
            {/* <FloatingCard /> */}
            <div className="ml-5">
              <div className="text-2xl  max-sm:text-base">Name</div>
              <div className="text-[18px]  max-sm:text-sm font-bold">
                <span className="text-[18px]">₦</span> 20000
              </div>
              <div className="mt-3">
                <BsFillTrash3Fill className="text-[red] text-2xl hover:cursor-pointer hover:scale-[1.2] transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
