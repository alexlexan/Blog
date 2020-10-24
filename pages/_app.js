import GlobalStyle from "../styles/globals";
import { ApolloProvider } from "@apollo/react-hooks";
import { useApollo } from "../utils/apolloClient";
import "./_font.css";
import { Helmet } from "react-helmet";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const title = pageProps.title;

  const [themeDark, setThemeDark] = useState(true);
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
      </Helmet>
      <ApolloProvider client={apolloClient}>
        <GlobalStyle themeDark={themeDark} />
        <Component
          {...pageProps}
          setThemeDark={setThemeDark}
          themeDark={themeDark}
        />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
