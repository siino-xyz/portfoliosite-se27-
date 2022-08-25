import classNames from "classnames";
import { ElementType, ReactNode } from "react";
import { sprinkles, Sprinkles } from "styles";

const colorMap = {
  neutral: { lightMode: "gray800", darkMode: "gray100" },
  strong: { lightMode: "gray900", darkMode: "gray100" },
  code: { lightMode: "white" },
  link: { lightMode: "gray800", darkMode: "gray100" },
  secondary: { lightMode: "gray600", darkMode: "gray400" },
} as const;

interface TextStyleProps {
  color?: keyof typeof colorMap;
  align?: Sprinkles["textAlign"];
}

export interface TextProps extends TextStyleProps {
  component?: ElementType;
  children: ReactNode;
}

export const useTextStyles = ({ color = "neutral", align }: TextStyleProps) =>
  classNames(
    sprinkles({
      color: colorMap[color],
      textAlign: align,
    })
  );
