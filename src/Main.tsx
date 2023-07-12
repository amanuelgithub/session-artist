import React from "react";
import CatagoriesList from "./components/CatagoriesList";

function Main() {
  return (
    <div>
      {/* <div className={`${!menuOpen ? "block" : "hidden"} `}> */}
      {/* header section for the main section */}
      <div className="mx-20 my-16 ">
        <h1 className="text-center text-3xl font-semibold sm:text-5xl">
          Session Artists for your dream project
        </h1>

        <h3 className="my-4 text-center text-lg font-semibold">
          Select Category
        </h3>

        {/* gradients */}
        <div className="absolute left-1/4 top-1/4 flex sm:left-1/2">
          <div className="h-28 w-28 rounded-full bg-primary blur-3xl"></div>
          <div className="h-28 w-28 rounded-full bg-secondary blur-3xl"></div>
        </div>
      </div>

      {/* Find an Artist and Become Seller Buttons */}
      <div className="my-8 flex justify-evenly sm:justify-center sm:gap-8">
        <div>
          <button className="border- h-10 w-40 rounded-md border-2 bg-secondary bg-opacity-10 text-lg font-semibold text-secondary">
            Find an artist
          </button>
        </div>

        <div>
          <button className="border- h-10 w-40 rounded-md border-2 bg-primary bg-opacity-10 text-lg font-semibold text-primary">
            Become seller
          </button>
        </div>
      </div>
      {/* Categories - not completed */}
      <CatagoriesList />

      {/* Social links section */}
      <div className="my-16 flex justify-center">
        <div>
          <div className="my-4">
            <h2 className="relative text-center text-xl">
              Social
              <span className="absolute bottom-0 right-4 h-2 w-10 bg-secondary bg-opacity-70"></span>
            </h2>
          </div>

          <div className="flex gap-2">
            <img src="images/instagram.png" alt="instagram" />

            <img src="images/facebook.png" alt="facebook" />

            <img src="images/twitter.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
