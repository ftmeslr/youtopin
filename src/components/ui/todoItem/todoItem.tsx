// src/components/TodoItem.tsx
import React from "react";

interface TodoItemProps {
  text: string;
  completed: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  text,
  completed,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="flex items-center justify-between bg-blue-200 px-4 py-2 my-2 rounded-lg">
      <div className="flex items-center">
        <span
          className={`mr-2 px-2 py-1 rounded-full text-xs font-semibold ${
            completed
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {completed ? "Done" : "Pending"}
        </span>
        <p
          className={`text-lg ${
            completed ? "line-through text-gray-600" : "text-blue-900"
          }`}
        >
          {text}
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={onEdit} className="text-blue-500 hover:text-blue-700">
          Edit
        </button>
        <button onClick={onDelete} className="text-red-500 hover:text-red-700">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
