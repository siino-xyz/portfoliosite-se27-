import { style } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles.css";

export const h2styles = style([
  {},
  sprinkles({
    background: { lightMode: "gray800", darkMode: "white" },
    display: "inline-block",
    paddingX: "large",
    paddingY: "small",
    marginY: "large",
    borderRadius: "small",
  }),
]);

export const blogCards = style([
  {},
  sprinkles({
    display: "grid",
    gridTemplateColumns: { mobile: "col1", tablet: "col2", desktop: "col3" },
    gap: "xsmall",
  }),
]);

export const blogCard = style([{}, sprinkles({})]);
