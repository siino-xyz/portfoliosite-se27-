import { style } from "@vanilla-extract/css";
import { sprinkles } from "styles";

const fabSize = 44;
export const isOpen = style({});

export const drawer = style([
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
