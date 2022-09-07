import BlogLayout from "layout/layout";
import { client } from "libs";
import { getContentId, getContents } from "libs/blog";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Image from "next/image";
import { NextPageWithLayout } from "pages/_app";
import React, { ReactElement } from "react";
import { Box } from "system";
import TypoGraphy from "system/typography/typography";
import { Post } from "types";
import * as style from "styles/post.css";
import Main from "system/main/main";
import { sprinkles } from "styles";
import classNames from "classnames";
import dayjs from "dayjs";
import DOMPurify from "isomorphic-dompurify";

type PostDetailProps = {
  post: Post;
  posts: Post[];
};

const postDetail: NextPageWithLayout<PostDetailProps> = ({ post, posts }) => {
  const createSanitizeContext = (html: string) => {
    return { __html: DOMPurify.sanitize(html) };
  };

  return (
    <Main>
      <Box
        marginTop="large"
        borderRadius="small"
        className={style.imageContainer}
      >
        <Image
          src={post.eye_catch.url}
          layout="fill"
          objectFit="contain"
          alt={post.title}
        />
      </Box>
      <Box paddingX="medium" paddingTop="large">
        <TypoGraphy
          component="span"
          height="xsmall"
          paddingLeft="xsmall"
          color="gray"
          align="right"
          // className={styles.negmer}
        >
          {dayjs(post.publishedAt).locale("ja").format("YYYY/MM/DD")}
        </TypoGraphy>
        <TypoGraphy component="h1" color="neutral" size="large">
          {post.title}
        </TypoGraphy>
        <Box
          className={sprinkles({
            display: "flex",
            flexDirection: "row",
            gap: "medium",
            marginY: "small",
          })}
        >
          <TypoGraphy
            height="small"
            component="span"
            className={sprinkles({
              background: "black",
              borderRadius: "small",
            })}
            size="xxsmall"
            weight="strong"
            paddingX="xsmall"
            color="lime"
          >
            {post.category?.category_name}
          </TypoGraphy>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              component="span"
              className={classNames(
                "material-icons",
                sprinkles({
                  fontSize: "xsmall",
                  paddingTop: "xsmall",
                  paddingRight: "xsmall",
                  color: { lightMode: "gray700", darkMode: "gray200" },
                })
              )}
            >
              local_offer
            </Box>
            <TypoGraphy height="small" component="span" color="gray">
              {post.tag?.tag_name}
            </TypoGraphy>
          </Box>
        </Box>

        <TypoGraphy
          marginTop="xlarge"
          paddingX="large"
          component="p"
          color="neutral"
          size="small"
        >
          <p dangerouslySetInnerHTML={createSanitizeContext(post.body)} />
        </TypoGraphy>
      </Box>
    </Main>
  );
};

export default postDetail;

postDetail.getLayout = function getLayout(postDetail: ReactElement) {
  return <BlogLayout>{postDetail}</BlogLayout>;
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { posts } = await getContents();
  const id: any = context.params?.id;
  const post = await getContentId(id);
  return {
    props: {
      posts,
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map(
    (content: any) => `/blog/posts/${content.id}`
  );
  return {
    paths,
    fallback: false,
  };
};
