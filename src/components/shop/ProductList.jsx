import ProductCard from '../Products/ProductCard';

const ProductList = ({products, isLoading, error}) => {
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

export default ProductList;