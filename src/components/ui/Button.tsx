import React from "react";

interface Props {
  children: any;
  className?: any;
  onClick?: (event: any) => void;
}

export function ButtonPrimary({ children, className, onClick }: Props) {
  return (
    <button
      onClick={(e) => onClick && onClick(e)}
      className={`h-10 w-40 rounded-md border border-primary bg-primary text-lg font-semibold text-white ${className}`}
    >
      {children}
    </button>
  );
}

export function ButtonLight({ children, className, onClick }: Props) {
  return (
    <button
      onClick={(e) => onClick && onClick(e)}
      className={`h-10 w-40 rounded-md border  text-lg font-semibold text-primary ${className}`}
    >
      {children}
    </button>
  );
}
