import React from "react";
import { useRouter } from "next/router";

function PostDetails({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading..</div>;
  }
  return (
    <div>
      <h2>
        {post.id} |{post.title} |{post.price}
      </h2>
    </div>
  );
}

export default PostDetails;

export async function getStaticPaths() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await response.json();

  // const paths = data.map((post) => {
  //   return {
  //     params: {
  //       postId: `${post.id}`,
  //     },
  //   };
  // });

  return {
    paths: [
      {
        params: {
          postId: "1",
        },
      },
      {
        params: {
          postId: "2",
        },
      },
    ],
    fallback: true,
  };
}

export const getStaticProps = async (context) => {
  const { params } = context;

  const response = await fetch(`http://localhost:4000/posts/${params.postId}`);
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
};
