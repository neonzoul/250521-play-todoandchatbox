import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-4 mt-auto">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Todo + Chat Dashboard
        </p>
      </div>
    </footer>
  );
};

export default Footer;
