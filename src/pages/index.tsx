import { graphql, PageProps } from "gatsby";
import React, { useEffect, useState } from "react";
import Features from "../components/features";
import Quote from "../components/quote";
import SEO from "../components/seo";
import Splash from "../components/splash";

type IndexContext = {
  allFile: {
    nodes: {
      childImageSharp: {
        fluid: {
          src: string;
          originalName: string;
        };
      };
    }[];
  };
};

const IndexPage: React.FC<PageProps<IndexContext>> = ({ data }) => {
  const [state, setState] = useState({
    images: { splash_small: "", splash_medium: "", splash_large: "" },
  });

  useEffect(() => {
    let images = { splash_small: "", splash_medium: "", splash_large: "" };
    data.allFile.nodes.forEach((file) => {
      const { src, originalName } = file.childImageSharp.fluid;
      const match = originalName.match(/(\w+)\.jpg/);
      const fileName = match?.[1];
      images[fileName as any] = src;
    });

    setState({
      ...state,
      images,
    });
  }, []);

  return (
    <main className="h-full">
      <SEO />
      <Splash images={{ ...state.images }} />
      <Features />
      <Quote />
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query SplashImagesQuery {
    allFile(filter: { name: { regex: "/^splash.+/" } }) {
      nodes {
        childImageSharp {
          fluid {
            src
            originalName
          }
        }
      }
    }
  }
`;
