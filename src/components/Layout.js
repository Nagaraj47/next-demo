import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>EB</title>
      </Head>
      <h1>NavBar</h1>
      {children}
      <h1>Footer</h1>
    </div>
  );
};

export default Layout;
