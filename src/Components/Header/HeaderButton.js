import CartIcon from "./CartIcon";
import styles from "../../UI/HeaderButton.module.css";

const HeaderButton = () => {
  return (
    <button className={styles.button}>
      <span className={styles["cart-icon"]}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default HeaderButton;
