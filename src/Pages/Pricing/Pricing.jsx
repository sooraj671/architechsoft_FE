import React from "react";
import Main from "../../Components/Pricing/Main/Main";
import Benefits from "../../Components/Pricing/Benefits/Benefits";
import GetStarted from "../../Components/GetStarted/GetStarted";
import Footer from "../../Components/Footer/Footer";
import BottomBar from "../../Components/Footer/BottomBar";

const Pricing = () => {
  return (
    <div className="pt-32">
      <Main />
      <Benefits />
      <GetStarted />
      <Footer />
      <BottomBar />
    </div>
  );
};

export default Pricing;
