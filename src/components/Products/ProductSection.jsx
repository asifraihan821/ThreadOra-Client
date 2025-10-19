// src/components/ProductsSection.jsx
// import { ShoppingCart, Heart } from "lucide-react";
// import img1 from "../../assets/img/instagram/insta-1.jpg";
// import img2 from "../../assets/img/instagram/insta-2.jpg";
// import img3 from "../../assets/img/instagram/insta-3.jpg";
// import img4 from "../../assets/img/instagram/insta-4.jpg";
// import img5 from "../../assets/img/instagram/insta-5.jpg";
// import img6 from "../../assets/img/instagram/insta-6.jpg";
import ProductCard from "./ProductCard";

// sample data — তোমার API/props দিয়ে বদলাতে পারো
// const products = [
//   { id: 1, title: "Buttons Tweed Blazer", price: 59.0, image: img1, badge: "New" },
//   { id: 2, title: "Flowy Striped Skirt", price: 49.0, image: img2, badge: "Out of stock" },
//   { id: 3, title: "Cotton T-Shirt", price: 59.0, image: img3, badge: "" },
//   { id: 4, title: "Slim Striped Pocket Shirt", price: 59.0, image: img4, badge: "" },
//   { id: 5, title: "Tropical Kimono", price: 49.0, oldPrice: 59.0, image: img5, badge: "Sale" },
//   { id: 6, title: "Contrasting Sunglasses", price: 59.0, image: img6, badge: "" },
// ];

import Featured from '../Products/TrndingProducts/Featured';

const ProductsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>

        <div className="grid lg:grid-cols-6 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:w-full">
            Our Featured Products will be shown Soon...
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
