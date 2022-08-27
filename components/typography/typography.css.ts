import { fontFace, style } from "@vanilla-extract/css";
import { sprinkles, vars } from "styles";

export const JNR_FONTS = fontFace({
  fontDisplay: "swap",
  src: "url(/fonts/JNRfont_n.ttf)",
});

export const fontfamily = style([
  {
    fontFamily: vars.fonts.body,
  },
]);

export const fa_h1 = style([
  {
    fontSize: vars.fontSize.xlarge,
    fontWeight: vars.weight.strong,
    fontFamily: `${JNR_FONTS}`,
    letterSpacing: "0.12rem",

    "@media": {
      "screen and (min-width: 768px)": {
        fontSize: vars.fontSize.xxlarge,
      },
      "screen and (min-width: 1180px)": {
        fontSize: vars.fontSize.xxlarge,
      },
    },
  },
  sprinkles({
    lineHeight: "xxxlarge",
  }),
]);
export const fa_h2 = style([
  {
    fontSize: vars.fontSize.large,
    fontWeight: vars.weight.strong,
    fontFamily: `${JNR_FONTS}`,
    letterSpacing: "0.1rem",
    margin: "0",

    "@media": {
      "screen and (min-width: 768px)": {
        fontSize: vars.fontSize.large,
      },
      "screen and (min-width: 1180px)": {
        fontSize: vars.fontSize.xlarge,
      },
    },
  },
  sprinkles({
    lineHeight: "xxlarge",
  }),
]);
export const fa_h3 = style([
  {
    fontSize: vars.fontSize.xxxmedium,
    fontWeight: vars.weight.strong,
    fontFamily: `${JNR_FONTS}`,
    letterSpacing: "0.09rem",

    "@media": {
      "screen and (min-width: 768px)": {
        fontSize: vars.fontSize.xxxmedium,
      },
      "screen and (min-width: 1180px)": {
        fontSize: vars.fontSize.large,
      },
    },
  },
  sprinkles({
    lineHeight: "large",
    paddingBottom: "small",
  }),
]);
export const fa_h4 = style([
  {
    fontSize: vars.fontSize.xxmedium,
    fontWeight: vars.weight.strong,
    fontFamily: vars.fonts.body,

    "@media": {
      "screen and (min-width: 768px)": {
        fontSize: vars.fontSize.xxmedium,
      },
      "screen and (min-width: 1180px)": {
        fontSize: vars.fontSize.xxmedium,
      },
    },
  },
  sprinkles({
    lineHeight: "xlarge",
  }),
]);
export const fa_body = style([
  {
    fontSize: vars.fontSize.small,
    fontWeight: vars.weight.regular,
    fontFamily: vars.fonts.body,
    lineHeight: "1.75rem",
    "@media": {
      "screen and (min-width: 768px)": {
        fontSize: vars.fontSize.small,
      },
      "screen and (min-width: 1180px)": {
        fontSize: vars.fontSize.small,
      },
    },
  },
  sprinkles({
    marginTop: "none",
    lineHeight: "large",
  }),
]);
export const fa_xsmall = style([
  {
    fontSize: vars.fontSize.xsmall,
    fontWeight: vars.weight.regular,
    fontFamily: vars.fonts.body,

    "@media": {
      "screen and (min-width: 768px)": {
        fontSize: vars.fontSize.xsmall,
      },
      "screen and (min-width: 1180px)": {
        fontSize: vars.fontSize.xsmall,
      },
    },
  },
]);
export const fa_xxsmall = style([
  {
    fontSize: vars.fontSize.xxsmall,
    fontWeight: vars.weight.regular,
    fontFamily: vars.fonts.body,
    lineHeight: "1.75rem",

    "@media": {
      "screen and (min-width: 768px)": {
        fontSize: vars.fontSize.xxsmall,
      },
      "screen and (min-width: 1180px)": {
        fontSize: vars.fontSize.xxsmall,
      },
    },
  },
  sprinkles({
    lineHeight: "medium",
  }),
]);
export const fa_code = style([
  {
    fontSize: vars.fontSize.xsmall,
    fontWeight: vars.weight.regular,
    fontFamily: vars.fonts.code,
    "@media": {
      "screen and (min-width: 768px)": {
        fontSize: vars.fontSize.xsmall,
      },
      "screen and (min-width: 1180px)": {
        fontSize: vars.fontSize.xsmall,
      },
    },
  },
  sprinkles({
    lineHeight: "medium",
  }),
]);
