import React from "react";

const Electronics = () => {
  return (
    <div className="h-[250px] border rounded-md flex items-center justify-center">
      Electronics
    </div>
  );
};
const Fashion = () => {
  return (
    <div className="h-[250px] border rounded-md flex items-center justify-center">
      Fashion
    </div>
  );
};
const Grocery = () => {
  return (
    <div className="h-[250px] border rounded-md flex items-center justify-center">
      Grocery
    </div>
  );
};
const SkinCare = () => {
  return (
    <div className="h-[250px] border rounded-md flex items-center justify-center">
      SkinCare
    </div>
  );
};
const KitchenAppliances = () => {
  return (
    <div className="h-[250px] border rounded-md flex items-center justify-center">
      KitchenAppliances
    </div>
  );
};

const Category = () => {
  return (
    <div className="w-full min-h-[91vh] bg-[#ddcacd] flex justify-center ">
      <div className="w-[95%] h-full grid grid-cols-5 gap-2 mt-3 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
        <Electronics />
        <SkinCare />
        <KitchenAppliances />
        <Grocery />
        <Fashion />
      </div>
    </div>
  );
};

export default Category;
