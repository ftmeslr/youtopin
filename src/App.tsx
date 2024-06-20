// src/App.tsx
import React, { useState } from "react";
import TodoItem from "./components/ui/todoItem/todoItem";
import Modal from "./components/ui/modal/modal";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: true },
    { id: 3, text: "Deploy to Production", completed: false },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);

  const handleEdit = (todo: Todo) => {
    setCurrentTodo(todo);
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSave = (text: string) => {
    if (currentTodo) {
      setTodos(
        todos.map((todo) =>
          todo.id === currentTodo.id ? { ...todo, text } : todo
        )
      );
    }
    setIsModalOpen(false);
  };

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center justify-center p-4 w-full">
      <div className=" w-full mt-8 bg-blue-100 p-4 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Todo List</h1>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onEdit={() => handleEdit(todo)}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div>
            <h2 className="text-2xl font-bold mb-4">Edit Todo</h2>
            <input
              type="text"
              value={currentTodo?.text || ""}
              onChange={(e) =>
                setCurrentTodo(
                  currentTodo ? { ...currentTodo, text: e.target.value } : null
                )
              }
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <button
              onClick={() => currentTodo && handleSave(currentTodo.text)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default App;
