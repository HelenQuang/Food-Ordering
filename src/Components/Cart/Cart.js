import styles from "../../UI/Cart.module.css";
import Modal from "./Modal";
import { useContext, useState } from "react";
import CartContext from "../../Store/CartContext";
import CartItem from "./CartItem";

const Cart = ({ onHideCart }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `€${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

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
      {!showConfirmation && cartItem}

      <div className={styles.total}>
        <span>Total Amount:</span>
        <span>{totalAmount}</span>
      </div>

      {!showConfirmation && (
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={onHideCart}>
            Close
          </button>

          {hasItems && (
            <button
              className={styles.button}
              onClick={() => setShowConfirmation(true)}
            >
              Order
            </button>
          )}
        </div>
      )}

      {showConfirmation && (
        <h2 className={styles.confirmation}>
          Thank you for your order. Enjoy your meal!
        </h2>
      )}
    </Modal>
  );
};

export default Cart;
