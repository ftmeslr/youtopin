import classes from "./todoItem.module.css";
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../../../api/apiSlice";
import { FC } from "react";

const TodoItem: FC<any> = ({ todo }) => {
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  return (
    <div className={classes.todo}>
      <div className={classes.todoTitle_container}>
        <input
          type="checkbox"
          checked={todo.completed}
          id={todo.id}
          onChange={() => updateTodo({ ...todo, completed: !todo.completed })}
        />
        <div className={classes.todo__title}>
          <p>{todo.title}</p>
        </div>
      </div>
      <div className={classes.todo__actions}>
        <button
          onClick={() => deleteTodo(todo)}
          className={`${classes.todo__delete} ${classes.btn}`}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
