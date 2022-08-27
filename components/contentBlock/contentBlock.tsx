import { Box } from "components/box/Box";
import Button from "components/button/button";
import { H3, Paragraph } from "components/typography";
import Image from "next/image";
import * as bStyles from "styles/borderUtils.css";
import * as styles from "./contentBlock.css";

type ContentBlockProps = {
  h3text: string;
  body: string;
  src: string;
  alt: string;
};

const ContentBlock = ({ h3text, body, src, alt }: ContentBlockProps) => {
  return (
    <Box
      component="section"
      maxWidth="xlarge"
      marginX="auto"
      padding={{ mobile: "medium", tablet: "xlarge", desktop: "medium" }}
    >
      <H3 align="left">{h3text}</H3>
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
          <Paragraph>{body}</Paragraph>
          <Button>
            <Paragraph component="span">詳しく見る</Paragraph>{" "}
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
