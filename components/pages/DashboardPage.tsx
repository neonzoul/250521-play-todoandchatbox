import React from "react";
import TodoContainer from "@/components/containers/TodoContainer";
import ChatContainer from "@/components/containers/ChatContainer";

const DashboardPage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2">
        <TodoContainer />
      </div>
      <div className="w-full md:w-1/2">
        <ChatContainer />
      </div>
    </div>
  );
};

export default DashboardPage;
