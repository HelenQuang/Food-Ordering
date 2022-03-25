import styles from "../../UI/MealItemForm.module.css";
import Input from "./Input";

const MealItemForm = ({ id }) => {
  return (
    <form className={styles.form}>
      <Input
        label="Amount:"
        input={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
