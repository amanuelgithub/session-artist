import React from "react";
import { Link } from "react-router-dom";

// todo: needs to be scrollable in mobile devices
function CatagoriesList() {
  const categories = [
    { to: "/category/guitar", img: "images/Guitar.png" },
    { to: "/category/piano", img: "./images/piano.png" },
    { to: "/category/drum", img: "./images/drum.png" },
    { to: "/category/microphone", img: "./images/microphone.png" },
    { to: "/category/camera", img: "./images/camera.png" },
    { to: "/category/organ-player", img: "./images/organ-player.png" },
  ];
  return (
    <div className="flex justify-between gap-1 my-16">
      {categories.map((category, index) => (
        <div
          key={category.to}
          className={`${index > 1 ? "hidden sm:block" : ""}`}
        >
          <Link to={category.to}>
            <img src={category.img} alt="" />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CatagoriesList;
