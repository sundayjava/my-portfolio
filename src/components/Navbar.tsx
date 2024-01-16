import React, { useState } from "react";
import lgwhite from "/lgwhite.svg";
import lgblack from "/lgblack.svg";
import { navLinks } from "../utils/constants";

export const Navbar: React.FC<{
  setDarkTheme: any;
  darkTheme: boolean;
}> = (props) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="lg:px-28 xl:px-20 px-6 flex py-2 justify-between items-center navbar w-full shadow-2xl dark:shadow-gray-800 bg-gray-100 dark:bg-gray-900 fixed z-30">
      <a
        href="#"
        className="flex items-center gap-2"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <img
          src={props.darkTheme ? lgwhite : lgblack}
          className="lg:w-[50px] lg:h-[50px] w-[35px] h-[35px] object-contain"
        />
        <span className="lg:block font-comfortaa hidden dark:text-white text-[18px] font-bold cursor-pointer">
          Sunday &nbsp;| Software Engineer
        </span>
      </a>

      <div className="flex justify-center items-center gap-10">
        <ul className="list-none hidden lg:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={` text-[18px] font-medium cursor-pointer bottom-0`}
              onClick={() => setActive(link.title)}
            >
              <a
                className={`${
                  active === link.title
                    ? "border-gray-800 bottom-0 dark:border-gray-300 border-b-4 dark:border-b-4"
                    : ""
                } relative active-nav-animation font-comfortaa`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="hover:shadow-lg text-[14px] absolute right-16 lg:relative lg:right-0 lg:text-[16px] dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 flex items-center justify-center"
          type="button"
          onClick={() => props.setDarkTheme(!props.darkTheme)}
        >
          {props.darkTheme ? "Light ☀️" : "Dark 🌙"}
        </button>
      </div>

      <div className="lg:hidden flex flex-1 justify-end items-start">
        <div
          onClick={() => setToggle((prev) => !prev)}
          className={`harmburger-open ${
            toggle && "harmburger-close"
          } w-[28px] h-[28px] cursor-pointer z-10 text-black`}
        >
          <p></p>
          <p></p>
          <p></p>
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-light-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10 dark:text-[#1a202c]`}
        >
          <ul className="list-none flex flex-col justify-end gap-4 items-center flex-1">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "border-b-4 border-gray-800 cursor-pointer"
                    : ""
                }hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                  setToggle((prev) => !prev);
                }}
              >
                <a
                  className="hover:border-white font-comfortaa hover:border-2 hover:px-3 rounded-full"
                  href={`#${link.id}`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        onClick={() => setToggle(!toggle)}
        className={`lg:hidden ${
          toggle ? "bottom-0" : "bottom-full"
        } bg-black/5 backdrop-blur-lg fixed h-screen w-screen left-0`}
      />
    </nav>
  );
};
