import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { sprinkles } from "styles";

const buttonStyle = sprinkles({
  background: "main",
  paddingX: "size-6",
  paddingY: "size-3",
  borderRadius: "size-8",
  color: "white",
  fontWeight: "bold",
});

const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) => {
  return (
    <button className={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;
