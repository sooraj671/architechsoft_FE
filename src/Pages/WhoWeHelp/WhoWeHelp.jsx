import React from "react";
import Main from "../../Components/WhoWeHelp/Main/Main";
import ProductNew from "../../Components/WhoWeHelp/ProductNew/ProductNew";
import OrangePart from "../../Components/WhoWeHelp/OrangePart/OrangePart";
import GetStarted from "../../Components/GetStarted/GetStarted";
import Footer from "../../Components/Footer/Footer";
import BottomBar from "../../Components/Footer/BottomBar";

const WhoWeHelp = () => {
  return (
    <div className="pt-32">
      <Main />
      <ProductNew />
      <OrangePart />
      <GetStarted />
      <Footer />
      <BottomBar />
    </div>
  );
};

export default WhoWeHelp;
