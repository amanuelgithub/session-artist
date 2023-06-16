import React, { useEffect } from "react";
import SubscriptionCategory from "./SubscriptionCategory";
import FancyHeader from "../FancyHeader";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Review from "./Review";
import { ButtonLight, ButtonPrimary } from "../ui/Button";
import PaginationSection from "../PaginationSection";

function ServiceProfile() {
  return (
    <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-36">
      <Navbar
        searchOpen={undefined}
        menuOpen={false}
        loginModalOpen={undefined}
        registerModalOpen={undefined}
        onSearchOpen={undefined}
        openMobileMenu={function (): void {
          throw new Error("Function not implemented.");
        }}
        closeMobileMenu={function (): void {
          throw new Error("Function not implemented.");
        }}
        onLoginModalOpen={undefined}
        onRegisterModalOpen={undefined}
      />

      {/* container */}
      <div className="flex h-full w-full flex-col items-start justify-center gap-10 sm:flex-row ">
        {/* left section */}
        <div className="md:w-1/4">
          {/* username  */}
          <FancyHeader className={"my-4"}>@nickportman</FancyHeader>

          {/* profile-image */}
          <img src="/images/artist1.png" alt="artist-one" />

          <p className="my-3">
            &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            &rdquo;
          </p>

          <ButtonPrimary className={"my-3 w-full"}>Send Message</ButtonPrimary>
        </div>

        {/* right section */}
        <div className="md:mt-20 md:w-3/4">
          <SubscriptionCategory />

          {/* Checkout */}
          {/* card-list container */}
          <div className="mt-4 w-full rounded-md border border-secondary-light">
            <div>
              <div className="p-4">
                <p className="text-lg font-semibold text-secondary">10$</p>
                <p>60 sec</p>
                <p>1 revision</p>
              </div>
              <hr className="text-secondary-light" />
            </div>

            <div className="p-4">
              <div className="flex flex-row items-center justify-start gap-2">
                <img src="/images/check-light.svg" alt="check" />
                <p className="text-secondary-light">text</p>
              </div>

              <div className="flex flex-row items-center justify-start gap-2">
                <img src="/images/check-primary.svg" alt="check" />
                <p>hq audio file</p>
              </div>

              <div className="flex flex-row items-center justify-start gap-2">
                <img src="/images/check-primary.svg" alt="check" />
                <p>hq audio file</p>
              </div>

              <div className="flex flex-row items-center justify-start gap-2">
                <img src="/images/check-light.svg" alt="check" />
                <p className="text-secondary-light">text</p>
              </div>

              <ButtonLight className={"mt-4"}>Checkout</ButtonLight>
            </div>
          </div>

          {/* Review Header Section */}
          <div className="mb-4 mt-16 flex flex-row items-center justify-start gap-4 text-center text-xl font-semibold">
            <h1 className="">Review (100) </h1>

            {/* rating */}
            <div className="flex flex-row items-center justify-start gap-1">
              <p>5.0</p>
              <img src="/images/star.png" alt="start" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Review />
            <Review />
            <Review />
            <Review />
          </div>

          <PaginationSection />
        </div>
      </div>

      <Footer loginModalOpen={undefined} registerModalOpen={undefined} />
    </div>
  );
}

export default ServiceProfile;
