import { Box } from "components";
import { ColorModeProvider } from "components/colorModeToggle/ColorModeToggle";
import ContentBlock from "components/contentBlock/contentBlock";
import Header from "components/header/header";
import { getContents, limitForToppage } from "libs/blog";
import type { GetStaticProps, NextPage } from "next";
import { MicroCMS_Category, Post } from "types";
import Footer from "components/footer/footer";
import BlogCard from "components/blogCard/blogCard";
import { SectionTitle } from "system/typography/sectionTitle/sectionTitle";
import { Section } from "system/section/section";
import Main from "system/main/main";

type HomePageProps = {
  posts: Post[];
};

const Home: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <ColorModeProvider>
      <Header />
<<<<<<< HEAD
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
            body='アイテムは width および height プロパティによって寸法が決められます。寸法は完全に固定で、フレックスコンテナーに連動して収縮したり伸長したりすることはありまん。これは"flex: 0 0 auto" と同等です。'
            src="/IBMPS1.jpg"
            alt="ibm_pc"
          />
        </Box>
        <Box component="section" paddingX="medium">
=======

      <Main>
        <Section>
          <SectionTitle title="Service" />
>>>>>>> dev
          <Box>
            <ContentBlock
              sctiontitle="Webサイト制作"
              body='アイテムは width および height プロパティによって寸法が決められます。寸法は完全に固定で、フレックスコンテナーに連動して収縮したり伸長したりすることはありません。これは"flex: 0 0 auto" と同等です。'
              src="/IBMPS1.jpg"
              alt="ibm_pc"
              link="/webdev"
            />
            <ContentBlock
              sctiontitle="受託開発"
              body='アイテムは width および height プロパティによって寸法が決ん。これは"flex: 0 0 auto" と同等です。'
              src="/IBMPS1.jpg"
              alt="ibm_pc"
              link="/"
            />
          </Box>
        </Section>
        <Section>
          <SectionTitle title="Blog" />
          <BlogCard posts={posts} />
        </Section>
      </Main>
      <Footer />
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
