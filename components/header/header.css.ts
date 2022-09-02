import { createVar, style } from "@vanilla-extract/css";
import { sprinkles, vars } from "styles";
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
    gridTemplateColumns: "1fr 100px 0.1fr",
    "@media": {
      "screen and (min-width: 1180px)": {
        gridTemplateColumns: "80px 1fr 0.1fr",
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

export const hamburger = style([
  {
    zIndex: 3,
    width: fabSize,
    height: fabSize,

    "::before": {
      position: "absolute",
      top: "50%",
      bottom: "50%",
      content: "",
      zIndex: -1,
      filter: "blur(5px)",
      width: "10px",
      height: "10px",
      backgroundColor: "red",
    },
  },
  sprinkles({
    background: { lightMode: "transBlack", darkMode: "transWhite" },
    display: { mobile: "flex", desktop: "none" },
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "full",
    position: "relative",
  }),
]);

export const vectorFonts = style({
  width: "30px",
  height: "30px",
});
