const menuItems = [
  { id: 1, title: "トップ", href: "./" },
  { id: 2, title: "Web制作/開発", href: "./" },
  { id: 3, title: "委託開発", href: "./" },
  { id: 4, title: "ブログ", href: "./" },
  { id: 5, title: "コンタクト", href: "./" },
  { id: 6, title: "クレジット", href: "./" },
];
import { Box } from "system/box/Box";
import TypoGraphy from "system/typography/typography";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      component="footer"
      width="full"
      background="black"
      padding="large"
      marginTop="xlarge"
    >
      <Box
        display="flex"
        flexDirection={{ mobile: "column", tablet: "column", desktop: "row" }}
        gap={{ mobile: "large", tablet: "large", desktop: "xlarge" }}
      >
        {menuItems.map((item) => (
          <Box key={item.id}>
            <Link href={item.href}>
              <a>
                <TypoGraphy component="span" size="medium" color="white">
                  {item.title}
                </TypoGraphy>
              </a>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
