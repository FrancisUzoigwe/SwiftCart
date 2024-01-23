import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="">
      <RotatingLines
        visible={true}
        width="25"
        height="25"
        color="red"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
