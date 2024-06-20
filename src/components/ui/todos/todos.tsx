import { FC } from "react";
import TodoItem from "../todoItem/todoItem";
import { ITodosProps } from "./todos.types";

const Todos: FC<ITodosProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
