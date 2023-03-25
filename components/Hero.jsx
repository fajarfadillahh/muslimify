export default function Hero({ dataQuote }) {
  return (
    <section className="section bg-gradient-to-tl from-green-600 to-green-500 pt-32">
      <div className="container grid justify-items-center gap-8">
        <img
          src="/images/quran-img.png"
          alt="hero img"
          className="max-w-[180px]"
        />

        <div className="text-center">
          <h1 className="section-title max-w-[330px] pb-4 text-[18px] text-white">
            {!dataQuote.text ? 'loading...' : `"${dataQuote.text}"`}
          </h1>
          <p className="section-text text-white">
            {!dataQuote.reference ? 'loading...' : `${dataQuote.reference}`}
          </p>
        </div>
      </div>
    </section>
  );
}
