import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import apiClient from "../../../services/apiClient";

const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBestSellers = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await apiClient.get("/products/?page=6");
        setProducts(res.data.results);
      } catch (err) {
        console.error("Error fetching best sellers:", err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchBestSellers();
  }, []);

  return (
    <div className="p-5 sm:p-6 md:p-8 shadow-sm max-w-sm sm:max-w-md md:max-w-lg mx-auto bg-white">
      <h1 className="text-gray-500 font-bold text-lg mb-4 text-center md:text-left">
        BEST SELLER
      </h1>

      {/* ✅ Show loading spinner */}
      {isLoading && (
        <div className="flex justify-center items-center p-5">
          <span className="loading loading-spinner text-secondary"></span>
        </div>
      )}

      {/* ✅ Show error message */}
      {error && (
        <p className="text-center text-red-500 font-medium my-4">{error}</p>
      )}

      {/* ✅ Show products only when not loading and no error */}
      {!isLoading && !error && products.length > 0 && (
        <div>
          {products.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0"
            >
              {/* Image */}
              <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] overflow-hidden flex-shrink-0 rounded">
                <img
                  src={item.images?.[0].image} // ✅ fixed wrong property name `.imgage`
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col justify-center flex-grow">
                <h1 className="text-gray-800 text-sm sm:text-base font-medium">
                  {item.name}
                </h1>

                <div className="flex items-center text-yellow-500 my-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="currentColor" />
                  ))}
                </div>

                <h1 className="text-gray-700 text-sm sm:text-base font-semibold">
                  ${item.price}
                </h1>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ✅ No products available message */}
      {!isLoading && !error && products.length === 0 && (
        <p className="text-center text-gray-500 my-4">
          No best sellers available right now.
        </p>
      )}
    </div>
  );
};

export default BestSeller;
