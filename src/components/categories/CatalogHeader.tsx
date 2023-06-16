import React from "react";

function CatalogHeader() {
  return (
    <div>
      <div>
        <ul className="hidden sm:flex sm:items-center sm:justify-evenly">
          <li className="border-b-4 border-b-primary py-4">
            <a href="#">Guitarists</a>
          </li>
          <li>
            <a href="#">Pianists</a>
          </li>
          <li>
            <a href="#">Drums</a>
          </li>
          <li>
            <a href="#">Vocals</a>
          </li>
          <li>
            <a href="#">Category1</a>
          </li>
        </ul>
      </div>

      <hr className="text-gray" />
    </div>
  );
}

export default CatalogHeader;
