import { useEffect, useState } from "react";
import ProductCard from "../Products/ProductCard";
import Error from "../Error";
import apiClient from "../../services/apiClient";

const ApiFetch = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true); //product aste suru hoiche tai true
    apiClient
      .get(
        "/products/?page=3"
      )
      .then((res) => setProducts(res.data.results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      {/* spinner */}
      {isLoading && (
        <div className="flex justify-center items-center p-10">
          <span className="loading loading-xl loading-spinner text-secondary"></span>
        </div>
      )}
      {error && <Error error={error} />}
      {!isLoading && !error && products.length > 0 && (
        <ProductCard products={products} />
      )}
      {!isLoading && !error && products.length === 0 && (
        <p className="text-center text-gray-500 m-5">No Products available rignt now</p>
      )}
    </div>
  );
};

export default ApiFetch;
