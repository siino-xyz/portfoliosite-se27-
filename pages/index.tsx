import { Box } from "components";
import { ColorModeProvider } from "components/colorModeToggle/ColorModeToggle";
import ContentBlock from "components/contentBlock/contentBlock";
import Header from "components/header/header";
import ImageSizes from "components/imageSizes/imageSizes";
import Typo from "components/typography/typography";
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
        <Box component="section" paddingX="medium"></Box>
        <Box component="section" paddingY="xxlarge" paddingX="medium">
          <ContentBlock
            sctiontitle="Webサイト制作"
            body='アイテムは width および height プロパティによって寸法が決められます。寸法は完全に固定で、フレックスコンテナーに連動して収縮したり伸長したりすることはありません。これは"flex: 0 0 auto" と同等です。'
            src="/IBMPS1.jpg"
            alt="ibm_pc"
          />
          <ContentBlock
            sctiontitle="受託開発"
            body='アイテムは width および height プロパティによって寸法が決められます。寸法は完全に固定で、フレックスコンテナーに連動して収縮したり伸長したりすることはありません。これは"flex: 0 0 auto" と同等です。'
            src="/IBMPS1.jpg"
            alt="ibm_pc"
          />
        </Box>
        <Box component="section" paddingX="medium">
          <Box>
            <Box component="div" className={styles.blogCards}>
              {posts.map((post) => (
                <Box
                  component="article"
                  key={post.id}
                  display="flex"
                  flexDirection="column"
                  className={styles.blogCard}
                >
                  <ImageSizes src={post.eye_catch.url} alt="eye-Catch" />
                  <p>{post.title}</p>
                </Box>
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
