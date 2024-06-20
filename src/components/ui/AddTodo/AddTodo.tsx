import React, { useState } from "react";
import Button from "../button/button";
import Input from "../input/input";
import classes from "./AddTodo.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../store/slices/todoSlices";

const AddTodo = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const [error, setError] = useState<string>("");

  const submitTodo = (e: any) => {
    e.preventDefault();

    // Check if the input is empty - a simple valodation to make sure the user input a todo
    if (!todoText.trim()) {
      setError("Please fill in your todo");
    } else {
      setError("");

      // Create a new todo
      const newTodo = {
        id: Math.random(),
        title: todoText,
      };

      // Dispatch the new todo to the store
      dispatch(addTodo(newTodo));

      // Clear the input and reminder after submission
      setTodoText("");
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
