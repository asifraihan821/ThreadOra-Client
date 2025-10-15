import HotTrend from "./HotTrend";
import BestSeller from "./BestSeller";
import Featured from "./Featured";

const TrendingProducts = () => {
  return (
    <div className="md:p-9 lg:flex mt-9">
      <div className="flex mx-auto justify-around lg:gap-15">
        <HotTrend />
        <BestSeller />
        <Featured />
      </div>
    </div>
  );
};

export default TrendingProducts;
