import {
  MicroCMSResponse,
  MicroCMS_Category,
  MicroCMS_Tag,
  Post,
  Queries,
} from "types";
import { client } from "./client";
import { siteConfig } from "site.config";

// const minLimit = parseInt(siteConfig.defaultMinLimit);
export const limit = 2;
export const limitForToppage = 6;

export const getContents = async (
  limit: number = 1,
  postFilter?: string,
  currentPage: number = 1
): Promise<{
  posts: Post[];
  category: MicroCMS_Category[];
  tags: MicroCMS_Tag[];
  pager: number[];
}> => {
  const [{ posts, pager }, category, tags] = await Promise.all([
    getCategoriesByFilter(limit, currentPage, postFilter),
    getCategories(),
    getTags(),
  ]);
  return {
    posts: posts.contents,
    category: category.contents,
    tags: tags.contents,
    pager,
  };
};

export const getContentId = async (contentId: string) => {
  const res = await client.getListDetail<Post>({
    endpoint: "blog",
    contentId: contentId,
    queries: { depth: 2 },
  });
  return res;
};

export const getPosts = async (queries?: Queries) => {
  const res = await client.getList<Post>({
    endpoint: "blog",
    queries,
  });
  return res;
};

export const getPostsById = async (postid: string) => {
  const res = await client.getListDetail<Post>({
    endpoint: "blog",
    contentId: postid,
    queries: { depth: 2 },
  });
  return res;
};

export const getCategoriesByFilter = async (
  limit: number,
  currentPage: number,
  postFilter?: string
): Promise<{ posts: MicroCMSResponse<Post>; pager: number[] }> => {
  const queries: Queries = {
    limit: limit,
    filters: postFilter,
    offset: (currentPage - 1) * limit,
  };
  const posts = await client.getList<Post>({
    endpoint: "blog",
    queries: queries,
  });
  const pager = [...Array(Math.ceil(posts.totalCount / limit)).keys()];
  return { posts, pager };
};

export const getCategories = async (queries?: Queries) => {
  const res = await client.getList<MicroCMS_Category>({
    endpoint: "category",
    queries,
  });
  return res;
};

export const getTags = async (queries?: Queries) => {
  const res = await client.getList<MicroCMS_Tag>({
    endpoint: "tags",
    queries,
  });
  return res;
};
