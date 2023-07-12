import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function CatalogHeader() {
  const [urlPath, setUrlPath] = useState("");
  const location = useLocation();

  useEffect(() => {
    location.pathname && setUrlPath(location.pathname);
  }, [location.pathname]);

  return (
    <div>
      <ul className="hidden sm:flex sm:items-center sm:justify-between">
        <Link
          to={"/category/guitars"}
          className={`${
            urlPath === "/category/guitars" ? "border-b-4 border-b-primary" : ""
          } py-4 hover:border-b-4 hover:border-b-primary`}
        >
          Guitarists
        </Link>

        <Link
          to={"/category/pianists"}
          className={`${
            urlPath === "/category/pianists"
              ? "border-b-4 border-b-primary"
              : ""
          } py-4 hover:border-b-4 hover:border-b-primary`}
        >
          Pianists
        </Link>

        <Link
          to={"/category/drums"}
          className={`${
            urlPath === "/category/drums" ? "border-b-4 border-b-primary" : ""
          } py-4 hover:border-b-4 hover:border-b-primary`}
        >
          Drums
        </Link>

        <Link
          to={"/category/vocals"}
          className={`${
            urlPath === "/category/vocals" ? "border-b-4 border-b-primary" : ""
          } py-4 hover:border-b-4 hover:border-b-primary`}
        >
          Vocals
        </Link>
      </ul>

      <hr className="text-gray" />
    </div>
  );
}

export default CatalogHeader;
