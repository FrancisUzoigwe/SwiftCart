import { useDispatch } from "react-redux";
import { changeCreated } from "../../global/GlobalState";

const CreateScreen = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="w-full h-screen fixed top-0 left-0 flex items-center justify-center "
      style={{ backdropFilter: "blur(6px)" }}
    >
      <div
        onClick={() => {
          dispatch(changeCreated());
        }}
      >
        Create Screen
      </div>
    </div>
  );
};

export default CreateScreen;
