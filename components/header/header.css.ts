import { style } from "@vanilla-extract/css";
import { sprinkles } from "styles";
//
const headerMaxHeight = "90px";

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
    maxHeight: headerMaxHeight,
    opacity: "0.85",
    backdropFilter: "blur(12px)",
    gridTemplateColumns: "1fr 50px 50px",
    "@media": {
      "screen and (min-width: 1180px)": {
        gridTemplateColumns: "80px 1fr 50px",
      },
    },
  },
  sprinkles({
    display: "grid",
    justifyContent: { desktop: "center" },
    alignItems: "center",
    paddingTop: "small",
  }),
]);

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
    background: { lightMode: "white", darkMode: "black" },
  }),
]);

export const hamburger = style([
  {
    zIndex: 3,
    width: fabSize,
    height: fabSize,
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
