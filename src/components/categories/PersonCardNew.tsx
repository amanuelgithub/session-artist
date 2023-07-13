import React from "react";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  name: string;
  image: string;
}

function PersonCardNew({ id, name, image }: Props) {
  return (
    <div className="relative h-fit w-full rounded-md border-2 border-secondary-light">
      {/* card header image */}
      <div className="mx-auto h-fit w-full p-4">
        <div className="relative">
          {/* image */}
          <img src={`${image}`} alt={`${name}`} className="w-full" />
          {/* heart icon */}
          <div className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-white sm:h-10 sm:w-10">
            <img src="/images/heart.png" alt="heart" className="p-1 sm:p-0" />
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="mx-4">
        {/* card username and rating section */}
        <div className="my-3 flex items-center justify-between">
          <p className="text-lg font-semibold">@nickportman</p>
          <div className="flex items-center justify-center gap-1">
            <p>5.0</p>
            <img src="/images/star.png" alt="start" />
          </div>
        </div>

        <hr className="text-secondary-light" />

        <div>
          <p className="my-4 italic">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </p>
          <div className="flex items-center justify-evenly">
            <div>
              starting
              <span className="font-bold text-secondary">at 5$</span>
            </div>
            <div className="my-2">
              <Link to={`/service-profile/${id}`}>
                <button className="h-10 w-20 rounded-md border-2 border-primary bg-primary text-lg font-semibold text-gray">
                  More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonCardNew;
