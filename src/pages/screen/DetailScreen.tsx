import SingleProduct from "../../components/common/SingleProduct";

const DetailScreen = () => {
  return (
    <div
      className="w-full min-h-[90vh] flex  items-center justify-center"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <SingleProduct />
    </div>
  );
};

export default DetailScreen;
