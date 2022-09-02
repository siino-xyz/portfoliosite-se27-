import KAI from "./kai.svg";
import HEI from "./hei.svg";
import MEI from "./mei.svg";
import ANN from "./ann.svg";
import classNames from "classnames";

type SwitchFontsProps = {
  className?: Parameters<typeof classNames>[0];
};

export const Kai = ({ className }: SwitchFontsProps) => {
  return <KAI className={className} />;
};
export const Hei = ({ className }: SwitchFontsProps) => {
  return <HEI className={className} />;
};
export const Mei = ({ className }: SwitchFontsProps) => {
  return <MEI className={className} />;
};
export const Ann = ({ className }: SwitchFontsProps) => {
  return <ANN className={className} />;
};
