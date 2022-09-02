import { Box } from "components/box/Box";
import Button from "components/button/button";
import TypoGraphy from "components/typography/typography";
import Image from "next/image";
import Link from "next/link";
import * as styles from "./contentBlock.css";
import * as bStyles from "styles/borderUtils.css";

import { sprinkles } from "styles";
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
        align={{ mobile: "center", desktop: "left" }}
        paddingY={{ mobile: "large", desktop: "none" }}
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
          <TypoGraphy component={"p"} size="small">
            {body}
          </TypoGraphy>

          <Button
            className={classNames(
              sprinkles({
                textAlign: { mobile: "center" },
                marginY: "xlarge",
                marginX: "auto",
                paddingY: "large",
                width: "full",
              }),
              styles.button,
              bStyles.borderAll
            )}
          >
            <Link href={link}>
              <a>
                <TypoGraphy component="span" size="medium" weight="s700">
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
