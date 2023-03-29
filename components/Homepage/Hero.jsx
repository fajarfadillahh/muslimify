import { useEffect, useState } from 'react';

// components
import LoadingSpinner from '../LoadingSpinner';
export default function Hero({ dataQuotes }) {
  const random = Math.floor(Math.random() * dataQuotes.length);

  const [dataQuote, setDataQuote] = useState({
    text: null,
    reference: null,
  });

  useEffect(() => {
    setDataQuote(dataQuotes[random]);
  }, []);

  return (
    <section className="section bg-gradient-to-tl from-green-600 to-green-500 pt-32">
      <div className="container grid justify-items-center gap-8">
        <img
          src="/images/quran-img.png"
          alt="hero img"
          className="max-w-[180px]"
        />

        <div className="text-center">
          {dataQuote.text ? (
            <>
              <h1 className="section-title max-w-[330px] pb-4 text-[18px] text-white">
                {`"${dataQuote.text}"`}
              </h1>
              <p className="section-text text-white">{dataQuote.reference}</p>
            </>
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </div>
    </section>
  );
}
