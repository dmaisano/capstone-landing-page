import React from "react";
import "./button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
  let className: string = "";

  if (props.className) {
    className = `cursor-pointer text-white font-normal bg-primary hover:bg-primary-active outline-none py-2 px-4 rounded ${className}`;
  } else {
    className = `w-full cursor-pointer text-white font-normal bg-primary hover:bg-primary-active outline-none py-2 px-4 rounded`;
  }

  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  );
};

export default Button;
