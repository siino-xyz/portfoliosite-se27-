import classNames from "classnames";
import * as styles from "./header.css";
import { Box } from "system/box/Box";
import { ColorModeToggle } from "components/colorModeToggle/ColorModeToggle";
import Logo from "components/logo/logo";
import { DrawerButton } from "components/drawerButton/drawerButton";
import { GlobalMenuContent } from "components/globalmenuContent/globalmenuContent";
import { ToggleOpener } from "hooks/toggleOpener";

const Header = () => {
  const { menuOpen, toggleMenu } = ToggleOpener();
  return (
    <Box position="sticky" top={0} left={0} zIndex={1}>
      <Box
        position="relative"
        alignItems="center"
        width="full"
        className={classNames(styles.header)}
      >
        <Logo />
        <GlobalMenuContent open={menuOpen} />
        <ColorModeToggle />
        <DrawerButton open={menuOpen} onClick={toggleMenu} />
      </Box>
    </Box>
  );
};

export default Header;
