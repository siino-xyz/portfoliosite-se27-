import React, { ReactElement } from "react";
import { Post } from "types";
import { GetStaticProps } from "next";
import { getContents, limit } from "libs/blog";
import BlogCard from "components/blogCard/blogCard";
import BlogLayout from "layout/layout";
import { NextPageWithLayout } from "pages/_app";
import { Box, SectionTitle } from "system";
import Main from "system/main/main";

type BlogProps = {
  posts: Post[];
};

const blogIndexPage: NextPageWithLayout<BlogProps> = ({ posts }) => {
  return (
    <Main>
      <SectionTitle title="All Posts" />
      <BlogCard posts={posts} />
    </Main>
  );
};

export default blogIndexPage;

blogIndexPage.getLayout = function getLayout(blogIndexPage: ReactElement) {
  return <BlogLayout>{blogIndexPage}</BlogLayout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await getContents(limit);
  return {
    props: {
      posts,
    },
  };
};
