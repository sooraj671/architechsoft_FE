import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import caseStudy from "../../../assets/webinar.png";

const allBlogs = [
  {
    img: caseStudy,
    title: "Caregiver Registry Thrives with Archi's Compliance Solutions",
    description:
      "See how Sunbeam Caregiver Registry enhanced compliance and improved efficiency using Archi's innovative tools.",
    btn: "read the case study",
    category: "caregiver registry",
  },

  {
    img: caseStudy,
    title: "Adapting to New Regulations with Archi's Support",
    description:
      "Learn how BrightCare navigated complex regulatory changes seamlessly with the help of Archi's compliance software.",
    btn: "read the case study",
    category: "regulations",
  },

  {
    img: caseStudy,
    title: "Maximizing Revenue Growth: How Archi Transformed Willow Home Care",
    description:
      "Discover how Willow Home Care boosted their revenue and expanded their business using Archi's growth-focused technology.",
    btn: "read the case study",
    category: "revenue growth",
  },

  {
    img: caseStudy,
    title: "Streamlining Home Care Management with Archi: A Case Study",
    description:
      "Find out how Harmony Home Care improved their workflow and client satisfaction with Archi’s management tools.",
    btn: "read the case study",
    category: "home care management",
  },

  {
    img: caseStudy,
    title: "Compliance Made Easy: Archi Helps Caregiver Registries Stay on Top",
    description:
      "See how Graceful Care achieved compliance excellence by leveraging Archi’s powerful software solutions.",
    btn: "read the case study",
    category: "caregiver registry",
  },

  {
    img: caseStudy,
    title: "Boosting Business Efficiency with Archi's Custom Solutions",
    description:
      "Read about how AllCare Services transformed their business operations and streamlined workflows using Archi’s tailored solutions.",
    btn: "read the case study",
    category: "business",
  },

  {
    img: caseStudy,
    title: "Navigating Legislative Changes with Archi: A Success Story",
    description:
      "Learn how Home Helpers overcame legislative challenges by partnering with Archi to ensure seamless compliance.",
    btn: "read the case study",
    category: "legislation",
  },

  {
    img: caseStudy,
    title:
      "How Archi Helped a Caregiver Registry Expand While Staying Compliant",
    description:
      "Discover how Compassionate Care used Archi's platform to grow their registry and maintain regulatory compliance.",
    btn: "read the case study",
    category: "caregiver registry",
  },

  {
    img: caseStudy,
    title: "Driving Revenue Growth with Archi’s Advanced Technology",
    description:
      "Explore how Comfort Home Care significantly increased revenue by adopting Archi's cutting-edge software solutions.",
    btn: "read the case study",
    category: "revenue growth",
  },

  {
    img: caseStudy,
    title:
      "Ensuring Compliance Through Technology: Archi's Impact on Home Care",
    description:
      "See how SafeHands Care used Archi's platform to navigate compliance requirements and improve operational efficiency.",
    btn: "read the case study",
    category: "regulations",
  },

  {
    img: caseStudy,
    title: "Revolutionizing Home Care Management with Archi's Platform",
    description:
      "Learn how Reliable Home Care streamlined their management processes, leading to higher client satisfaction and growth.",
    btn: "read the case study",
    category: "home care management",
  },

  {
    img: caseStudy,
    title: "Growing a Thriving Business with Archi’s Support",
    description:
      "Read how New Horizons Home Care optimized their business operations and achieved sustainable growth using Archi’s solutions.",
    btn: "read the case study",
    category: "business",
  },
];

const Main = () => {
  const [blogs, setBlogs] = useState(null);
  const [isApiCalled, setIsApiCalled] = useState(false);

  //  api call to set blogs
  useEffect(() => {
    setBlogs(allBlogs);
    // fetch api function, look properly on this function
    // const fetchBlogs = async()=>{
    //     const result = await fetch("/api");
    //     const data = await result.json();
    //     setBlogs(data)
    //     setIsApiCalled(true);
    // }
    // !isApiCalled && fetchBlogs();
  }, []);

  return (
    <div className="bg-gray-100 py-20 flex flex-col justify-center items-center gap-14">
      <div>
        <h1 className="text-wrap text-4xl sm:text-5xl md:text-6xl font-bold text-primary text-center">
          Customer Stories
        </h1>
        <p className="leading-9 text-lg md:text-2xl text-center mt-6">
          Trust the voices of our satisfied users.
        </p>
        <h1 className="font-bold text-3xl md:text-4xl text-gray-700 text-center mt-6 px-3">
          Find out why so many choose Archi for their business needs.
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-screen-xl w-full">
        {blogs?.map((blog, index) => {
          return (
            <Link
              key={index}
              //   change the links
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

export default Main;
