import React from "react";
import Main from "../../Components/Booking/Main/Main";
import OrangePart from "../../Components/Booking/OrangePart/OrangePart";
import BookingOverview from "../../Components/Booking/BookingOverview/BookingOverview";
import LearnMore from "../../Components/LearnMore/LearnMore";
import Footer from "../../Components/Footer/Footer";
import BottomBar from "../../Components/Footer/BottomBar";

const Booking = () => {
  return (
    <div className="pt-32">
      <Main />
      <OrangePart />
      <BookingOverview />
      <LearnMore />
      <Footer />
      <BottomBar />
    </div>
  );
};

export default Booking;
