import { style } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles.css";

export const container = style([
  sprinkles({
    paddingX: "size-2",
    paddingY: "size-2",
    marginX: "size-auto",
  }),
  {
    maxWidth: 1920,
  },
]);

export const imageCroped = style([
  sprinkles({
    position: "relative",
  }),
  {
    width: 300,
    height: 169,
  },
]);
