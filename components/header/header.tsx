import classNames from "classnames";
import * as styles from "./header.css";
import { Box } from "system/box/Box";
import { ColorModeToggle } from "components/colorModeToggle/ColorModeToggle";
import Logo from "components/logo/logo";
import { useState } from "react";
import { Hei, Kai } from "system";
import Button from "system/button/button";

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
        <Hei className={styles.inner} />
      ) : (
        <Kai className={styles.inner} />
      )}
    </Button>
  );
};

import Link from "next/link";
import TypoGraphy from "system/typography/typography";

type MenuListProps = {
  open: boolean;
};

export const MenuList = ({ open }: MenuListProps) => {
  const menuItems = [
    { id: 1, title: "トップ", href: "./" },
    { id: 2, title: "Web制作/開発", href: "./" },
    { id: 3, title: "委託開発", href: "./" },
    { id: 4, title: "ブログ", href: "./" },
    { id: 5, title: "コンタクト", href: "./" },
    { id: 6, title: "クレジット", href: "./" },
  ];

  return (
    <nav
      className={classNames(
        styles.globalMenuContent,
        open ? styles.menuIsShow : null
      )}
    >
      <Box
        display="flex"
        flexDirection={{ mobile: "column", tablet: "column", desktop: "row" }}
        gap="xlarge"
        paddingTop={{ mobile: "xxxlarge", desktop: "none" }}
        justifyContent="center"
        zIndex={2}
      >
        {menuItems.map((item) => (
          <Box key={item.id}>
            <Link href={item.href}>
              <a>
                <TypoGraphy
                  component="span"
                  size="xsmall"
                  weight="strong"
                  color="black"
                  className={styles.menuitem}
                >
                  {item.title}
                </TypoGraphy>
              </a>
            </Link>
          </Box>
        ))}
      </Box>
    </nav>
  );
};

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const toggleAction = () => setIsShow((open) => !open);
  const closeAction = () => setIsShow(false);

  return (
    <Box position="sticky" top={0} left={0} zIndex={1}>
      <Box
        position="relative"
        alignItems="center"
        width="full"
        className={classNames(styles.header)}
      >
        <Logo />
        <MenuList open={isShow} />
        <ColorModeToggle />
        <DrawerButton open={isShow} onClick={toggleAction} />
      </Box>
      {/* {isShow && <div className={styles.mask} onClick={closeAction}></div>} */}
    </Box>
  );
};

export default Header;
