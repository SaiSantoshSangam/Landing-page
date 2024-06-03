import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`);
  const data = await res.json();

  return {
    props: {
      data
    }
  };
}

const Home = ({ data }) => {
  return (
    <>
      <Hero data={data.hero} />
      <Features features={data.features} />
      <Testimonials testimonials={data.testimonials} />
      <Pricing pricing={data.pricing} />
      <Contact />
    </>
  );
};

export default Home;
