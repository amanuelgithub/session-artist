import React from "react";
import { Link } from "react-router-dom";
import CatagoriesList from "./components/CatagoriesList";

function Main() {
  return (
    <div>
      {/* <div className={`${!menuOpen ? "block" : "hidden"} `}> */}
      {/* header section for the main section */}
      <div className="mx-20 my-16 ">
        <h1 className="text-3xl sm:text-5xl font-semibold text-center">
          Session Artists for your dream project
        </h1>
        <h3 className="text-center my-4 font-semibold text-lg">
          Select Category
        </h3>
        {/* gradients */}
        <div className="flex absolute top-1/4 left-1/4 sm:left-1/2">
          <div className="w-28 h-28 bg-primary rounded-full blur-3xl"></div>
          <div className="w-28 h-28 bg-secondary rounded-full blur-3xl"></div>
        </div>
      </div>
      {/* Find an Artist and Become Seller Buttons */}
      <div className="flex justify-evenly my-8 sm:justify-center sm:gap-8">
        <div>
          <button className="w-40 h-10 text-lg font-semibold bg-secondary rounded-md border-2 border- bg-opacity-10 text-secondary">
            Find an artist
          </button>
        </div>
        <div>
          <button className="w-40 h-10 text-lg font-semibold bg-primary rounded-md border-2 border- bg-opacity-10 text-primary">
            Become seller
          </button>
        </div>
      </div>
      {/* Categories - not completed */}
      <CatagoriesList />

      {/* Social links section */}
      <div className="flex justify-center my-16">
        <div>
          <div className="my-4">
            <h2 className="text-center text-xl relative">
              Social
              <span className="w-10 h-2 bg-secondary bg-opacity-70 absolute bottom-0 right-4"></span>
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
