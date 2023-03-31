import { Collapse } from "react-collapse";
import { RiArrowUpSLine } from "react-icons/ri";

const PrayerAccordion = ({ prayer }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-md bg-white shadow-lg transition dark:bg-gray-800`}
    >
      <div className="flex h-[72px] w-full cursor-pointer items-center justify-between px-4 text-gray-900 dark:text-white">
        <h1 className="font-bold">{prayer.name}</h1>
        <RiArrowUpSLine className={`text-[1.5rem] transition`} />
      </div>

      <Collapse isOpened={true}>
        <div className="grid h-max w-full gap-4 py-[20px] px-4">
          <h1 className="text-right text-[24px] font-bold text-gray-900 dark:text-white">
            {prayer.arabic}
          </h1>

          <div className="grid gap-2">
            <p className="text-[14px] font-semibold text-green-600">
              {prayer.latin}
            </p>
            <h3 className="text-[14px] font-bold text-gray-900 dark:text-white">
              {prayer.translation}
            </h3>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default PrayerAccordion;
