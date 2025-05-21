"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ChatForm from "@/components/features/chat/ChatForm";
import ChatList, { Message } from "@/components/features/chat/ChatList";

const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: uuidv4(),
      role: "user",
      content,
    };

    setMessages((prev) => [...prev, userMessage]);

    // Mock AI reply with setTimeout
    setTimeout(() => {
      const aiMessage: Message = {
        id: uuidv4(),
        role: "ai",
        content: "🤖 Future AI reply",
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 800);
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4">Chat</h2>
      <ChatList messages={messages} />
      <ChatForm onSend={handleSendMessage} />
    </div>
  );
};

export default ChatContainer;
