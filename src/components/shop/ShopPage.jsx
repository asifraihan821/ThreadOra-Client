import React, { useEffect, useState } from "react";
import apiClient from "../../services/apiClient";
import ProductList from "./ProductList";
import Pagination from "./Pagination";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

//   const fetchProducts = () => {
//     setLoading(true);
//     apiClient
//       .get(`/products/?page=${currentPage}`)
//       .then((res) => {
//         setProducts(res.data.results);
//         setTotalPages(Math.ceil(res.data.count / res.data.results.length));
//       })
//       .catch((error) => setError(error))
//       .finally(() => setLoading(false));
//   };

  const fetchProducts = async () => {
      setLoading(true);
    try{
        const response = await apiClient.get(`/products/?page=${currentPage}`)
    const data = response.data;

    setProducts(data.results);
    setTotalPages(Math.ceil(data.count / data.results.length))
    }catch(err) {
        setError(err);
    } finally {
        setLoading(false)
    }
  }

  return (
    <div>
      <ProductList products={products} isLoading={isLoading} error={error} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={setCurrentPage}
      />
    </div>
  );
};

export default ShopPage;
