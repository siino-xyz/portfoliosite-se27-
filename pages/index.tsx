import { ColorModeProvider } from "components/colorModeToggle/ColorModeToggle";
import Header from "components/header/header";
import type { NextPage } from "next";
import {
  Paragraph,
  H1,
  H2,
  H3,
  H4,
  Code,
  XXsmall,
  Xsmall,
} from "components/typography";

const Home: NextPage = () => {
  return (
    <>
      <ColorModeProvider>
        <Header />
        <main>
          <Paragraph>本文のテキスト。</Paragraph>
          <H1>タイトル</H1>
          <Code>Title</Code>
        </main>
      </ColorModeProvider>
    </>
  );
};

export default Home;
