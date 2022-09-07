import { style } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles.css";

export const imageContainer = style([
  {
    width: "100%",
    maxWidth: "100%",
    height: "380px",
    maxHeight: "380px",
  },
  sprinkles({
    position: "relative",
    textAlign: "center",
    marginX: "auto",
    background: { lightMode: "black", darkMode: "black" },
    paddingY: "large",
  }),
]);
