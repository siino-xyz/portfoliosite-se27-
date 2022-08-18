import { style } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles.css";

export const container = style([
  sprinkles({
    paddingX: "size-2",
    paddingY: "size-2",
    marginX: "size-auto",
  }),
]);
