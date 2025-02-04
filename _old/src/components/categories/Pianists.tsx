import React from "react";
import FancyHeader from "../FancyHeader";
import PersonCardNew from "./PersonCardNew";
import PaginationSection from "../PaginationSection";
import { motion } from "framer-motion";
import { pianists } from "../../users";

function Pianists() {
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
      <FancyHeader>Pianists</FancyHeader>

      <div className="flex justify-center">
        <div className="md:grid-c ols-2 sm:gap-8  md:grid lg:grid-cols-3">
          {pianists.map((user) => (
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

export default Pianists;
