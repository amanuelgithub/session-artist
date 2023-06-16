import React from "react";
import { motion } from "framer-motion";

interface Props {
  menuOpen: boolean;
  closeMobileMenu: () => void;
  onLoginModalOpen: any;
  onRegisterModalOpen: any;
}

function MobileMenu({
  menuOpen,
  closeMobileMenu,
  onLoginModalOpen,
  onRegisterModalOpen,
}: Props) {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <>
      {/* mobile menu section */}
      <motion.div
        animate={menuOpen ? "open" : "closed"}
        variants={variants}
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute left-0 top-16 z-20 my-10 flex h-screen w-screen justify-center bg-white sm:static sm:my-0 sm:hidden`}
      >
        <div className="sm:flex sm:items-center sm:justify-center sm:gap-4">
          <div className="my-2 sm:my-0">
            <button
              onClick={() => {
                closeMobileMenu();
                onLoginModalOpen(true);
              }}
              className="h-10 w-40 rounded-md border-2  text-lg font-semibold text-primary"
            >
              Login
            </button>
          </div>

          <div className="my-2">
            <button
              onClick={() => {
                closeMobileMenu();
                onRegisterModalOpen(true);
              }}
              className="h-10 w-40 rounded-md border-2 border-primary bg-primary text-lg font-semibold text-gray"
            >
              Register
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default MobileMenu;
