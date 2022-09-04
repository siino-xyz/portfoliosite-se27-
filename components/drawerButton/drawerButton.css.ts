import { createVar, style } from "@vanilla-extract/css";
import { sprinkles, vars } from "styles";

const fabSize = 44;
export const isOpen = style({});

export const drawer = style([
  {
    zIndex: 3,
    width: fabSize,
    height: fabSize,
  },
  sprinkles({
    background: { lightMode: "dpA700", darkMode: "indigoA400" },
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
