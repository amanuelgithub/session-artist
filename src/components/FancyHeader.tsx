import React from "react";

interface Props {
  children: any;
  className?: any;
}
function FancyHeader({ children, className }: Props) {
  return (
    <div className={`relative my-8 w-fit ${className}`}>
      <h1 className="text-2xl font-bold ">{children}</h1>
      <span className="absolute -right-4 bottom-0 h-2 w-16 bg-secondary bg-opacity-70"></span>
    </div>
  );
}

export default FancyHeader;
