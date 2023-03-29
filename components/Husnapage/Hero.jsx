import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-tl from-green-600 to-green-500 pt-32 pb-12">
      <div className="container flex flex-col items-center justify-center">
        <img
          src="/images/husna-hero-img.svg"
          alt="hero img"
          className="mb-5 h-[130px] w-[130px]"
        />
        <h3 className="text-[28px] font-extrabold text-white">Asmaul Husna</h3>
        <p className="font-semibold text-white">
          “Nama-nama terbaik bagi Allah SWT”
        </p>
      </div>
    </section>
  );
};

export default Hero;
