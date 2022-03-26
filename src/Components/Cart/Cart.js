import styles from "../../UI/Cart.module.css";
import Modal from "./Modal";

const Cart = ({ onHideCart }) => {
  const cartItem = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 17 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={onHideCart}>
      {cartItem}

      <div className={styles.total}>
        <span>Total Amount:</span>
        <span>25.6</span>
      </div>

      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onHideCart}>
          Close
        </button>

        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
