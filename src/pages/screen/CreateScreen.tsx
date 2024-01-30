import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import pix from "../../../public/vite.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createProduct } from "../../apis/productApi";
import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { changeCreated } from "../../global/GlobalState";
const CreateScreen = () => {
  const Schema = yup.object({
    price: yup.number().required(),
    name: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });
  const [image, setImage] = useState(pix);
  const [avatar, setAvatar] = useState<string>("");
  const onHandleImage = (e: any) => {
    const localImage = e.target.files[0];
    const savedImage = URL.createObjectURL(localImage);
    setImage(localImage);
    setAvatar(savedImage);
  };

  const userID = useSelector((state: any) => state.user?._id);
  const onHandleSubmit: any = handleSubmit(async (data: any) => {
    const myForm: any = new FormData();
    const { image, name, price } = data;
    myForm.append("name", name);
    myForm.append("price", price);
    myForm.append("image", image);
    createProduct(userID, myForm).then(() => {
      console.log("Created!");
      
    });
  });

  const dispatch = useDispatch();
  return (
    <div
      className="w-full h-screen z-[600] fixed top-0 left-0 flex items-center justify-center "
      style={{ backdropFilter: "blur(8px)" }}
    >
      <form
        className="w-[80%] relative z-[600] h-[80%] rounded-lg bg-[gray] mt-2 flex flex-col items-center"
        onSubmit={onHandleSubmit}
      >
        <div className="absolute  right-3 top-3">
          <MdCancel
            className="text-2xl hover:scale-[1.2] hover:cursor-pointer transition-all duration-300"
            onClick={() => {
              dispatch(changeCreated());
            }}
          />
        </div>
        <div className="w-[200px] flex justify-center h-[200px] mt-[20px]  rounded-lg relative ">
          <img
            alt=""
            src={avatar ? avatar : image}
            className="w-full h-full border object-cover rounded-lg"
          />
          <div className="text-white absolute -bottom-3 ">
            <input
              type="file"
              id="pix"
              className="hidden"
              onChange={onHandleImage}
            />
            <label htmlFor="pix">
              <FaCamera className="text-3xl hover:cursor-pointer" />
            </label>
          </div>
        </div>

        <div className="w-full flex items-center flex-col">
          <label
            htmlFor="Username"
            className="relative w-[60%] mt-7 block rounded-md border bg-white border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="text"
              id="Username"
              className="peer h-[40px] w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 pl-3"
              {...register("name")}
              placeholder="Username"
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Product Name
            </span>
          </label>
          {errors?.name?.message && (
            <div className="flex justify-end w-[60%]">
              Provide product's name
            </div>
          )}
        </div>
        <div className="w-full flex items-center flex-col">
          <label
            htmlFor="Username"
            className="relative w-[60%] mt-4 block rounded-md border bg-white border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="text"
              {...register("price")}
              id="Username"
              className="peer h-[40px] w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 pl-3"
              placeholder="Username"
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Price
            </span>
          </label>
          {errors?.price?.message && (
            <div className="flex justify-end w-[60%]">Specify Price</div>
          )}
        </div>
        <div className="my-3">
          <button
            type="submit"
            className="px-5  py-2 rounded-md text-white bg-[orange]"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateScreen;
