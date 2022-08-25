import { ColorModeProvider } from "components/colorModeToggle/ColorModeToggle";
import Header from "components/header/header";
import Text from "components/typography/text/text";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <ColorModeProvider>
        <Header />
        <main>
          <Text>全角ゴシックアンティークです。adsf</Text>
          <p>MuseoMuseo</p>
        </main>
      </ColorModeProvider>
    </>
  );
};

export default Home;
