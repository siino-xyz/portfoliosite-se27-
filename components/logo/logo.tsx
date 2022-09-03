import { Box } from "system/box/Box";
import Icon from "./se27kun.svg";
import * as styles from "./logo.css";

const Logo = () => {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      paddingLeft="small"
    >
      <Icon className={styles.logo} />
    </Box>
  );
};

export default Logo;
