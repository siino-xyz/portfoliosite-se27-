import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./themes.css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
});

// globalStyle("html", {
//   background: vars.palette.pink300,
//   color: vars.palette.green50,
// });
