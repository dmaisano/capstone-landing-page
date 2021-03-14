import React from "react";
import Section from "../section";
import "./features.css";

interface FeaturesProps {}

const Features: React.FC<FeaturesProps> = ({}) => {
  return (
    <Section id="features">
      <h2 className="absolute top-0 text-white text-center text-4xl">
        Premium Features
      </h2>
    </Section>
  );
};

export default Features;
