import { FC } from "react";
import classes from "./header.module.css";
import { HeaderProps } from "./header.types";

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.header__title}>{title}</h1>
    </header>
  );
};

export default Header;
