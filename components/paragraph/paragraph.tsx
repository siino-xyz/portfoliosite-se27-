import { Box } from "components/box/Box";
import TypoGraphy from "components/typography/typography";

type TextContentsProps = {
  title?: string;
  paragraph1: string;
  paragraph2?: string;
  paragraph3?: string;
  listTitle?: string;
  list?: string;
};

const TextContents = ({
  title,
  paragraph1,
  paragraph2,
  paragraph3,
}: TextContentsProps) => {
  return (
    <>
      <TypoGraphy component="h3" size="large" align="left" marginBottom="large">
        {title}
      </TypoGraphy>
      <Box display="flex" flexDirection="column" gap="xlarge">
        <TypoGraphy component="p" size="medium">
          {paragraph1}
        </TypoGraphy>
        <TypoGraphy component="p" size="medium">
          {paragraph2}
        </TypoGraphy>
        <TypoGraphy component="p" size="medium">
          {paragraph3}
        </TypoGraphy>
      </Box>
    </>
  );
};

export default TextContents;
