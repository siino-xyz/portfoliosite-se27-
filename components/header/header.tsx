import Link from "next/link";
import classNames from "classnames";
import * as styles from "./header.css";
import * as bStyles from "styles/borderUtils.css";
import { useState } from "react";
import { Box } from "components/box/Box";
import { sprinkles } from "styles";
import { ColorModeToggle } from "components/colorModeToggle/ColorModeToggle";
import Logo from "components/logo/logo";

const Hamburger = ({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className={classNames(styles.hamburger, open ? styles.isOpen : null)}
      onClick={onClick}
    >
      <Box
        className={styles.hamBox}
        background={{ lightMode: "black", darkMode: "white" }}
      />
    </button>
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
      <ul
        className={sprinkles({
          display: "flex",
          flexDirection: { mobile: "column", desktop: "row" },
          listStyleType: "none",
          justifyContent: "space-between",
          gap: "small",
        })}
      >
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link href={item.href}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <Box
      position={"relative"}
      display={{ mobile: "flex", desktop: "flex" }}
      flexDirection={{ mobile: "row", desktop: "row-reverse" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingX={"large"}
      width={"full"}
      className={classNames(styles.header, bStyles.borderBottom)}
    >
      <Hamburger open={menuOpen} onClick={toggleMenu} />
      <Box display={{ mobile: "block", desktop: "flex" }} alignItems={"center"}>
        <GlobalMenuContent open={menuOpen} />
        <ColorModeToggle />
      </Box>
      <Logo />
    </Box>
  );
};

export default Header;
