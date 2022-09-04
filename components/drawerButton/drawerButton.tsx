import classNames from "classnames";
import { Hei, Kai } from "system";
import Button from "system/button/button";
import * as styles from "./drawerButton.css";

export const DrawerButton = ({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) => {
  return (
    <Button
      className={classNames(styles.drawer, open ? styles.isOpen : null)}
      onClick={onClick}
    >
      {open ? (
        <Hei className={styles.vectorFonts} />
      ) : (
        <Kai className={styles.vectorFonts} />
      )}
    </Button>
  );
};
