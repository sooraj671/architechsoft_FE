import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { MdArrowRight } from "react-icons/md";

const Footer = () => {
  // TODO: look over links again , links are not real
  const [footerLinks, setFooterLinks] = useState([
    {
      title: "Who We Help",
      subLinks: [
        {
          title: "Home Care Registries",
          link: "home-care-registries",
        },
        {
          title: "Home Care Agencies",
          link: "home-care-agencies",
        },
      ],
      isOpen: false,
    },
    {
      title: "Solutions",
      subLinks: [
        {
          title: "Regulations",
          link: "regulations",
        },
        {
          title: "Revenue Cycle",
          link: "revenue-cycle",
        },
        {
          title: "Booking",
          link: "booking",
        },
        {
          title: "Family Room",
          link: "family-room",
        },
      ],
      isOpen: false,
    },
    {
      title: "Resources",
      subLinks: [
        {
          title: "Read Our Blog",
          link: "blog",
        },
        {
          title: "Content Library",
          link: "content-library",
        },
        {
          title: "Customer Stories",
          link: "customer-stories",
        },
      ],
      isOpen: false,
    },
    {
      title: "Learn more",
      subLinks: [
        {
          title: "Pricing",
          link: "pricing",
        },
        {
          title: "About Archi",
          link: "about",
        },
        {
          title: "Login",
          link: "login",
        },
        {
          title: "Support",
          link: "support",
        },
        {
          title: "Book a demo",
          link: "book-a-demo",
        },
      ],
      isOpen: false,
    },
  ]);

  // hanlding links dropdown in mobile device
  const handleOpen = (clickedElement) => {
    setFooterLinks((prevLinks) =>
      prevLinks.map((element) =>
        element.title === clickedElement.title
          ? { ...element, isOpen: !element.isOpen }
          : element
      )
    );
  };

  return (
    <div className="p-5 py-10 flex justify-center items-center border-b border-b-green-300">
      <div className="sm:flex max-w-screen-xl gap-5">
        {/* contact info */}
        <div className="flex-1">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="aspect-video max-h-24" />
          </Link>
          <div>
            <div className="border-b  md:border-none  py-3">
              <h1 className="font-bold">
                Customized Software and Billing Services for Caregiver
                Registries
              </h1>
            </div>
            {/* TODO: set the semantic tags and attatch links to email and telephone */}
            <div className="border-b md:border-none py-3">
              <p className="font-bold">Sales:</p>
              <p className="mt-2 font-semibold text-primary">
                contact@archi.com
              </p>
              <p className=" font-semibold text-primary">0900000000</p>
            </div>
            <div className="border-b  md:border-none py-3">
              <p className="font-bold">Support:</p>
              <p className="mt-2 font-semibold text-primary">
                support@archi.com
              </p>
              <p className=" font-semibold text-primary">0900000000</p>
            </div>
          </div>
        </div>
        {/* links for mobile device */}
        <div className="sm:hidden">
          {footerLinks.map((item, index) => {
            return (
              <div key={index}>
                <div
                  className="py-4 border-b border-b-green-300 flex justify-between items-center cursor-pointer"
                  onClick={() => handleOpen(item)}
                >
                  <p
                    className={`font-bold ${
                      item.isOpen ? "text-primary" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </p>
                  <p className="text-primary">
                    <MdArrowRight className="rotate-90" />
                  </p>
                </div>
                <div className={` ${item.isOpen ? "flex flex-col" : "hidden"}`}>
                  {item.subLinks.map((subLink, index) => {
                    return (
                      <Link
                        className="p-3 border-b border-b-green-300 hover:underline hover:text-primary transition-all duration-200"
                        key={index}
                      >
                        {subLink.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        {/* footer links for larger devices */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {footerLinks.map((item, index) => {
            return (
              <div className="p-5 flex flex-col gap-5 h-full" key={index}>
                <h1 className="font-bold mb-5">{item.title}</h1>
                {item.subLinks?.map((subLink, index) => {
                  return (
                    <Link
                      key={index}
                      to={`/${subLink.link}`}
                      className="hover:underline hover:text-primary transition-all duration-200"
                    >
                      {subLink.title}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
