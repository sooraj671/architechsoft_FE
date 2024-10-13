import React, { useState } from "react";
import logoImage from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { TbMenuDeep } from "react-icons/tb";
import logo from "../../assets/logo.png";
import { MdArrowRight } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [navLinks, setNavLinks] = useState([
    {
      name: "who we help",
      navLink: "who-we-help",
      subLink: [
        { name: "home care registries", navLink: "who-we-help" },
        { name: "home care agencies", navLink: "home-care-agencies" },
      ],
      isOpen: false,
    },
    {
      name: "solutions",
      navLink: "regulations",
      subLink: [
        { name: "regulations", navLink: "regulations" },
        { name: "revenue cycle", navLink: "revenue-cycle" },
        { name: "booking", navLink: "booking" },
        { name: "family room", navLink: "family-room" },
      ],
      isOpen: false,
    },
    { name: "pricing", navLink: "pricing" },
    {
      name: "resources",
      navLink: "resources",
      subLink: [
        { name: "read our blog", navLink: "blog" },
        { name: "content library", navLink: "content-library" },
        { name: "customer stories", navLink: "customer-stories" },
      ],
      isOpen: false,
    },
    { name: "support", navLink: "support" },
    { name: "login", navLink: "login" },
  ]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // hanlding links dropdown in mobile device
  const handleOpen = (clickedElement) => {
    console.log("clickedElement", clickedElement);
    setNavLinks((prevLinks) =>
      prevLinks.map((element) =>
        element.name === clickedElement.name
          ? { ...element, isOpen: !element.isOpen }
          : element
      )
    );
  };

  // Check if the current path is among the sublinks
  const isActiveNavLink = (navLink) => {
    return (
      navLink.subLink?.some(
        (subLink) => location.pathname === `/${subLink.navLink}`
      ) ||
      (navLink.navLink && location.pathname === navLink.navLink)
    );
  };

  return (
    <div className="flex items-center justify-between w-full h-32 py-2 fixed top-0 left-0 px-5 sm:px-10 gap-8 bg-[#fff] backdrop-blur-2xl bg-opacity-15 z-20">
      <Link to={"/"}>
        <img src={logoImage} alt="Archi Software" className="h-20 w-auto " />
      </Link>

      {/* menu button  */}
      <div
        className="lg:hidden text-primary h-full flex items-center hover:cursor-pointer"
        onClick={() => setIsMenuOpen(true)}
      >
        <TbMenuDeep size={45} />
      </div>

      {/* large device menu  */}
      <div className="hidden lg:flex items-center justify-between w-full h-32 ">
        <div className=" flex items-center h-full gap-3 flex-wrap">
          {navLinks.map((navLink, index) => {
            const isActive = isActiveNavLink(navLink);
            return (
              <div key={index} className="relative w-max py-2 group">
                <div
                  className={`flex items-center cursor-pointer gap-1 font-bold ${
                    isActive ? "text-primary" : "text-primaryText"
                  }`}
                >
                  {navLink.subLink ? (
                    <h1 className="capitalize">{navLink.name}</h1>
                  ) : (
                    <Link to={`/${navLink.navLink}`} className="capitalize">
                      {navLink.name}
                    </Link>
                  )}
                  {navLink.subLink && (
                    <IoIosArrowDown className="group-hover:rotate-180 hover:rotate-180 transition duration-500" />
                  )}
                </div>
                {navLink.subLink && (
                  <div
                    className={`bg-white shadow-sm shadow-black/30 rounded-md py-3 hidden group-hover:flex hover:flex flex-col gap-1 w-max absolute top-10 capitalize left-0 opacity-1 transition-all duration-300`}
                  >
                    {navLink.subLink.map((subLink, index) => {
                      return (
                        <Link
                          to={`/${subLink.navLink}`}
                          className={`flex px-7 py-2 hover:bg-green-50 transition duration-200 rounded-sm ${
                            location.pathname === `/${subLink.navLink}`
                              ? "text-primary"
                              : "text-primaryText"
                          }`}
                          key={index}
                        >
                          {subLink.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center h-full">
          <Link to={"/book-a-demo"}>
            <button className="bg-primary text-white rounded-md px-8 py-3">
              Book a Demo
            </button>
          </Link>
        </div>
      </div>

      {/* small device side menu  */}
      <div
        className={` bg-black bg-opacity-70 w-full absolute ${
          isMenuOpen ? "right-0" : "-right-full"
        } transition-all duration-300 fixed h-screen top-0 flex justify-end`}
      >
        <div className="bg-[#fff] h-full relative overflow-y-auto w-full sm:w-[60%] md:w-[50%] lg:w-[35%] px-5 pt-10">
          <button
            className="absolute right-5 top-14 hover:scale-110 transition duration-300"
            onClick={closeMenu}
          >
            <IoMdClose size={35} />
          </button>
          <div>
            <Link
              className="py-2 border-b border-b-green-300"
              to={"/"}
              onClick={() => closeMenu()}
            >
              <img src={logo} alt="logo" className="h-20" />
            </Link>
            <div>
              {navLinks.map((item, index) => {
                return (
                  <div key={index}>
                    <div
                      className=" border-b border-b-green-300 flex justify-between items-center cursor-pointer"
                      onClick={() => handleOpen(item)}
                    >
                      {item.subLink ? (
                        <h1 className="capitalize font-bold text-gray-900 py-4">
                          {item.name}
                        </h1>
                      ) : (
                        <Link
                          className="capitalize font-bold text-gray-900 w-full py-4"
                          to={`/${item.navLink}`}
                          onClick={() => closeMenu()}
                        >
                          {item.name}
                        </Link>
                      )}

                      {item.subLink && (
                        <p className="text-primary">
                          <MdArrowRight
                            className={`transition duration-300 ${
                              item.isOpen ? "rotate-90" : ""
                            } `}
                          />
                        </p>
                      )}
                    </div>
                    <div
                      className={` ${item.isOpen ? "flex flex-col" : "hidden"}`}
                    >
                      {item.subLink?.map((subLink, index) => {
                        return (
                          <Link
                            to={subLink.navLink}
                            className="p-3 border-b border-b-green-300 hover:underline hover:text-primary transition-all duration-200 capitalize"
                            key={index}
                            onClick={() => {
                              closeMenu();
                              handleOpen(item);
                            }}
                          >
                            {subLink.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-3 py-3 font-bold border-b border-b-green-300">
            <a href="tel:+1234567890" className=" hover:underline ">
              Sales: +1 (234) 567-890
            </a>
            <a href="tel:+1234567890" className=" hover:underline">
              Support: +1 (234) 567-890
            </a>
          </div>
          <div className="py-3 my-12">
            {/* TODO: look over link, link is not real  */}
            <Link
              to={"/book-a-demo"}
              className=" text-center bg-primary py-3 rounded-md text-[#fff] px-14"
              onClick={() => closeMenu()}
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
