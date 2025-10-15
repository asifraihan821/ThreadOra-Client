import { Heart, ShoppingCart } from "lucide-react";

const ProductCard = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="mt-19 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-100 p-9">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden group"
        >
          <div className="relative">

            {/* image box */}
            <div className="w-full aspect-square overflow-hidden">
              <img
                src={product.images?.[0].image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="font-bold text-lg text-gray-900 px-4">
              {product.name}
            </div>
              <div className="px-4 text-gray-600">{product.description}</div>

            {/* overlay actions */}
            <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="mb-29 flex gap-3 bg-white/90 rounded-md p-2 shadow-sm">
                <button className="p-2 rounded hover:bg-pink-300">
                  <ShoppingCart size={16} />
                </button>
                <button className="p-2 rounded hover:bg-red-300">
                  <Heart size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* card body */}
          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-800 truncate">
              {product.title}
            </h3>

            <div className=" flex items-center justify-between">
              <div className="text-lg font-semibold text-red-500">
                {product.price.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
