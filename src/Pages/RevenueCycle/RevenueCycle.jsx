import React from "react";
import Main from "../../Components/RevenueCycle/Main/Main";
import OrangePart from "../../Components/RevenueCycle/OrangePart/OrangePart";
import Billing from "../../Components/RevenueCycle/Billing/Billing";
import Pricing from "../../Components/RevenueCycle/Pricing/Pricing";
import LearnMore from "../../Components/LearnMore/LearnMore";
import Footer from "../../Components/Footer/Footer";
import BottomBar from "../../Components/Footer/BottomBar";

const RevenueCycle = () => {
  return (
    <div className="pt-32">
      <Main />
      <OrangePart />
      <Billing />
      <Pricing />
      <LearnMore />
      <Footer />
      <BottomBar />
    </div>
  );
};

export default RevenueCycle;
