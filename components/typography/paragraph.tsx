import classNames from "classnames";
import { Box } from "components/box/Box";
import { TextProps, useTextStyles } from "libs/typographyUtil";
import { fa_body } from "./typography.css";

export const Paragraph = ({
  component = "p",
  color,
  align,
  children,
  className,
}: TextProps) => (
  <Box
    component={component}
    className={classNames(useTextStyles({ color, align, className }), fa_body)}
  >
    {children}
  </Box>
);
