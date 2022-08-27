import { style } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles.css";

export const h2styles = style([
  {},
  sprinkles({
    background: { lightMode: "gray800", darkMode: "white" },
    display: "inline-block",
    paddingX: "large",
    paddingY: "small",
    marginY: "large",
    borderRadius: "small",
  }),
]);
