import React from "react";

interface PagButtonProps {
  imgLocation?: string;
  next?: boolean;
  number?: boolean;
  value?: any;
}
function PagButton({
  imgLocation,
  next = true,
  number = false,
  value = undefined,
}: PagButtonProps) {
  const normalBtn = (
    <button
      type="submit"
      className={`mx-1 h-10 w-10 rounded-sm border border-primary  bg-primary text-white`}
    >
      {value}
    </button>
  );
  let returnValue = undefined;

  if (number) {
    returnValue = normalBtn;
  } else {
    returnValue = (
      <button
        type="submit"
        className={`mx-1 h-10 w-10 rounded-sm border border-primary p-2 ${
          !next ? "rotate-180" : ""
        }`}
      >
        <img src={`${imgLocation}`} alt="" />
      </button>
    );
  }

  return returnValue;
}

function PaginationSection() {
  return (
    <div className="my-4">
      <PagButton imgLocation={"/images/next.png"} next={false} />
      <PagButton imgLocation={"/images/next.png"} number={true} value={2} />
      <PagButton imgLocation={"/images/next.png"} />
    </div>
  );
}

export default PaginationSection;
