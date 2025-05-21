"use client";

import React, { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

interface ChatFormProps {
  onSend: (message: string) => void;
}

const ChatForm: React.FC<ChatFormProps> = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message.trim());
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-grow"
        required
      />
      <Button type="submit" disabled={!message.trim()}>
        Send
      </Button>
    </form>
  );
};

export default ChatForm;
