import { style } from "@vanilla-extract/css";
import { sprinkles } from "styles";

export const blogCards = style([
  {
    gridTemplateColumns: "repeat(auto-fit, minmax(288px, 292px))",
    overflow: "hidden !important",
  },
  sprinkles({
    display: "grid",
    gap: { mobile: "large", tablet: "large", desktop: "medium" },
    marginX: { mobile: "auto", tablet: "auto", desktop: "small" },
    justifyContent: "center",
  }),
]);

export const titleabbreviation = style([
  {
    overflow: "hideen",
    whiteSpace: "nowrap",
    display: "block",
    textOverflow: "ellipsis !important",
    flex: 1,
  },
  sprinkles({
    maxWidth: "xsmall",
  }),
]);

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

export const categoryTag = style([
  sprinkles({
    background: "red",
    borderRadius: "small",
  }),
]);

export const negmer = sprinkles({});
