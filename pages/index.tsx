import { ColorModeProvider } from "components/colorModeToggle/ColorModeToggle";
import ContentBlock from "components/contentBlock/contentBlock";
import Header from "components/header/header";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <ColorModeProvider>
      <Header />
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
    </ColorModeProvider>
  );
};

export default Home;
