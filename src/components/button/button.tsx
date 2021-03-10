import React from "react";
import "./button.css";

interface ButtonProps {}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button
      className="cursor-pointer text-white font-normal bg-primary hover:bg-primary-active outline-none py-2 px-4 rounded"
      style={{
        minWidth: `200px`,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
