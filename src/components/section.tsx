import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  flexCenter?: boolean;
  className?: string;
}

const Section: React.FC<SectionProps> = (props) => {
  let className = `relative h-full flex flex-col`;
  if (props.flexCenter === true || props.flexCenter === undefined) {
    className += ` items-center justify-center`;
  }

  return (
    <section {...props} className={className}>
      {props.children}
    </section>
  );
};

export default Section;
