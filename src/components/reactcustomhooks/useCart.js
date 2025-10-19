import React, { useCallback, useEffect, useState } from "react";
import apiClientInterceptor from "../../services/apiClientInterceptor";

const useCart = () => {
  const [authTokens] = useState(
    () => JSON.parse(localStorage.getItem("authTokens"))?.access
  );

  const [cart, setCart] = useState(null);
  const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"));
  const [loading, setLoading] = useState(false);

  //create a newCart
  const createOrGetCart = useCallback(async () => {
    setLoading(true);
    try {
      const response = await apiClientInterceptor.post("/carts/");
      const newCartId = response.data.id;
      
      localStorage.setItem("cartId", newCartId);
        setCartId(newCartId);
      setCart(response.data);

      return newCartId;

    } catch (error) {
      console.log(error);
    }finally{
        setLoading(false);
    }
  }, [cartId]);


  //add items to the cart
  const addCartItems = useCallback(async (product_id, quantity) => {
    setLoading(true);
    let currentCartId = cartId;
    if (!currentCartId) {
        currentCartId = await createOrGetCart();
    }
    try {
      const response = await apiClientInterceptor.post(`/carts/${currentCartId}/items/`, {
        product_id,
        quantity,
      });
      console.log("added to cart:", response.data);
      return response.data;
    } catch (error) {
      console.log("Erorr adding items", error);
    }finally{
        setLoading(false);
    }
  }, [cartId, createOrGetCart]);

  //update Cart item quantity
  const updateCartItemQuantity = useCallback(async(itemId, quantity) => {
    try{
        await apiClientInterceptor.patch(`/carts/${cartId}/items/${itemId}/`, {quantity})
    }catch(error) {
        console.log("error updating cart items",error);
    }
  }, [cartId]);


  //REmove Item from cart
  const deleteCartitems = useCallback(async(itemId) => {
    try{
      await apiClientInterceptor.delete(`carts/${cartId}/items/${itemId}/`);
    }catch(error){
      console.log(error);
    }
  }, [cartId]);

  useEffect(() => {
   const initializeCart = async() => {
    setLoading(true);
    await createOrGetCart();
    setLoading(false);
   };
   initializeCart();
  }, [createOrGetCart]);

  return { cart,loading, cartId, createOrGetCart, addCartItems, updateCartItemQuantity, deleteCartitems };
};

export default useCart;
