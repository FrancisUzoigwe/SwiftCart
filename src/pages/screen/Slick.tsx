import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "../../assets/FirstSlide.png";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image from "../../assets/image5.png"
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: "20px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: 200,
        position: "absolute",
        left: "20px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    />
  );
}

const Slick = () => {
  var settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full h-full rounded-lg relative">
      <Slider {...settings}>
        <div className="w-full h-[410px] flex items-center justify-center">
          <div
            className="w-full h-full bg-[blue] rounded-md"
            style={{
              background: `url(${image1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        <div className="w-full h-[410px] flex items-center justify-center">
          <div
            className="w-full h-full bg-[blue] rounded-md"
            style={{
              background: `url(${image2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="w-full h-[410px] flex items-center justify-center">
          <div
            className="w-full h-full bg-[blue] rounded-md"
            style={{
              background: `url(${image3})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="w-full h-[410px] flex items-center justify-center">
          <div
            className="w-full h-full bg-[blue] rounded-md"
            style={{
              background: `url(${image4})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="w-full h-[410px] flex items-center justify-center">
          <div
            className="w-full h-full bg-[blue] rounded-md"
            style={{
              background: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default Slick;
