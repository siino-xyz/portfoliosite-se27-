import { style } from "@vanilla-extract/css";
import { createSprinkles } from "@vanilla-extract/sprinkles";
import { sprinkles } from "styles";

export const button = style([
  {
    cursor: "pointer",
  },
  sprinkles({
    width: { mobile: "w-3/5", tablet: "w-3/5", desktop: "w-1/4" },
    paddingY: "medium",
    paddingX: "small",
  }),
]);
