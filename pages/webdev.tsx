import { Box } from "components";
import { ColorModeProvider } from "components/colorModeToggle/ColorModeToggle";
import Header from "components/header/header";
import type { NextPage } from "next";
import Footer from "components/footer/footer";
import TypoGraphy from "components/typography/typography";

const Webdev: NextPage = () => {
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
            align="center"
          >
            Webサイト制作
          </TypoGraphy>

          <Box>
            <TypoGraphy component="h3">
              Webサイト制作のご依頼をお引き受けしています
            </TypoGraphy>
          </Box>
        </Box>
      </Box>
      <Footer />
    </ColorModeProvider>
  );
};

export default Webdev;
