import Head from "next/head";

const Title = ({ children }) => {
  return (
    <Head>
      <title>{children}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Head>
  );
};

export default Title;
