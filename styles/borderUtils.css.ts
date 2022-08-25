import { createVar, style } from "@vanilla-extract/css";
import { vars, sprinkles } from "styles";

const bWidth = "1.5px";
const bStyle = "solid";
const bColorDefault = vars.palette.black;

export const borderVars = createVar();

export const borderUtil = style([
  {
    vars: {
      [borderVars]: `${bWidth} ${bStyle} ${bColorDefault}`,
    },
  },
  sprinkles({
    borderColor: { darkMode: "white" },
  }),
]);

export const borderBottom = style({
  borderBottom: borderVars,
});
export const borderTop = style({
  borderTop: borderVars,
});
export const borderRight = style({
  borderRight: borderVars,
});
export const borderLeft = style({
  borderLeft: borderVars,
});
export const borderAll = style({
  border: borderVars,
});
