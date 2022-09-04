import { style } from "@vanilla-extract/css";
import { sprinkles } from "styles";

const headerMaxHeight = "90px";
export const header = style([
  {
    width: "100%",
    maxHeight: headerMaxHeight,
    opacity: "0.85",
    backdropFilter: "blur(12px)",
    gridTemplateColumns: "1fr 100px 0.1fr",
    "@media": {
      "screen and (min-width: 1180px)": {
        gridTemplateColumns: "80px 1fr 0.1fr",
      },
    },
  },
  sprinkles({
    display: "grid",
    justifyContent: { desktop: "center" },
    alignItems: "center",
    paddingTop: "small",
  }),
]);
