import React from "react";
import PersonCardNew from "./PersonCardNew";
import FancyHeader from "../FancyHeader";
import PaginationSection from "../PaginationSection";
import { motion } from "framer-motion";
import { guitars } from "../../users";

function Guitars() {
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
      <FancyHeader>Guitarist</FancyHeader>

      <div className="flex justify-center">
        <div className="sm:gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
          {guitars.map((user, index) => (
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

export default Guitars;
