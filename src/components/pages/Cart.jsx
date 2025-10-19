import { Suspense, useEffect, useState } from "react";
import CartItemList from "../cart/CartItemList";
import CartSummary from "../cart/CartSummary";
import useCartContext from '../reactcustomhooks/useCartContext';

const Cart = () => {
  const {
    cart,
    cartId,
    loading,
    createOrGetCart,
    updateCartItemQuantity,
    deleteCartitems,
  } = useCartContext();

  const [localCart, setLocalCart] = useState(cart);

  useEffect(() => {
    if (!cart && !loading) createOrGetCart();
  }, [createOrGetCart, cart, loading]);

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  if (loading) return <p>loading...</p>;
  if (!localCart) return <p>NO Cart Found</p>;

  const handleUpdateQuantity = async (itemId, newQuantity) => {
    const prevLocalCartCopy = localCart; //store a copy of localcart

    setLocalCart((prevLocalCart) => {
      const updatedItems = prevLocalCart.items.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: newQuantity,
              total_price: item.product.price * newQuantity,
            }
          : item
      );
      return {
        ...prevLocalCart,
        items: updatedItems,
        total_price: updatedItems.reduce(
          (sum, item) => sum + item.total_price,
          0
        ),
      };
    });

    try {
      await updateCartItemQuantity(itemId, newQuantity);
    } catch (error) {
      console.log(error);
      setLocalCart(prevLocalCartCopy); //rollback to previous state if API failes.
    }
  };

  const handleRemoveItem = async (itemId) => {
    setLocalCart((prevLocalCart) => {
      const updatedItems = prevLocalCart.items.filter(
        (item) => item.id != itemId
      );
      return {
        ...prevLocalCart,
        items: updatedItems,
        total_price: updatedItems.reduce((sum, item) => sum + item.total_price, 0)
      };
    });
    try {
      await deleteCartitems(itemId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Suspense fallback={<p>loading...</p>}>
            <CartItemList
              items={localCart?.items}
              handleUpdateQuantity={handleUpdateQuantity}
              handleRemoveItem={handleRemoveItem}
            />
          </Suspense>
        </div>
        <div>
          <CartSummary
            totalPrice={localCart.total_price}
            itemCount={localCart.items.length}
            cartId={cartId}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
