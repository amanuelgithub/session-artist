import React from "react";
import Navbar from "../Navbar";
import FancyHeader from "../FancyHeader";
import Footer from "../Footer";
import PaginationSection from "../PaginationSection";

function UserProfile() {
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
        <div className="w-full md:w-1/4">
          {/* username  */}
          <FancyHeader className={"my-4"}>@nickportman</FancyHeader>

          {/* profile-image */}
          <img src="/images/artist1.png" alt="artist-one" />

          {/* messages-list */}
          <div className="my-2 flex flex-col gap-2">
            {/* one */}
            <div className="flex flex-row justify-between rounded-md bg-primary-light p-2">
              <p className="text-sm">I want to work with you...</p>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary sm:h-8 sm:w-8">
                <p className="text-sm text-white">2</p>
              </div>
            </div>

            {/* two */}
            <div className="flex flex-row justify-between rounded-md bg-primary-light p-2">
              <p className="text-sm">I want to work with you...</p>

              {/* circular-message-counts */}
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary sm:h-8 sm:w-8">
                <p className="text-sm text-white">2</p>
              </div>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="w-full md:mt-20 md:w-3/4">
          {/* Orders Section */}
          <div>
            <h1 className="my-8 text-2xl font-bold">My Order</h1>

            <div className="mt-4 w-full rounded-md border border-secondary-light">
              {/* rows */}
              {[1, 2, 3].map((val, index) => (
                <div>
                  <div className="flex w-full flex-col items-start justify-between gap-2 p-3 text-sm sm:flex-row sm:justify-between">
                    <div className="flex w-full flex-row items-center justify-start gap-6 sm:w-2/5">
                      {/* circular-counter  */}
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-light sm:h-8 sm:w-8">
                        <p className="text-sm font-semibold text-primary">
                          {val}
                        </p>
                      </div>

                      <p>Order Description #1</p>
                    </div>

                    <p className="w-full sm:w-1/5">More information</p>
                    <p className="w-full text-lg font-semibold text-secondary sm:w-1/5">
                      10$
                    </p>
                    <p className="sm: w-full text-start sm:w-1/5 sm:text-end">
                      20.06.2022
                    </p>
                  </div>

                  {/* horizontal line */}
                  <hr
                    className={`${
                      index === 2 ? "hidden" : "block"
                    } text-secondary-light`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h1 className="my-8 text-2xl font-bold">My Services</h1>

            <div className="mt-4 w-full rounded-md border border-secondary-light">
              {/* rows */}
              {[
                { id: 1, name: "Guitar" },
                { id: 2, name: "Piano" },
              ].map((obj, index) => (
                <div>
                  <div className="flex w-full flex-col items-start justify-between gap-2 p-3 text-sm sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex w-full flex-row items-center justify-start gap-6 sm:w-2/6">
                      {/* circular-counter  */}
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-light sm:h-8 sm:w-8">
                        <p className="text-sm font-semibold text-primary">
                          {obj.id}
                        </p>
                      </div>

                      <p>{obj.name}</p>
                    </div>

                    <p className="w-full sm:w-2/6">More information</p>
                    <p className="w-full text-start text-lg font-semibold text-secondary sm:w-1/5 sm:text-end">
                      10$
                    </p>
                  </div>

                  {/* horizontal line */}
                  <hr
                    className={`${
                      index === 1 ? "hidden" : "block"
                    } text-secondary-light`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Purchased for me */}
          <div>
            <h1 className="my-8 text-2xl font-bold">Purchased for me</h1>

            <div className="mt-4 w-full rounded-md border border-secondary-light">
              {/* rows */}
              {[
                { id: 1, name: "Guitar" },
                { id: 2, name: "Piano" },
              ].map((obj, index) => (
                <div>
                  <div className="flex w-full flex-col items-start justify-between gap-2 p-3 text-sm sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex w-full flex-row items-center justify-start gap-6 sm:w-2/6">
                      {/* circular-counter  */}
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-light sm:h-8 sm:w-8">
                        <p className="text-sm font-semibold text-primary">
                          {obj.id}
                        </p>
                      </div>

                      <p>{obj.name}</p>
                    </div>

                    <p className="w-full sm:w-2/6">More information</p>
                    <p className="w-full text-start text-lg font-semibold text-secondary sm:w-1/5 sm:text-end">
                      10$
                    </p>
                  </div>

                  {/* horizontal line */}
                  <hr
                    className={`${
                      index === 1 ? "hidden" : "block"
                    } text-secondary-light`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer loginModalOpen={undefined} registerModalOpen={undefined} />
    </div>
  );
}

export default UserProfile;
