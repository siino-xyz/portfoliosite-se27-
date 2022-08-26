import classNames from "classnames";
import { Box } from "components/box/Box";
import { TextProps, useTextStyles } from "libs/typographyUtil";
import { fa_xxsmall } from "./typography.css";

export const XXsmall = ({
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
      fa_xxsmall
    )}
  >
    {children}
  </Box>
);
