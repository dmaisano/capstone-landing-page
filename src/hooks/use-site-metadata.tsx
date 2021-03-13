import { graphql, useStaticQuery } from "gatsby";

type UseSiteMetadataProps = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      [key: string]: unknown;
    };
  };
  fileName: {
    childImageSharp: {
      fluid: {
        src: string;
        originalName: string;
      };
    };
  };
};

const useSiteMetadata = () => {
  const data = useStaticQuery<UseSiteMetadataProps>(graphql`
    query SEOBannerQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      fileName: file(relativePath: { eq: "splash.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            src
            originalName
          }
        }
      }
    }
  `);

  const { description, title } = data.site.siteMetadata;
  const { src } = data.fileName.childImageSharp.fluid;

  return {
    description,
    title,
    banner: src,
  };
};

export default useSiteMetadata;
