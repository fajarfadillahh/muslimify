// import components
import { useState } from "react";
import PrayerAccordion from "./PrayerAccordion";

const PrayerList = ({ dataPrayer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = (index) => {
    if (isOpen === index) {
      return setIsOpen(null);
    }

    setIsOpen(index);
  };

  return (
    <section className="section pt-12">
      <div className="container grid gap-4">
        {dataPrayer?.map((prayer, index) => {
          return (
            <PrayerAccordion
              key={index}
              prayer={prayer}
              isOpen={isOpen === index}
              handleIsOpen={() => handleIsOpen(index)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PrayerList;
