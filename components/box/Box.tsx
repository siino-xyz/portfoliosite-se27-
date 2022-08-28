import { createElement, AllHTMLAttributes, ElementType } from "react";
import { sprinkles, Sprinkles } from "styles";
import classNames from "classnames";

export interface BoxProps
  extends Omit<
      AllHTMLAttributes<HTMLElement>,
      | "className"
      | "content"
      | "height"
      | "translate"
      | "color"
      | "width"
      | "cursor"
      | "fontWeight"
    >,
    Sprinkles {
  component?: ElementType;
  className?: Parameters<typeof classNames>[0];
}

export const Box = ({
  component = "div",
  className,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  margin,
  marginX,
  marginY,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  display,
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap,
  flexGrow,
  flexShrink,
  borderRadius,
  position,
  top,
  bottom,
  left,
  right,
  inset,
  background,
  color,
  width,
  zIndex,
  opacity,
  pointerEvents,
  cursor,
  textAlign,
  maxWidth,
  minWidth,
  transition,
  overflow,
  fontWeight,
  gap,
  fontSize,
  ...restProps
}: BoxProps) => {
  const atomClasses = classNames(
    sprinkles({
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      margin,
      marginX,
      marginY,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      display,
      alignItems,
      justifyContent,
      flexDirection,
      flexWrap,
      flexGrow,
      flexShrink,
      borderRadius,
      position,
      top,
      bottom,
      left,
      right,
      inset,
      background,
      color,
      width,
      zIndex,
      opacity,
      pointerEvents,
      cursor,
      textAlign,
      maxWidth,
      minWidth,
      transition,
      overflow,
      fontWeight,
      gap,
      fontSize,
    }),
    className
  );

  return createElement(component, { className: atomClasses, ...restProps });
};
