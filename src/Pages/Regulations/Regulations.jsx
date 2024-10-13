import React from "react";
import Main from "../../Components/Regulations/Main/Main";
import OrangePart from "../../Components/Regulations/OrangePart/OrangePart";
import Maintaining from "../../Components/Regulations/Maintaining/Maintaining";
import GetStarted from "../../Components/GetStarted/GetStarted";
import Footer from "../../Components/Footer/Footer";
import BottomBar from "../../Components/Footer/BottomBar";
import LearnMore from "../../Components/LearnMore/LearnMore";

const Regulations = () => {
  return (
    <div className="pt-32">
      <Main />
      <OrangePart />
      <Maintaining />
      <LearnMore />
      <Footer />
      <BottomBar />
    </div>
  );
};

export default Regulations;
