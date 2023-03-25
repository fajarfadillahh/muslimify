import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

// components
import SurahCard from './SurahCard';
import Link from 'next/link';

export default function SurahList({ dataSurah }) {
  const [search, setSearch] = useState('');

  const mappingSurah = dataSurah.map((item) => {
    return {
      ...item,
      latin: item.latin
        .normalize('NFD')
        .replace(/[\u0300-\u036f\']/g, '')
        .trim()
        .normalize('NFC')
        .replace(/[^\x00-\x7F]/g, '')
        .replace(/-/g, ' ')
        .trim(),
    };
  });

  const filterSurah = mappingSurah.filter((item) =>
    item.latin.toLowerCase().includes(search)
  );

  function handleSearchSurah(e) {
    setSearch(e.target.value.toLowerCase());
  }
  return (
    <section className="section pt-12">
      <div className="container grid gap-8">
        <form className="flex h-[56px] max-w-full items-center rounded-lg bg-white shadow-lg transition dark:bg-gray-800">
          <div className="inline-flex h-full min-w-[56px] items-center justify-center">
            <RiSearchLine className="text-[1.5rem] text-green-600" />
          </div>
          <input
            type="text"
            placeholder="Surah apa yang ingin kamu baca?"
            onChange={handleSearchSurah}
            className="h-full w-full bg-transparent pr-6 font-bold text-gray-900 outline-none placeholder:font-semibold placeholder:text-gray-600 dark:text-white dark:placeholder:text-gray-300"
          />
        </form>

        <div className="grid gap-4">
          {filterSurah?.map((surah, index) => {
            return (
              <Link href={`/surah/${surah.surah_number}`} key={index}>
                <SurahCard surah={surah} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
