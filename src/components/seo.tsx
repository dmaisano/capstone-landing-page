import React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../hooks/use-site-metadata";

type SEOProps = {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  canonicalUrl?: string;
};

const SEO: React.FC<SEOProps> = ({
  title = ``,
  description = ``,
  pathname = ``,
  image = ``,
  children = null,
  canonicalUrl = ``,
}) => {
  const site = useSiteMetadata();

  const seo = {
    title: title || site.title,
    description: description || site.description,
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={site.banner} />
      {children}
    </Helmet>
  );

  // const {
  //   siteTitle,
  //   siteTitleAlt: defaultTitle,
  //   siteUrl,
  //   siteDescription: defaultDescription,
  //   siteLanguage,
  //   siteImage: defaultImage,
  //   author,
  // } = site;

  // const seo = {
  //   title: title || defaultTitle,
  //   description: description || defaultDescription,
  //   url: `${siteUrl}${pathname || ``}`,
  //   image: `${siteUrl}${image || defaultImage}`,
  // };

  // return (
  //   <Helmet
  //     title={title}
  //     defaultTitle={defaultTitle}
  //     titleTemplate={`%s | ${siteTitle}`}
  //   >
  //     <html lang={siteLanguage} />
  //     <meta name="description" content={seo.description} />
  //     <meta name="image" content={seo.image} />
  //     <meta property="og:title" content={seo.title} />
  //     <meta property="og:url" content={seo.url} />
  //     <meta property="og:description" content={seo.description} />
  //     <meta property="og:image" content={seo.image} />
  //     <meta property="og:type" content="website" />
  //     <meta property="og:image:alt" content={seo.description} />
  //     <meta name="twitter:card" content="summary_large_image" />
  //     <meta name="twitter:title" content={seo.title} />
  //     <meta name="twitter:url" content={seo.url} />
  //     <meta name="twitter:description" content={seo.description} />
  //     <meta name="twitter:image" content={seo.image} />
  //     <meta name="twitter:image:alt" content={seo.description} />
  //     <meta name="twitter:creator" content={author} />
  //     <meta name="gatsby-theme" content="@lekoarts/gatsby-theme-minimal-blog" />
  //     <link
  //       rel="icon"
  //       type="image/png"
  //       sizes="32x32"
  //       href={withPrefix(`/favicon-32x32.png`)}
  //     />
  //     <link
  //       rel="icon"
  //       type="image/png"
  //       sizes="16x16"
  //       href={withPrefix(`/favicon-16x16.png`)}
  //     />
  //     <link
  //       rel="apple-touch-icon"
  //       sizes="180x180"
  //       href={withPrefix(`/apple-touch-icon.png`)}
  //     />
  //     {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
  //     {children}
  //   </Helmet>
  // );
};

export default SEO;

export const query = ``;
