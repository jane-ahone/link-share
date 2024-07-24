"use client";

import React from "react";

interface ButtonProps {
  variant: "primary" | "secondary"; // Define your variants here
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, children, onClick }) => {
  const buttonClassNames = `
    px-3 py-7 rounded-lg w-[227px] h-[46px] text-bold
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
    <button type="submit" className={buttonClassNames} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
