import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import Image from "next/image";
import { Post } from "types";
import { GetStaticPathsContext, GetStaticProps, NextPage } from "next";
import { getContents, limit } from "libs/blog";

type BlogProps = {
  posts: Post[];
};

const blogIndexPage: NextPage<BlogProps> = ({ posts }) => {
  return (
    <div>
      <h1>ブログ一覧ページ</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Image
              layout="fill"
              objectFit="contain"
              alt="eye_catch"
              src={post.eye_catch.url}
            />

            <Link href={`/blog/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
            <p>{post.category?.category_name}</p>
            <p>{post.tags?.tag_name}</p>
            <p>{dayjs(post.createdAt).locale("ja").format("YYYY/MM/DD")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default blogIndexPage;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPathsContext
) => {
  // const page: any = context.params
  const { posts } = await getContents(limit);
  return {
    props: {
      posts,
    },
  };
};
