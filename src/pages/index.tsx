import { graphql, PageProps } from "gatsby";
import React, { useEffect, useState } from "react";
import Features from "../components/features";
import Footer from "../components/footer";
import Quote from "../components/quote";
import SEO from "../components/seo";
import Splash from "../components/splash";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_API_KEY || "");
const priceIDs = (process.env.GATSBY_STRIPE_PRICE_IDS || "").split(",");

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

type IndexStateType = {
  images: { splash_small: string; splash_medium: string; splash_large: string };
  stripeError: any;
  loading: boolean;
};

const IndexPage: React.FC<PageProps<IndexContext>> = ({ data }) => {
  console.log(priceIDs);

  const [state, setState] = useState<IndexStateType>({
    images: { splash_small: "", splash_medium: "", splash_large: "" },
    stripeError: undefined,
    loading: false,
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

  const handleCheckout = async (priceID: string) => {
    setState({ ...state, loading: true });

    const stripe = await stripePromise;

    const error = await stripe?.redirectToCheckout({
      lineItems: [
        {
          price: priceID,
          quantity: 1,
        },
      ],
      mode: "subscription",
      cancelUrl: window.location.origin,
      successUrl: window.location.origin,
    });

    if (error) {
      setState({ ...state, loading: true, stripeError: error });
    }
  };

  return (
    <main className="h-full">
      <SEO />
      <Splash images={{ ...state.images }} />
      <Features handleCheckout={handleCheckout} priceIDs={priceIDs} />
      <Quote />
      <Footer />
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
