import { style } from "@vanilla-extract/css";
import { sprinkles, vars } from "styles";

export const globalMenuContent = style([
  {
    top: 0,
    right: 0,
    zIndex: 1,
    opacity: 1,
  },
  sprinkles({
    position: { mobile: "fixed", desktop: "relative" },
    display: { mobile: "none", desktop: "block" },
    height: { mobile: "fullVh", desktop: "inher" },
    paddingX: "large",
    // background: { lightMode: "white", darkMode: "black" },
  }),
  {
    "@media": {
      "screen and (min-width: 768px)": {
        background: vars.palette.transparent,
      },
    },
  },
]);

export const menuIsShow = style([
  {
    display: "block !important",
  },
]);
