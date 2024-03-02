import React, { PropsWithChildren } from "react";
import styles from "./index.module.css";

interface WrapperProps extends PropsWithChildren {
  className?: string;
  primary?: boolean;
}

const Wrapper = ({ children, className, primary }: WrapperProps) => {
  return (
    <div className={`${className} ${primary && styles.primary}`}>
      {children}
    </div>
  );
};

export default Wrapper;
