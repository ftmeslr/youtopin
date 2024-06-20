import React, { useState } from "react";
import { useAddTodoMutation } from "../../../api/apiSlice";
import Button from "../button/button";
import Input from "../input/input";
import classes from "./addTodo.module.css";

const AddTodo = () => {
  const [todoText, setTodoText] = useState("");
  const [error, setError] = useState<string>("");

  const [addTodo] = useAddTodoMutation();
  const submitTodo = (e: any) => {
    e.preventDefault();

    if (!todoText.trim()) {
      setError("Please fill in your todo");
    } else {
      setError("");

      const newTodo = {
        id: Math.random().toString(),
        title: todoText,
      };
      addTodo(newTodo);
    }
  };

  const getTodoText = (text: React.SetStateAction<string>) => {
    setTodoText(text);
  };

  return (
    <section className={classes.section}>
      <form onSubmit={submitTodo}>
        <div className={classes.form_container}>
          <Input
            value={todoText}
            type="text"
            placeholder="Enter todo"
            getTodo={getTodoText}
            errorMessage={error}
          />
          <Button text="Add Todo" />
        </div>
      </form>
    </section>
  );
};

export default AddTodo;
