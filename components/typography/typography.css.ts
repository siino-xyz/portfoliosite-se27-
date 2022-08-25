import { style } from "@vanilla-extract/css";
import { sprinkles, vars } from "styles";

export const fontfamily = style([
  {
    fontFamily: vars.fonts.body,
  },
]);

export const body = sprinkles({
  fontSize: { mobile: "small", tablet: "small", desktop: "small" },
});
