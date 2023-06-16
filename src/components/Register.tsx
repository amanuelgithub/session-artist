import React from "react";
import { motion } from "framer-motion";

interface Props {
  registerModalOpen: any;
  onRegisterModalOpen: any;
}

function Register({ registerModalOpen, onRegisterModalOpen }: Props) {
  const variants = { open: { y: 0 }, close: { y: "-100vh" } };
  return (
    <motion.div
      animate={registerModalOpen ? "open" : "close"}
      variants={variants}
    >
      <div
        className={`${
          registerModalOpen ? "block" : "hidden"
        } fixed right-2 top-16 z-10 mx-10 my-20 rounded-lg bg-white sm:right-1/3`}
      >
        <div className="p-4">
          {/* modal header */}
          <div className="relative">
            <h1 className="mb-3 text-center text-3xl font-bold">Register</h1>
            <img
              src="/images/close.png"
              alt="close"
              onClick={() => onRegisterModalOpen(false)}
              className="absolute right-0 top-0"
            />
            <hr className="font-bold text-gray" />
          </div>
          {/* modal body */}
          <div className="flex justify-center">
            <div className="sm:w-96 ">
              <input
                type="text"
                placeholder="Enter your Email"
                className="my-2 h-11  w-full rounded-md border-2 border-gray px-2 outline-none"
              />
              <input
                type="text"
                placeholder="Choose a Username"
                className="my-2 h-11  w-full rounded-md border-2 border-gray px-2 outline-none"
              />
              <input
                type="password"
                placeholder="Choose a Password"
                className="my-2 h-11  w-full rounded-md border-2 border-gray px-2 outline-none"
              />
              <div className="mt-2 flex justify-center">
                <button className="h-10 w-40 rounded-md border-2 bg-primary  text-lg font-semibold text-gray">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Register;
