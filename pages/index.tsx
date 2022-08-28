import { Box } from "components";
import { ColorModeProvider } from "components/colorModeToggle/ColorModeToggle";
import ContentBlock from "components/contentBlock/contentBlock";
import Header from "components/header/header";
import TypoGraphy from "components/typography/typography";
import dayjs from "dayjs";
import Link from "next/link";
import { getContents, limitForToppage } from "libs/blog";
import type { GetStaticProps, NextPage } from "next";
import * as styles from "styles/tempStyles.css";
import { Post } from "types";
import { sprinkles } from "styles";
import Image from "next/image";
import * as bStyles from "styles/borderUtils.css";
import classNames from "classnames";

type HomePageProps = {
  posts: Post[];
};

const Home: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <ColorModeProvider>
      <Header />
      <Box component="main" maxWidth="xxlarge" marginX="auto" paddingX="medium">
        <Box component="section" paddingX="medium">
          <TypoGraphy
            component={"h2"}
            size="xxlarge"
            marginY="large"
            height="xxxlarge"
            family="jnr"
          >
            コンセプト
          </TypoGraphy>
        </Box>
        <Box component="section" paddingY="xxlarge" paddingX="medium">
          <TypoGraphy
            component={"h2"}
            size="xxlarge"
            marginY="large"
            height="xxxlarge"
            family="jnr"
          >
            サービス
          </TypoGraphy>
          <Box>
            <ContentBlock
              sctiontitle="Webサイト制作"
              body='アイテムは width および height プロパティによって寸法が決められます。寸法は完全に固定で、フレックスコンテナーに連動して収縮したり伸長したりすることはありません。これは"flex: 0 0 auto" と同等です。'
              src="/IBMPS1.jpg"
              alt="ibm_pc"
            />
            <ContentBlock
              sctiontitle="受託開発"
              body='アイテムは width および height プロパティによって寸法が決ん。これは"flex: 0 0 auto" と同等です。'
              src="/IBMPS1.jpg"
              alt="ibm_pc"
            />
          </Box>
        </Box>
        <Box component="section" paddingX="medium">
          <TypoGraphy
            component={"h2"}
            size="xxlarge"
            marginY="large"
            height="xxxlarge"
            family="jnr"
          >
            ブログ
          </TypoGraphy>
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
                        width={post.eye_catch.width}
                        height={post.eye_catch.height}
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
                    <TypoGraphy component="span">
                      {post.tags?.tag_name}
                    </TypoGraphy>
                    <TypoGraphy component="span">
                      {dayjs(post.publishedAt)
                        .locale("ja")
                        .format("YYYY/MM/DD")}
                    </TypoGraphy>
                  </Box>
                </a>
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </ColorModeProvider>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await getContents(limitForToppage);
  return {
    props: {
      posts,
    },
  };
};
