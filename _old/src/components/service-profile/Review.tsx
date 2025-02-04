import React from "react";

function Review() {
  return (
    <>
      {/* card / box */}
      <div className="w-full rounded-md border border-secondary-light p-4">
        {/* card-header */}
        <div className="mb-2 flex flex-row items-center justify-start gap-4">
          {/* user-account circle */}
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary sm:h-10 sm:w-10">
            <p className="text-white">M</p>
          </div>

          <div>
            <div className="flex flex-row items-start justify-start gap-2">
              {/* name */}
              <p>marlonruiz300</p>

              {/* rating */}
              <div className="flex items-center justify-center gap-1">
                <p>5.0</p>
                <img src="/images/star.png" alt="start" />
              </div>
            </div>

            {/* date */}
            <p className="text-secondary">20.06.2022</p>
          </div>
        </div>

        {/* card-content / card-body */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </>
  );
}

export default Review;
