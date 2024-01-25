import Products from "../../components/common/Products";
import useProductHook from "../../hooks/useProductHook";

const ProductScreen = () => {
  const { data: products } = useProductHook();
  return (
    <div className="w-full min-h-[100vh] flex justify-center">
      <div className=" w-[95%] h-full grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-2">
       {products?.map((pro: any) => (
        <Products pro={pro} key={pro?.id}/>
       ))}
        {/* <Products/>
       <Products/>
       <Products/>
       <Products/>
       <Products/> */}
      </div>
    </div>
  );
};

export default ProductScreen;
