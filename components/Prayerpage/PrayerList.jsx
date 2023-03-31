// import components
import PrayerAccordion from "./PrayerAccordion";

const PrayerList = ({ dataPrayer }) => {
  return (
    <section className="section pt-12">
      <div className="container grid gap-4">
        {dataPrayer?.map((prayer, index) => {
          return <PrayerAccordion key={index} prayer={prayer} />;
        })}
      </div>
    </section>
  );
};

export default PrayerList;
