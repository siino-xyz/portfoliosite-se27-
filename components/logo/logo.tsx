import { Box } from "components/box/Box";
import Icon from "./se27kun.svg";
import * as styles from "./logo.css";

const Logo = () => {
  return (
    <Box>
      <Icon className={styles.logo} />
    </Box>
  );
};

export default Logo;
