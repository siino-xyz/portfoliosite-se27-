import classNames from "classnames";
import Link from "next/link";
import { Box } from "system";
import TypoGraphy from "system/typography/typography";
import * as styles from "./globalmenuContent.css";

export const GlobalMenuContent = ({ open }: { open: boolean }) => {
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
