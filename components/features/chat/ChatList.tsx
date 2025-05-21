import React from "react";
import Card from "@/components/ui/Card";

export interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
}

interface ChatListProps {
  messages: Message[];
}

const ChatList: React.FC<ChatListProps> = ({ messages }) => {
  if (messages.length === 0) {
    return (
      <Card className="h-64 flex items-center justify-center">
        <p className="text-gray-500">No messages yet. Start a conversation!</p>
      </Card>
    );
  }

  return (
    <Card className="h-64 overflow-y-auto">
      <div className="space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-3 rounded-lg max-w-[80%] ${
              message.role === "user"
                ? "bg-blue-100 ml-auto text-blue-900"
                : "bg-gray-100 mr-auto text-gray-800"
            }`}
          >
            {message.content}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ChatList;
