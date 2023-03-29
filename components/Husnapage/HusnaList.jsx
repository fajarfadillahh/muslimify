import React from "react";

// import components
import HusnaCard from "./HusnaCard";

const HusnaList = ({ dataHusna }) => {
  return (
    <section className="section pt-12">
      <div className="container grid grid-cols-[repeat(2,max-content)] justify-center gap-8">
        {dataHusna?.map((husna) => {
          return <HusnaCard key={husna.number} asmaulHusna={husna} />;
        })}
      </div>
    </section>
  );
};

export default HusnaList;
