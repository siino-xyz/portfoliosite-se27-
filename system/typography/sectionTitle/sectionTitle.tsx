import TypoGraphy from "system/typography/typography";

export const SectionTitle = ({ title }: { title: string }) => (
  <TypoGraphy
    component={"h2"}
    size="xxlarge"
    marginY="large"
    height="xxxlarge"
    family="jnr"
    align="center"
    color="neutral"
  >
    {title}
  </TypoGraphy>
);
