import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { fontFace } from "@vanilla-extract/css";
import { sprinkles } from "styles";

export const JNR_FONTS = fontFace({
  fontDisplay: "swap",
  src: "url(/fonts/JNRfont_n.ttf)",
});

export const TypographRedipe = recipe({
  base: [
    sprinkles({
      fontSize: "xxsmall",
      fontFamily: "body",
    }),
  ],
  variants: {
    color: {
      neutral: sprinkles({
        color: { lightMode: "gray700", darkMode: "white" },
      }),
      reverse: sprinkles({ color: { lightMode: "white", darkMode: "black" } }),
      white: sprinkles({ color: { lightMode: "white", darkMode: "white" } }),
      black: sprinkles({ color: { lightMode: "black", darkMode: "black" } }),
      gray: sprinkles({ color: { lightMode: "gray700", darkMode: "gray200" } }),
    },
    size: {
      xxxlarge: sprinkles({
        fontSize: { mobile: "xlarge", tablet: "xxlarge", desktop: "xxxlarge" },
      }),
      xxlarge: sprinkles({
        fontSize: { mobile: "large", tablet: "xlarge", desktop: "xxlarge" },
      }),
      xlarge: sprinkles({
        fontSize: { mobile: "xxxmedium", tablet: "large", desktop: "large" },
      }),
      large: sprinkles({
        fontSize: {
          mobile: "xxmedium",
          tablet: "xxxmedium",
          desktop: "xxxmedium",
        },
      }),
      medium: sprinkles({
        fontSize: { mobile: "medium", tablet: "small", desktop: "small" },
      }),
      small: sprinkles({
        fontSize: { mobile: "small", tablet: "small", desktop: "small" },
      }),
      xsmall: sprinkles({
        fontSize: { mobile: "xsmall", tablet: "xsmall", desktop: "xsmall" },
      }),
      xxsmall: sprinkles({
        fontSize: { mobile: "xxsmall", tablet: "xxsmall", desktop: "xxsmall" },
      }),
    },
    weight: {
      strong: "bold",
      s700: "700",
    },
    family: {
      jnr: { fontFamily: `${JNR_FONTS}` },
    },
  },
});

export type TypographVariants = RecipeVariants<typeof TypographRedipe>;
