import React from "react";
import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className={styles.inputContainer}>
      {props.label && <label className={styles.label}>{props.label}</label>}
      <input className={styles.input} {...props} />
    </div>
  );
};

export default Input;
