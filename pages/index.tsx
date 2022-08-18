import type { NextPage } from "next";
import { container } from "styles/globalStyles.css";

const Home: NextPage = () => {
  return (
    <div className={container}>
      <main>
        <p>トップページ</p>
      </main>
    </div>
  );
};

export default Home;
