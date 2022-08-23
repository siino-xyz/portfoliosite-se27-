import { Box } from "components/box/Box";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import * as style from "./ColorModeToggle.css";

type ColorMode = "dark" | "light";
export const themekey = "se27-theme-prefix";

interface ColorModeContextValues {
  colorMode: ColorMode | null;
  setColorMode: (colorMode: ColorMode) => void;
}

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
      component="button"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="full"
      cursor="pointer"
      title="Toggle colour mode"
      className={style.root}
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
    >
      ChangeColor
    </Box>
  );
};
