import { Box } from "components";
import { ColorModeProvider } from "components/colorModeToggle/ColorModeToggle";
import Header from "components/header/header";
import type { NextPage } from "next";
import Footer from "components/footer/footer";
import TypoGraphy from "system/typography/typography";
import TextContents from "system/typography/paragraph/paragraph";
import List from "components/list/list";

const Webdev: NextPage = () => {
  return (
    <ColorModeProvider>
      <Header />
      <Box component="main" maxWidth="xxlarge" marginX="auto" paddingX="medium">
        <Box component="section" paddingY="xxlarge" paddingX="medium">
          <TypoGraphy
            component={"h2"}
            size="xxlarge"
            paddingX={{
              mobile: "none",
              tablet: "xsmall",
              desktop: "xxlarge",
            }}
            marginBottom={{
              mobile: "small",
              tablet: "large",
              desktop: "xlarge",
            }}
            marginTop={{ mobile: "small", tablet: "large", desktop: "xlarge" }}
            height="xxxlarge"
            family="jnr"
            align="left"
          >
            Webサイト制作
          </TypoGraphy>
          <Box
            paddingX={{
              mobile: "none",
              tablet: "medium",
              desktop: "xxxlarge",
            }}
          >
            <Box>
              <TextContents
                title="概要"
                paragraph1="複素数体であれば、任意のCM-タイプの A は、実際、数体である定義体（英語版）(field of definition)を持っている。自己準同型環の可能なタイプは、対合（ロサチの対合（英語版）(Rosatiinvolution）をもつ環として既に分類されていて、CM-タイプのアーベル多様体の分類を導き出す。"
                paragraph2="楕円曲線と同じような方法でCM-タイプの多様体を構成するには、Cd の中の格子 Λ から始め、アーベル多様体のリーマンの関係式（英語版）(Riemann relations)を考えに入れる必要がある。 CM-タイプ(CM-type)は、単位元での A の正則接空間上にある EndQ(A) の（最大）可換部分環 L の作用を記述したものである。単純な種類のスペクトル理論が適応され、L が固有ベクトルの基底を通して作用することを示すことができる。"
              />
            </Box>
            <List listStyle={"square"}>
              <TypoGraphy component="li" size="medium">
                いろはにほへと
              </TypoGraphy>
              <TypoGraphy component="li" size="medium">
                いろはにほへと
              </TypoGraphy>
              <TypoGraphy component="li" size="medium">
                いろはにほへと
              </TypoGraphy>
            </List>
          </Box>
        </Box>
      </Box>
      <Footer />
    </ColorModeProvider>
  );
};

export default Webdev;
