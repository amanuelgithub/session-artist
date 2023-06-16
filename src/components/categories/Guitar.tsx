import React from "react";
import PersonCardNew from "./PersonCardNew";
import CatalogHeader from "./CatalogHeader";
import FancyHeader from "../FancyHeader";
import PaginationSection from "../PaginationSection";

function Guitar() {
  const personsImages = [
    "/images/artist1.png",
    "/images/artist2.png",
    "/images/artist3.png",
    "/images/artist4.png",
    "/images/artist5.png",
    "/images/artist6.png",
  ];
  return (
    <div>
      <CatalogHeader />

      <div>
        <FancyHeader>Guitarist</FancyHeader>

        <div className="flex justify-center">
          <div className="sm:gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
            {personsImages.map((image, index) => (
              <PersonCardNew index={index} image={image} />
            ))}
          </div>
        </div>

        <PaginationSection />
      </div>
    </div>
  );
}

export default Guitar;
