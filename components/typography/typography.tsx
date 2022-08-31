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
