import { useState } from "react";
import { FaCheck, FaShoppingCart } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import useCartContext from "../../reactcustomhooks/useCartContext";


const AddToCartButton = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const {addCartItems} = useCartContext();

  // Stock status control logic
  const isAvailable = product.stock_status === "AVAILABLE";
  const maxStock = isAvailable ? product.stock_quantity || 10 : 0;

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    if (quantity < maxStock) setQuantity(quantity + 1);
  };

  const addToCart = async() => {
    setIsAdding(true);
    try{
      await addCartItems(product.id, quantity);
      setIsAdded(true);
      setIsAdding(false);
    }catch(error) {
      console.log(error);
      setIsAdding(false)
    }
  };

  return (
    <div className="space-y-4">
      <div className="join">
        <button
          className="btn btn-outline join-item"
          onClick={decreaseQuantity}
          disabled={!isAvailable || quantity <= 1}
        >
          <FaMinus className="h-4 w-4" />
        </button>

        <input
          type="number"
          value={quantity}
          min="1"
          max={String(maxStock)}
          onChange={(e) => {
            const value = Number(e.target.value);
            if (value >= 1 && value <= maxStock) setQuantity(value);
          }}
          className="input input-bordered join-item w-16 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          disabled={!isAvailable}
        />

        <button
          className="btn btn-outline join-item"
          onClick={increaseQuantity}
          disabled={!isAvailable || quantity >= maxStock}
        >
          <FaPlus className="h-4 w-4" />
        </button>
      </div>

      <button
        className="btn btn-primary w-full"
        onClick={addToCart}
        disabled={!isAvailable || isAdding || isAdded}
      >
        {isAdding ? (
          <span className="flex items-center">
            <span className="loading loading-spinner loading-sm mr-2"></span>
            Adding...
          </span>
        ) : isAdded ? (
          <span className="flex items-center">
            <FaCheck className="mr-2 h-4 w-4" />
            Added to Cart
          </span>
        ) : !isAvailable ? (
          <span className="flex items-center">Out of Stock</span>
        ) : (
          <span className="flex items-center">
            <FaShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </span>
        )}
      </button>
    </div>
  );
};

export default AddToCartButton;
