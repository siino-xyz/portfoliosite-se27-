import classNames from "classnames";
import { Box } from "components/box/Box";
import { TextProps, useTextStyles } from "libs/typographyUtil";
import { fa_xsmall } from "./typography.css";

export const Xsmall = ({
  component = "p",
  color,
  align,
  children,
  className,
}: TextProps) => (
  <Box
    component={component}
    className={classNames(
      useTextStyles({ color, align, className }),
      fa_xsmall
    )}
  >
    {children}
  </Box>
);
