import Layout from "@/components/Layout";
import Hero from "@/components/Surahpage/Hero";

export default function SurahPage({ dataSurah }) {
  return (
    <Layout>
      <Hero dataSurah={dataSurah} />
      {/* 1. taro codingannya di dalem layout mang */}
      {/* 2. layout ini induknya */}
      {/* 3. data surah udah ada isinya, lu tinggal loop ayatnya */}
      {/* 4. dataSurah.ayat.map() */}
      {/* 5. kalo udah hapus comment ini ya */}
    </Layout>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://apimuslimify.vercel.app/api/v2/surah");
  const result = await response.json();

  const paths = result.data.map((item) => {
    return {
      params: {
        id: `${item.surah_number}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const response = await fetch(
    `https://apimuslimify.vercel.app/api/v2/surah?number=${id}`
  );
  const result = await response.json();

  return {
    props: {
      dataSurah: result.data,
    },
  };
}
