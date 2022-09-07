import { createVar, style } from "@vanilla-extract/css";
import { darkMode, sprinkles } from "styles";
import { vars } from "styles";

const switchColor = createVar();
const vectorFill = createVar();

export const toggleSwitches = style([
  sprinkles({
    paddingX: "small",
    paddingY: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
]);

export const light = style({
  vars: {
    [switchColor]: vars.palette.red,
  },
  selectors: {
    [`.${darkMode} &`]: {
      vars: {
        [switchColor]: vars.palette.white,
      },
    },
  },
  color: [switchColor],
});

export const dark = style({
  vars: {
    [switchColor]: vars.palette.black,
  },
  selectors: {
    [`.${darkMode} &`]: {
      vars: {
        [switchColor]: vars.palette.red,
      },
    },
  },
  fill: [switchColor],
});

export const vectorFonts = style({
  width: "30px",
  height: "30px",
  [vectorFill]: vars.palette.black,
  selectors: {
    [`.${darkMode} &`]: {
      vars: {
        [vectorFill]: vars.palette.white,
      },
    },
  },
  fill: [vectorFill],
});
