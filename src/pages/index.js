import Link from "next/link";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>Home</div>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </>
  );
}

export default Home;
