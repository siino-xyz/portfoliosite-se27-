import classNames from "classnames";
import { Box } from "system/box/Box";
import TypoGraphy from "system/typography/typography";
import Image from "next/image";
import Link from "next/link";
import { sprinkles } from "styles";
import { Post } from "types";
import * as styles from "./blodCard.css";
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
              paddingBottom="small"
              borderRadius="small"
              background={{ lightMode: "gray500", darkMode: "gray500" }}
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
              <Box
                marginRight="small"
                paddingTop="none"
                display="flex"
                flexDirection="column"
                gap="none"
              >
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
                          color: "gray300",
                        })
                      )}
                    >
                      local_offer
                    </Box>
                    <TypoGraphy
                      height="small"
                      component="span"
                      className={sprinkles({
                        color: "gray300",
                      })}
                    >
                      {post.tag?.tag_name}
                    </TypoGraphy>
                  </Box>
                </Box>

                <TypoGraphy
                  component="h3"
                  size="xsmall"
                  weight="strong"
                  color="white"
                  paddingBottom="small"
                  align="left"
                  className={styles.titleabbreviation}
                >
                  {post.title}
                </TypoGraphy>
                <TypoGraphy
                  component="span"
                  height="xsmall"
                  paddingLeft="xsmall"
                  color="gray300"
                  align="right"
                  className={styles.negmer}
                >
                  {dayjs(post.publishedAt).locale("ja").format("YYYY/MM/DD")}
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
