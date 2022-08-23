import {
  ColorModeProvider,
  ColorModeToggle,
} from "components/colorModeToggle/ColorModeToggle";
import Header from "components/header/header";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <ColorModeProvider>
      <ColorModeToggle />
      <Header />
      <main></main>
    </ColorModeProvider>
  );
};

export default Home;
