import React from "react";
import TodoItem from "./TodoItem";
import Card from "@/components/ui/Card";

export interface Todo {
  id: string;
  text: string;
}

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
  if (todos.length === 0) {
    return (
      <Card className="mt-4">
        <p className="text-gray-500 text-center py-4">
          No todos yet. Add one above!
        </p>
      </Card>
    );
  }

  return (
    <Card className="mt-4 overflow-hidden">
      <div className="divide-y divide-gray-200">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            onDelete={onDelete}
          />
        ))}
      </div>
    </Card>
  );
};

export default TodoList;
