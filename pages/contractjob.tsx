import { Box } from "components";
import { ColorModeProvider } from "components/colorModeToggle/ColorModeToggle";
import Header from "components/header/header";
import type { NextPage } from "next";
import { Post } from "types";
import Footer from "components/footer/footer";

const ContractJobPage: NextPage = () => {
  return (
    <ColorModeProvider>
      <Header />
      <Box
        component="main"
        maxWidth="xxlarge"
        marginX="auto"
        paddingX="medium"
      ></Box>
      <Footer />
    </ColorModeProvider>
  );
};

export default ContractJobPage;
