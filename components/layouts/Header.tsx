import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Todo + Chat Dashboard
        </h1>
      </div>
    </header>
  );
};

export default Header;
