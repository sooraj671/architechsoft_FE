import React from "react";

const Main = () => {
  return (
    <div className=" flex-col flex justify-center items-center text-primary">
      <div className=" bg-green-100 p-7 md:p-12 flex flex-col justify-around items-center gap-5 max-w-screen-xl">
        <h1 className="text-wrap text-4xl sm:text-5xl md:text-6xl font-bold text-primary text-center">
          Expand Your Registry with Confidence and Ease
        </h1>
        <p className="leading-9 text-lg text-center">
          Experience the freedom to grow your home care registry without upfront
          costs or long-term contracts.
        </p>
        <p className="leading-9 text-lg text-center">
          Join the Archi community and discover why our software is the ideal
          solution for streamlining operations while ensuring compliance.
        </p>
        <p className="leading-9 text-lg text-center">
          Unsure if we’re the right fit? Test Archi with a few clients and
          experience the advantages firsthand. With no commitments and zero
          risk, there’s nothing to lose.
        </p>
        <p className="leading-9 text-lg text-center">
          Let Archi streamline your workflow, so you can focus on what truly
          matters—providing quality care. Join the community of successful
          registries who have already made the switch.
        </p>
        <h1 className="text-wrap text-4xl sm:text-5xl font-bold text-primary text-center capitalize mt-10">
          book a demo now !
        </h1>
      </div>
    </div>
  );
};

export default Main;
