import React from "react";
import Hero from "../../Components/Home/Hero/Hero";
import TopHomeRegistries from "../../Components/Home/TopHomeRegistries/TopHomeRegistries";
import Outcomes from "../../Components/Home/Outcomes/Outcomes";
import BlogResources from "../../Components/Home/BlogResources/BlogResources";
import Comparison from "../../Components/Home/Comparison/Comparison";
import Features from "../../Components/Home/Features/Features";
import Services from "../../Components/Home/Services/Services";
import Calculator from "../../Components/Home/Calculator/Calculator";
import Footer from "../../Components/Footer/Footer";
import BottomBar from "../../Components/Footer/BottomBar";
import GetStarted from "../../Components/GetStarted/GetStarted";
import OrangePart from "../../Components/Home/OrangePart/OrangePart";

const Home = () => {
  return (
    <div className="pt-32">
      <Hero />
      <TopHomeRegistries />
      <OrangePart />
      <Outcomes />
      <BlogResources />
      <Comparison />
      <Features />
      <Services />
      <Calculator />
      <GetStarted />
      <Footer />
      <BottomBar />
    </div>
  );
};

export default Home;
