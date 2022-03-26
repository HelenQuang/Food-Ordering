import CartContext from "./CartContext";
import { useReducer } from "react";

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducerFn = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.items);

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  return initialCartState;
};

const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useReducer(cartReducerFn, initialCartState);

  const addItemToCartHandler = (item) => {
    setCartState({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    setCartState({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
