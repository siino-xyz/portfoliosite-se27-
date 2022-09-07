const menuItems = [
  { id: 1, title: "Service", href: "./" },
  { id: 4, title: "Blog", href: "./" },
  { id: 5, title: "Contact", href: "./" },
  { id: 6, title: "Credit", href: "./" },
];
import { Box } from "system/box/Box";
import TypoGraphy from "system/typography/typography";
import Link from "next/link";
import * as style from "./footer.css";

const Footer = () => {
  return (
    <Box
      component="footer"
      width="full"
      background="black"
      paddingTop="large"
      paddingX="large"
      paddingBottom="xsmall"
      marginTop="xlarge"
      className={style.footer}
    >
      <Box
        display="flex"
        flexDirection={{ mobile: "column", tablet: "row", desktop: "row" }}
        gap={{ mobile: "large", tablet: "large", desktop: "xlarge" }}
        marginX="auto"
        justifyContent="center"
        paddingBottom="xlarge"
      >
        {menuItems.map((item) => (
          <Box key={item.id}>
            <Link href={item.href}>
              <a>
                <TypoGraphy component="span" size="xsmall" color="white">
                  {item.title}
                </TypoGraphy>
              </a>
            </Link>
          </Box>
        ))}
      </Box>
      <TypoGraphy component="div" align="center" marginX="auto" color="gray300">
        copylight se27
      </TypoGraphy>
    </Box>
  );
};

export default Footer;
