import styles from "../../UI/MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ id, name, description, price, image }) => {
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{`€${price.toFixed(2)}`}</div>
      </div>
      <div>
        <img src={image} alt="Food item" className={styles.img} />
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
