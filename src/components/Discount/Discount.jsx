import img1 from "../../assets/img/disc/discount.jpg";
import img2 from "../../assets/img/disc/gray_bg.jpg";
import Timer from "./Timer";
const Discount = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1300px] w-full mx-auto h-full">
      {/* Left Image */}
      <div>
        <img
          className="w-full h-full object-cover"
          src={img1}
          alt="Discount Image"
        />
      </div>

      {/* Right Image */}
      <div className="w-full md:1/2 text-center md:text-left mb-8 md:mb-0" style={{backgroundImage:`url(${img2})`}}>
        <h1 className="text-3xl md:text-4xl fong-bold text-gray-900 text-center mt-40">40% discount on all products. </h1>
        {/* countdown section */}
        <Timer />

      </div>
    </div>
  );
};

export default Discount;
