import { PageProps } from "gatsby";
import React from "react";

type NotFoundPageProps = {};

const NotFoundPage: React.FC<PageProps<NotFoundPageProps>> = ({}) => {
  return (
    <main
      style={{
        textAlign: `center`,
        padding: `1rem 0`,
      }}
    >
      <title>Not found</title>

      <h1>404: Page Not Found</h1>
    </main>
  );
};

export default NotFoundPage;
