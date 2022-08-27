import classNames from "classnames";
import { ElementType, ReactNode } from "react";
import { sprinkles, Sprinkles } from "styles";

const colorMap = {
  neutral: { lightMode: "gray800", darkMode: "gray100" },
  strong: { lightMode: "gray900", darkMode: "gray100" },
  code: { lightMode: "white" },
  link: { lightMode: "gray800", darkMode: "gray100" },
  secondary: { lightMode: "gray600", darkMode: "gray400" },
  reverse: { lightMode: "gray100", darkMode: "gray800" },
} as const;

interface TextStyleProps {
  color?: keyof typeof colorMap;
  align?: Sprinkles["textAlign"];
  className?: string;
}

export interface TextProps extends TextStyleProps {
  component?: ElementType;
  children: ReactNode;
}

export const useTextStyles = ({
  color = "neutral",
  align,
  className,
}: TextStyleProps) =>
  classNames(
    sprinkles({
      color: colorMap[color],
      textAlign: align,
    }),
    className
  );
