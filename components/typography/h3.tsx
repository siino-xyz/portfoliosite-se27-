import classNames from "classnames";
import { Box } from "components/box/Box";
import { TextProps, useTextStyles } from "libs/typographyUtil";
import { fa_h3 } from "./typography.css";

export const H3 = ({
  component = "h3",
  color,
  align,
  className,
  children,
}: TextProps) => (
  <Box
    component={component}
    className={classNames(useTextStyles({ color, align, className }), fa_h3)}
  >
    {children}
  </Box>
);
