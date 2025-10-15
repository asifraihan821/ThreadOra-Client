import { Star } from "lucide-react";
import product1 from "../../assets/img/product/details/product-1.jpg";
const products = [
  {
    id: 1,
    name: "Buttons Tweed Blazer",
    price: 59,
    img: "/images/blazer.jpg",
    status: "", // বা "out of stock", "sale" ইত্যাদি
  },
  {
    id: 2,
    name: "Flowy Striped Skirt",
    price: 49,
    img: "/images/skirt.jpg",
    status: "out of stock",
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    price: 59,
    img: "/images/tshirt.jpg",
    status: "",
  },
  {
    id: 4,
    name: "Slim Striped Pocket Shirt",
    price: 59,
    img: "/images/shirt.jpg",
    status: "",
  },
];

const Card = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((prod) => (
            <div
              key={prod.id}
              className="rounded-lg overflow-hidden group relative"
            >
              <img
                src={product1}
                alt={prod.name}
                className="w-full h-70 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Status badge */}
              {prod.status && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {prod.status}
                </span>
              )}
              <div className="p-4">
                <h3 className="text-lg font-medium">{prod.name}</h3>
                <div className="">
                  <h1 className="py-1 text-yellow-500 ml-19">
                    {" "}
                    <Star />
                  </h1>
                  <p className="text-gray-600 mt-1 ml-16 lg:mb-9">${prod.price.toFixed(2)}</p>
                </div>
                <hr />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
