import CartIcon from "./CartIcon";
import styles from "../../UI/HeaderButton.module.css";
import { useContext } from "react";
import CartContext from "../../Store/CartContext";

const HeaderButton = ({ onShowCart }) => {
  const { items } = useContext(CartContext);

  const numberOfCartItem = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={onShowCart}>
      <span className={styles["cart-icon"]}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderButton;
