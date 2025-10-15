import Men from "../../assets/img/categories/category-2.jpg";
import kidsFashion from "../../assets/img/categories/category-3.jpg";
import Cosmetics from "../../assets/img/categories/category-4.jpg";
import Accessories from "../../assets/img/categories/category-5.jpg";

const SecondHeroSection = ({ categories }) => {
  if (!categories || categories.length === 0) return null;

  // const shownCategories = categories.slice(1,5);

  return (
    <div>
      <div className="flex gap-2 mb-2">
        <div
          className="md:w-1/2 w-full h-[310px]"
          style={{ backgroundImage: `url(${Men})` }}
        >
          <div className="py-19 px-9">
            <h1 className="text-white font-semibold text-2xl">Men's Fashion</h1>
            <p className="text-gray-600 my-3">358 items</p>
            <button className="bg-pink-500 px-5 py-2 rounded-xl text-white font-semibold">
              Shop Now
            </button>
          </div>
        </div>
        <div
          className="w-1/2 h-[310px]"
          style={{ backgroundImage: `url(${kidsFashion})` }}
        >
          <div className="py-19 px-9">
            <h1 className="text-white font-semibold text-2xl">Kid's Fashion</h1>
            <p className="text-gray-600 my-3">987 items</p>
            <button className="bg-pink-500 px-5 py-2 rounded-xl text-white font-semibold">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <div
          className="w-1/2 h-[310px]"
          style={{ backgroundImage: `url(${Cosmetics})` }}
        >
          <div className="py-19 px-9">
            <h1 className="text-white font-semibold text-2xl">Cosmetics</h1>
            <p className="text-gray-600 my-3">858 items</p>
            <button className="bg-pink-500 px-5 py-2 rounded-xl text-white font-semibold">
              Shop Now
            </button>
          </div>
        </div>
        <div
          className="w-1/2 h-[310px]"
          style={{ backgroundImage: `url(${Accessories})` }}
        >
          <div className="py-19 px-9">
            <h1 className="text-white font-semibold text-2xl">Accessories</h1>
            <p className="text-gray-600 my-3">389 items</p>
            <button className="bg-pink-500 px-5 py-2 rounded-xl text-white font-semibold">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHeroSection;
