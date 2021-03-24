import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="text-center">
      <h1 className="w-full tracking-widest font-light text-white text-2xl py-1">
        INSERT COMPANY
      </h1>
      <p className="pb-2">All Right Reserved</p>
    </footer>
  );
};

export default Footer;
