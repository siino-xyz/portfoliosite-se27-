import classNames from "classnames";
import { Box } from "components/box/Box";
import Button from "components/button/button";
import { Ann, Kai, Mei } from "components/vectorFonts/switchFonts";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { darkMode } from "styles";
import * as style from "./ColorModeToggle.css";

type ColorMode = "dark" | "light";
export const themekey = "se27-theme-prefix";

type ColorModeContextValues = {
  colorMode: ColorMode | null;
  setColorMode: (colorMode: ColorMode) => void;
};

export const ColorModeContext = createContext<ColorModeContextValues>({
  colorMode: null,
  setColorMode: () => {},
});

export const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [colorMode, setColorMode] = useState<ColorMode | null>(null);

  useEffect(() => {
    setColorMode(
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
  }, []);

  const setter = (color: ColorMode) => {
    setColorMode(color);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(color);

    try {
      localStorage.setItem(themekey, color);
    } catch (e) {}
  };

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode: setter }}>
      {children}
    </ColorModeContext.Provider>
  );
};

const useColorMode = () => useContext(ColorModeContext);

export const ColorModeToggle = () => {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <Box
      title="Toggle colour mode"
      display="flex"
      flexDirection="row"
      paddingRight="small"
      paddingTop="xsmall"
    >
      <Button
        name="colorMode_light"
        onClick={() => {
          setColorMode("light");
        }}
        className={classNames(style.light, style.toggleSwitches)}
      >
        <Mei className={classNames(style.vectorFonts)} />
      </Button>
      <Button
        name="colorMode_dark"
        onClick={() => setColorMode("dark")}
        className={classNames(style.dark, style.toggleSwitches)}
      >
        <Ann className={style.vectorFonts} />
      </Button>
    </Box>
  );
};
