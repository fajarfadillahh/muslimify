import React from "react";
import { RiArrowLeftLine } from "react-icons/ri";

// import components
import Link from "next/link";
import SurahAyat from "./SurahAyat";

const SurahList = ({ dataSurah }) => {
  return (
    <section className="section pt-12">
      <div className="container grid gap-6">
        <Link
          href="/"
          className="inline-flex h-[48px] w-[120px] items-center justify-center gap-3 rounded-md bg-white p-4 shadow-lg transition dark:bg-gray-800"
        >
          <RiArrowLeftLine className="text-[1.3rem] text-green-600" />
          <span className="font-bold text-gray-900 dark:text-white">Back</span>
        </Link>

        <div className="grid gap-8">
          {dataSurah.ayat.map((surah, index) => {
            return <SurahAyat key={index} surah={surah} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default SurahList;
