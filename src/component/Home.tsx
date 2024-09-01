import About from "../pages/About";
import Hero from "../pages/Hero";
import Service from "../pages/Service";

const Home = () => {
  return (
    <div className="mt-20 min-h-screen">
      <Hero />
      <About />
      <Service />
    </div>
  );
};

export default Home;
