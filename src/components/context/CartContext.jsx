import { createContext } from 'react';
import UseCart from '../hooks/useCart';


const CartContext = createContext();
export const CartProvider = ({children}) => {
    const allValue = UseCart();
    return <CartContext.Provider value={allValue}>
        {children}
    </CartContext.Provider>
};

export default CartContext;