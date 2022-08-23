import Pagination from "components/pagination/pagination";
import { getCategories, getContents, getPosts, limit } from "libs/blog";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { MicroCMS_Category, Post } from "types";

type CategoryPageProps = {
  posts: Post[];
  pager: [];
  selectedCategory: MicroCMS_Category;
  category: MicroCMS_Category[];
  currentPage: number;
};

const CategoryPage: NextPage<CategoryPageProps> = ({
  posts,
  pager,
  selectedCategory,
  currentPage,
  category,
}) => {
  return (
    <div>
      <ul>
        {category.map((category) => (
          <li key={category.id}>
            <p>{category.category_name}</p>
          </li>
        ))}
      </ul>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.category?.id}</p>
          </li>
        ))}
      </ul>
      {posts.length > 0 && (
        <ul>
          <Pagination
            pager={pager}
            currentPage={currentPage}
            selectedCategory={selectedCategory}
          />
        </ul>
      )}
    </div>
  );
};

export default CategoryPage;

export const getAllCategoryPagePaths = async () => {
  const { contents: category } = await getCategories();
  const paths = await Promise.all(
    category.map((category) =>
      getPosts({ filters: `category[equals]${category.id}`, limit: 1 }).then(
        ({ totalCount }) => {
          return [...Array(Math.ceil(totalCount / limit)).keys()].map(
            (num) => ({
              params: {
                pageNumber: (num + 1).toString(),
                categoryId: category.id,
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
  const paths = await getAllCategoryPagePaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageNumber: any = params?.pageNumber || "1";
  const categoryId = params?.categoryId as string;

  const postFilter =
    categoryId !== undefined ? `category[equals]${categoryId}` : undefined;
  const { posts, pager, category, tags } = await getContents(
    postFilter,
    Number(pageNumber)
  );
  const selectedCategory =
    categoryId !== undefined
      ? category.find((content) => content.id === categoryId)
      : undefined;

  return {
    props: {
      currentPage: parseInt(pageNumber),
      posts,
      pager,
      category,
      selectedCategory,
      tags,
    },
  };
};
