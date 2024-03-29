import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Register from "../components/Register";
import MobileMenu from "../components/MobileMenu";
import { disableScroll, enableScroll } from "../utils/scroll-behaviour";
import { LoginContext } from "../login-context";

function Layout() {
  const { isLoggedIn } = useContext(LoginContext);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  const handleOpenMobileMenu = () => {
    disableScroll();
    setMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    enableScroll();
    setMobileMenuOpen(false);
  };

  return (
    <div className="relative mx-4 sm:mx-10 md:mx-20 lg:mx-36">
      <Navbar
        searchOpen={searchOpen}
        mobileMenuOpen={mobileMenuOpen}
        loginModalOpen={loginModalOpen}
        registerModalOpen={registerModalOpen}
        onSearchOpen={setSearchOpen}
        openMobileMenu={handleOpenMobileMenu}
        closeMobileMenu={handleCloseMobileMenu}
        onLoginModalOpen={setLoginModalOpen}
        onRegisterModalOpen={setRegisterModalOpen}
      />

      {/* Mobile Menu */}
      <MobileMenu
        menuOpen={mobileMenuOpen}
        closeMobileMenu={handleCloseMobileMenu}
        onLoginModalOpen={setLoginModalOpen}
        onRegisterModalOpen={setRegisterModalOpen}
      />

      {/* login and register dialog are here => another mechanism needs to used to display this dialogs */}
      <div
        className={` ${
          (loginModalOpen || registerModalOpen) && !isLoggedIn
            ? "fixed left-0 top-0 z-40 h-screen w-screen bg-black bg-opacity-70"
            : ""
        }`}
      >
        {/* Login Page Modal */}
        <Login
          loginModalOpen={loginModalOpen}
          onLoginModalOpen={setLoginModalOpen}
        />

        {/* Register Page Modal */}
        <Register
          registerModalOpen={registerModalOpen}
          onRegisterModalOpen={setRegisterModalOpen}
        />
      </div>

      <div>
        <Outlet />
      </div>

      <Footer
        loginModalOpen={loginModalOpen}
        registerModalOpen={registerModalOpen}
      />
    </div>
  );
}

export default Layout;
