import { Posts } from "types";
import { client } from "./client";
import { siteConfig } from "site.config";

// const minLimit = parseInt(siteConfig.defaultMinLimit);
const defaultLimit = parseInt(siteConfig.defaultLimit);

export const getPosts = async (): Promise<{
  posts: Posts[];
  defaultLimit?: number;
}> => {
  const posts = await client.getList<Posts>({
    endpoint: "blog",
    queries: { limit: defaultLimit },
  });
  return {
    posts: posts.contents,
  };
};
