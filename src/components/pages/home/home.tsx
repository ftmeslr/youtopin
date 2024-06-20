import { useSelector } from "react-redux";
import Header from "../../ui/header/header";
import AddTodo from "../../ui/AddTodo/AddTodo";
import Todos from "../../ui/todos/todos";
import classes from "./home.module.css";
import { FC } from "react";

const HomePage: FC = () => {
  const todos = useSelector((state: any) => state.todos.todos);

  return (
    <>
      <div className={classes.logo_container}>
        <img className={classes.logo} src="./images/youtopin-main-logo.png" />
      </div>
      <Header title="Todo App" />
      <AddTodo />
      <Todos todos={todos} />
    </>
  );
};

export default HomePage;
