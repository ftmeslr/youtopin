import { FC } from "react";
import { useGetTodosQuery } from "../../../api/apiSlice";
import Header from "../../ui/header/header";
import Todos from "../../ui/todos/todos";
import classes from "./home.module.css";
import AddTodo from "../../ui/addTodo/addTodo";

const HomePage: FC = () => {
  const { data: todos, isLoading } = useGetTodosQuery({});

  return (
    <>
      <div className={classes.logo_container}>
        <img className={classes.logo} src="./images/youtopin-main-logo.png" />
      </div>
      <Header title="Todo App" />
      <AddTodo />
      {!isLoading ? <Todos todos={todos} /> : <>isLoading</>}
    </>
  );
};

export default HomePage;
