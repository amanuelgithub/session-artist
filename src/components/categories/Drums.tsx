import React from "react";
import FancyHeader from "../FancyHeader";
import PersonCardNew from "./PersonCardNew";
import PaginationSection from "../PaginationSection";
import { motion } from "framer-motion";

function Drums() {
  const personsImages = [
    "/images/artist5.png",
    "/images/artist6.png",
    "/images/artist1.png",
    "/images/artist2.png",
    "/images/artist3.png",
    "/images/artist4.png",
  ];

  const pageTransition = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <FancyHeader>Drums</FancyHeader>

      <div className="flex justify-center">
        <div className="sm:gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
          {personsImages.map((image, index) => (
            <PersonCardNew key={index} index={index} image={image} />
          ))}
        </div>
      </div>

      <PaginationSection />
    </motion.div>
  );
}

export default Drums;
