export default function SurahCard({ surah }) {
  return (
    <div className="flex min-h-[72px] items-center justify-between rounded-md bg-white p-4 shadow-lg transition hover:ring-2 hover:ring-green-600 dark:bg-gray-800">
      <div className="inline-flex items-center gap-4">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-[14px] font-bold text-white">
          {surah.surah_number}
        </span>

        <div className="max-w-[180px] overflow-hidden">
          <div className="flex items-center gap-1">
            <h3 className="section-title whitespace-nowrap">{surah.latin}</h3>
            <p className="section-text truncate text-[12px]">
              ({surah.translation})
            </p>
          </div>
          <p className="section-text text-[12px]">
            {surah.location} - {surah.total_ayat} Ayat
          </p>
        </div>
      </div>

      <h1 className="font-arabic text-[24px] font-bold text-gray-900 dark:text-white">
        {surah.arabic}
      </h1>
    </div>
  );
}
