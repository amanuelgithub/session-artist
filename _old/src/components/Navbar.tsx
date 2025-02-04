import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ButtonLight, ButtonPrimary } from "./ui/Button";
import { LoginContext } from "../login-context";

interface Props {
  searchOpen: any;
  mobileMenuOpen: boolean;
  loginModalOpen: any;
  registerModalOpen: any;
  onSearchOpen: any;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  onLoginModalOpen: any;
  onRegisterModalOpen: any;
}

function Navbar({
  mobileMenuOpen,
  searchOpen,
  onSearchOpen,
  openMobileMenu,
  closeMobileMenu,
  loginModalOpen,
  onLoginModalOpen,
  registerModalOpen,
  onRegisterModalOpen,
}: Props) {
  const { isLoggedIn, login } = useContext(LoginContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    login(false);
    navigate(-1);
  };

  return (
    <nav>
      <div
        className={`${
          searchOpen ? "block" : "flex"
        } w-full flex-row items-center justify-between gap-8 py-4`}
      >
        {/* Mobile - search-icon */}
        <div className={`${searchOpen ? "hidden" : "block"} ml-4 sm:hidden`}>
          <img
            src="/images/search.png"
            alt="search"
            onClick={() => onSearchOpen(true)}
          />
        </div>

        {/* Logo section */}
        <Link to={"/"} className="block">
          <div className={`${searchOpen ? "hidden" : "flex flex-row gap-2"}`}>
            <img src="/images/logo.png" alt="logo" />

            <div className="text-end font-semibold">
              <h1>SESSION</h1>
              <h4>artist</h4>
            </div>
          </div>
        </Link>

        {/* Search-Input Field */}
        <div>
          <motion.div
            className={`${
              searchOpen ? "block" : "hidden"
            } relative w-full py-1 sm:block lg:w-fit`}
          >
            {/* Search Input Field */}
            <motion.input
              initial={searchOpen ? { x: "-100vw" } : {}}
              animate={searchOpen ? { x: 0 } : {}}
              transition={{ duration: 0.5 }}
              type=""
              placeholder="Search"
              className="h-11 w-full border-2 border-gray bg-gray px-4 outline-none md:w-96"
            />
            {/* close icon that will be shown when the search icon is opened in the mobile view */}
            <motion.img
              initial={searchOpen ? { x: "-100vw" } : {}}
              animate={searchOpen ? { x: 0 } : {}}
              transition={{ duration: 0.5 }}
              src="/images/close.png"
              alt="close"
              onClick={() => onSearchOpen(false)}
              className="absolute bottom-4 right-2 sm:hidden"
            />
            {/* Search icon for the desktop serch input field */}
            <img
              src="/images/search.png"
              alt="search"
              className="absolute bottom-4 right-2 hidden sm:block"
            />
          </motion.div>
        </div>

        {/* Mobile menu hamberger and close icons */}
        <div className={`${searchOpen ? "hidden" : "block"} mr-4 sm:hidden`}>
          {/* menu icon */}
          <motion.img
            animate={mobileMenuOpen ? { rotate: 90 } : {}}
            src="/images/menu.png"
            alt="menu"
            onClick={() => openMobileMenu()}
            className={`${!mobileMenuOpen ? "block" : "hidden"}`}
          />
          {/* close icon */}
          <motion.img
            animate={!mobileMenuOpen ? { rotate: -90 } : {}}
            src="/images/close.png"
            alt="close"
            onClick={() => closeMobileMenu()}
            className={`${mobileMenuOpen ? "block" : "hidden"}`}
          />
        </div>

        {/* Desktop Login and Register Buttons */}
        <div className={`my-10 hidden justify-center sm:my-0 sm:flex`}>
          {isLoggedIn ? (
            <div className="my-2">
              <ButtonLight onClick={handleLogout}>Logout</ButtonLight>
            </div>
          ) : (
            <div className="sm:flex sm:items-center sm:justify-center sm:gap-4">
              {/* login */}
              <div className="my-2 sm:my-0">
                <ButtonLight
                  onClick={() => {
                    closeMobileMenu();
                    onLoginModalOpen(true);
                  }}
                >
                  Login
                </ButtonLight>
              </div>

              {/* register */}
              <div className="my-2">
                <ButtonPrimary
                  onClick={() => {
                    closeMobileMenu();
                    onRegisterModalOpen(true);
                  }}
                >
                  Register
                </ButtonPrimary>
              </div>
            </div>
          )}
        </div>
      </div>

      <hr
        className={`${
          loginModalOpen || registerModalOpen
            ? "text-black text-opacity-10"
            : "text-gray"
        } `}
      />
    </nav>
  );
}

export default Navbar;
