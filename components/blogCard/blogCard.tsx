import classNames from "classnames";
import { Box } from "system/box/Box";
import TypoGraphy from "system/typography/typography";
import Image from "next/image";
import Link from "next/link";
import { sprinkles } from "styles";
import { MicroCMS_Category, Post } from "types";
import * as styles from "./blodCard.css";
import * as bStyles from "styles/borderUtils.css";
import dayjs from "dayjs";

type BlogCardProps = {
  posts: Post[];
};

const BlogCard = ({ posts }: BlogCardProps) => {
  return (
    <Box component="div" className={styles.blogCards}>
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/posts/${post.id}`}>
          <a>
            <Box
              component="article"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              className={classNames(styles.blogCard)}
              paddingTop="small"
              paddingRight="small"
              paddingLeft="small"
              paddingBottom="large"
              borderRadius="small"
              background={{ lightMode: "gray200", darkMode: "gray800" }}
            >
              <Box
                component="div"
                borderRadius="small"
                className={styles.imageContainer}
              >
                <Image
                  src={post.eye_catch.url}
                  layout="fill"
                  objectFit="contain"
                  alt={post.title}
                />
              </Box>
              <Box marginRight="small" paddingTop="medium">
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
                      background: "limeA200",
                    })}
                    paddingX="small"
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
                    <TypoGraphy
                      height="small"
                      component="span"
                      className={sprinkles({
                        color: { lightMode: "gray700", darkMode: "gray200" },
                      })}
                    >
                      {post.tag?.tag_name}
                    </TypoGraphy>
                  </Box>
                </Box>
                <TypoGraphy
                  component="span"
                  height="xsmall"
                  paddingLeft="xsmall"
                >
                  {dayjs(post.publishedAt).locale("ja").format("YYYY/MM/DD")}
                </TypoGraphy>
                <TypoGraphy
                  component="h3"
                  size="small"
                  weight="strong"
                  className={styles.titleabbreviation}
                >
                  {post.title}
                </TypoGraphy>
              </Box>
            </Box>
          </a>
        </Link>
      ))}
    </Box>
  );
};

export default BlogCard;
