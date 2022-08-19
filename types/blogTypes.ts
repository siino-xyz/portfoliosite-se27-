import { MicroCMSListContent, MicroCMSQueries } from "microcms-js-sdk";

export type Queries = MicroCMSQueries;

export interface Post extends MicroCMSListContent {
  title: string;
  body: string;
  description: string;
  updatedAt: string;
  publishedAt: string;
  eye_catch: MicroCMS_EyeCatch;
  ogp_image?: MicroCMS_OGPImage;
  category?: MicroCMS_Category;
  tag?: MicroCMS_Tag;
}

export type MicroCMS_Category = {
  id: string;
  category_name: string;
};

export type MicroCMS_Tag = {
  id: string;
  tag_name: string;
};

export type MicroCMS_EyeCatch = {
  url: string;
  height: number;
  width: number;
};
export type MicroCMS_OGPImage = {
  url?: string | null;
  height?: number | null;
  width?: number | null;
  title?: string | null;
};
