import React from "react";
import "./button.css";

interface ButtonProps {
  className?: string;
  wFull?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  if (className) {
    className = `cursor-pointer text-white font-normal bg-primary hover:bg-primary-active outline-none py-2 px-4 rounded ${className}`;
  } else {
    className = `w-full cursor-pointer text-white font-normal bg-primary hover:bg-primary-active outline-none py-2 px-4 rounded`;
  }

  return <button className={className}>{children}</button>;
};

export default Button;
