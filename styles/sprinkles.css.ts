import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { vars } from "./vars.css";

const responsiveStyles = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  responsiveArray: ["mobile", "tablet", "desktop"],

  properties: {
    display: ["none", "flex", "block", "inline", "inline-block", "grid"],
    flexDirection: ["row", "column", "row-reverse", "column-reverse"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
      "right",
      "left",
    ],
    gridTemplateColumns: vars.gridCols,
    gap: vars.sizes,
    paddingTop: vars.sizes,
    paddingBottom: vars.sizes,
    paddingLeft: vars.sizes,
    paddingRight: vars.sizes,
    marginTop: vars.sizes,
    marginRight: vars.sizes,
    marginLeft: vars.sizes,
    marginBottom: vars.sizes,
    fontFamily: vars.fontFamily,
    fontSize: vars.fontSize,
    width: vars.sizes,
    maxWidth: vars.sizes,
    minWidth: vars.sizes,
    height: vars.sizes,
    maxHeight: vars.sizes,
    minHeight: vars.sizes,
    textAlign: ["center", "left", "right"],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    listStyleType: ["none", "circle", "inherit"],
    cursor: ["pointer", "none"],
    position: ["absolute", "relative", "inherit", "fixed", "sticky"],
    lineHeight: vars.lineHeight,
    fontWeight: vars.fontWeight,
    borderColor: vars.color,
    transition: vars.transition,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
    margin: ["marginLeft", "marginRight", "marginTop", "marginBottom"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
  },
});

const colorStyles = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: {},
  },
  defaultCondition: "darkMode",
  properties: {
    color: vars.color,
    background: vars.color,
  },
});

const unresponsiveProperties = defineProperties({
  properties: {
    flexWrap: ["wrap", "nowrap"],
    top: [0],
    bottom: [0],
    left: [0],
    right: [0],
    flexShrink: [0],
    flexGrow: [0, 1],
    zIndex: [-1, 0, 1],
    cursor: ["pointer"],
    borderRadius: vars.sizes,
    textDecoration: vars.textDecoration,
  },
});

export const sprinkles = createSprinkles(
  responsiveStyles,
  colorStyles,
  unresponsiveProperties
);
export type Sprinkles = Parameters<typeof sprinkles>[0];
