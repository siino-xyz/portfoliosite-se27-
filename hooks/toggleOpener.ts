import { useState } from "react";

export const ToggleOpener = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  return { menuOpen, toggleMenu };
};
