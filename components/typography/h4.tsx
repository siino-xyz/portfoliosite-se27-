import classNames from "classnames";
import { Box } from "components/box/Box";
import { TextProps, useTextStyles } from "libs/typographyUtil";
import { fa_h4 } from "./typography.css";

export const H4 = ({
  component = "span",
  color,
  align,
  children,
}: TextProps) => (
  <Box
    component={component}
    className={classNames(useTextStyles({ color, align }), fa_h4)}
  >
    {children}
  </Box>
);
