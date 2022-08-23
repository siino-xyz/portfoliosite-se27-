import { style, createVar, fallbackVar } from "@vanilla-extract/css";
import { vars } from "styles/themes.css";
import { sprinkles } from "styles";
import { breakpoints } from "themeUtils";

const headerHeight = "90px";

const fabSize = 44;
export const isOpen = style({});
export const menuIsShow = style([
  {
    display: "block !important",
  },
]);

export const header = style([
  {
    width: "100%",
    height: headerHeight,
    opacity: "0.85",
    backdropFilter: "blur(3px)",
    "@media": {
      "screen and (min-width: 768px)": {},
    },
  },
]);

export const globalMenuContent = style([
  {
    background: vars.palette.gray300,
    top: 0,
    right: 0,
  },
  sprinkles({
    position: { mobile: "absolute", desktop: "relative" },
    display: { mobile: "none", desktop: "block" },
    height: { mobile: "fullVh", desktop: "inher" },
  }),
]);

export const spmenuButton = style([
  {
    backgroundColor: "blue",
    zIndex: 9999,
  },
  sprinkles({
    display: { mobile: "block", desktop: "none" },
  }),
]);

export const fab = style({
  width: fabSize,
  height: fabSize,
});
