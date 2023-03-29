const SurahAyat = ({ surah }) => {
  return (
    <div className="grid gap-3">
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-green-600 text-[14px] font-bold text-white">
          {surah.ayat_number}
        </span>
        <h1 className="max-w-[330px] text-right text-[28px] font-bold text-gray-900 dark:text-white">
          {surah.arabic}
        </h1>
      </div>

      <div className="grid gap-2">
        <p className="text-[14px] font-semibold text-amber-600 dark:text-amber-400">
          {surah.latin}
        </p>
        <h3 className="font-bold text-gray-900 dark:text-white">
          {surah.translation}
        </h3>
      </div>
    </div>
  );
};

export default SurahAyat;
