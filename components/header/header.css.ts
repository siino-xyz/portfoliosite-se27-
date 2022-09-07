import { createVar, style } from "@vanilla-extract/css";
import { sprinkles, vars } from "styles";

const headerMaxHeight = "90px";
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
    paddingX: "xlarge",
    background: { lightMode: "dpA200", darkMode: "dpA700" },
  }),
  {
    "@media": {
      "screen and (min-width: 1180px)": {
        background: "none !important",
      },
    },
  },
]);

export const menuIsShow = style([
  {
    display: "block !important",
  },
]);

export const hidden = style({
  display: "none",
});

export const backdrop = style({
  transition: "opacity 0.1s ease",
  backdropFilter: "blur(4px)",
  height: "100vh",
});

const fabSize = 44;
export const isOpen = style({});

export const drawer = style([
  {
    zIndex: 3,
    width: fabSize,
    height: fabSize,
  },
  sprinkles({
    background: { lightMode: "dpA200", darkMode: "dpA700" },
    display: { mobile: "flex", desktop: "none" },
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "full",
    position: "relative",
  }),
]);

const colors = createVar();

export const inner = style({
  width: "28px",
  height: "28px",
  vars: {
    [colors]: vars.palette.limeA700,
  },
  fill: [colors],
});

export const mask = style({
  position: "fixed",
  top: "300px",
  background: "#000",
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 2,
  pointerEvents: "auto",
});

export const menuitem = style([
  {
    ":hover": {
      color: vars.palette.dpA700,
    },
  },
  sprinkles({
    cursor: "pointer",
    transition: "fast",
  }),
]);
