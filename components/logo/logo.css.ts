import { style } from "@vanilla-extract/css";
import { sprinkles } from "styles";

export const logo = style([
  {
    ":hover": {
      opacity: "0.8",
    },
    cursor: "pointer",
  },
  sprinkles({
    transition: "fast",
  }),
]);
