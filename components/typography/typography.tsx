import classNames from "classnames";
import { Box } from "components/box/Box";
import React, { ElementType, ReactNode } from "react";
import { sprinkles, Sprinkles } from "styles";
import * as styles from "./typography.css";

const colorMap = {
  neutral: { lightMode: "gray800", darkMode: "gray100" },
  strong: { lightMode: "gray900", darkMode: "gray100" },
  code: { lightMode: "white" },
  link: { lightMode: "gray800", darkMode: "gray100" },
  secondary: { lightMode: "gray600", darkMode: "gray400" },
} as const;

const fontSizeMap = {
  body: { mobile: "small", tablet: "small", desktop: "small" },
  h1: { mobile: "large", tablet: "large", desktop: "large" },
} as const;

interface TextStyleProps {
  color?: keyof typeof colorMap;
  align?: Sprinkles["textAlign"];
  weight?: Sprinkles["fontWeight"];
  fontSize?: keyof typeof fontSizeMap;
}

interface TextProps extends TextStyleProps {
  component?: ElementType;
  children: ReactNode;
}

const useTextStyles = ({
  color = "neutral",
  align,
  fontSize = "h1",
}: TextStyleProps) =>
  classNames(
    sprinkles({
      color: colorMap[color],
      textAlign: align,
      fontSize: fontSizeMap[fontSize],
    }),
    styles.fontfamily
  );

const Text = ({
  component = "span",
  fontSize,
  color,
  align,
  children,
}: TextProps) => (
  <Box
    component={component}
    className={useTextStyles({ color, align, fontSize })}
  >
    {children}
  </Box>
);

export default Text;
