import { style } from "@vanilla-extract/css";
import { vars, sprinkles } from "styles";

const bWidth = "1.5px";
const bStyle = "solid";
const bColorDefault = vars.palette.black;

export const borderBottom = style([
  {
    borderBottom: `${bWidth} ${bStyle} ${bColorDefault}`,
  },
  sprinkles({
    borderColor: { darkMode: "gray200" },
  }),
]);

export const borderTop = style([
  {
    borderTop: `${bWidth} ${bStyle} ${bColorDefault}`,
  },
  sprinkles({
    borderColor: { darkMode: "gray200" },
  }),
]);

export const borderRight = style([
  {
    borderRight: `${bWidth} ${bStyle} ${bColorDefault}`,
  },
  sprinkles({
    borderColor: { darkMode: "gray200" },
  }),
]);

export const borderLeft = style([
  {
    borderLeft: `${bWidth} ${bStyle} ${bColorDefault}`,
  },
  sprinkles({
    borderColor: { darkMode: "gray200" },
  }),
]);

export const borderAll = style([
  {
    border: `${bWidth} ${bStyle} ${bColorDefault}`,
  },
  sprinkles({
    borderColor: { darkMode: "gray200" },
  }),
]);
