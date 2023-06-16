import React from "react";

interface Props {
  loginModalOpen: any;
  registerModalOpen: any;
}

function Footer({ loginModalOpen, registerModalOpen }: Props) {
  return (
    <footer>
      {/* visible on tablet & desktops */}
      <div className="sm:hidden block my-5 sm:w-full">
        <div className="flex justify-center">
          <img src="/images/logo.png" alt="logo" />
          <div className="text-end font-semibold">
            <h1>SESSION</h1>
            <h4>artist</h4>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-start gap-20 sm:justify-between sm:gap-0 mt-8 mb-2">
        <ul className="flex flex-col md:flex-row md:justify-start md:items-center md:gap-8">
          <li className="my-2 whitespace-nowrap">
            <a href="#">Mobile App</a>
          </li>
          <li className="my-2 whitespace-nowrap">
            <a href="#">Community</a>
          </li>
          <li className="my-2 whitespace-nowrap">
            <a href="#">Company</a>
          </li>
        </ul>

        {/* visible only on mobiles */}
        <div className="hidden sm:block my-5 sm:w-full">
          <div className="flex justify-center">
            <img src="/images/logo.png" alt="logo" />
            <div className="text-end font-semibold">
              <h1>SESSION</h1>
              <h4>artist</h4>
            </div>
          </div>
        </div>

        <ul className="flex flex-col md:flex-row md:justify-end md:items-center md:gap-8">
          <li className="my-2 whitespace-nowrap">
            <a href="#">Help Desk</a>
          </li>
          <li className="my-2 whitespace-nowrap">
            <a href="#">Blog</a>
          </li>
          <li className="my-2 whitespace-nowrap">
            <a href="#">Resources</a>
          </li>
        </ul>
      </div>

      <hr
        className={`${
          loginModalOpen || registerModalOpen
            ? " text-black text-opacity-10"
            : "text-gray"
        }`}
      />

      <div className="py-2">
        <p className="text-center text-sm">
          © 2022 Session artist All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
