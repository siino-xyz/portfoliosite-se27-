import { Box } from "components/box/Box";
import Button from "components/button/button";
import TypoGraphy from "components/typography/typography";
import Image from "next/image";
import * as styles from "./contentBlock.css";

type ContentBlockProps = {
  sctiontitle: string;
  body: string;
  src: string;
  alt: string;
};

const ContentBlock = ({ sctiontitle, body, src, alt }: ContentBlockProps) => {
  return (
    <Box
      component="section"
      maxWidth="xlarge"
      marginX="auto"
      padding={{ mobile: "medium", tablet: "xlarge", desktop: "medium" }}
    >
      <TypoGraphy component={"h3"} size="large" family={"jnr"}>
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
          <Button>
            <TypoGraphy component="span" size="medium">
              詳しく見る
            </TypoGraphy>
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
