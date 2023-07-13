import React from "react";
import FancyHeader from "../FancyHeader";
import PersonCardNew from "./PersonCardNew";
import PaginationSection from "../PaginationSection";
import { motion } from "framer-motion";
import { drums } from "../../users";

function Drums() {
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
          {drums.map((user) => (
            <PersonCardNew
              key={user.id}
              id={user.id}
              name={user.name}
              image={user.img}
            />
          ))}
        </div>
      </div>

      <PaginationSection />
    </motion.div>
  );
}

export default Drums;
