import classNames from "classnames";
import { Box } from "components/box/Box";
import { TextProps, useTextStyles } from "libs/typographyUtil";
import { fa_code } from "./typography.css";

export const Code = ({
  component = "span",
  color,
  align,
  children,
}: TextProps) => (
  <Box
    component={component}
    className={classNames(useTextStyles({ color, align }), fa_code)}
  >
    {children}
  </Box>
);
