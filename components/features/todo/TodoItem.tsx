"use client";

import React from "react";
import Button from "@/components/ui/Button";

interface TodoItemProps {
  id: string;
  text: string;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-200 last:border-0">
      <p className="mr-4">{text}</p>
      <Button
        variant="secondary"
        onClick={() => onDelete(id)}
        className="text-sm px-2 py-1 text-red-600 hover:bg-red-50"
      >
        Delete
      </Button>
    </div>
  );
};

export default TodoItem;
