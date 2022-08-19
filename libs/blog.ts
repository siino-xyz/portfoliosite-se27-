import { Post } from "types";
import { client } from "./client";
import { siteConfig } from "site.config";

// const minLimit = parseInt(siteConfig.defaultMinLimit);
const limit = parseInt(siteConfig.defaultLimit);

export const getContents = async (): Promise<{ posts: Post[] }> => {
  const [posts] = await Promise.all([getPosts()]);
  return {
    posts: posts.contents,
  };
};

//idだけを取得
export const getContentId = async (contentId: string) => {
  const res = await client.getListDetail<Post>({
    endpoint: "blog",
    contentId: contentId,
    queries: { depth: 2 },
  });
  return res;
};

//記事スキーマだけを取得
export const getPosts = async (limit?: number) => {
  const res = await client.getList<Post>({
    endpoint: "blog",
    queries: { limit: limit },
  });
  return res;
};
