"use client";

import React from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "disabled"; // Define your variants here
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
   flex items-center justify-center
    px-3 py-7 rounded-lg w-full h-[48px] font-bold
    ${
      variant === "primary"
        ? "bg-linkBtnPrimaryDefault text-white text-base hover:bg-linkBtnPrimaryActive active:bg-linkBtnPrimaryActive"
        : ""
    }
    ${
      variant === "secondary"
        ? "bg-transparent text-linkPurple border border-linkPurple hover:bg-linkPurpleHover active:bg-linkPurpleHover"
        : ""
    }
    ${
      variant === "disabled"
        ? "opacity-25 bg-linkBtnPrimaryDefault text-white text-base"
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
