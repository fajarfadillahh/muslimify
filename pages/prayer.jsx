// import components
import Layout from "@/components/Layout";
import Hero from "@/components/Prayerpage/Hero";
import PrayerList from "@/components/Prayerpage/PrayerList";

export default function prayer() {
  return (
    <>
      <Layout>
        <Hero />
        <PrayerList />
      </Layout>
    </>
  );
}
