import { style } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles.css";

export const blogCards = style([
  {
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    overflow: "hidden !important",
  },
  sprinkles({
    display: "grid",
    gap: "large",
    marginX: { mobile: "large", tablet: "xlarge", desktop: "small" },
  }),
]);

export const titleabbreviation = style({
  maxWidth: "5px",
  overflow: "hideen",
  whiteSpace: "nowrap",
  display: "block",
  textOverflow: "ellipsis !important",
});

export const blogCard = style([{}, sprinkles({})]);

export const imageContainer = style([
  {
    width: "100%",
    maxWidth: "100%",
    height: "200px",
    maxHeight: "200px",
  },
  sprinkles({
    position: "relative",
    textAlign: "center",
    marginX: "auto",
    background: { lightMode: "black", darkMode: "black" },
    paddingX: "xsmall",
  }),
]);
