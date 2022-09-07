import { style } from "@vanilla-extract/css";
import { sprinkles } from "styles";
import { vars } from "styles/themes.css";
export const flexDeconstructed = style({
  flex: "1 1 280px",
});

export const button = style([
  sprinkles({
    textAlign: { mobile: "center" },
    marginY: "xlarge",
    marginX: { mobile: "auto", tablet: "none", desktop: "none" },
    paddingY: "medium",
    width: { mobile: "w-1/2", tablet: "w-1/2", desktop: "w-1/3" },
    borderRadius: "small",
    background: "limeA400",
  }),
  {
    fontWeight: "bold",
    position: "relative",
  },
]);
