import women from "../../assets/img/categories/category-1.jpg";
import SecondHeroSection from "./SecondHeroSection";

const HeroSection = ({ categories }) => {
  const firstCategory = categories?.[6];
  if (!firstCategory) return null;
  return (
    <section className="lg:flex justify-center">
      <div
        className="md:w-full lg:w-1/2 h-[630px] mr-2 mt-3 p-9"
        style={{ backgroundImage: `url(${women})` }}
      >
        <div className="w-1/2 h-[500px] py-9 my-auto">
          <h1 className="text-gray-500 font-bold text-5xl pt-9 italic">
            {firstCategory.name}
          </h1>
          <p className="text-rose-400 text-2xl font-semibold pt-4">
            {firstCategory.description}
          </p>
          <button className="px-5 py-2 my-7 bg-pink-500 rounded-xl text-white font-semibold">
            Shop Now
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 h-[700px] mr-0 lg:mr-2 my-3.5">
        <SecondHeroSection categories={categories}/>
      </div>
    </section>
  );
};

export default HeroSection;
