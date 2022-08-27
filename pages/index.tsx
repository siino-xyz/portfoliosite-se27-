import { Box } from "components";
import { ColorModeProvider } from "components/colorModeToggle/ColorModeToggle";
import ContentBlock from "components/contentBlock/contentBlock";
import Header from "components/header/header";
import { H2 } from "components/typography";
import { getContents, limitForToppage } from "libs/blog";
import type { GetStaticPathsContext, GetStaticProps, NextPage } from "next";
import * as styles from "styles/tempStyles.css";
import { Post } from "types";

type HomePageProps = {
  posts: Post[];
};

const Home: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <ColorModeProvider>
      <Header />
      <Box component="main" maxWidth="xxlarge" marginX="auto" paddingX="medium">
        <Box component="section" paddingX="medium">
          <Box component="div" className={styles.h2styles}>
            <H2 color="reverse">コンセプト</H2>
          </Box>
        </Box>
        <Box component="section" paddingY="xxlarge" paddingX="medium">
          <Box component="div" className={styles.h2styles}>
            <H2 color="reverse">サービス</H2>
          </Box>
          <ContentBlock
            h3text="ウェブサイト制作"
            body='アイテムは width および height プロパティによって寸法が決められます。寸法は完全に固定で、フレックスコンテナーに連動して収縮したり伸長したりすることはありません。これは"flex: 0 0 auto" と同等です。'
            src="/IBMPS1.jpg"
            alt="ibm_pc"
          />
          <ContentBlock
            h3text="受託開発"
            body='アイテムは width および height プロパティによって寸法が決められます。寸法は完全に固定で、フレックスコンテナーに連動して収縮したり伸長したりすることはありません。これは"flex: 0 0 auto" と同等です。'
            src="/IBMPS1.jpg"
            alt="ibm_pc"
          />
        </Box>
        <Box component="section" paddingX="medium">
          <Box component="div" className={styles.h2styles}>
            <H2 color="reverse">ブログ</H2>
            <Box>
              <ul></ul>
              {posts.map((post) => (
                <li key={post.id}>
                  <p>{post.title}</p>
                </li>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </ColorModeProvider>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPathsContext
) => {
  // const page: any = context.params
  const { posts } = await getContents(limitForToppage);
  return {
    props: {
      posts,
    },
  };
};
