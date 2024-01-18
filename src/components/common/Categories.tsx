interface iImage {
  image?: any;
}

const Categories: React.FC<iImage> = ({ image }) => {
  return (
    <div
      className="h-[250px] hover:shadow-md hover:cursor-pointer hover:scale-[1.02] transition-all duration-300 bg-[gray] rounded-lg"
      style={image}
    ></div>
  );
};

export default Categories;
