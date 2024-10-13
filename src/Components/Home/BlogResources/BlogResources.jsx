import React from "react";
import { Link } from "react-router-dom";
import insiderSeries from "../../../assets/insiderSeries.png";
import caseStudy from "../../../assets/caseStudy.png";
import webinar from "../../../assets/webinar.png";

const BlogResources = () => {
  const blogs = [
    {
      img: insiderSeries,
      title: "Jeff Mannel, Founder & CEO of Atlee Care ",
      description:
        "Read the story about Jeff Mannel who runs a caregiver registry focused on referring quality care to seniors in the Denver area. He'll share with you a bit about his success and tricks of the trade.",
      btn: "read the story",
    },
    {
      img: caseStudy,
      title:
        "Caregiver Registry gets Ahead of Compliance with Ally as their Technology Partner",
      description:
        "Read about Ashley Skipper from VIP America and learn about their implementation of a system that brought them to a stronger state of compliance.",
      btn: "read the case study",
    },
    {
      img: webinar,
      title: "Breaking Down the Different Models of HomeCare",
      description:
        "Webinar with Angelo Spinola from Polsinelli Watch this on-demand webinar and learn about the different models of home care delivery (W-2, Registry (1099) and Consumer Directed. This webinar shares licensing requirements and local regulations you'll want to be familiar with! ",
      btn: "watch the webinar",
    },
  ];
  return (
    <div className="bg-gradient-to-b from-green-200 to-white py-12 md:py-20 px-5 md:flex flex-col items-center ">
      <h1 className="mb-10 sm:text-center font-bold text-3xl md:text-4xl text-gray-700">
        We Know Caregiver Registries
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-screen-xl w-full">
        {blogs.map((blog, index) => {
          return (
            <Link
              key={index}
              to={"/"}
              className="bg-[#fff] rounded-md overflow-hidden hover:-translate-y-2 transition-all duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.img}
                  alt="blogImage"
                  className="hover:scale-110 transition-all duration-500"
                />
              </div>
              <div className="px-5 py-7">
                <h1 className="font-bold text-lg sm:text-2xl mb-5 text-primary">
                  {blog.title}
                </h1>
                <p className="mb-5 sm:text-lg">{blog.description}</p>
                <button className="uppercase text-[12px] font-bold text-primary">
                  {blog.btn}
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogResources;
