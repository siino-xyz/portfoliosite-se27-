import { style } from "@vanilla-extract/css";
import { sprinkles } from "styles";

const headerHeight = "70px";

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
  },
]);

export const globalMenuContent = style([
  {
    top: 0,
    right: 0,
  },
  sprinkles({
    background: { lightMode: "black", darkMode: "white" },
    position: { mobile: "absolute", desktop: "relative" },
    display: { mobile: "none", desktop: "block" },
    height: { mobile: "fullVh", desktop: "inher" },
  }),
]);

export const hamburger = style([
  {
    zIndex: 9999,
  },
  sprinkles({
    background: { lightMode: "black", darkMode: "white" },
    display: { mobile: "block", desktop: "none" },
  }),
]);

export const hamBox = style({
  width: fabSize,
  height: fabSize,
});
