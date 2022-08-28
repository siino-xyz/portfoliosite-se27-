import classNames from "classnames";
import { Box } from "components/box/Box";
import { ElementType, ReactNode } from "react";
import { sprinkles, Sprinkles } from "styles";
import * as styles from "./typo.css";

type TypoStyleProps = {
  align?: Sprinkles["textAlign"];
  paddingX?: Sprinkles["paddingX"];
  paddingY?: Sprinkles["paddingY"];
  padding?: Sprinkles["padding"];
  marginX?: Sprinkles["marginX"];
  marginY?: Sprinkles["marginY"];
  margin?: Sprinkles["margin"];
  height?: Sprinkles["lineHeight"];
};

export type TypoProps = {
  component: ElementType;
  children: ReactNode;
} & styles.TypographVariants &
  TypoStyleProps;

const TypoGraphy = ({
  component,
  children,
  color,
  family,
  size,
  weight,
  height = "large",
  align = "left",
  padding,
  paddingX,
  paddingY,
  margin,
  marginX,
  marginY,
}: TypoProps) => {
  return (
    <Box
      component={component}
      className={classNames(
        styles.TypographRedipe({ color, size, weight, family }),
        sprinkles({
          textAlign: align,
          padding: padding,
          paddingX: paddingX,
          paddingY: paddingY,
          margin: margin,
          marginX: marginX,
          marginY: marginY,
          lineHeight: height,
        })
      )}
    >
      {children}
    </Box>
  );
};

export default TypoGraphy;
