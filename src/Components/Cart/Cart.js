import styles from "../../UI/Cart.module.css";
import Modal from "./Modal";
import { useContext } from "react";
import CartContext from "../../Store/CartContext";
import CartItem from "./CartItem";

const Cart = ({ onHideCart }) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `€${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const addItemHandler = (item) => {};

  const removeItemHandler = (id) => {};

  const cartItem = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={removeItemHandler.bind(null, item.id)}
          onAdd={addItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={onHideCart}>
      {cartItem}

      <div className={styles.total}>
        <span>Total Amount:</span>
        <span>{totalAmount}</span>
      </div>

      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onHideCart}>
          Close
        </button>

        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
