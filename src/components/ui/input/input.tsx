import { FC } from "react";
import classes from "./input.module.css";
import { InputProps } from "./input.types";

const Input: FC<InputProps> = ({
  value,
  type,
  placeholder,
  getTodo,
  errorMessage,
}) => {
  return (
    <div className={classes.input_container}>
      <input
        value={value}
        className={classes.input}
        type={type}
        placeholder={placeholder}
        onChange={(e) => getTodo(e.target.value)}
      />
      {errorMessage && <p className={classes.error_message}>{errorMessage}</p>}
    </div>
  );
};

export default Input;
