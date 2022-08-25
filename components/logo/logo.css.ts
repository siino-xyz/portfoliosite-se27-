import { style } from "@vanilla-extract/css";
import { sprinkles } from "styles";

const logoW = 45;
const logoH = 45;

export const tempLogo = style([
  { height: logoH, width: logoW },
  sprinkles({
    background: "red",
  }),
]);
