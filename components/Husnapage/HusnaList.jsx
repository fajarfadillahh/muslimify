import React from "react";

// import components
import HusnaCard from "./HusnaCard";

const HusnaList = () => {
  return (
    <section className="section pt-12">
      <div className="container grid grid-cols-[repeat(2,max-content)] justify-center gap-8">
        <HusnaCard />
      </div>
    </section>
  );
};

export default HusnaList;
