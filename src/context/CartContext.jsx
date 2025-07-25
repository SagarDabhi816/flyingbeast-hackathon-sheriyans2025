import React, { createContext, useContext, useReducer } from "react";

// Create Cart Context
const CartContext = createContext();

const initialState = {
  items: [], // array of { product, quantity }
};

// Cart reducer function handling different cart actions
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, quantity = 1 } = action.payload;

      // Search for existing product in cart
      const itemIndex = state.items.findIndex(
        (item) => item.product.id === id
      );

      let updatedItems;

      if (itemIndex > -1) {
        // Product already in cart: increment quantity
        updatedItems = state.items.map((item, idx) =>
          idx === itemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add new product with the specified quantity
        updatedItems = [...state.items, { product: action.payload, quantity }];
      }

      return { ...state, items: updatedItems };
    }

    case "REMOVE_FROM_CART": {
      const updatedItems = state.items.filter(
        (item) => item.product.id !== action.payload
      );
      return { ...state, items: updatedItems };
    }

    case "CLEAR_CART": {
      return initialState;
    }

    default:
      return state;
  }
}

// CartProvider component to wrap your app
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Add product with quantity to cart
  const addToCart = (productWithQuantity) => {
    dispatch({ type: "ADD_TO_CART", payload: productWithQuantity });
  };

  // Remove from cart by product ID
  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  // Clear the entire cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.items,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook for easy consumption of Cart context
export function useCart() {
  return useContext(CartContext);
}
