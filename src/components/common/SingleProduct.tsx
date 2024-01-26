import { Link, useParams } from "react-router-dom";
import { useViewOneHook } from "../../hooks/useViewOneHook";
import { useDispatch } from "react-redux";
import { addToCart } from "../../global/GlobalState";

const SingleProduct = () => {
  const { productID } = useParams();
  const { data } = useViewOneHook(productID);
  const discount = data?.price + (data?.price * 30) / 100;
  const dispatch = useDispatch()
  return (
    <div className="w-[95%] h-[90%] border bg-white rounded-xl max-md:flex-col flex items-center">
      <div className="w-[400px] max-md:w-[300px] max-md:h-[300px] h-[400px] ml-3 border rounded-md">
        <Link to={`${data?.image}`}>
        
        <img
          src={data?.image}
          className="w-full h-full object-cover rounded-md"
          loading="lazy"
          
        />
        </Link>
      </div>
      <div className="ml-5 max-md:flex-col max-md:flex max-md:items-center">
        <div className="text-3xl font-bold my-2">{data?.name}</div>
        <div className="text-xl font-bold text-[red]">
          ₦ {""}
          {data?.price.toFixed(2)}
        </div>
        <div className="text-[16px]  line-through font-bold">
          ₦ {""}
          {discount.toFixed(2)}
        </div>
        <div className="">
          <button className=" mb-10 my-5 uppercase font-bold text-white bg-[orange] px-3 py-2 rounded-md" onClick={() => {
            dispatch(addToCart(data))
          }}>
            Add to Cart
          </button>
        </div>
        <div className="my-3" />
      </div>
    </div>
  );
};

export default SingleProduct;
