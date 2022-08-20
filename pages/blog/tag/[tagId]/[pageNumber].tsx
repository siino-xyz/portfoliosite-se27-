import { getContents, getPosts, getTags, limit } from "libs/blog";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { MicroCMS_Category, MicroCMS_Tag, Post } from "types";

type TagPageProps = {
  posts: Post[];
  pager: [];
  selectedTag: MicroCMS_Tag;
  category: MicroCMS_Category[];
  currentPage: number;
  tags: MicroCMS_Tag[];
};

const TagIndexPage: NextPage<TagPageProps> = ({
  posts,
  pager,
  selectedTag,
  category,
  currentPage,
  tags,
}) => {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <h3>{post.tags?.tag_name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagIndexPage;

export const getAllTagPagePaths = async () => {
  const { contents: tags } = await getTags();
  const paths = await Promise.all(
    tags.map((tag) => {
      getPosts({ filters: `tags[equals]${tag.id}`, limit: 1 }).then(
        ({ totalCount }) => {
          return [...Array(Math.ceil(totalCount / limit)).keys()].map(
            (num) => ({
              params: {
                pageNumber: (num + 1).toString(),
                tagId: tag.id,
              },
            })
          );
        }
      );
    })
  );

  return paths.flat();
};

export const getStaticPaths = async () => {
  const paths = await getAllTagPagePaths();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageNumber: any = params?.pageNumber || "1";
  const tagId = params?.tagId as string;

  const postFilter = tagId !== undefined ? `tags[equals]${tagId}` : undefined;
  const { posts, pager, category, tags } = await getContents(
    postFilter,
    Number(pageNumber)
  );
  const selectedTag =
    tagId !== undefined
      ? tags.find((content) => content.id === tagId)
      : undefined;

  return {
    props: {
      currentPage: parseInt(pageNumber),
      posts,
      pager,
      category,
      selectedTag,
      tags,
    },
  };
};
