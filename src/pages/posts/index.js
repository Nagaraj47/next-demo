import React from "react";
import Link from "next/link";

function Posts({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`} passHref>
            <h2>
              {post.id}
              {post.title}
            </h2>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Posts;

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:4000/posts");
  const data = await response.json();
  return {
    props: {
      posts: data.slice(0, 2),
    },
  };
};
