import React from "react";
import { client } from "libs";
import Link from "next/link";
import dayjs from "dayjs";
import Image from "next/image";
import { imageCroped } from "styles";

type BlogContents = {
  id: string;
  title: string;
  body: string;
  description: string;
  category: string;
  tag: string;
};

const blogIndexPage = ({ blog }: { blog: any }) => {
  return (
    <div>
      <h1>ブログ一覧ページ</h1>
      <ul>
        {blog.map((blog: any) => (
          <li key={blog.id}>
            <div className={imageCroped}>
              <Image
                layout="fill"
                objectFit="contain"
                alt="eye_catch"
                src={blog.eye_catch.url}
              />
            </div>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
            <p>{blog.category.category_name}</p>
            <p>{blog.tag.tag_name}</p>
            <p>{dayjs(blog.createdAt).locale("ja").format("YYYY/MM/DD")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default blogIndexPage;

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
