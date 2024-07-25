"use client";

import React from "react";

interface ButtonProps {
  variant: "primary" | "secondary"; // Define your variants here
  type: "submit" | "reset" | "button";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  onClick,
  type,
}) => {
  const buttonClassNames = `
    px-3 py-7 rounded-lg w-full h-[46px] text-bold
    ${
      variant === "primary"
        ? "bg-linkBtnPrimaryDefault text-white text-base hover:bg-linkBtnPrimaryActive active:bg-linkBtnPrimaryActive"
        : ""
    }
    ${
      variant === "secondary"
        ? "bg-transparent text-purple border hover:bg-linkBtnPrimaryActive active:bg-linkBtnPrimaryActiveh"
        : ""
    }
  `;

  return (
    <button type={type} className={buttonClassNames} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
