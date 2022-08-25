import classNames from "classnames";
import { Box } from "components/box/Box";
import { TextProps, useTextStyles } from "libs/typographyUtil";
import { fa_h1 } from "./typography.css";

export const H1 = ({
  component = "span",
  color,
  align,
  children,
}: TextProps) => (
  <Box
    component={component}
    className={classNames(useTextStyles({ color, align }), fa_h1)}
  >
    {children}
  </Box>
);
