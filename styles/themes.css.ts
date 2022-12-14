import { createGlobalTheme } from "@vanilla-extract/css";
import colors from "tailwindcss/colors";
const grid = 4;
const px = (value: string | number) => `${value}px`;

//colors
const tailwindPalette = {
  white: "#F1F5F9",
  black: "#1B1919",
  amber: "#ffc107",
  transparent: "rgba(0,0,0,0)",
  transBlack: "rgba(27,27,25,0.7)",
  transWhite: "rgba(241,245,249,0.7)",
  red: colors.red["500"],
  gray50: colors.gray["50"],
  gray100: colors.gray["100"],
  gray200: colors.gray["200"],
  gray300: colors.gray["300"],
  gray400: colors.gray["400"],
  gray500: colors.gray["500"],
  gray600: colors.gray["600"],
  gray700: colors.gray["700"],
  gray800: colors.gray["800"],
  gray900: colors.gray["900"],

  dpA100: "#b388ff",
  dpA200: "#7c4dff",
  dpA400: "#651fff",
  dpA700: "#6200ea",

  limeA100: "#f4ff81",
  limeA200: "#eeff41",
  limeA400: "#c6ff00",
  limeA700: "#aeea00",

  indigoA100: "#8c9eff",
  indigoA200: "#536dfe",
  indigoA400: "#3d5afe",
  indigoA700: "#304ffe",
};

//util variavles
export const vars = createGlobalTheme(":root", {
  fonts: {
    heading:
      'JNR_FONTS, Zen Kaku Gothic Antique, "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
    body: 'Zen kaku Gothic Antique, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    code: 'Source Code Pro,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  grid: px(grid),
  spacing: {
    none: "0",
    auto: "auto",
    xsmall: px(1 * grid),
    small: px(2 * grid),
    medium: px(3 * grid),
    large: px(5 * grid),
    xlarge: px(8 * grid),
    xxlarge: px(12 * grid),
    xxxlarge: px(24 * grid),
  },
  contentWidth: {
    xsmall: px(480),
    small: px(600),
    standard: px(740),
    large: px(960),
    xlarge: px(1120),
    xxlarge: px(1180),
  },
  contentHeight: {
    fullVh: "100vh",
    full: "100%",
    inher: "inherit",
    xsmall: px(1 * grid),
    small: px(2 * grid),
    medium: px(3 * grid),
    large: px(5 * grid),
    xlarge: px(8 * grid),
    xxlarge: px(12 * grid),
    xxxlarge: px(24 * grid),
  },
  width: {
    full: "100%",
    "w-11/12": "91.666667%",
    "w-4/5": "80%",
    "w-3/4": "75%",
    "w-3/5": "60%",
    "w-1/2": "50%",
    "w-1/4": "25%",
    "w-1/3": "33.333%",
    "w-screen": "100vw",
  },
  fontSize: {
    xxsmall: "12px",
    xsmall: "14px",
    small: "16px",
    medium: "18px",
    xmedium: "20px",
    xxmedium: "22px",
    xxxmedium: "24px",
    large: "30px",
    xlarge: "38px",
    xxlarge: "46px",
    xxxlarge: "54px",
  },
  leading: {
    xsmall: "1.25rem",
    small: "1.5rem",
    medium: "1.75rem",
    large: "2rem",
    xlarge: "3rem",
    xxlarge: "4rem",
    xxxlarge: "5rem",
  },
  weight: {
    regular: "400",
    strong: "700",
  },
  palette: tailwindPalette,
  border: {
    width: {
      standard: px(1 * grid),
      large: px(2 * grid),
    },

    radius: {
      small: px(1 * grid),
      medium: px(4 * grid),
      large: px(7 * grid),
      full: "9999px",
    },
  },
  gridTempCol: {
    col1: "1fr",
    col2: "1fr 1fr",
    col3: "1fr 1fr 1fr",
  },
});
