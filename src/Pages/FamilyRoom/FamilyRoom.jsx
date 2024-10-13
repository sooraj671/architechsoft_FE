import React from "react";
import Main from "../../Components/FamilyRoom/Main/Main";
import OrangePart from "../../Components/FamilyRoom/OrangePart/OrangePart";
import Features from "../../Components/FamilyRoom/Features/Features";
import LearnMore from "../../Components/LearnMore/LearnMore";
import Footer from "../../Components/Footer/Footer";
import BottomBar from "../../Components/Footer/BottomBar";

const FamilyRoom = () => {
  return (
    <div className="pt-32">
      <Main />
      <OrangePart />
      <Features />
      <LearnMore />
      <Footer />
      <BottomBar />
    </div>
  );
};

export default FamilyRoom;
