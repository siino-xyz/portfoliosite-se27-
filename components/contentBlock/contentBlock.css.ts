import { style } from "@vanilla-extract/css";
import { sprinkles } from "styles";
import { vars } from "styles/themes.css";
export const flexDeconstructed = style({
  flex: "1 1 280px",
});

const dp = vars.palette.dpA400;

export const button = style([
  sprinkles({
    textAlign: { mobile: "center" },
    marginY: "xlarge",
    marginX: "none",
    paddingY: "medium",
    width: { mobile: "w-1/2", tablet: "w-1/2", desktop: "w-1/3" },
    borderRadius: "small",
    background: "limeA400",
  }),
  {
    fontWeight: "bold",
    position: "relative",

    // "::before": {
    //   position: "absolute",
    //   content: "",
    //   bottom: "-15%",
    //   left: "-4%",
    //   background: `${dp}`,
    //   width: "36px",
    //   height: "24px",
    //   borderRadius: vars.border.radius.small,
    //   zIndex: "-1",
    // },
  },
]);
