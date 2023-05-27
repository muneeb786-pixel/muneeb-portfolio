"use client";
import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItems {
  label: string;
  page: string;
}

const Nav_Item: Array<NavItems> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState<boolean>(false);

  return (
    <header className="w-full mx-auto px-4 sm:px-20 bg-white shadow fixed top-0 z-50 dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="md:flex justify-between md:items-center ">
        <div>
          <div className="flex items-center justify-between py-3">
              <Link to="home" spy={true} smooth={true} >
            <div className="md:py-4 md:block">
              <h2 className="text-2xl font-bold cursor-pointer">Muneeb ur rehman</h2>
            </div>
              </Link>
            <div className="md:hidden">
              <button onClick={()=>setNavbar(!navbar)}>
                {navbar ? <IoMdClose size={25} /> : <IoMdMenu size={25} />}
              </button>
            </div>
          </div>
        </div>
        <div>
        <div className={`flex-1 justify-center pb-3 mt-8 md:pb-0 md:block md:mt-0 ${navbar? "block" : "hidden"}`}>
          <div className="md:flex md:space-x-6 space-y-6 md:space-y-0 items-center justify-center">
            {Nav_Item.map((item, key) => {
              return (
                <Link
                key={key}
                to={item.page}
                className={"block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100"}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={()=>setNavbar(!navbar)}
                >
                {item.label}
                </Link>
         
              );
            })}

            {currentTheme === "dark" ? (
              <button
                onClick={() => setTheme("light")}
                className="bg-slate-100 p-2 rounded-xl"
              >
                <RiSunLine size={25} color="black" />
              </button>
            ) : (
              <button
                onClick={() => setTheme("dark")}
                className="bg-slate-100 p-2 rounded-xl"
              >
                <RiMoonFill size={25} />
              </button>
            )}
          </div>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
