import { client } from "libs";
import { getContentId, getContents } from "libs/blog";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import React from "react";
import { Post } from "types";

type PostDetailProps = {
  post: Post;
  posts: Post[];
};

const postDetail: NextPage<PostDetailProps> = ({ post, posts }) => {
  return (
    <div>
      <div>
        <h1>{post.title}</h1>
      </div>
    </div>
  );
};

export default postDetail;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { posts } = await getContents();
  const id: any = context.params?.id;
  const post = await getContentId(id);
  return {
    props: {
      posts,
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map(
    (content: any) => `/blog/posts/${content.id}`
  );
  return {
    paths,
    fallback: false,
  };
};
