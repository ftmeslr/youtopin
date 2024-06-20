import { FC } from "react";
import classes from "./button.module.css";
import { ButtonProps } from "./button.types";

const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <button className={classes.button} type="submit">
      {text}
    </button>
  );
};

export default Button;
