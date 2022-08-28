import Pagination from "components/pagination/pagination";
import {
  getCategories,
  getContents,
  getPosts,
  getTags,
  limit,
} from "libs/blog";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { MicroCMS_Category, MicroCMS_Tag, Post } from "types";

type TagPageProps = {
  posts: Post[];
  pager: [];
  selectedTag: MicroCMS_Tag;
  tags: MicroCMS_Tag[];
  category: MicroCMS_Category[];
  currentPage: number;
};

const TagPage: NextPage<TagPageProps> = ({
  posts,
  pager,
  selectedTag,
  currentPage,
  category,
  tags,
}) => {
  return (
    <div>
      <ul>
        {tags.map((tag) => (
          <li key={tag.id}>
            <p>{tag.tag_name}</p>
          </li>
        ))}
      </ul>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.tags?.id}</p>
          </li>
        ))}
      </ul>
      {posts.length > 0 && (
        <ul>
          <Pagination
            pager={pager}
            currentPage={currentPage}
            selectedTag={selectedTag}
          />
        </ul>
      )}
    </div>
  );
};

export default TagPage;

export const getAllTagPagePaths = async () => {
  const { contents: tags } = await getTags();
  const paths = await Promise.all(
    tags.map((tag) =>
      getPosts({ filters: `tag[equals]${tag.id}`, limit: 1 }).then(
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
      )
    )
  );

  return paths.flat();
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllTagPagePaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageNumber: any = params?.pageNumber || "1";
  const tagId = params?.tagId as string;

  const postFilter = tagId !== undefined ? `tag[equals]${tagId}` : undefined;
  const { posts, pager, category, tags } = await getContents(
    limit,
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
