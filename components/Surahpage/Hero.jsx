const Hero = ({ dataSurah }) => {
  const { arabic, latin, translation } = dataSurah;

  return (
    <section className="bg-gradient-to-tl from-green-600 to-green-500 pt-32 pb-12">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-arabic text-[84px] font-bold text-white">
          {arabic}
        </h1>
        <h3 className="-mt-7 text-[28px] font-extrabold text-white">{latin}</h3>
        <p className="font-semibold text-white">({translation})</p>
      </div>
    </section>
  );
};

export default Hero;
