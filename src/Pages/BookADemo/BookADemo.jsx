import React from "react";
import Main from "../../Components/BookADemo/Main/Main";
import GetStarted from "../../Components/GetStarted/GetStarted";
import Footer from "../../Components/Footer/Footer";
import BottomBar from "../../Components/Footer/BottomBar";

const BookDemo = () => {
  return (
    <div className="pt-32">
      <Main />
      <GetStarted />
      <Footer />
      <BottomBar />
    </div>
  );
};

export default BookDemo;
