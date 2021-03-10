import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

const Section: React.FC<SectionProps> = (props) => {
  return (
    <section
      {...props}
      className="h-full flex flex-col items-center justify-center"
    >
      {props.children}
    </section>
  );
};

export default Section;
