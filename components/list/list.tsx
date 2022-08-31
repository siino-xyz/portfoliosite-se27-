import { Box } from "components/box/Box";
import TypoGraphy from "components/typography/typography";
import { ReactNode } from "react";
import { sprinkles, Sprinkles } from "styles";

type ListProps = {
  background?: Sprinkles["background"];
  align?: Sprinkles["textAlign"];
  color?: Sprinkles["color"];
  children: ReactNode;
  listStyle?: Sprinkles["listStyle"];
};

const List = ({ background, align, color, children, listStyle }: ListProps) => {
  return (
    <Box
      component="ul"
      className={sprinkles({
        background: background,
        textAlign: align,
        color: color,
        listStyle: listStyle,
      })}
    >
      {children}
    </Box>
  );
};

export default List;
