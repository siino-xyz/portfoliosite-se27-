import Link from "next/link";
import classNames from "classnames";
import * as styles from "./header.css";
import * as bStyles from "styles/borderUtils.css";
import { useState } from "react";
import { Box } from "components/box/Box";
import { sprinkles } from "styles";
import { ColorModeToggle } from "components/colorModeToggle/ColorModeToggle";
import Logo from "components/logo/logo";
import TypoGraphy from "components/typography/typography";

const OpenBtn = ({ open, onClick }: { open: boolean; onClick: () => void }) => {
  return (
    <Box
      className={classNames(styles.hamburger, open ? styles.isOpen : null)}
      onClick={onClick}
    ></Box>
  );
};

const GlobalMenuContent = ({ open }: { open: boolean }) => {
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
      >
        {menuItems.map((item) => (
          <Box key={item.id}>
            <Link href={item.href}>
              <a>
                <TypoGraphy component="span" size="xsmall" weight="strong">
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
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <Box position="sticky" top={0} left={0} zIndex={1}>
      <Box
        position="relative"
        alignItems="center"
        paddingX={{ mobile: "small", tablet: "large", desktop: "xlarge" }}
        width="full"
        className={classNames(styles.header)}
      >
        <Logo />
        <GlobalMenuContent open={menuOpen} />
        <ColorModeToggle />
        <OpenBtn open={menuOpen} onClick={toggleMenu} />
      </Box>
    </Box>
  );
};

export default Header;
