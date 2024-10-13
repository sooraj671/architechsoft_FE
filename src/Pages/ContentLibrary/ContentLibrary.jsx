import React from "react";
import Main from "../../Components/ContentLibrary/Main/Main";
import Footer from "../../Components/Footer/Footer";
import BottomBar from "../../Components/Footer/BottomBar";

const ContentLibrary = () => {
  return (
    <div className="pt-32">
      <Main />
      <Footer />
      <BottomBar />
    </div>
  );
};

export default ContentLibrary;
