import React from "react";

interface Props {
  index: number;
  image: string;
}

function PersonCard({ index, image }: Props) {
  return (
    <div
      key={index}
      className="w-[360px] h-[524px] border-2 border-secondary-light rounded-md relative"
    >
      {/* card image (header) */}
      <div className="w-[330px] h-[264px] mx-auto mt-3">
        <img src={`${image}`} alt={`${image}`} />
        <div className="w-10 h-10 rounded-full bg-white absolute top-6 right-6 flex justify-center items-center">
          <img src="../images/heart.png" alt="heart" />
        </div>
      </div>
      {/* Card Body */}
      <div className="mx-4">
        {/* card username and rating section */}
        <div className="flex justify-between items-center my-3">
          <p className="text-lg font-semibold">@nickportman</p>
          <div className="flex justify-center items-center gap-1">
            <p>5.0</p>
            <img src="../images/star.png" alt="start" />
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

export default PersonCard;
