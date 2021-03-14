import React from "react";
import Button from "../button";
import "./splash.css";

interface SpashProps {
  images: {
    splash_small: string;
    splash_medium: string;
    splash_large: string;
  };
}

const Splash: React.FC<SpashProps> = ({ images }) => {
  const backgroundImage = (image) =>
    `linear-gradient(118deg, rgba(27, 31, 59, 0.75), rgba(90, 56, 211, 0.5)), url(${image})`;

  console.log(images);

  return (
    <section
      id="splash"
      className="relative min-h-full flex flex-col items-center justify-center"
    >
      <div
        className="bg h-full w-full absolute top-0 left-0 block md:hidden"
        style={{ backgroundImage: backgroundImage(images.splash_small) }}
      />
      <div
        className="bg h-full w-full absolute top-0 left-0 hidden md:block lg:hidden"
        style={{ backgroundImage: backgroundImage(images.splash_medium) }}
      />
      <div
        className="bg h-full w-full absolute top-0 left-0 hidden lg:block"
        style={{ backgroundImage: backgroundImage(images.splash_large) }}
      />
      <h1 className="w-full tracking-widest font-light text-white text-2xl flex justify-center md:justify-start absolute top-0 left-0 py-12 md:p-6">
        SOHOMUSE
      </h1>
      <div id="branding" className="mx-auto">
        <h2
          className="text-white text-5xl text-center mb-10"
          style={{
            fontFamily: "Playfair Display",
          }}
        >
          Book World-Class Talent
        </h2>
        <p className="text-gray-200 text-lg text-center mb-10">
          Premium members get access to a world-class talent pool of
          professional talent for your next project. Our talent has won academy
          awards, grammy's and more.
        </p>
        <div className="flex justify-center">
          <Button>Let's Start</Button>
        </div>
      </div>
    </section>
  );
};

export default Splash;
