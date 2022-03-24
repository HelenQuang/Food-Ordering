import styles from "../../UI/Input.module.css";

const Input = ({ input, label }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input}></input>
    </div>
  );
};

export default Input;
