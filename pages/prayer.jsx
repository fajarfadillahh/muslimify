// import components
import Layout from "@/components/Layout";
import Hero from "@/components/Prayerpage/Hero";
import PrayerList from "@/components/Prayerpage/PrayerList";

export default function prayer({ dataPrayer }) {
  return (
    <>
      <Layout>
        <Hero />
        <PrayerList dataPrayer={dataPrayer} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://apimuslimify.vercel.app/api/v2/doaharian"
  );
  const result = await response.json();

  return {
    props: {
      dataPrayer: result.data,
    },
  };
}
