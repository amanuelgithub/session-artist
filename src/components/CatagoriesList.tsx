import React from "react";
import { Link } from "react-router-dom";

// todo: needs to be scrollable in mobile devices
function CatagoriesList() {
  const categories = [
    { to: "/category/guitars", img: "images/Guitar.png" },
    { to: "/category/pianists", img: "./images/piano.png" },
    { to: "/category/drums", img: "./images/drum.png" },
    { to: "/category/vocals", img: "./images/microphone.png" },
    { to: "#", img: "./images/camera.png" },
    { to: "#", img: "./images/organ-player.png" },
  ];
  return (
    <div className="my-16 flex justify-between gap-1">
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
