import { style } from "@vanilla-extract/css";

export const imageAspect_square = style([
  {
    position: "relative",
    width: 40,
    height: 40,
  },
]);
export const imageAspect_video = style({
  position: "relative",
  width: "200px",
  height: "200px",
  maxHeight: "200px",
  maxWidth: "200px",
});
export const imageAspect_arbitrary = style([
  {
    position: "relative",
  },
]);
