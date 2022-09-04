import { Box } from "system/box/Box";
import Button from "system/button/button";
import TypoGraphy from "system/typography/typography";
import Image from "next/image";
import Link from "next/link";
import * as styles from "./contentBlock.css";
import * as bStyles from "styles/borderUtils.css";
import classNames from "classnames";

type ContentBlockProps = {
  sctiontitle: string;
  body: string;
  src: string;
  alt: string;
  link: string;
};

const ContentBlock = ({
  sctiontitle,
  body,
  src,
  alt,
  link,
}: ContentBlockProps) => {
  return (
    <Box
      component="section"
      maxWidth="xlarge"
      marginX="auto"
      marginBottom="xxlarge"
      padding={{ mobile: "medium", tablet: "medium", desktop: "medium" }}
    >
      <TypoGraphy
        component={"h3"}
        size="large"
        family={"jnr"}
        align={{ mobile: "center", tablet: "left", desktop: "left" }}
        paddingY={{ mobile: "large", desktop: "none" }}
        color="neutral"
      >
        {sctiontitle}
      </TypoGraphy>
      <Box
        component={"div"}
        display={"flex"}
        flexDirection={{
          mobile: "column-reverse",
          tablet: "row",
          desktop: "row",
        }}
        gap={{ mobile: "medium", desktop: "xlarge" }}
        flexWrap="wrap"
        paddingX="medium"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={{
            mobile: "flex-start",
            tablet: "center",
            desktop: "center",
          }}
          gap="medium"
          className={styles.flexDeconstructed}
        >
          <TypoGraphy component={"p"} size="small" color="neutral">
            {body}
          </TypoGraphy>

          <Button className={classNames(styles.button)}>
            <Link href={link}>
              <a>
                <TypoGraphy
                  component="span"
                  size="medium"
                  weight="s700"
                  color="black"
                >
                  詳しく見る
                </TypoGraphy>
              </a>
            </Link>
          </Button>
        </Box>
        <Box textAlign="center" className={styles.flexDeconstructed}>
          <Image
            src={src}
            width={300}
            height={300}
            layout="intrinsic"
            alt={alt}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ContentBlock;
