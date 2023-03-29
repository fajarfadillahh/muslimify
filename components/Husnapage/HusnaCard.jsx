import React from "react";

const HusnaCard = ({ asmaulHusna }) => {
  const { number, arabic, latin, id_translation } = asmaulHusna;

  return (
    <div className="group h-max w-[175px] rounded-md bg-white shadow-md transition hover:ring-2 hover:ring-green-600 dark:bg-gray-800">
      <div className="grid gap-4 p-6">
        <span className="inline-flex h-[28px] w-[28px] items-center justify-center rounded-full bg-green-600 text-[12px] font-bold text-white">
          {number}
        </span>

        <div className="grid gap-2 text-center">
          <h1
            dir="rtl"
            className="truncate text-[28px] font-bold text-gray-900 rtl:mr-0 dark:text-white"
          >
            {arabic}
          </h1>

          <div className="overflow-hidden">
            <h3 className="truncate whitespace-nowrap text-[14px] font-extrabold text-green-600">
              {latin}
            </h3>
            <p className="text-[12px] text-gray-600 line-clamp-2 group-hover:line-clamp-none dark:text-white">
              {id_translation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HusnaCard;
