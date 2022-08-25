import { createGlobalTheme } from "@vanilla-extract/css";
import colors from "tailwindcss/colors";
const grid = 4;
const px = (value: string | number) => `${value}px`;

//colors
const tailwindPalette = {
  white: "#F1F5F9",
  black: "#1B1919",
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
};

//util variavles
export const vars = createGlobalTheme(":root", {
  fonts: {
    heading:
      'MuseoModerno, Zen Kaku Gothic Antique, "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
    body: 'Zen kaku Gothic Antique, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    code: 'Source Code Pro,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  grid: px(grid),
  spacing: {
    none: "0",
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
    xxlarge: px(1350),
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
    xxxlarge: "52px",
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
      small: px(2 * grid),
      medium: px(4 * grid),
      large: px(7 * grid),
      full: "9999px",
    },
  },
});
