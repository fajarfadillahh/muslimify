// components
import Layout from '@/components/Layout';
import Hero from '@/components/Homepage/Hero';
import SurahList from '@/components/Homepage/SurahList';

export default function Home({ dataSurah, dataQuotes }) {
  return (
    <Layout>
      <Hero dataQuotes={dataQuotes} />
      <SurahList dataSurah={dataSurah} />
    </Layout>
  );
}

export async function getStaticProps() {
  const responses = await Promise.all([
    fetch('https://apimuslimify.vercel.app/api/v2/surah'),
    fetch('https://apimuslimify.vercel.app/api/v2/quotes'),
  ]);

  const results = await Promise.all(
    responses.map((response) => response.json())
  );

  return {
    props: {
      dataSurah: results[0].data,
      dataQuotes: results[1].data,
    },
  };
}
