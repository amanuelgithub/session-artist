import React from "react";

interface Props {
  index: number;
  image: string;
}

function PersonCardNew({ index, image }: Props) {
  return (
    <div
      key={index}
      className="w-full h-fit border-2 border-secondary-light rounded-md relative"
    >
      {/* card header image */}
      <div className="w-full p-4 h-fit mx-auto">
        <div className="relative">
          {/* image */}
          <img src={`${image}`} alt={`${image}`} className="w-full" />
          {/* heart icon */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white absolute top-6 right-6 flex justify-center items-center">
            <img src="/images/heart.png" alt="heart" className="p-1 sm:p-0" />
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="mx-4">
        {/* card username and rating section */}
        <div className="flex justify-between items-center my-3">
          <p className="text-lg font-semibold">@nickportman</p>
          <div className="flex justify-center items-center gap-1">
            <p>5.0</p>
            <img src="/images/star.png" alt="start" />
          </div>
        </div>

        <hr className="text-secondary-light" />

        <div>
          <p className="italic my-4">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </p>
          <div className="flex justify-evenly items-center">
            <div>
              starting
              <span className="text-secondary font-bold">at 5$</span>
            </div>
            <div className="my-2">
              <button className="w-20 h-10 text-lg font-semibold bg-primary rounded-md border-2 border-primary text-gray">
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonCardNew;
