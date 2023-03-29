// import components
import Layout from "@/components/Layout";
import Hero from "@/components/Husnapage/Hero";
import HusnaList from "@/components/Husnapage/HusnaList";

export default function husna({ dataHusna }) {
  return (
    <>
      <Layout>
        <Hero />
        <HusnaList dataHusna={dataHusna} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://apimuslimify.vercel.app/api/v2/asmaulhusna"
  );
  const result = await response.json();

  return {
    props: {
      dataHusna: result.data,
    },
  };
}
