import { Box } from "components";
import { ColorModeProvider } from "components/colorModeToggle/ColorModeToggle";
import Header from "components/header/header";
import type { NextPage } from "next";
import Footer from "components/footer/footer";
import TypoGraphy from "components/typography/typography";
import TextContents from "components/paragraph/paragraph";
import List from "components/list/list";

const ContractJobPage: NextPage = () => {
  return (
    <ColorModeProvider>
      <Header />
      <Box component="main" maxWidth="xxlarge" marginX="auto" paddingX="medium">
        <Box component="section" paddingY="xxlarge" paddingX="medium">
          <TypoGraphy
            component={"h2"}
            size="xxlarge"
            marginY="large"
            height="xxxlarge"
            family="jnr"
            align="left"
          >
            受託開発
          </TypoGraphy>

          <Box>
            <TextContents
              title="概要"
              paragraph1="複素数体であれば、任意のCM-タイプの A は、実際、数体である定義体（英語版）(field of definition)を持っている。自己準同型環の可能なタイプは、対合（ロサチの対合（英語版）(Rosati involution）をもつ環として既に分類されていて、CM-タイプのアーベル多様体の分類を導き出す。楕円曲線と同じような方法でCM-タイプの多様体を構成するには、Cd の中の格子 Λ から始め、アーベル多様体のリーマンの関係式（英語版）(Riemann relations)を考えに入れる必要がある。 CM-タイプ(CM-type)は、単位元での A の正則接空間上にある EndQ(A) の（最大）可換部分環 L の作用を記述したものである。単純な種類のスペクトル理論が適応され、L が固有ベクトルの基底を通して作用することを示すことができる。言い換えると、L は A の正則ベクトル場の上の対角行列を通した作用を持っている。L 自体がある複数の体の積というよりも数体であるという単純な場合には、CM-タイプは L の複素埋め込み（英語版）(complex embedding)のリストである。複素共役をなすペアとして、2d 個の複素埋め込みがあり、CM-タイプは各々のペアのから一つを選択する。そのようなCM-タイプの全てが実現されることが知られている。"
              paragraph2="複素数体であれば、任意のCM-タイプの A は、実際、数体である定義体（英語版）(field of definition)を持っている。自己準同型環の可能なタイプは、対合（ロサチの対合（英語版）(Rosati involution）をもつ環として既に分類されていて、CM-タイプのアーベル多様体の分類を導き出す。楕円曲線と同じような方法でCM-タイプの多様体を構成するには、Cd の中の格子 Λ から始め、アーベル多様体のリーマンの関係式（英語版）(Riemann relations)を考えに入れる必要がある。 CM-タイプ(CM-type)は、単位元での A の正則接空間上にある EndQ(A) の（最大）可換部分環 L の作用を記述したものである。単純な種類のスペクトル理論が適応され、L が固有ベクトルの基底を通して作用することを示すことができる。言い換えると、L は A の正則ベクトル場の上の対角行列を通した作用を持っている。L 自体がある複数の体の積というよりも数体であるという単純な場合には、CM-タイプは L の複素埋め込み（英語版）(complex embedding)のリストである。複素共役をなすペアとして、2d 個の複素埋め込みがあり、CM-タイプは各々のペアのから一つを選択する。そのようなCM-タイプの全てが実現されることが知られている。"
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
      <Footer />
    </ColorModeProvider>
  );
};

export default ContractJobPage;
