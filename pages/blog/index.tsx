import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import Image from "next/image";
import { imageCroped } from "styles";
import { Post } from "types";
import { GetStaticProps, NextPage } from "next";
import { getContents } from "libs/blog";

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
            <div className={imageCroped}>
              <Image
                layout="fill"
                objectFit="contain"
                alt="eye_catch"
                src={post.eye_catch.url}
              />
            </div>
            <Link href={`/blog/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
            <p>{post.category?.category_name}</p>
            <p>{post.tag?.tag_name}</p>
            <p>{dayjs(post.createdAt).locale("ja").format("YYYY/MM/DD")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default blogIndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await getContents();
  return {
    props: {
      posts,
    },
  };
};
