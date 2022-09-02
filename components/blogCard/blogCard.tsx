import classNames from "classnames";
import { Box } from "components/box/Box";
import TypoGraphy from "components/typography/typography";
import Image from "next/image";
import Link from "next/link";
import { sprinkles } from "styles";
import { Post } from "types";
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
          <a
            className={sprinkles({
              textDecoration: "none",
            })}
          >
            <Box
              component="article"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              className={classNames(styles.blogCard, bStyles.borderAll)}
              background={{ lightMode: "white", darkMode: "black" }}
              padding="small"
            >
              <Box component="div" className={styles.imageContainer}>
                <Image
                  src={post.eye_catch.url}
                  layout="fill"
                  objectFit="contain"
                  alt={post.title}
                />
              </Box>
              <TypoGraphy
                component="h3"
                size="medium"
                weight="strong"
                className={styles.titleabbreviation}
              >
                {post.title}
              </TypoGraphy>
              <TypoGraphy component="span">
                {post.category?.category_name}
              </TypoGraphy>
              <TypoGraphy component="span">{post.tag?.tag_name}</TypoGraphy>
              <TypoGraphy component="span">
                {dayjs(post.publishedAt).locale("ja").format("YYYY/MM/DD")}
              </TypoGraphy>
            </Box>
          </a>
        </Link>
      ))}
    </Box>
  );
};

export default BlogCard;
