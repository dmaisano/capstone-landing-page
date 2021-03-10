import { PageProps } from "gatsby";
import React, { useEffect, useState } from "react";
import Button from "../components/button";
import Section from "../components/section";
// @ts-ignore
import splashSmall from "../static/splash_small.jpg";
// @ts-ignore
import splashMedium from "../static/splash_medium.jpg";
// @ts-ignore
import splashLarge from "../static/splash.jpg";

import "./index.css";

type IndexProps = {};

const IndexPage: React.FC<PageProps<IndexProps>> = ({}) => {
  const [state, setState] = useState({
    width: window.innerWidth,
  });

  const onResize = () => {
    setState({ ...state, width: window.innerWidth });
  };

  const backgroundImage = (image) =>
    `linear-gradient(118deg, rgba(27, 31, 59, 0.75), rgba(90, 56, 211, 0.5)), url(${image})`;

  useEffect(() => {
    window.addEventListener(`resize`, onResize);

    return () => window.removeEventListener(`resize`, onResize);
  }, []);

  return (
    <main id="splash" className="h-full">
      <Section id="section">
        <div
          className="bg h-full w-full absolute top-0 left-0 opacity-100 md:opacity-0"
          style={{ backgroundImage: backgroundImage(splashSmall) }}
        />

        <div
          className="bg h-full w-full absolute top-0 left-0 opacity-0 md:opacity-100 lg:opacity-0"
          style={{ backgroundImage: backgroundImage(splashMedium) }}
        />

        <div
          className="bg h-full w-full absolute top-0 left-0 opacity-0 lg:opacity-100"
          style={{ backgroundImage: backgroundImage(splashLarge) }}
        />

        <h1 className="w-full tracking-widest font-light text-white text-2xl flex justify-center md:justify-start absolute top-0 left-0 py-12 md:p-6">
          SOHOMUSE
        </h1>
        <div id="branding" className="mx-auto">
          <h2
            className="text-white text-4xl text-center mb-10"
            style={{
              fontFamily: "Playfair Display",
            }}
          >
            Book World-Class Talent
          </h2>
          <p className="text-gray-200 text-lg text-center mb-10">
            Premium members get access to a world-class talent pool of
            professional talent for your next project. Our talent has won
            academy awards, grammy's and more.
          </p>
          <div className="flex justify-center">
            <Button>Let's Start</Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default IndexPage;
