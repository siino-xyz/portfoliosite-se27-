import Header from "components/header/header";
import type { NextPage } from "next";
import { container } from "styles/globalStyles.css";

const Home: NextPage = () => {
  return (
    <div className={container}>
      <Header />
      <main></main>
    </div>
  );
};

export default Home;
