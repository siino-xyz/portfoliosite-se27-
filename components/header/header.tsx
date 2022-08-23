import Link from "next/link";
import classNames from "classnames";
import * as styles from "./header.css";
import { useState } from "react";
import { Box } from "components/box/Box";
import { sprinkles } from "styles";

const SPMenuButton = ({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className={classNames(styles.spmenuButton, open ? styles.isOpen : null)}
      onClick={onClick}
    >
      <Box
        className={styles.fab}
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
      display={{ mobile: "block", desktop: "flex" }}
      flexDirection={"row-reverse"}
      padding={"medium"}
      className={styles.header}
    >
      <SPMenuButton open={menuOpen} onClick={toggleMenu} />
      <GlobalMenuContent open={menuOpen} />
    </Box>
  );
};

export default Header;
