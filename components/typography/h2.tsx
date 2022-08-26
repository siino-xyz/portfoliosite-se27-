import classNames from "classnames";
import { Box } from "components/box/Box";
import { TextProps, useTextStyles } from "libs/typographyUtil";
import { fa_h2 } from "./typography.css";

export const H2 = ({
  component = "h2",
  color,
  align,
  children,
  className,
}: TextProps) => (
  <Box
    component={component}
    className={classNames(useTextStyles({ color, align, className }), fa_h2)}
  >
    {children}
  </Box>
);
