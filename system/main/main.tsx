import { Box } from "components";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <Box
      component="main"
      width={{ mobile: "full" }}
      maxWidth="xxlarge"
      marginX="auto"
      paddingX="medium"
    >
      {children}
    </Box>
  );
};

export default Main;
