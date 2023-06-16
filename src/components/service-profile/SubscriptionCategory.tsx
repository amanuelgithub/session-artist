import React from "react";

function SubscriptionCategory() {
  return (
    <div className="w-full">
      <ul className="flex w-full flex-row items-center justify-evenly gap-1 gap-4 font-semibold sm:justify-start">
        <li className="w-full border-b-4 border-b-primary py-2 text-center sm:w-[14%]">
          <p>Standard</p>
        </li>

        <li className="w-full border-b-4 border-b-white py-2 text-center sm:w-[14%]">
          <p>Premium</p>
        </li>

        <li className="w-full border-b-4 border-b-white py-2 text-center sm:w-[14%]">
          <p>Elite</p>
        </li>
      </ul>

      <hr className="text-gray" />
    </div>
  );
}

export default SubscriptionCategory;
