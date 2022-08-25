import classNames from "classnames";
import { Box } from "components/box/Box";
import { TextProps, useTextStyles } from "libs/typographyUtil";
import { fa_body } from "./typography.css";

export const Paragraph = ({
  component = "span",
  color,
  align,
  children,
}: TextProps) => (
  <Box
    component={component}
    className={classNames(useTextStyles({ color, align }), fa_body)}
  >
    {children}
  </Box>
);
