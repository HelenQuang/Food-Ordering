import styles from "../../UI/Cart.module.css";
import Modal from "./Modal";

const Cart = () => {
  const cartItem = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 17 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItem}

      <div className={styles.total}>
        <span>Total Amount:</span>
        <span>25.6</span>
      </div>

      <div className={styles.actions}>
        <button className={styles["button--alt"]}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
