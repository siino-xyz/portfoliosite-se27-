import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { borderAll } from "styles";
import classNames from "classnames";
import * as styles from "./button.css";
const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) => {
  return (
    <button className={classNames(borderAll, styles.button)} {...props}>
      {children}
    </button>
  );
};

export default Button;
