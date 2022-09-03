import classNames from "classnames";
import { Box } from "system/box/Box";
import { ElementType, memo, ReactNode } from "react";
import { sprinkles, Sprinkles } from "styles";
import * as styles from "./typo.css";

type TypoStyleProps = {
  align?: Sprinkles["textAlign"];
  paddingX?: Sprinkles["paddingX"];
  paddingY?: Sprinkles["paddingY"];
  padding?: Sprinkles["padding"];
  paddingTop?: Sprinkles["paddingTop"];
  paddingBottom?: Sprinkles["paddingBottom"];
  paddingLeft?: Sprinkles["paddingLeft"];
  paddingRight?: Sprinkles["paddingRight"];
  marginX?: Sprinkles["marginX"];
  marginY?: Sprinkles["marginY"];
  margin?: Sprinkles["margin"];
  marginTop?: Sprinkles["marginTop"];
  marginBottom?: Sprinkles["marginBottom"];
  marginRight?: Sprinkles["marginRight"];
  marginLeft?: Sprinkles["marginLeft"];
  height?: Sprinkles["lineHeight"];
};

export type TypoProps = {
  component: ElementType;
  children: ReactNode;
  className?: Parameters<typeof classNames>[0];
} & styles.TypographVariants &
  TypoStyleProps;

const TypoGraphy = ({
  component,
  children,
  className,
  color,
  family,
  size,
  weight,
  height = "large",
  align = "left",
  padding,
  paddingX,
  paddingY,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  margin,
  marginX,
  marginY,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
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
          paddingTop: paddingTop,
          paddingBottom: paddingBottom,
          paddingRight: paddingRight,
          paddingLeft: paddingLeft,
          margin: margin,
          marginX: marginX,
          marginY: marginY,
          marginTop: marginTop,
          marginBottom: marginBottom,
          marginRight: marginRight,
          marginLeft: marginLeft,
          lineHeight: height,
        }),
        className
      )}
    >
      {children}
    </Box>
  );
};

export default TypoGraphy;
