import React, { PropsWithChildren } from "react";

import styles from "./index.module.css";

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      className={`${styles.button}  py-2 px-4 rounded-pill ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
