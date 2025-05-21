"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "@/components/features/todo/TodoForm";
import TodoList, { Todo } from "@/components/features/todo/TodoList";

const TodoContainer: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4">My Todos</h2>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default TodoContainer;
