import { About } from "./About";
import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { MyService } from "./MyService";
import { Myworks } from "./Myworks";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Myworks />
      <MyService />
      <Contact />
    </>
  );
};
