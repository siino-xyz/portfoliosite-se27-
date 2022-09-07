import { ColorModeProvider } from "components/colorModeToggle/ColorModeToggle";
import Footer from "components/footer/footer";
import Header from "components/header/header";
import { ReactNode } from "react";
import { Box } from "system";
import * as style from "./layout.css";

type Props = {
  children?: ReactNode;
};

const BlogLayout = ({ children }: Props) => {
  return (
    <ColorModeProvider>
      <Box className={style.layout}>
        <Header />
        {children}
        <Footer />
      </Box>
    </ColorModeProvider>
  );
};

export default BlogLayout;
