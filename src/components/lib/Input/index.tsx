"use client";

import React, { ChangeEvent } from "react";
import FormControl, { FormControlProps } from "react-bootstrap/FormControl";

interface InputProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value?: string | number;
  type?: "text" | "number";
  defaultValue?: string | number;
  placeholder?: string;
  className?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      onChange,
      name,
      value,
      type,
      defaultValue,
      placeholder,
      className,
      id,
      required = false,
      disabled = false,
    }: InputProps,
    ref
  ) => {
    return (
      <FormControl
        required={required}
        ref={ref}
        className={className}
        id={id}
        onChange={onChange}
        name={name}
        value={value}
        type={type}
        disabled={disabled}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    );
  }
);
export default React.memo(Input);

Input.displayName = "Input";
