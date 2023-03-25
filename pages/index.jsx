import { useEffect, useState } from 'react';

// components
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import SurahList from '@/components/SurahList';

export default function Home({ dataSurah }) {
  const [dataQuote, setDataQuote] = useState({
    text: '',
    reference: '',
  });

  useEffect(() => {
    fetch('https://apimuslimify.vercel.app/api/v2/quote')
      .then((response) => response.json())
      .then((result) => setDataQuote(result.data));
  }, []);

  return (
    <Layout>
      <Hero dataQuote={dataQuote} />
      <SurahList dataSurah={dataSurah} />
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://apimuslimify.vercel.app/api/v2/surah');
  const result = await response.json();

  return {
    props: {
      dataSurah: result.data,
    },
  };
}
