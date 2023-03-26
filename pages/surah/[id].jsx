import Layout from "@/components/Layout";
import Hero from "@/components/Surahpage/Hero";
import SurahList from "@/components/Surahpage/SurahList";

export default function SurahPage({ dataSurah }) {
  return (
    <Layout>
      <Hero dataSurah={dataSurah} />
      <SurahList dataSurah={dataSurah} />
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
