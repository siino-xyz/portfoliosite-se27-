import { Box } from "components";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Section = ({ children }: Props) => {
  return (
    <Box component="section" paddingY="xxlarge" paddingX="medium">
      {children}
    </Box>
  );
};
