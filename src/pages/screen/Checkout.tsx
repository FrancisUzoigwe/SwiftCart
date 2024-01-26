import { BsFillTrash3Fill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../global/GlobalState";

const FloatingCard = () => {
  const cart: any = useSelector((state: any) => state.cart);
  return (
    <div className="w-[250px] min-h-[150px] fixed right-3 top-[150px] bg-white">
      <div className="w-[250px] min-h-[150px] shadow-md border border-[rgb(158,158,158)] rounded-md">
        <div className="uppercase ml-3 border-b-[1px] border-[#979797] w-[90%] font-bold my-2">
          Cart Summary
        </div>
        <div className="w-full h-auto items-center flex justify-center">
          <div className="w-[90%] flex items-center justify-between">
            <div className="font-bold my-1">Subtotal</div>
            <div className="font-bold">
              ₦ {""}
              {cart?.price}
            </div>
          </div>
        </div>
        <div className="w-full flex  justify-center">
          <button className="my-5 py-2 px-4 rounded-md bg-black text-white">
            Checkout{""} {""} ₦
            {cart
              ?.map((props: any) => {
                return props?.price;
              })
              .reduce((a: number | any, b: number | any) => {
                return a + b;
              }, 0)
              .toLocaleString()}
          </button>
        </div>
      </div>
    </div>
  );
};

const Checkout = () => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full min-h-[100vh] flex justify-center  ">
        <div className="w-full flex flex-col items-center">
          {cart?.map((props: any) => {
            return (
              <div className="w-[95%] h-[200px] border-t-2 border-b-2 flex items-center justify-center ">
                <FloatingCard />
                <div className="w-[95%] h-[80%] flex items-center">
                  <div className="h-full rounded-md border w-[200px]">
                    <img
                      src={props?.image}
                      className="h-full w-full object-cover rounded-md"
                    />
                  </div>
                  <div className="ml-5">
                    <div className="text-2xl  max-sm:text-base">
                      {props?.name}
                    </div>
                    <div className="text-[18px]  max-sm:text-sm font-bold">
                      <span className="text-[18px]">₦</span> {props?.price}
                    </div>
                    <div className="mt-3">
                      <BsFillTrash3Fill
                        className="text-[red] text-2xl hover:cursor-pointer hover:scale-[1.2] transition-all duration-300"
                        onClick={() => {
                          dispatch(removeFromCart(props));
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Checkout;
